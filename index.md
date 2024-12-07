---
title: Home
layout: home
nav_order: 1
---
# Placement-testimonials
> This is a Website Made by RIGNITC B22 Batch for guiding the members of the club in Placement and Internship Preparation.

## Recent Posts


{% for post in site.posts limit:5 %}
  - [{{ post.title }}]({{ post.url }})
{% endfor %}
