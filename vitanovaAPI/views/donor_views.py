from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError

from ..permissions import IsDonor
from ..serializers.profile_serializers import DonorProfileSerializer, DonorProfileCreateSerializer


class DonorProfileCreateView(generics.CreateAPIView):
    serializer_class = DonorProfileCreateSerializer
    permission_classes = [IsAuthenticated, IsDonor]

    def perform_create(self, serializer):
        if hasattr(self.request.user, "donor"):
            raise ValidationError(
                {"message": "Donor profile already exists"}
            )

        serializer.save()


class DonorProfileView(generics.RetrieveUpdateAPIView):

    serializer_class = DonorProfileSerializer
    permission_classes = [IsAuthenticated, IsDonor]

    def get_object(self):
        return self.request.user.donor