from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User
class CustomTokenPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenPairSerializer, cls).get_token(user)

        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name' ] = user.last_name
        token['email']      = user.email
        token['username']   = user.username
        return token

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=4, write_only=True)
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': { 'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
        