# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
	context = {
		'active':'home'
	}
	return render(request, 'index.html', context=context)

def trust(request):
	return render(request, 'trust.html')

def location(request):
	return render(request, 'location.html')

def wildlife(request):
	return render(request, 'wildlife.html')
