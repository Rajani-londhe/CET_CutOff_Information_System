# Generated by Django 5.0.6 on 2024-07-07 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CET_PROJECT_APP', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MCAData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('College', models.CharField(max_length=100)),
                ('Category', models.CharField(max_length=100)),
                ('Candidate', models.CharField(max_length=100)),
                ('Year', models.IntegerField()),
                ('Round', models.CharField(max_length=100)),
                ('Status', models.CharField(max_length=100)),
                ('University', models.CharField(max_length=100)),
                ('Code', models.IntegerField()),
                ('Rank', models.IntegerField()),
                ('Percentile', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='CollegeData',
        ),
    ]
