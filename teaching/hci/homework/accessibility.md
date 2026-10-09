---

layout: course
title: Homework 4
course: CSC 363 HCI
course-url: /teaching/hci
description: Design for Accessibility
permalink: /teaching/hci/assignments/hw4
---

{% assign hw = site.data.hci_assignments | where: "id", "hw4" | first %}

# Design for Accessibility

* Group size: **Individual**
* **AI Policy**: {{ site.ai-yellow }}.
* Assignment opens: {{ hw.opens }}
* Due: {{ hw.due }} {{ hw.due_time }}

## Overview

**Purpose**: The goal of the assignment is to explore how technology impacts the user experience, **specifically for users navigating physical or digital spaces under alternative interaction constraints**. 

In this assignment, you may be exploring a different experience than the one you are used to trying. We want to investigate how the technology affects your experience from your normal experience. Are they equivalent experiences? How do the existing solutions/technologies help, hurt, or otherwise change your experience? Would your experience improve with more practice or are there aspects that continue to be pain points?

You may choose to one of two tasks: (1) investigate [physical accessibility](#overview-physical-accessibility) on campus **or**, (2) investigate [digital accessibility](#overview-digital-accessibility) on websites. You will reflect on your experience in a **Google Doc** submission. 

**Why this matters (this week and beyond)**: You will explore technologies developed for accessibility and reflect on how those technologies impact the user experience as a Davidson student. Beyond this class, considering equity and inclusion in your designs, conversations, and processes will help you consider multiple perspectives. This skill is a foundation for with critical thinking and teamwork. 


### What you will learn & practice:
* **Embodied accessibility auditing**: You will experience firsthand how spatial pathways or digital interfaces create inclusion or friction when standard interaction channels (stairs/curbs or computer mice) are removed.

* **Comparative UX Evaluation**: You will analyze whether existing accessibility technologies help, hurt, or otherwise change your experience compared to standard navigation, identifying persistent pain points and systemic barriers.

* **Accessible Content Design**: In your Design Doc in your final submission, you will apply web accessibility principles (WCAG-aligned practices) to your own work by creating colorblind-friendly graphics, high-contrast visual annotations, and proper image metadata (captions and alt-text).


## Task

The two options for the assignment are below. **Pick ONE.**

### Option 1: Physical Accessibility
You will audit Davidson College and the town for handicap-accessible pathways.

#### Step 1: Watch and prepare

Watch [this video](https://www.youtube.com/watch?v=_GBLqZDXB_0) about a sidewalk accessibility project.

#### Step 2: Conduct the 24-hour physical audit

For 24 hours, walk around town/campus only using handicap accessible pathways. 

**Rules**: No stairs inside (not even tiny steps). No hopping onto curves outside. Use only paved paths and sidewalks. 

#### Step 3: Create an annotated map

Create an annotated map (sketching, or using any digital tools you like) that covers **at least 5 buildings** with the following information:
* At least 2-3 accessible "options." This can be an entrance to a building, good crosswalk location, powered 
doors, etc.
* At least 2-3 problematic areas that you found. For example, you can't enter the front of Chambers because of steps.Mark each with an appropriate symbol, an image, and a text description.
* You can use existing [maps of Davidson](https://www.davidson.edu/about/maps-and-directions) as a base, then add marks on top

*Pro Tip*: Keep in mind the busyness of the existing campus map and how your annotations may work *with* or *against* the existing marks on the map. 

### Option 2: Digital Accessibility
You will audit websites and computer applications for keyboard navigability.

#### Step 1: Learn keyboard navigation
Navigate to this [page](https://webaim.org/techniques/keyboard/#maincontent) from the WebAIM guidelines about keyboard accessibility. 

Practice navigating the webpage *using only the keyboard*. 
* `Tab` key jumps forward from link to link
* `Shift` + `Tab` jump backward in reverse order 
* `Up/Down` arrows to scroll

#### Step 2: Conduct the 4-hour digital audie

After you have practiced a bit, you should *only* use the keyboard for the next 4 hours.
**Allowed exceptions:**
* You may use your mouse if you are looking up a keyboard shortcut
* You may choose to use talk-to-text (also called dictation); however, any edits you make must be through the keyboard.
<!--* **🤖 AI Policy**: You may choose to use an [AI agent](https://en.wikipedia.org/wiki/AI_agent) to help you for 1 hour of the 4 hours. -->

While you are using the keyboard, take note of **what actions are easy or not** and **what websites seem to be built with accessibility in mind**. Take screenshots and notes as you go. 

You need to review **at least 5 websites** (split however you want -- 2 accessible, 3 inaccessible or vice versa). **One of these websites should be the [Davidson College website](https://www.davidson.edu/).**

After your time using the keyboard, your blog post should include:
* **At least 2-3 accessible websites**: Provide screenshots of you using the website and add annotations to the actions you were trying to perform. 
* **At least 2-3 less accessible websites**: Provide screenshots of you using the website and add annotations to the actions you were trying to perform, including why it was challenging/impossible.
* Remember to audit the [Davidson College website](https://www.davidson.edu/)!


### Mandatory FOR BOTH OPTIONS: Accessibility in Your Blog Posts

**Given what you have learned about web accessibility, I *will* be evaluating your blog post for accessible features**:

* **Physical Accessibility**: This means that your map design needs to be accessible to people with varying colorblindness and needs to zoom well. All images need to have captions and alt text. 

* **Digital Accessbility**: This means that URLs should be included as hyperlinks and annotations on your screenshots need to accommodate varying colorblindness. All images need to have captions and alt text. 

**🤖 AI policy:** You *may* use AI to help with this work. However, you are responsible for the correctness of the output. I also expect a sentence or two describing this process: what did you prompt? What was correct and what needed fixing?

## Deliverables
Submit your reflection as a **Google Doc** in the format of a [Design Doc](/teaching/hci/design-doc)/blog post. **You do not need a demo video.** 

**🤖 AI policy:** You may use AI to review your draft *after* you have written the draft. Your use of AI should be to fix grammar, edit sentence clarity, and to tighten up a pretty solid draft.

Your document must include:
1. **Reflection and comparative narrative**: Critically reflect on your positive, negative, and unexpected experiences. Your writing should have a clear evaluation comparing accessible vs. inaccessible pathways/websites, and it should address whether experiences were equivalent and if pain points would improve with practice.
2. **Visual evidence and artifacts**: Interwoven in your narrative, you should include either: 
    * **Physical accessibility:** Annotated map covering **at least 5 buildings**, showing **2–3 accessible features** and **2–3 problematic areas** with images and text descriptions.
        * Take pictures of accessible/problematic features throughout your day
    * **Web accessibility:** Screenshots reviewing **at least 5 websites (including Davidson.edu)**, featuring **2–3 accessible** and **2–3 inaccessible examples** with annotated actions.
        * * Take screenshots of accessible/problematic features throughout your time, and write down what interaction you were trying to perform
3. **Accessibility compliance in your Design Doc**:
    * Captions and alt-text on every image/map.
    * Colorblind-friendly graphics and annotations.
    * Hyperlinked URLs (for Web Accessibility option).
    * 🤖 **AI policy:** You *may* use AI to help with this work. However, you are responsible for the correctness of the output. I also expect a sentence or two describing this process: what did you prompt? What was correct and what needed fixing?

**Optional**: if this experience causes you to notice other inaccessible examples on campus or other inaccessible features on websites (unrelated to keyboard navigation), you are welcome to include those in this reflective blog post. This is *optional* -- I am grading your reflection of the physical accessibility challenge.

### Criteria for Success and Grading

Grading will be based on a *variation* of the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing).

#### What High-Quality Work Looks Like
<input type="checkbox"> <b>Following audit constraints</b>: Demonstration of genuine, thoughtful engagement with the full audit period (24 hours for physical; 4 hours for digital) without cutting corners.<br/>

<input type="checkbox"> <b>Acquired evidence quantity and quality</b>:<br/>
<ul>
    <li>Physical option: Meets or exceeds at least 5 buildings, 2–3 accessible options, and 2–3 problem areas with <b>clear photos and descriptions</b>.</li>
    <li>Web option: Meets or exceeds at least 5 websites (including Davidson.edu), properly split between 2–3 accessible and 2–3 less accessible sites with <b>annotated screenshots</b>.</li>
</ul>

<input type="checkbox"> <b>Deep reflective analysis</b>: Beyond describing what happened, the report critically analyzes why certain designs fail or succeed and how technology changes the user's experience compared to their usual navigation.<br/>

<input type="checkbox"> <b>Flawless accessibility implementation</b>: All images contain meaningful alt-text and captions, visual graphics accommodate colorblindness, maps scale cleanly, and links are hyperlinked correctly. 🤖 <b>AI policy:</b> You may use AI to help with this work. However, you are responsible for the correctness of the output. I also expect a sentence or two describing this process: what did you prompt? What was correct and what needed fixing?<br/>  