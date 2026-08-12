---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Design Sprint 1
description: Design for Dimensions
permalink: /teaching/hci/design-sprints/dimensions
---

{% assign ds = site.data.hci_assignments | where: "id", "ds1" | first %}

# Design for Dimensions

* Group size: Teams of 3-4
* **AI Policy**: {{ site.ai-yellow }}
* Design sprint starts: {{ ds.opens }}
* Design sprints ends: {{ ds.due }}, {{ ds.due_time }}. [Design document](/teaching/hci/design-doc) due at *11:55 PM*.

## Overview 

**Before you begin**: Read this entire document and consider how you might want to split up work.

**Purpose**: The goal of this design sprint is to practice responsive and contextual UI/UX design as a collaborative team. Rather than simply shrinking or stretching a layout to fit different screens, you will redesign an existing website (Knotty and Board) tailored specifically to the unique physical, interaction, and context-of-use constraints of three distinct device dimensions for a targeted user demographic.

In this assignment, *as a team*, you will learn and practice:
* **Contextual and multi-device UI redesign**: Learn to adapt digital interactions to different modalities, such as micro-interactions on a smartwatch (touch/crown) to individual desktop web browsing to spatial, multi-touch, collaborative wall displays (pen/touch).
* **Demographic-driven design mindset**: Define a specific target user group (e.g., local 50+ homeowners in Cornelius vs. undergraduate students) and restructure website information based on their unique goals and visual priorities.
* **Rapid ideation & low-to-high fidelity prototyping**: Practice rapid paper sketching (ideation), paper prototyping and testing (iteration), visual style guide creation via mood boards, and interactive high-fidelity prototyping in [Figma](https://www.figma.com/).
* **Design communication & peer critique**: Present your design rationale effectively during live in-class demos using the "*I like, I wish, What if*" framework.


**Why this matters (this week and beyond)**: This is your first opportunity in this class to work on a creative project as a group. You'll grow skills in communication, leadership, professionalism, and teamwork (in addition to the technical skill of using Figma). Beyond this class, your careers will almost certainly involve some type of end-user, and learning how to effectively cater your product/software/words to different audiences and different screen sizes demonstrates that you know how to be flexible and account for a variety of possibilities.

## Task
Redesign at least two pages of the Knotty and Board website:
1. The Homepage.
2. A second page directly accessible from the homepage (e.g., "Shop", "About Us").

![Example of a webpage that has three webpages linked to it. The student has selected the homepage as one of their pages to revise, and selected "shop" as the second page to revise.](/teaching/hci/images/two-webpages.svg)
*An example webpage, with additional pages linked to the homepage. The additional pages are "About Us", "Shop" and "Login". The students selected the homepage as one of their pages and "Shop" as their second page to revise.*

You will create 3 distinct interactive prototypes (one for each screen size below), with each prototype showcasing both pages (**6 total views**):
* Smartwatch (Micro-display, wrist interaction, quick action)
* Laptop / Desktop (Individual mouse/trackpad browsing)
* Large Multi-Touch Display (e.g., [Microsoft Surface Hub](https://www.microsoft.com/en-us/surface/business/surface-hub-3), which is collaborative, wall-sized, and uses pen/touch interactions)

**Here’s the catch**: you can't just shrink or expand content to fit a different screen size, just like you can't expect all users to benefit from the same user experience. You must consider the holistic user experience of the device, while balancing creating the best experience for a *specific user group*. The input modalities are different for a smart watch than a laptop. For instance, an Apple Watch has a [digital crown](https://www.youtube.com/watch?v=aPN13ULL0k4), while a laptop does not. A large wall-sized multi-touch display is often used in collaborative settings, sometimes with pen and touch, while a laptop is usually for an individual. Likewise, designing for empty-nesters who are in their 60s has a different set of design requirements than designing for Davidson College students.

> This assignment will be published on [Medium](https://medium.com) so that all group members can link to the work and so future employers can read about your project. *We will discuss publishing in class -- if you are not comfortable publishing the work, then your group will keep the write up as an unpublished, unviewable Medium draft.*

### Step-by-Step Instructions
*Collect evidence along the way! Don't make writing your [design doc](/teaching/hci/design-doc) more difficult than it needs to be!*

**Step 1: Define Target Demographic & Information Design**
1. Select a specific user demographic (who are they, what do they need, and when/why are they visiting Knotty and Board?). This decision will influence your design choices, so be sure to fully flesh out all the details of your user demographic.

2. Audit the current website content and re-prioritize **information** across both selected pages specifically for your user group. Don't just rearrange the homepage -- that was constructed for a general audience. Instead, think about the goals of your users and adjust the information/layout accordingly.

3. Establish a clear **visual hierarchy** for the **information** on the webpage. Refer to course notes, [9 Information Design Tips to Make You a Better Web Designer](https://design.tutsplus.com/articles/9-information-design-tips-to-make-you-a-better-web-designer--psd-1601), and [Top 10 Enduring Web-Design Mistakes](https://www.nngroup.com/articles/top-10-enduring/) posted by the Nielsen Norman Group.

**Step 2: Ideate and Paper Prototype (30 Sketches + 3 Paper Prototypes)**
With your target demographic and information hierarchy in mind, let's ideate what we want the website to look like.

![You will need to come up with 30 different ideas/sketches. This breaks down to 3 screen dimensions * 2 pages per screen * 5 ideas per page.](/teaching/hci/images/how-many-sketches.svg)
*You will need to come up with 30 different ideas/sketches. This breaks down to 3 screen dimensions * 2 pages per screen * 5 ideas per page.*

* Quick and dirty ideation: Generate 5 fast concept sketches per page per device size. **You should include these sketches in your final writeup.**
    * To save space while still showing all 30 images, I recommend making a collage or 2-D array of the images so the reader can peruse the thumbnails of each sketch.
* Clean paper prototypes: Synthesize your best ideas into 3 clean paper prototypes (covering the 2 pages for each device size = 6 total paper UI screens). **You should include these paper prototypes in your final writeup.**
    * I should see 6 webpages represented in these prototypes: 3 screen sizes * 2 webpages (knottyandboard.com) = 6 paper prototype pages to create
    * The paper prototypes should look more polished and detailed than the sketches. *If you hired a developer to build this website using your prototype, then she should be able to **only** reference the prototype to build the site.*
* Classroom testing: Conduct quick informal testing with classmates using your paper prototypes. Do your best to get worthwhile feedback and change your prototype accordingly. Do not reveal your target demographic upfront — ask them after testing to guess who the design was made for and iterate based on their feedback!

**Step 3: Visual Design & Mood Board**
**Construct a [Mood Board](https://creativemarket.com/blog/mood-boards-why-and-how-to-create-them)** (using tools like Niice.co) collecting visual references (color palettes, typography, UI components, tone) that appeal directly to your chosen demographic. Collecting examples will help you pick up on design patterns, color schemes, fonts, etc. that your chosen demographic prefers. Style preferences differ across groups: consider how the websites that are targeted towards college students differ in their fonts, colors, emoji use, and visual organization in comparison to websites that specifically target elderly users.
    * As you search for websites or environments that are commonly visited by people in your target demographic, take pictures and then put them together in one space. I like using a website like [niice.co](https://niice.co/).
    * Check our [design resources](/teaching/hci/resources) for other tools to help.

**Define a clean style guide** (colors, typography, component styles) anchoring your visual choices in course design resources. You can choose to make this a separate document for your team to reference, or simply note your style guide contents in your writeup (e.g., "From our moodboard, we decided on a range of blues for our color palette with Arial font for clarity and accents of yellow for emphasis.").

**Step 4: High-Fidelity Figma Prototypes**
Build **3 interactive high-fidelity prototypes in [Figma](https://www.figma.com/)** (one per device size). Each prototype must show the user flow between the **homepage and your chosen second page** (so 6 screens should be present in total).
* [Figma](https://www.figma.com/) is a prototyping, collaboration, & workflow platform. *You have a free pro account when you use your Davidson `.edu` email address.*
* Start with [this tutorial](https://www.youtube.com/watch?v=jQ1sfKIl50E) to learn some basics. Feel free to search for other videos and resources -- there's plenty out there.

![A representation of the materials needed for the demo. Your high-quality prototypes for each screen size should include a view of the homepage and a view of the other page you redesigned.](/teaching/hci/images/Demos.svg)

**Step 5: In-Class Presentation & Demo DUE BY 8:05 IN CLASS**
* Add your demo Figma links to the class outline Google Doc (link coming).

* Present a 3-minute demo, presenting your design rationale. We'll then take ~4 minutes for Q&A/critique.

* Your peers will critique using "I like, I wish, What if" and attempt to guess your hidden target demographic!

**Step 6: Write & Submit Design Document DUE BY 11:59 PM TO MOODLE**
Write a collaborative team [Design Document](/teaching/hci/design-doc) (one per group). An example Medium post from an Emory student is [here](https://medium.com/@amart98/design-for-dimensions-emory-cs-department-website-makeover-6d8d7530442c) -- it's a solid enough example but I would not give it a 100%.

Submission Process:
1. Post the Medium post link + all team member names to Slack #design-sprints. **This shows your team members that you have turned in the assignment.** 
2. Submit the Medium post link to Moodle (one submission per group).
3. Complete the required Peer Feedback Form.

As with all design documents, it should include evidence of your design process. **You do NOT need to create a demo video for this design sprint**, although depending on the complexity of your interaction design, it may still be a good idea to communicate your design.

## Criteria for Success
Grading is based on a *variation* of the HCI [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing) and individual peer evaluations via the **Peer Feedback Form**.

**What High-Quality Work Looks Like:**
* **Clear Demographic Alignment**: Design choices (information hierarchy, UI scale, fonts, colors) clearly cater to the declared target audience rather than a generic user.

* **True Modality Adaptation**: Layouts and interaction flows take real advantage of, and respect the physical limits of, each form factor (smartwatch, desktop, and large multi-touch display).

**Rigorous Evidence of Process:**

<input type="checkbox"> 30 Initial Sketches: Clear photo evidence of 5 distinct ideation sketches per page per screen size.

<input type="checkbox"> 3 Paper Prototypes: Documented paper prototypes with insights from peer testing.

<input type="checkbox"> 1 Mood Board: Visual mood board explicitly linking colors, typography, and styling to target demographic psychology.

<input type="checkbox"> 3 Figma Prototypes: Screenshots of your final Figma designs and the links to the interactive Figma designs. The prototypes should cover both the homepage and the secondary page across all 3 screen sizes. 

<input type="checkbox"> Comprehensive Design Document: Clear narrative outlining design evolution, user testing takeaways, and explicit design decisions.