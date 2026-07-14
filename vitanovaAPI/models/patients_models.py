from django.db import models
from .user_models import User
from .location_models import Location


class Patient(models.Model):

    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
        db_column="user_id"
    )

    blood_group = models.CharField(
        max_length=3,
        choices=BLOOD_GROUP_CHOICES
    )

    date_of_birth = models.DateField()

    gender = models.CharField(
        max_length=15
    )

    location = models.ForeignKey(
        Location,
        on_delete=models.PROTECT,
        db_column="location_id"
    )

    emergency_contact = models.CharField(
        max_length=15,
        null=True,
        blank=True
    )

    medical_notes = models.TextField(
        null=True,
        blank=True
    )


    class Meta:
        db_table = "Patient"


    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"