from rest_framework import serializers
from app.models import VisaApplication

class VisaSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisaApplication
        fields = ('CASE_NUMBER', 'CASE_STATUS', 'CASE_SUBMITTED', 'DECISION_DATE', 'VISA_CLASS','EMPLOYMENT_START_DATE', 'EMPLOYMENT_END_DATE','JOB_TITLE','PREVAILING_WAGE', 'PW_UNIT_OF_PAY', 'PW_WAGE_SOURCE', 'PW_SOURCE_YEAR','H1B_DEPENDENT', 'WILLFUL_VIOLATOR', 'WORKSITE_CITY', 'WORKSITE_COUNTY', 'WORKSITE_STATE')