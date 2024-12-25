from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('CET_PROJECT_APP.urls')),
    path('api/', include('API.urls'))
    
]