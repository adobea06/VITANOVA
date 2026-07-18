from ..models.user_models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model

User = get_user_model()
# register serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
    "user_id",
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "password",
    "role",
    "is_verified",
    "is_staff",
    "is_active",
]
        read_only_fields = ['user_id', 'date_joined', 'updated_at']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop("password")

        user = User(**validated_data)

        user.set_password(password)

        user.save()

        return user




class LoginSerializer(TokenObtainPairSerializer):

    login = serializers.CharField(write_only=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Remove default email field from JWT serializer
        self.fields.pop("email", None)


    def validate(self, attrs):

        login = attrs.pop("login")

        # Login with email
        if "@" in login:
            email = login

        # Login with phone number
        else:
            try:
                user = User.objects.get(
                    phone_number=login
                )
                email = user.email

            except User.DoesNotExist:
                raise AuthenticationFailed(
                    "Invalid phone number or password."
                )


        # Check if user exists
        try:
            user = User.objects.get(email=email)

        except User.DoesNotExist:
            raise AuthenticationFailed(
                "Invalid email or password."
            )


        # Check email verification BEFORE JWT authentication
        if not user.is_verified:
            raise AuthenticationFailed(
                "Please verify your email before logging in."
            )


        # Pass email to SimpleJWT
        attrs["email"] = email


        # Generate JWT tokens
        data = super().validate(attrs)


        # Add user information to response
        data["user"] = {
            "user_id": self.user.user_id,
            "first_name": self.user.first_name,
            "last_name": self.user.last_name,
            "email": self.user.email,
            "phone_number": self.user.phone_number,
            "role": self.user.role.role_name,
        }

        return data