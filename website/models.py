# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Nature(models.Model):
    species = models.TextField()
    name = models.TextField()
    description = models.TextField()
    image = models.ImageField()
