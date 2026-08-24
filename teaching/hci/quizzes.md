---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: course
title: CSC 363 Quizzes
course: CSC 363 HCI
description: Human Computer Interaction
course-url: /teaching/hci
permalink: teaching/hci/quizzes
---

# Individual Quizzes

## Overview 
You will complete 2 individual quizzes during class time throughout the semester. These quizzes are designed to test your knowledge of design principles (e.g., design patterns, quantitative and qualitative evaluation) and to connect that knowledge to concepts from your homework and design sprints. **These quizzes are foundational to succeeding in the Oral Exam.** 

How I see it working out:
1. You do all the readings for class and do reasonably well on the Reading Checks.
2. You use the Reading Checks to study materials for the Quizzes, seeing how the readings we did applied to your hands-on assignments, and do reasonably well on the Quizzes.
3. You use your experience in the Quizzes to holistically study the human-centered design process so that you can articulate what you know in the Oral Exam and feel confident taking it.

**Topics will be announced** closer to the date. Quizzes should take **approximately 30 minutes in-class** (Dr. Williams will coordinate with you on an individual basis if you have accommodations through AADR). 

### Quizzes

| Quiz | Topics | Who | Weight | Due | 
|-------|-------|-----|--------|-----|
{% for hw in site.data.hci_assignments offset:8 %}| {{ hw.number }}. {{ hw.title }} | {{ hw.topic }} | You | {{ hw.weight }} | {{ hw.due_short }} |
{% endfor %}
