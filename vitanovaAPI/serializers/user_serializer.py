from ..models.user_models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.exceptions import AuthenticationFailed

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

        self.fields.pop("email", None)


    def validate(self, attrs):

        login = attrs.pop("login")

        if "@" in login:
            email = login

        else:
            try:
                user = User.objects.get(
                    phone_number=login
                )
                email = user.email

            except User.DoesNotExist:
                raise serializers.ValidationError(
                    "Invalid phone number or password."
                )

        attrs["email"] = email


        # Authenticate user first
        data = super().validate(attrs)


        # Now self.user exists
        if not self.user.is_verified:
            raise AuthenticationFailed(
                "Please verify your email first"
            )


        data["user"] = {
            "user_id": self.user.user_id,
            "first_name": self.user.first_name,
            "last_name": self.user.last_name,
            "email": self.user.email,
            "phone_number": self.user.phone_number,
            "role": self.user.role.role_name,
        }

        return data