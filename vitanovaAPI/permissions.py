from rest_framework.permissions import BasePermission


class IsHospitalStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.role.name == "Hospital"


class IsPatient(BasePermission):
    def has_permission(self, request, view):
        return request.user.role.name == "Patient"


class IsDonor(BasePermission):
    def has_permission(self, request, view):
        return request.user.role.name == "Donor"


class IsBloodBankStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.role.name == "Blood Bank"


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.role.name == "Admin"