from django.urls import path
from app import views

urlpatterns = [
    path('salaryrecords/', views.SalaryApi, name='total-records'),       
    path('graphdata/', views.GraphApi, name='total-records'),       
]
