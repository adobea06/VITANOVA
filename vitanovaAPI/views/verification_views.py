from django.contrib.auth.tokens import default_token_generator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..models.user_models import User


class VerifyEmailView(APIView):

    def get(self, request, user_id, token):

        try:
            user = User.objects.get(
                user_id=user_id
            )

        except User.DoesNotExist:
            return Response(
                {"message": "Invalid user"},
                status=status.HTTP_400_BAD_REQUEST
            )


        if default_token_generator.check_token(user, token):

            user.is_verified = True
            user.save()

            return Response(
                {
                    "message": "Email verified successfully"
                }
            )


        return Response(
            {
                "message": "Invalid or expired token"
            },
            status=status.HTTP_400_BAD_REQUEST
        )