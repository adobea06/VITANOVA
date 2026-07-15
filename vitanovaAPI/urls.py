from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import user_views
from  rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('register/', user_views.RegisterUserView.as_view(), name='register'),
   path('login/', user_views.LoginView.as_view(), name='login'),
   path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
