from django.db import models

class Location(models.Model):

    location_id = models.AutoField(primary_key=True)

    gps_code = models.CharField(
        max_length=20,
        unique=True
    )

    region = models.CharField(
        max_length=100
    )

    district = models.CharField(
        max_length=100
    )

    city = models.CharField(
        max_length=100
    )

    address_text = models.TextField()

    latitude = models.DecimalField(
        max_digits=10,
        decimal_places=8,
        null=True,
        blank=True
    )

    longitude = models.DecimalField(
        max_digits=11,
        decimal_places=8,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.gps_code


       