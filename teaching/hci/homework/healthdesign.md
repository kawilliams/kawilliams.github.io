---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Homework 3
description: Health Design
permalink: /teaching/hci/assignments/hw3
---

{% assign hw = site.data.hci_assignments | where: "id", "hw3" | first %}

# Health Design

* Group size: **Individual**
* **AI Policy**: {{ site.ai-red }}. The only time you can use AI is in Step 5 (see below).
* Assignment opens: {{ hw.opens }}
* Due: {{ hw.due }}, *{{ hw.due_time }}*. 

## Overview 

**Purpose**: In this assignment, you will bridge qualitative user research ([Homework 2: Needfinding](/teaching/hci/assignments/hw2)) with practice UI/UX execution before you enter team-based design sprints. 

You will practice translating raw human insights into actionable problem statements, generating broad solutions through low-fidelity sketching, building a paper prototype, and executing initial user evaluations. 

You will present your problem synthesis, problem definition, and sketches you have made in a **Google Doc** submission. 

**Why this matters (this week and beyond)**: You will strengthen the ability to synthesize user needs into sketches and tangible outputs. Beyond this class, learning how to turn user feedback into ideas and communicate those ideas through words and sketches is a valuable job skill that helps you pitch ideas that solve pain points for users/customers/clients.

### What you will learn & practice:
* Synthesis to ideation (POV & HMW): Learn to frame human-centered problems using *Point of View* (POV) and *How Might We (HMW)* frameworks derived directly from the empathy map data from HW 2.

* Rapid low-fidelity ideation: Practice rapid, low-stakes paper sketching to explore a wide solution space rather than fixating on a single initial idea.

* Paper prototyping & formative festing: Build clean paper prototypes to run informal evaluation sessions, gather qualitative critique, and outline iterative design changes.

* Evaluation planning: Formulate a forward-looking, systematic evaluation plan to measure design success beyond immediate classroom testing.

## Task

Follow these instructions to convert your [needfinding](./needfinding.md) insights into a tested paper prototype (being sure to record the process in a design doc):

### Step 1: Define the problem scope (POV and HMW)
1. Create a ["Point of View" (POV)](https://public-media.interaction-design.org/pdf/Point-Of-View.pdf) statement, remembering the three key statements:
    * We met ...<the **user** from the empathy map>
    * We realized ...<the user **needs** XYZ>
    * It would be game-changing to ...<an **insight** from your synthesis of your data>
2. Brainstorm ["How Might We" (HMW) statements](https://www.nngroup.com/articles/how-might-we-questions/) to open up design possibilities. 
3. Select the primary HMW statement you will solve through your design. 

**Do include existing solutions!** For us to fully understand the problem, include ample photos and description of the current user experience. What are the potential pain points in the current experience? Who is the user that your design is intended for? How does your design improve upon that experience? 

*Collect evidence along the way! E.g., screenshots of existing solutions, images of every sketch you make, etc.* 

### Step 2: Information Design and Rapid Ideation (15+ sketches)

Explore potential UI layouts across **at least 3 distinct screens/aspects** of the user experience (e.g., dashboard, activity logging screen, recap screen). 

* Ideation math: generate at least **5 distinct, messy concept sketches per screen/aspect**. 
    * 3 screens/aspects x 5 concepts each = **15 total sketches** minimum
    * If you find that you're stuck with only one or two, re-evaluate how you're solving the problem. We need enough depth to ensure we're solving the problem in a satisfying way for the users.
* Refer to guidance like those below as you consider visual hierarchy and information prioritization (especially if your solution is a website or app):
    * [9 Information Design Tips to Make You a Better Web Designer](https://design.tutsplus.com/articles/9-information-design-tips-to-make-you-a-better-web-designer--psd-1601)
    * [Top 10 Enduring Web-Design Mistakes](https://www.nngroup.com/articles/top-10-enduring/) posted by the Nielsen Norman Group

### Step 3: Construct and Test a Clean Paper Prototype

1. **Build a cleaner paper prototype**: Select your best ideas from Step 2 and build a refined paper prototype **for each of the screens** for testing (~30 minutes total to draw all 3 screens). You should have 3 sketched screens for the user to review (we will add more in a second). 

2. **Include design options**: Include another design variation for at least two of the screens so that the students testing your designs can see two options for a given screen. 
    * Prototype math: 3 sketched screens + 2 alternative designs for two of the screens = 5 total prototype sketches

3. **Classroom Testing (3 Classmates)**: Conduct 5–10 minute testing sessions with 3 classmates to observe interactions and gather feedback. 
    * **Consent & Photos**: Ask permission before recording names or taking photos. If a classmate declines name usage, cite them as "a classmate." If they decline photos, take a picture of the interview setting.

    * Classroom Note: Use Slack to coordinate testing sessions.

4. **Synthesize feedback into improvements**: Use your classmates' feedback to help you generate ideas for improvements to your designs. What were common themes that kept coming up? What are some immediate and long-term fixes to your designs?

### Step 4: Outline a Comprehensive Evaluation Plan
Design an ideal, systematic evaluation plan assuming time and resource constraints were removed. Describe in a few paragraphs how you would evaluate your solution's long-term success with actual target users (beyond classmates). Don't fret too much on this part. We will learn more formal techniques in the coming weeks, so use this opportunity to be creative with your evaluation design -- but be systematic!

### Step 5: Write and Submit Your Design Document
Document your process in a **Google Doc** structured around the [CSC 363 Design Document Guide](https://kawilliams.github.io/teaching/hci/design-doc). Submit the Google Doc as a PDF or .doc to Moodle. 🤖 **AI Policy**: You may use AI to lightly edit your draft, meaning you need to write/type all of the content, but you can use AI to help you reword sections or to act as an editor.

#### Required Design Doc Content for HW 3
Review the checklist below before submitting your work. **Completing all of the checkboxes does not guarantee a grade of 100%!** Scroll down to [Grading](#grading) to review the rubric to see how to earn a 100%. 

<input type="checkbox"> Problem Context & Synthesis: Clear description of the problem, including your exact POV statement and HMW questions, tied explicitly to HW2 findings. <br/>
<input type="checkbox"> Clear photos of all 15+ rapid ideation sketches showing design exploration.<br/>
<input type="checkbox"> Photos of your refined paper prototype (including alternative screen options, for a total of >= 5 prototypes of screens) demonstrating how early sketches evolved into the tested version.<br/>
<input type="checkbox"> Classroom Evaluation Summary: Detailed narrative of the 3 testing sessions, including photos/setting images, participant feedback, and explicit changes you plan to make based on user input. <br/>
<input type="checkbox"> Future Evaluation Plan: A creative yet systematic plan for evaluating the design with non-classmate target users under ideal resources.<br/>

### Grading
Grading will be based on the HW 3 variation of the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing).

What high-quality work looks like:
- Clear research lineage of the problem: The POV, HMW, and UI choices connect logically to the insights uncovered during HW2 Needfinding.

- Broad ideation depth: The post shows genuine exploration across at least 15 distinct sketches rather than minor variations of a single idea.

- Actionable formative testing with classmates: Classroom testing write-ups highlight specific user interactions, friction points, and concrete iteration plans rather than general compliments.

- Systematic future evaluation: The proposed evaluation plan uses clear metrics, tasks, and target user criteria rather than vague feedback goals.
