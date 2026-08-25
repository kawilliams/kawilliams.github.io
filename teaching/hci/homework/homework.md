---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: course
title: Homework
course: CSC 363 HCI
course-url: /teaching/hci
description: for CSC 363 - Human Computer Interaction
permalink: /teaching/hci/homework/homework
---

# Individual Homework

## Overview 
You will complete 4 individual homework assignments during the semester. Assignments
2 and 3 are designed to build up your individual skillsets to contribute to group design
sprints. Most homework assignments will be evaluated using the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing) (or similar).

### Homework Assignments

**Only Homework 1 is due before class.** All other homework assignments are due to Moodle by 11:59 PM on the due date.

| Title | Topic | Who | Weight | Due | 
|-------|-------|-----|--------|-----|
{% for hw in site.data.hci_assignments limit:4 %}| {{ hw.number }}. [{{ hw.title }}]({{ hw.link }}) | {{ hw.topic }} | You | {{ hw.weight }} | {{ hw.due_short }} |
{% endfor %}
