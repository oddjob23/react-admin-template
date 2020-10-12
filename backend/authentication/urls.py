from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainCustomTokenPair, UserRegisterView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name="register"),
    path('login/', ObtainCustomTokenPair.as_view(), name="token_create"),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name="token_refresh"),

]