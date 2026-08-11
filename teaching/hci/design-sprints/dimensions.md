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

### Step-by-Step Instructions
**Step 1: Define Target Demographic & Information Hierarchy**
1. Select a specific user demographic (who are they, what do they need, and when/why are they visiting Knotty and Board?).

2. Audit the current website content and re-prioritize information across both selected pages specifically for your user group.

3. Establish a clear visual hierarchy (refer to course notes, [9 Information Design Tips to Make You a Better Web Designer](https://design.tutsplus.com/articles/9-information-design-tips-to-make-you-a-better-web-designer--psd-1601), and [Top 10 Enduring Web-Design Mistakes](https://www.nngroup.com/articles/top-10-enduring/) posted by the Nielsen Norman Group).

**Step 2: Ideate and Paper Prototype (30 Sketches + 3 Paper Prototypes)**
* Quick and dirty ideation: Generate 5 fast concept sketches per page per device size.
* Clean paper prototypes: Synthesize your best ideas into 3 clean paper prototypes (covering the 2 pages for each device size = 6 total paper UI screens).
* Classroom festing: Conduct quick informal testing with classmates. Do not reveal your target demographic upfront — ask them after testing to guess who the design was made for and iterate based on their feedback!

![You will need to come up with 30 different ideas/sketches. This breaks down to 3 screen dimensions * 2 pages per screen * 5 ideas per page.](/teaching/hci/images/how-many-sketches.svg)
*You will need to come up with 30 different ideas/sketches. This breaks down to 3 screen dimensions * 2 pages per screen * 5 ideas per page.*

**Here’s the catch**: you can't just shrink or expand content to fit a different screen size. You must consider the holistic user experience of the device. The input modalities are different for a smart watch than a laptop. For instance, an Apple Watch has a [digital crown](https://www.youtube.com/watch?v=aPN13ULL0k4), while a laptop does not. A large wall-sized multi-touch display is often used in collaborative settings, sometimes with pen and touch, while a laptop is usually for an individual.

Furthermore, you shouldn’t just translate the existing design for these devices. Instead, imagine that you want to create the best experience for a *specific user group*. Your group should define who that user group is. Who are they? What do they need (differently from other users), and how can you cater your design to that group? For instance, the informational needs, the designs you'd choose, and the interactions you might support would likely be very different if you were designing for people who live in Cornelius in their 50s v. Davidson College students.

**The website:** you will be re-designing the [Knotty and Board](https://www.knottyandboard.com/) website, a local home furnishings company.

While you will not redesign the entire website, you should redesign at least **two pages on the website**. One of those pages must be the homepage. The other[s] must be accessible from the homepage. **This means your prototypes should showcase *both* pages**. Since there are 3 screen sizes, you will have 3 different prototypes that have 2 pages per prototype (e.g., for the watch you'll show the landing page + another page, for the desktop you'll show the landing page + another page, and for the large display you'll show the landing page + another page).



## Information Design

*Collect evidence along the way! Don't make writing your [design doc](/teaching/hci/design-doc) more difficult than it needs to be!*

The first thing that you should do is establish which information should be emphasized to your specific user group. Don’t just rearrange the homepage - that was constructed for a general audience. Instead, consider which information across the entire website should be emphasized for your group. What do you think the goals of your users would be?

The information that is most important may differ by group. Make sure that this is reflected visually in the organization of your information. Wherever possible, try to check your assumptions. You don’t have time to interview your target group, but you *can* (and should!) explore other websites to get a *very rough* sense of their priorities.

**Within each page:** You should similarly prioritize information *within* each page. Consider your [information hierarcy](https://99designs.com/blog/tips/6-principles-of-visual-hierarchy/) and make sure that the most important information is visually prioritized within each page. Your decisions should be anchored in your reading and lecture notes.



**Output:** Use sketching as a tool to explore your designs. The goal here is to rapidly explore many different solutions with messy sketches. After you have thoroughly explored the design space (you should have at least 5 ideas for each screen), use paper to construct a cleaner paper prototype for that screen. You should have **3 paper prototypes (one for each screen: watch, desktop, and display)** that are the cleaned, culmination of your ideas for the two webpages (knottyandboard.com homepage + another page linked to that homepage).
* Doing some math: There are 3 screen sizes * 2 webpages (knottyandboard.com) = 6 paper prototype pages to create. 
* Prior to making these 6 paper prototypes, you should have at least 5 *very quick and dirty* sketches for each page. 



**You should test this paper prototype with other people in the class.** While they likely may not represent your users (so this is typically bad practice), I want you to get in the habit of getting feedback on whatever you create. We’ll discuss user testing more in a week or two. Until then, do your best to get worthwhile feedback and change your prototype accordingly. Don’t reveal who you designed this for! Ask your users afterwards what user group they think you designed it for... Were the right? Incorporate your findings into the next iteration of your design.

## Visual Design
Just as the important information may differ between groups, so might the styles that they prefer. Consider how the websites that are targeted towards college students differ in their fonts, colors, and visual organization in comparison to websites that specifically target elderly users.

Being able to articulate the correct mood and/or tone for your demographic is critical. How can you do that if you’re not a professional designer? We’ll use one strategy here.

Create a [Mood Board](https://creativemarket.com/blog/mood-boards-why-and-how-to-create-them): You may not be able to design well for a particular group of people off the top of your head... but if you had enough good examples, you’d probably be able to pick up on a few ideas - design patterns, color schemes, fonts. This is exactly what a mood board is for. As you search for websites or environments that are commonly visited by people in your target demographic, take pictures and then put them together in one space. I like using a website like [niice.co](https://niice.co/).

Consider the [design resources](/teaching/hci/resources) we have posted on our website. For example, if you can extract a color or two from your design board, there are tools that you can use to uncover complementary colors.

**Output:** a set of colors, fonts, and general styles that you feel are appropriate for your user group. Consider explicitly putting these into your design doc to show the provenance of your stylistic decisions.

## Building your Website Prototype
Now that you have your UI organization and style guide nailed down, it's time to create your website for the three different devices. To create an interactive prototype, we’re going to use [Figma](https://www.figma.com/) - a prototyping, collaboration, & workflow platform. It might be a good idea to start with a tutorial.

Figma is fantastic, but it isn’t magic. You’re still going to need to create the visuals yourself. While applications like Adobe Photoshop are likely among the most powerful tools you can use to generate screen mock-ups, I’ve even used tools as simple as PowerPoint before. Don’t let the technology get in the way of your design.

**Output:** The redesigned homepage + one or more other screens of your chosen website on Figma for each of the three devices.

![A representation of the materials needed for the demo. Your high-quality prototypes for each screen size should include a view of the homepage and a view of the other page you redesigned.](/teaching/hci/images/Demos.svg)

## Deliverables
* **Demo (in-class):** You should have Figma links handy and ready to present in class on the day of your demo (place your demo link [here](https://docs.google.com/document/d/1lMmdANulEzOzAnLde3e-CRgK5IxJpyahbI81wD6S5ec/edit?usp=drive_link)). Plan to spend approximately 7 minutes presenting (~3 minutes talking through your design + ~4 minutes for critique/questions). Your classmates will critique your work (using the *I like, I wish, What if* framework) and also try to guess your target demographic… despite having no previous knowledge.

* **Final deliverable (due at 11:55 PM):** The output from this assignment should be the [design document](/teaching/hci/design-doc) (one per group). An example Medium post from an Emory student is [here](https://medium.com/@amart98/design-for-dimensions-emory-cs-department-website-makeover-6d8d7530442c) -- it's a solid enough example but I would not give it a 100%. Post the link of your design document post along with your group members' names on our Slack channel for `#group-design-projects`. This will signal to your group members that you are turning in the design document. Then submit the link to your Medium post on Moodle (only one group member needs to submit). As with all design documents, it should include evidence of your design process. **You do NOT need to create a demo video for this design sprint**, although depending on the complexity of your interaction design, it may still be a good idea to communicate your design. For this assignment, I would expect a *minimum* of the following:
    * pictures of your various sketches for all three devices
    * a picture of your moodboard
    * pictures of your final product for all three devices (more broadly, the evolution of your design should be clear)
    * links to your Figma prototypes

**Grading:** Grading will be based on the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing). Be sure to complete the [peer feedback forms](https://forms.gle/GFQhygcpcVjDVhzy7) linked
at the enf of the [design document guide](/teaching/hci/design-doc), which will be a large part of your grade. 