from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    # custom fields for user
    company_name = models.CharField(max_length=100)



    
