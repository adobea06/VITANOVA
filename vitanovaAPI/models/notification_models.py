from django.db import models
from .user_models import User


class Notification(models.Model):
    TYPE_CHOICES = (
        ("SMS", "SMS"),
        ("EMAIL", "EMAIL"),
        ("PUSH", "PUSH"),
    )

    STATUS_CHOICES = (
        ("Unread", "Unread"),
        ("Read", "Read"),
    )

    notification_id = models.AutoField(primary_key=True)

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="notifications"
    )

    title = models.CharField(max_length=150)

    message = models.TextField()

    type = models.CharField(
        max_length=30,
        choices=TYPE_CHOICES
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Unread"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Notification"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} - {self.user.email}"