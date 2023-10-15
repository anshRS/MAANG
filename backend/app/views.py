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
def SalaryApi(request):
    if request.method == 'GET':
        total = VisaApplication.objects.count()

        records = VisaApplication.objects.all()  
        record_serializer = VisaSerializer(records, many=True)   
        list_of_dict=record_serializer.data
        converted_data = []

        for record in list_of_dict:
            converted_record = record.copy()  # Creating a copy of the dictionary to avoid changes in the original
            if record['PW_UNIT_OF_PAY'] == 'Hour':
                converted_record['PREVAILING_WAGE'] = record['PREVAILING_WAGE'] * 2080  # Assuming 40 hours/week and 52 weeks/year
            elif record['PW_UNIT_OF_PAY'] == 'Month':
                converted_record['PREVAILING_WAGE'] = record['PREVAILING_WAGE'] * 12
            elif record['PW_UNIT_OF_PAY'] == 'Week':
                converted_record['PREVAILING_WAGE'] = record['PREVAILING_WAGE'] * 52
            elif record['PW_UNIT_OF_PAY'] == 'Bi-Weekly':
                converted_record['PREVAILING_WAGE'] = record['PREVAILING_WAGE'] * 26
            converted_data.append(converted_record)

        # Calculate average salary
        total_salary = sum(record['PREVAILING_WAGE'] if record['PREVAILING_WAGE'] else 0 for record in converted_data)
        average_salary = total_salary / len(converted_data)
        average_salary=f"{average_salary:.2f}"

        # Calculate median salary
        salaries = [record['PREVAILING_WAGE'] for record in converted_data]
        salaries.sort()
        median_salary = salaries[len(salaries) // 2]   
        median_salary=f"{median_salary:.2f}"            

        # Calculate the 25th percentile salary.
        twentyfive_percentile_index_ = int(0.25 * len(salaries))
        twentyfive_percentile_salary = salaries[twentyfive_percentile_index_]    
        
        # Calculate the 75th percentile salary.
        seventyfive_percentile_index = int(0.75 * len(salaries))
        seventyfive_percentile_salary = salaries[seventyfive_percentile_index]
        twentyfive_percentile_salary =f"{twentyfive_percentile_salary:.2f}"
        seventyfive_percentile_salary =f"{seventyfive_percentile_salary:.2f}"

        return Response({'total_records': total, 'mean_salary':average_salary, 'median_salary':median_salary, 'twentyfive':twentyfive_percentile_salary, 'seventyfive':seventyfive_percentile_salary})   
