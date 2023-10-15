# Generated by Django 4.2.6 on 2023-10-15 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_visaapplication_prevailing_wage_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visaapplication',
            name='PREVAILING_WAGE',
            field=models.FloatField(default=0.0, null=True),
        ),
        migrations.AlterField(
            model_name='visaapplication',
            name='PW_UNIT_OF_PAY',
            field=models.CharField(default='Year', max_length=255, null=True),
        ),
    ]
