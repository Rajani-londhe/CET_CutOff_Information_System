# your_api/urls.py
from django.urls import path
from .views import MCADataListView  

urlpatterns = [
    path('api-data/', MCADataListView.as_view(), name='api-data-list'),
]
