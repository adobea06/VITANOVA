from rest_framework import serializers
from ..models import Donor, Patient


class DonorProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Donor
        fields = [
            "blood_group",
            "date_of_birth",
            "gender",
            "last_donation_date",
            "availability_status",
            "location"
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