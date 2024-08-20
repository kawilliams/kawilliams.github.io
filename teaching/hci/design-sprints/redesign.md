---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Design Sprint 4
description: Re-design and Extend
permalink: /teaching/hci/design-sprints/redesign
---

# Re-design and Extend

* Group size: Teams of 3-4
* Design sprint starts: Wednesday, August 30, in class.
* Design sprint ends: Wednesday, September 13, in class (demo). Design document due at *11:55 PM*. 

## Overview 

In this design sprint, we will revisit one of the previous design sprints. Which project we revisit will be determined by students voting in a survey. This page will be updated once the votes are in. This project will involve a few components.


### Evaluate

You should begin by evaluating your previous design. You will first need to decide what your evaluation criteria are: what is important to assess about your design (learnability, accessibility, utility, ...)? How can you operationalize the measurement of this criteria? Revisit our lecture resources for evaluation methodologies (cognitive walkthrough, heuristic evaluation, usability study, etc) and decide if one of these is fitting for your evaluation goals. A good framework for thinking about this can be found in [Research Contributions in Human-Computer Interaction](http://faculty.washington.edu/wobbrock/pubs/interactions-16.pdf) by Jacob Wobbrock and Julie Kientz.

Your evaluation likely involves human subjects. Feel free to reach out to friends and classmates or other potential users of your target audience. That means you should *make yourself available* to your classmates to participate in their evaluations. You will likely need them to participate in yours as well. Some of this can be achieved during our hack day. Some of it will likely need to take place outside of class.

By this point in the semester, your group should be able to make informed and carefully rationalized decisions about the task, target user group, number of participants, conditions, and other details of the experimental design. You will need to justify these choices in your blog posts.

**When in doubt, run your evaluation ideas by me.**

### Iterate

Next, reflect deeply on your evaluation results. How can you use what you learned to inform the next iteration of your design? You will want to describe this reflection in your blog post and go on to implement these changes in your design. That means you will have a new prototype that reflects these design changes.

### Extend

In the final part of this project, you will be expanding on your previous design using a new prototying modality: physical prototyping. You can find some examples [here](https://stephaniebaione.com/work/physical-prototyping).

How you choose to extend your previous project can take many forms, entirely up to your group. Be sure to clearly state your goals. Depending on which project you are extending, some examples you might consider are re-designing a wearable biosensor to collect additional health data, an accessible [data physicalization](http://yvonnejansen.me/dataphys) experience, a integrating tangible objects in a virtual reality art viewer, etc. You should show evidence of iteration in your physical prototying as well. Check out this [article on low-fidelity prototyping](https://www.smashingmagazine.com/2014/10/the-skeptics-guide-to-low-fidelity-prototyping/) for guidance.


#### Tools

For this project, you will have access to tools and materials through [Studio M](https://www.davidson.edu/academic-departments/digital-studies/facilities) (in room B260 in the south basement of Chambers, by Wall). Studio M has 3D printers, laser engravers, VR simulators, vinyl cutters, shirt presses, and various other tools. You also can access the [DACE Studio](https://www.davidson.edu/offices-and-services/arts-creative-engagement/dace-studio) (in the north basement of Chambers, by the flagpole). They have materials ranging from sewing machines, knitting machine, yarn and string, embroidery tools, paints, coloring utensils, paper, canvas, etc. You may also choose to use materials you find at home around the house (cardboard, plastic bottles, old tshirts, etc).

### Re-evaluate

Now, given your new physical prototype, your group should design and execute a preliminary evaluation of this extension. Refer back to slides on Experience Prototyping, Heuristic Evaluation, Usability Studies, etc. This evaluation will gather preliminary feedback, but it should include well-informed and justified experimental design decisions.


## Deliverables

* As always: Your group's design reflection as a blog post. **You WILL need a demo video.** 
* Your VR experience should be publicly accessible so that others can visit it. **Include this link in your design doc.** 
* Post the link of each blog post along with the names of your group members on our Slack channel for `#group_design_projects` **and** one group member should submit the link on Moodle.

**Grading:** Grading will be based on the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing). 
* Be sure to complete the peer feedback forms linked at the end of the [design document guide](/teaching/hci/design-doc), which will be a large part of your grade. 

-----

## Some Technical Hints: Using A-Frame
Should you choose to use A-Frame, here are some tips compiled from around the internet and HCI students from Emory. Some of the information may be out of date since they had a significant update in recent history.

There are a number of resources to get you up to speed - [A-Frame school](https://aframe.io/aframe-school/#/), and there are of course various other tutorials blog posts if you simply Google "A-Frame".

* A helpful [Youtube playlist](https://www.youtube.com/playlist?list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84) on the basics of A-Frame
* A-Frame documentation on [3D models](https://aframe.io/docs/1.6.0/introduction/)
* A curated collection of [A-Frame components](https://aframe.io/aframe-registry/), so you don't need to code everything from scratch
* A cool [speech command component](https://www.npmjs.com/package/aframe-speech-command-component) to make your VR experience more immersive

A final word of caution: You may want to avoid rendering a lot of animated 3D avatars into A-Frame because the more assets imported, the laggier the experience.

Here are some [additional tips](https://medium.com/@Songary/technical-tips-for-designing-in-a-frame-6d705a2dd7a9) from Gary Song (Emory HCI student, spring 2023).


### Getting Familiar with A-Frame

*Some tips from Gabbi LaBorwit (Bucknell ‘20).*

1. Take a few minutes to play with the examples provided on A-Frame’s [home page](https://aframe.io/examples/showcase/helloworld/).
2. Once you’ve looked around, go to the first example called “**Hello WebVR**” and click “**Visual Inspector**” in the top right-hand corner. Two boxes should pop up containing the source code and each HTML element’s properties.
3. In the leftmost box outlining the source code, click the second line that reads `<a-box...>`. Now the rightmost box shows the blue cube’s design properties. Edit the position field and hit enter to see how it affects the scene. Play with the other elements/properties as well to get a feel for the code.

### Remixing A-Frame on Glitch
1. Read the first half of the “[Getting Started](https://aframe.io/docs/0.5.0/introduction/#getting-started)” instructions and click the link provided to remix the starter example. When a box appears with 3 options, select “Remix your own” and sign in to your Github account from the button in the top-right corner.

2. Back on the Glitch web-editor go to `index.html` and click “Preview” in the bottom row of buttons to view what you have so far. Now go back and “remix” the code to make it your own.
    * Note: There’s no need to constantly refresh the page, it automatically updates itself and saves the code in the Preview.

3. In the top-left corner click the drop-down menu with your glitch username and select “Remix This”. Replace the code in `index.html` with the following basic template:

```html
<html>
    <head>
        <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    </head>
    <body>
        <a-scene>
            <!-- Your code here -->
        </a-scene>
    </body>
</html>
```

#### Some tips
* You can use this [tutorial](https://aframe.io/docs/0.5.0/guides/building-a-basic-scene.html) to build a basic scene and go from there, too.
* Scroll down the left-sidebar on the [documentation](https://aframe.io/docs/0.5.0/introduction/) page to find a bunch of tutorials for animations, sound, and more.
Some cool animations to play with.
* To take your own 360º picture, download the free app on an iPhone called “360 Panorama” by Occipital, Inc (or any other comparable 360º photo app) and send yourself the photo to get it on your computer.
* Interacting with objects: If you want to be able to click on objects or do things when you look at an object, look at this [tutorial](https://www.youtube.com/watch?v=yM89f0GLzB0) on youtube as well as the [code](https://github.com/SonarSystems/A-Frame-WebVR-Tutorials/blob/master/%5B6%5D%20Interacting%20With%20Objects/index.html) that comes with it.