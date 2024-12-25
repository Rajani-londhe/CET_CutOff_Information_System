# myapp/management/commands/clear_model_data.py

from django.core.management.base import BaseCommand
from CET_PROJECT_APP.models import MCAData

class Command(BaseCommand):
    help = 'Deletes all data from MCAdata'

    def handle(self, *args, **kwargs):
        try:
            MCAData.objects.all().delete()
            self.stdout.write(self.style.SUCCESS('Successfully deleted all data from MCAdata'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Encountered error: {str(e)}'))
