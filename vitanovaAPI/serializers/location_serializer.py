from rest_framework import serializers
from ..models.location_models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = [
            "gps_code",
            "region",
            "district",
            "city",
            "address_text",
            "latitude",
            "longitude",
        ]