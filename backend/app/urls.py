from django.urls import path
from app import views

urlpatterns = [
    path('totalrecords/', views.totalRecordsApi, name='total-records'),   
    path('meansalary/', views.meanSalaryApi, name='mean-salary'), 
    path('mediansalary/', views.medianSalaryApi, name='median-salary'),
    path('percentilesalary/', views.percentileSalaryApi, name='percentile-salary'),
]
