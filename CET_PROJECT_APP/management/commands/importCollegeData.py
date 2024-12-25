import pandas as pd
from django.core.management.base import BaseCommand
from CET_PROJECT_APP.models import MCAData
import os
from django.conf import settings

class Command(BaseCommand):
    help = 'Import csv from studentdata file'
    
    def handle(self, *args, **kwargs):
        data_dir = os.path.join(settings.BASE_DIR,'data')        
        csv_file_path = os.path.join(data_dir, 'mca_final_import_csv.csv')
        
        try:
            df=pd.read_csv(csv_file_path)
        except(FileNotFoundError):
            self.stdout.write(self.style.ERROR('CSV file not found'))
            return
        
        for _, row in df.iterrows():
            MCAData.objects.create(
                College = row['College'],
                Category = row['Category'],
                Candidate = row['Candidate'],
                Year = row['Year'],
                Round = row["Round"],
                Status = row['Status'],
                University = row['University'],
                Code = row['Code'],                
                Rank = row['Rank'],
                Percentile = row['Percentile']
            )
        self.stdout.write(self.style.SUCCESS(
            'Successfully imported mca data.'
        ))    
        