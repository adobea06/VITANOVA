from django.db import models

# Create your models here.
class User(models.Model):
   user_id = models.AutoField(primary_key=True)
   first_name = models.CharField(max_length=50)
   last_name = models.CharField(max_length=50)
   email = models.EmailField(unique=True)
   phone_number = models.CharField(max_length=15, unique=True)
   password = models.CharField(max_length=100)
   role = models.ForeignKey('Role', on_delete=models.CASCADE)
   is_verified = models.BooleanField(default=False)
   is_staff = models.BooleanField(default=False)
   date_joined = models.DateTimeField(auto_now_add=True)

   def __str__(self):
       return self.first_name + " " + self.last_name
