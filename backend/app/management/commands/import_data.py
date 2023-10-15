import csv
from django.core.management.base import BaseCommand
from app.models import VisaApplication

class Command(BaseCommand):
    help = 'Import data from a CSV file into the VisaApplication model'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='PAth to csv file')

    def handle(self, *args, **options):
        csv_file = options['csv_file']
        with open(csv_file, 'r') as file:
            reader = csv.DictReader(file,delimiter=';')
            for row in reader:
                for x in row:
                    if(row[x]==""):
                        # self.stdout.write(self.style.SUCCESS(x))
                        row[x]=None
                      
                VisaApplication.objects.create(
                    CASE_NUMBER=row['CASE_NUMBER'],
                    CASE_STATUS=row['CASE_STATUS'],
                    CASE_SUBMITTED=row['CASE_SUBMITTED'],
                    DECISION_DATE=row['DECISION_DATE'],
                    VISA_CLASS=row['VISA_CLASS'],
                    EMPLOYMENT_START_DATE=row['EMPLOYMENT_START_DATE'],
                    EMPLOYMENT_END_DATE=row['EMPLOYMENT_END_DATE'],
                    EMPLOYER_NAME=row['EMPLOYER_NAME'],
                    EMPLOYER_ADDRESS=row['EMPLOYER_ADDRESS'],
                    EMPLOYER_CITY=row['EMPLOYER_CITY'],
                    EMPLOYER_STATE=row['EMPLOYER_STATE'],
                    EMPLOYER_POSTAL_CODE=row['EMPLOYER_POSTAL_CODE'],
                    EMPLOYER_COUNTRY=row['EMPLOYER_COUNTRY'],
                    EMPLOYER_PROVINCE=row['EMPLOYER_PROVINCE'],
                    EMPLOYER_PHONE=row['EMPLOYER_PHONE'],
                    EMPLOYER_PHONE_EXT=row['EMPLOYER_PHONE_EXT'],
                    AGENT_ATTORNEY_NAME=row['AGENT_ATTORNEY_NAME'],
                    AGENT_ATTORNEY_CITY=row['AGENT_ATTORNEY_CITY'],
                    AGENT_ATTORNEY_STATE=row['AGENT_ATTORNEY_STATE'],
                    JOB_TITLE=row['JOB_TITLE'],
                    SOC_CODE=row['SOC_CODE'],
                    SOC_NAME=row['SOC_NAME'],
                    NAIC_CODE=row['NAIC_CODE'],
                    TOTAL_WORKERS=row['TOTAL_WORKERS'],
                    FULL_TIME_POSITION=row['FULL_TIME_POSITION'],
                    PREVAILING_WAGE=row['PREVAILING_WAGE'],
                    PW_UNIT_OF_PAY=row['PW_UNIT_OF_PAY'],
                    PW_WAGE_SOURCE=row['PW_WAGE_SOURCE'],
                    PW_SOURCE_YEAR=row['PW_SOURCE_YEAR'],
                    PW_SOURCE_OTHER=row['PW_SOURCE_OTHER'],
                    WAGE_RATE_OF_PAY_FROM=row['WAGE_RATE_OF_PAY_FROM'],
                    WAGE_RATE_OF_PAY_TO=row['WAGE_RATE_OF_PAY_TO'],
                    WAGE_UNIT_OF_PAY=row['WAGE_UNIT_OF_PAY'],
                    H1B_DEPENDENT=row['H-1B_DEPENDENT'],
                    WILLFUL_VIOLATOR=row['WILLFUL_VIOLATOR'],
                    WORKSITE_CITY=row['WORKSITE_CITY'],
                    WORKSITE_COUNTY=row['WORKSITE_COUNTY'],
                    WORKSITE_STATE=row['WORKSITE_STATE'],
                    WORKSITE_POSTAL_CODE=row['WORKSITE_POSTAL_CODE'],
                    ORIGINAL_CERT_DATE=row['ORIGINAL_CERT_DATE'],
                )
                self.stdout.write(self.style.SUCCESS(f'Successfully imported data from CSV.'))
        print("Complete")