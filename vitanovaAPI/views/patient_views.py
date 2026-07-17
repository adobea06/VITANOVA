# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import IsAuthenticated  
# from ..serializers.profile_serializers import PatientProfileSerializer
# from ..permissions import IsPatient


# class PatientProfileCreateView(APIView):

#     permission_classes = [IsAuthenticated, IsPatient]


#     def post(self, request):

#         if hasattr(request.user, "patient"):
#             return Response(
#                 {
#                     "message": "Patient profile already exists"
#                 },
#                 status=status.HTTP_400_BAD_REQUEST
#             )


#         serializer = PatientProfileSerializer(
#             data=request.data
#         )


#         if serializer.is_valid():

#             serializer.save(
#                 user=request.user
#             )


#             return Response(
#                 {
#                     "message": "Patient profile created successfully",
#                     "profile": serializer.data
#                 },
#                 status=status.HTTP_201_CREATED
#             )


#         return Response(
#             serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST
#         )