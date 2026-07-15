from rest_framework import generics, status, permissions
from rest_framework.response import Response
from ..serializers import UserSerializer


class RegisterUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    queryset = UserSerializer.Meta.model.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(
            {
                "message": "User registered successfully.",
                "user": UserSerializer(
                    user,
                    context=self.get_serializer_context()
                ).data,
            },
            status=status.HTTP_201_CREATED,
        )
    
