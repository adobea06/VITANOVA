from rest_framework import serializers
from ..models import Donor, Patient
from .location_serializer import LocationSerializer
from ..models.location_models import Location
from .user_serializer import UserSerializer



#donor profile serializer
class DonorProfileCreateSerializer(serializers.ModelSerializer):

    location = LocationSerializer()

    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Donor
        fields = [
            "user",
            "blood_group",
            "date_of_birth",
            "gender",
            "last_donation_date",
            "availability_status",
            "location",
        ]

    def create(self, validated_data):

        location_data = validated_data.pop("location")

        location = Location.objects.create(**location_data)

        donor = Donor.objects.create(
            location=location,
            **validated_data
        )

        return donor
    
class DonorProfileSerializer(serializers.ModelSerializer):

    location = LocationSerializer()
    user = UserSerializer(read_only=True)

    class Meta:
        model = Donor
        fields = [
            "user",
            "blood_group",
            "date_of_birth",
            "gender",
            "last_donation_date",
            "availability_status",
            "location",
        ]


class PatientProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = [
            "blood_group",
            "date_of_birth",
            "gender",
            "location",
            "emergency_contact",
            "medical_notes"
        ]