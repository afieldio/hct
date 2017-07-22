import datetime
from django import template

register = template.Library()

@register.simple_tag
def get_year():
	date = datetime.datetime.now()
	# import ipdb; ipdb.set_trace()
	year = date.year
	return year
