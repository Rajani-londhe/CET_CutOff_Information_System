from rest_framework.permissions import AllowAny  # type: ignore
from rest_framework.views import APIView # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework import status # type: ignore
from CET_PROJECT_APP.models import MCAData  
from .serializers import MCADataSerializer

class MCADataListView(APIView):
    def get(self, request):
        try:
            results = MCAData.objects.all()  
            
            if not results.exists():
                return Response({"message": "No cutoff data found"}, status=status.HTTP_404_NOT_FOUND)

            serializer = MCADataSerializer(results, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
