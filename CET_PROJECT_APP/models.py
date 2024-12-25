from django.db import models

# Create your models here.
class MCAData(models.Model):  
    College = models.CharField(max_length=100)      
    Category = models.CharField(max_length=100)
    Candidate = models.CharField(max_length=100)  
    Year = models.IntegerField()
    Round = models.CharField(max_length=100)
    Status = models.CharField(max_length=100) 
    University = models.CharField(max_length=100)    
    Code = models.IntegerField()    
    Rank = models.IntegerField()
    Percentile = models.FloatField()
    
    def __str__(self):
        return self.College