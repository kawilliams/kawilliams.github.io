---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Design Sprint 2
description: Design for Understanding
permalink: /teaching/hci/design-sprints/understanding
---

# Design for Understanding

* Group size: Teams of 3-4
* Design sprint starts: Wednesday, August 30, in class.
* Design sprint ends: Wednesday, September 13, in class (demo). Design document due at *11:55 PM*. 

## Overview 

Mapping data to visual features is a powerful method for communicating information by leveraging the rapid perceptual pathways in our brain. In this design sprint, you will use visual methods to communicate data - but for different end goals. Your job is to use two different lenses to approach the same dataset:
* **Analysis, clear communication, and reasoning**: In this framing, you can assume that you have the user’s attention and that they do not need training in traditional charts. Use your knowledge of perception + data representation to construct a series of graphs that give an in-depth, unbiased, clear portrait of your data.
* **Persuasive communication and storytelling:** In this framing, your goal is to represent the data (visually, through audio, through interaction) in the most *compelling* way possible. What will have the most long-lasting impact on users? What will they *remember*?

Since you’ll be working in teams of four (4) for this project, I recommend that you split your team into pairs. However, depending on your design, you may choose to allocate your resources in the way you see best.


## Choose a Dataset

Before you begin, choose a dataset. While you may use any dataset, be aware that cleaning the datasets into a usable format can be a major headache. You can use any dataset that you find online. Here are a few good starting points.
* [CORGIS](https://think.cs.vt.edu/corgis/) (The Collection of Really Great, Interesting, Situated Datasets): cleaned, well-organized datasets that should be very simple to load into your program.
* [Datasets underlying FiveThirtyEight stories](https://github.com/fivethirtyeight/data): Mostly cleaned, but may come in different formats.
* [Data is Plural newsletter](https://docs.google.com/spreadsheets/d/1wZhPLMCHKJvwOkP4juclhjFgqIY8fQFMemwKL2c64vk/edit?gid=0#gid=0): fascinating datasets, but may not be cleaned/curated.
* [Kaggle](https://www.kaggle.com/): geared toward machine learning use cases, but cleaned and usually well-tested.


## Your Technology

Both logical reasoning and persuasive storytelling are valuable perspectives for communicating information, and there are tradeoffs. To help match your tools with your objectives, here are some possible tools.

* [d3js](https://d3js.org/): Probably the most popular data visualization library that is both powerful and flexible. However, it also has a steep learning curve - especially for people who are not comfortable with Javascript and web programming. Given the very short timelines of our projects, I would only go this route if you have someone very skilled in web development or who has taken Data Visualization on your team.

* [Vega](https://vega.github.io/vega/) or [Vega-Lite](https://vega.github.io/vega-lite/): These are both templating tools that sit on top of the d3js visualization library. While they are less expressive than d3js, they will allow you to rapidly (hopefully) construct data visualizations. Vega will allow you to be a little more creative and integrate interaction (recommended).

* [Chart.js](https://www.chartjs.org/): a Javascript library that supports easy creation of basic chart types. This will limit your flexibility, but if you want to use basic charts, it’s a quick way to get rolling.

* [P5js](https://p5js.org/): p5js is an expressive, accessible Javascript library that enables pixel-level control. While it is more difficult to construct basic charts than Vega or Vega-Lite, it empowers more creative interpretations of data that are either more abstract or that incorporate sound.

* [Tableau Public](https://docs.google.com/a/bucknell.edu/document/d/1JStkKuQePhXsmMWd1JR30zPG723nJMYpGtW5s8lJZzM/edit?usp=drive_web): heavily used in business intelligence, this is the free version that can connect to a spreadsheet/file to create data visualizations for the web.

## Your Two Visualizations

* **For Analysis:** You should construct a series of graphs that clearly and effectively communicate the data. The properties of the data should align with your chart choice. Together, your charts (AT LEAST 3) should explore the data from different perspectives. For example, [Airline on-time performance](http://square.github.io/crossfilter/). While you may not have the degree of interaction of this demo, note how it gives different perspectives of the same data.

* **For Persuasion:** There are very few guidelines here. I would encourage you to be creative and optimize for impact. Your design here should include *AT LEAST 3* charts **OR** utilize more sophisiticated persuasion techniques (e.g., storytelling techniques). For example, here is a visual/audio interpretation of data created by [Evan Peck](https://evanpeck.github.io/) (note: you need audio): [15 Years of Mass Shootings in America](https://github.com/evanpeck/15-Years-of-Mass-Shootings-in-America).

## Your Design Process
Before you got to this class, you should have read about the five design-sheet (FdS) approach for information visualization. You should walk through all five stages of FdS. Make sure to get feedback from other students in the class as part of your design process!

>
*Over the course of the semester, I am going to give fewer and fewer detailed instructions about how to run your design process. This is intentional! As we become more familiar with it, I expect you to be able to apply it yourself to any new technological domain.*
>

## Build it.

Just build it. You may use AI (like ChatGPT, Claude, or Gemini) to assist with writing the code. Note that you may run into tensions between your imagined visualization and the one that you have time to create. That’s okay! Technical tradeoffs are a reality that any designer must encounter. Adjust your design (as needed), and be sure to discuss these tradeoffs in your design document.

## Deliverables

* As always: Your group's design reflection as a blog post. Be sure to discuss both portraits, including the full project context as well as the scope of your specific contributions. **You WILL need a demo video that captures the interactivity in the visualizations.** Be sure to reflect on the contrast between the two ways you have chosen to communicate your data. There are certainly tradeoffs between the two.
* Both of your designs should be hosted on the web at publicly accessible links. That may be a standalone site that hosts your interactive visualization, or an Observable notebook link for example. Essentially, we should be able to click around and interact with your designs. These links should be clearly included into your design reflection.
* Post the link of each blog post along with the names of your group members on our Slack channel for `#group_design_projects` **and** one group member should submit the link on Moodle.

**Grading:** Grading will be based on the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing). Be sure to complete the peer feedback forms linked
at the enf of the [design document guide](/teaching/hci/design-doc), which will be a large part of your grade. 

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