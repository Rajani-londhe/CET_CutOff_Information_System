from rest_framework import serializers # type: ignore
from CET_PROJECT_APP.models import MCAData  

class MCADataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCAData
        fields = '__all__'  
