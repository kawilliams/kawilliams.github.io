---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Design Sprint 2
description: Design for Understanding
permalink: /teaching/hci/design-sprints/understanding
---
{% assign ds = site.data.hci_assignments | where: "id", "ds2" | first %}

# Design for Understanding

* Group size: Teams of 3-4
* **AI Policy**: {{ site.ai-yellow }}
* Design sprint starts: {{ ds.opens }}
* Design sprints ends: {{ ds.due }}, {{ ds.due_time }}. [Design document](/teaching/hci/design-doc) due at *11:59 PM*.

<!-- * Group size: Teams of 3-4
* Design sprint starts: Wednesday, September 24, in class.
* Design sprint ends: Monday, October 13, in class (demo). Design document due at *11:55 PM*.  -->

## Overview 
**Before you begin:** Read this document and discuss with your team how you want to split up the work.

**Purpose**: The goal of this design sprint is to master **data visualization as a medium for both analytical reasoning and persuasive communication.** You will learn that mapping data to visual features is a powerful method for communicating information by leveraging the rapid perceptual pathways in our brain. The choice of visual encoding, interaction, and narrative framing dramatically shapes a user's understanding, emotional response, and long-term memory.

In this assignment, *as a team*, you will learn and practice: 
* **Dual-lens Visualization Design**: Learn to approach a single dataset through two contrastic perspectives: 
    * **Analytical lens**: In this framing, you can assume that the user is a domain expert (meaning, they work in the same field as the dataset) and they do not need training in traditional charts. Construct a series of graphs that give an in-depth, unbiased, clear portrait of your data.
    * **Persuasive lens:** In this framing, your goal is to design a compelling, narrative-driven, or interactive story. What will have the most long-lasting impact on users? What will they *remember*?
        * Since you’ll be working in teams of four (4) for this project, I recommend that you split your team into pairs, with each pair tackling one lens (*analyze* versus *persuade*). However, depending on your design, you may choose to allocate your resources in the way you see best.
    
* **The Five Design-Sheet (FdS) Methodology**: Practice a structured, paper-first visualization ideation framework to create a divergence of ideas and to explore layouts, interactions, and data encodings before coding.

* **Web-based Interactive Implementation**: Develop web-based interactive visualizations using technologies appropriate for your team's skill level (e.g., Vega-Lite, D3.js, P5.js, Chart.js, Tableau Public)
* **Technical Tradeoff Analysis and Critique**: Document the tensions between envisioned interactive features and technical implementation constraints, evaluating the tradeoffs between analytical clarity and persuasive storytelling.

**Why this matters (this week and beyond)**: You and your group will discuss the nuances in *how* you present your data: how can we accurately portray the data? How can we persuade or engage users with our data? These skills of ideating, sketching, framing, and critiquing can be applied across datasets and problems. 


## Task

### Overview and Team Structure
Your team will select **one rich dataset** (defined below) and create **two distinct web-hosted interactive visualization experiences**:
1. **The Analytical Dashboard**: At least 3 linked/distinct charts focused on clarity and multi-perspective exploration.
2. **The Persuasive Story/Visualization**: At least 3 charts OR a sophisticated narrative/scrollytelling/multimodal experience focused on impact.

    **Recommended Team Allocation**: Split your team into pairs, with one pair focusing on the Analytical Dashboard and the other on the Persuasive Story. However, *the final design document and FdS process must represent the whole team's efforts*.

### Step-by-Step Instructions
#### Step 1: Select and Audit Your Dataset

Select a clean or semi-clean dataset from repuatable repositories such as [CORGIS](https://corgis-edu.github.io/corgis/) (The Collection of Really Great, Interesting, Situated Datasets), [FiveThirtyEight](https://github.com/fivethirtyeight/data), [Data is Plural newsletter](https://docs.google.com/spreadsheets/d/1wZhPLMCHKJvwOkP4juclhjFgqIY8fQFMemwKL2c64vk/edit?gid=0#gid=0), [Kaggle](https://www.kaggle.com/).

* **Prohibited datasets**: Do **NOT** use over-used tutorial datasets (e.g., IMDB, Les Misérables, Iris, Titanic). If a simple search reveals dozens of student Kaggle projects, pick a different dataset!
* **Synthetic data**: Do **NOT** use synthetic data (i.e., fake data). Make sure you carefully read the data dictionary/README page and check that this data came from a repuatable source. Do you see any "red flag" words in this [example](https://www.kaggle.com/datasets/hamedahmadinia/global-bike-sales-dataset-2013-2023)?

You will need to **describe your dataset** in your write-up, including any **data cleaning you performed**, and **anomalies** you discovered.

#### Step 2: Ideate using the Five Design Sheet (FdS) Framework
Walk through all 5 stages of the [five design-sheet](/teaching/hci/papers/RobertsHeadleandRitsos-FiveDesignSheet.pdf) methodology as a team before writing code:
* **Sheet 1**: Brainstorming and quick ideation
* **Sheets 2, 3, 4**: Intial layout, encoding, and interaction designs for alternative concepts
* **Sheet 5**: Realization sheet (the finalized design plan)
* *Note*: Your team needs **1 set of 5 sheets** total for the project. Be sure to get feedback from classmates during this phase!

**AI Policy 🤖:** You *may NOT* use AI assistants to assist with brainstorming, ideating, or sketching. All of these ideas should be your own. The reason for this is to build your creative muscles and to stretch your design thinking.

#### Step 3: Implement Web-based Interactive Visualizations
Choose tech tools matching your team's technical background:
* **For speed/templating**: [Vega-Lite](https://vega.github.io/vega-lite/), [Chart.js](https://www.chartjs.org/), or [Tableau Public](https://public.tableau.com/app/discover)
* **For expressiveness and audio/pizel control**: [P5.js](https://p5js.org/) or [Vega](https://vega.github.io/vega/)
* **For advanced web customization**: [D3.js](https://d3js.org/) (recommended only if a teammate has web/D3 experience)
        * Labs from CSC 362 Data Visualization to help with learning D3: 
        * [Lab 1](https://docs.google.com/document/d/1ypWcNfwoN3D-5YWMBTEJUH4RmtAI77T54JW4poFa8pg/edit?usp=sharing), [Lab 2](https://docs.google.com/document/d/1y9_b5ST60LEp16HGnZouPXaSucEaOgR7TEjOssTe_GA/edit?usp=sharing), [Lab 3](https://docs.google.com/document/d/1v7c5CHiN7eOs5f-kho7FIhuRS6Vi7f00NPvylK-KM20/edit?usp=sharing), [Lab 4](https://docs.google.com/document/d/16JiwHOUa51tsDi-wZu3YMRkMLqZ0VEWwKhC33tiiLEo/edit?usp=sharing)

**AI Policy 🤖:** You *may* use AI assistants (ChatGPT, Claude, Gemini) to assist with writing JavaScript, debugging code, or formatting JSON specifications. Make sure to discuss any technical trade-offs or pivot points in your write-up! Likewise, you *can choose* to not use AI and *still make cool stuff*. 

Each visualization should be **sufficiently complex**, whether that means including sophisticated storytelling techinques or by including several linked charts. See below for more details. 

* **For Analysis:** You should construct a series of graphs that clearly and effectively communicate the data. The properties of the data should align with your chart choice. Together, your charts (AT LEAST 3 DISTINCT VISUALIZATIONS) should explore the data from different perspectives. For this analysis lens, your final "visualization" should really be more like a *dashboard* of three or more visualizations. For example, [Airline on-time performance](http://square.github.io/crossfilter/) or the [UFO Sightings](https://public.tableau.com/app/profile/amya4869/viz/5-combination/Dashboard1) example. While you may not have the degree of interaction of this demo, the different visualizations gives different perspectives of the same data.

* **For Persuasion:** There are very few guidelines here. I would encourage you to be creative and optimize for impact. Your design here should include *AT LEAST 3* charts **OR** utilize more sophisiticated persuasion techniques (e.g., storytelling techniques). For example, here is a visual/audio interpretation of data created by [Evan Peck](https://evanpeck.github.io/) (note: you need audio, and you may find this upsetting): [15 Years of Mass Shootings in America](/teaching/hci/examples/15-Years-of-Mass-Shootings-in-America/index.html) [(GitHub with the code)](https://github.com/evanpeck/15-Years-of-Mass-Shootings-in-America).

#### Step 4: Host your Visualizations
Host both interactive visualizations on the web so they are publicly accessible and clickable (e.g., via [GitHub pages](https://pages.github.com/) , [Davidson Domains](https://domains.davidson.edu/), Observable Notebooks, or Tableau Public). If hosted privately, ensure Dr. Williams has access and link the private GitHub repository in your report.

#### Step 5: Record a Demo Video & Write the Design Document
Draft a collaborative team [Design Document](/teaching/hci/design-doc) as a Medium blog post (see Hall of Fame examples: [State Academic Performance](https://medium.com/@jekemp_72731/visualising-academic-performance-across-states-in-the-usa-0a1da0a2c2ab), [Air Travel COVID-19](https://medium.com/@nssokada/design-for-understanding-401876c07b2d), or [UFO Case Study](https://medium.com/@bookworm7572/ux-design-and-data-visualisation-a-ufo-case-study-5d3d9fcaa531)).

#### Required Deliverables Checklist:
<input type="checkbox"> <b>Mandatory transparency & citation requirement</b>: *If* your team uses AI in any part of your design sprint, you must include an "AI Usage Statement" section in your Medium Design Document detailing: <br/>
    &emsp;&emsp;<input type="checkbox"> Which tools were used (e.g., ChatGPT-4o, Midjourney v6).<br/>
    &emsp;&emsp;<input type="checkbox">  What tasks they assisted with (e.g., code generation, code refinement and iteration on designs, spelling/grammar check).<br/>
    &emsp;&emsp;<input type="checkbox"> Reflective Critique: Briefly comment on whether the AI output was useful or if it produced design assumptions that your team had to correct.<br/>

<input type="checkbox"> <b>Dataset description</b>: Details on dataset origin, data cleaning steps, anomalies, and how data attributes mapped to visual channels<br/>
<input type="checkbox"> <b>FdS documentation</b>: Images of all 5 sheets with narrative explanation of your ideation process<br/>
<input type="checkbox"> <b>Analytical visualization write-Up</b>: Embedded screenshots and analysis of your 3+ chart dashboard experience<br/>
<input type="checkbox"> <b>Persuasive visualization write-Up</b>: Embedded screenshots and narrative explanation of your persuasive/storytelling design choices<br/>
<input type="checkbox"> <b>Interactive web links</b>: Direct, clickable links to both live web-hosted implementations (or repository links)<br/>
<input type="checkbox"> <b>Embedded demo video</b>: A recorded [demo video](/teaching/hci/design-doc#demo-video) capturing user interaction and animation/sound across both visualizations.<br/>
<input type="checkbox"> <b>Comparative reflection</b>: Explicit discussion on the contrast, tradeoffs, and tensions between analytical communication and persuasive storytelling.<br/>
<input type="checkbox"> <b>Private deliverables</b>:  The following will be shared within our class, not published to Medium<br/>
<ul>
<li><input type="checkbox"> <b>Peer Evaluation</b>: Complete the mandatory [Peer Feedback Form](https://forms.gle/XarVJY1PDa8wvPWy8), including a clear breakdown of team member roles and contributions.<br/></li>
<li><input type="checkbox"> <b>Submission signals</b>: Send a Slack message to all team members when submitted on Moodle (only 1 team member submits on Moodle).<br/></li>
</ul>


### Criteria for Success
Grading is based on the [Design Sprint #2 variation](https://docs.google.com/spreadsheets/d/1oNG4RtXmc_FlgsIMNKd4QcpBmHTbgtlcBRg-NrNok6U/edit?usp=sharing) of the the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing), and [Peer Feedback Form](https://forms.gle/XarVJY1PDa8wvPWy8) evaluations. 

**What High-Quality Work Looks Like**:

**Distinct dual-lens application**: The two deliverables feel genuinely different in intent—the analytical tool promotes neutral, deep exploration, while the persuasive tool effectively uses visual narrative, tone, or interaction to leave a lasting impression.

**Perceptually-grounded visual encodings**: Data channels (color, position, size, shape) are chosen intentionally based on data types (nominal, ordinal, quantitative) rather than arbitrary aesthetic choices.

**Rigorous FdS process evidence**: Clear photos and explanations of all 5 Design Sheets demonstrating genuine ideation before coding.

**Functional interactivity & clear demo**: Web-hosted links allow smooth user interaction, and the embedded demo video clearly showcases interactive features, transitions, or audio.

**Honest reflection on technical tradeoffs**: The design document candidly addresses code challenges, scope adjustments, and lessons learned during implementation (~20% of grade).


<!-- ## Some Tech Tips

# Tips for Vega-Lite

Here's some guidance if this is your first time using Vega.
1. Open up Vega-Lite’s [online editor](https://vega.github.io/editor/#/custom/vega-lite) to work out of. It may load initially with an error -- that's ok. Move to step 2. 
2. Look through the charts and graphs we’re given (found in the **Examples** menu) to see the different possibilities for visualizing data with **Vega-Lite**.
3. In a new window, go through their first two [tutorials](https://vega.github.io/vega-lite/tutorials/getting_started.html) titled “The Data” and “Encoding Data with Marks”. Code along with the tutorial in order to get a better feel for the library. Some helpful tips:
    * The entire code should be wrapped in `{}`.
    * Almost every value you enter must be wrapped in `""`– excludes punctuation and numerical values in the `data: values` field.
    * The `encoding` field is where you’ll enter the bulk of the information about your dataset. Most importantly the x- and y-axis data go here. Learn about the different data types [here](https://vega.github.io/vega-lite/docs/encoding.html#data-type).
    * Create a legend using this [documentation](https://vega.github.io/vega-lite/docs/legend.html).
4. When you’re done going through the tutorial, use the data found in this [csv file](https://github.com/plotly/datasets/blob/master/2014_apple_stock.csv) to create a chart or graph.
    * To use data from an online link, replace `"data": { "values": [..] }`, with
`"data": { "url": "URL", "format": {"type": "TYPE"} }`, where `TYPE` is the type of file used (csv in our case).
When you’re entering the x- and y-axis “fields”, instead of typing a and b you’ll type in the names of the columns you’d like to display the data for. In this example there are only two columns so your x-field would be “AAPL_x” and your y-field would be “AAPL_y”.
5. Once you finish playing around with your chart or feel like you understand how the code works, move on to the next task. -->