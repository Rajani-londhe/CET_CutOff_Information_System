from django.urls import path
from .views import result
from CET_PROJECT_APP import views



urlpatterns = [   
    path('', views.base_view, name='base'),            
    path('mca/', views.SearchView.as_view(), name='index'),            
    path('mca/result/', result),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('search-options/', views.search_options, name='searchOptions'),
    path('searchCutOff/', views.search_cutoff, name='searchCutOff'),
    path('cutOffResult/', views.cutoff_result, name='cutOffResult'),
    path('filter3/', views.filter3, name='filter3'),
    path('filter3/result/', views.filter3Result, name='filter3Result'),
    path('filter4/', views.filter4_view, name='filter4'),
    path('filter4Result/', views.filter4_result_view, name='filter4Result'),
]    