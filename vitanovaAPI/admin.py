from django.contrib import admin
from .models.user_models import User, Role
from .models.donor_models import Donor
from .models.patients_models import Patient
from .models.location_models import Location


# Register your models here.
admin.site.register(User)
admin.site.register(Role)
admin.site.register(Donor)
admin.site.register(Patient)
admin.site.register(Location)   
