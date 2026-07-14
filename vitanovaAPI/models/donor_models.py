from django.db import models
from .user_models import User
from .location_models import Location




#user profile model for donors

class Donor(models.Model):

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

    AVAILABILITY_CHOICES = [
        ("ACTIVE", "Active"),
        ("INACTIVE", "Inactive"),
        ("UNAVAILABLE", "Unavailable"),
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

    last_donation_date = models.DateField(
        null=True,
        blank=True
    )

    availability_status = models.CharField(
        max_length=20,
        choices=AVAILABILITY_CHOICES,
        default="ACTIVE"
    )

    location = models.ForeignKey(
        Location,
        on_delete=models.PROTECT,
        db_column="location_id"
    )

    class Meta:
        db_table = "Donor"

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"