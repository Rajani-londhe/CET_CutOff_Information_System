from django.contrib import admin
from CET_PROJECT_APP.models import MCAData

# Register your models here.
@admin.register(MCAData)
class MCADataModelAdmin(admin.ModelAdmin):
    list_display = ['College','Category','Candidate','Year','Round','Status','University','Code','Rank','Percentile']