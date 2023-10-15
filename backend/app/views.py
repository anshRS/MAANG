from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework import status

from app.models import VisaApplication
from app.serializer import VisaSerializer

# Create your views here.

@api_view(['GET', 'POST'])
def totalRecordsApi(request):
    if request.method == 'GET':
        total = VisaApplication.objects.count()
        return Response({'total_records': total})
    
@api_view(['GET', 'POST'])    
def meanSalaryApi(request):
    if request.method == 'GET':
            records = VisaApplication.objects.all()  
            record_serializer = VisaSerializer(records, many=True)            
            return Response(record_serializer.data)  
    
@api_view(['GET', 'POST'])        
def medianSalaryApi(request):
    if request.method == 'GET':
            records = VisaApplication.objects.all()  
            record_serializer = VisaSerializer(records, many=True)            
            return Response(record_serializer.data)  
    
@api_view(['GET', 'POST'])        
def percentileSalaryApi(request):
    if request.method == 'GET':
            records = VisaApplication.objects.all()  
            record_serializer = VisaSerializer(records, many=True)            
            return Response(record_serializer.data)