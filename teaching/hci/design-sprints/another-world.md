---

layout: course
course: CSC 363 HCI
course-url: /teaching/hci
title: Design Sprint 3
description: Design for Another World
permalink: /teaching/hci/design-sprints/another-world
---

# Design for Another World

* Group size: Teams of 3-4
* Design sprint starts: Wednesday, October 15, in class.
* Design sprint ends: Monday, November 3, in class (demo). [Design document](/teaching/hci/design-doc) due at *11:55 PM*. 

## Overview 

In this design sprint, we will be **exploring virtual reality to consider what it will be like when computation can transport us to another place**. Transport someone to a real location, inside a game, among abstract art… whatever you think would be interesting, immersive, and compelling!

That’s it. Keep in mind that the lack of parameters in this project does not mean that the design your project should not be appropriately scoped. It is your job to define the parameters of your project. You pick your objective, you decide how to design for it, you decide what to build. Be sure that you communicate all of these assumptions in your blog post.

A couple of quick pointers before you start:
* **Be sure to articulate your design goal EARLY.** Without an objective for your design, much of your process will be unguided. When I look at your output, I will consider them *within the context of your design goal*. If your goal is to provide a sense of awe or provoke reflection or make someone feel like they are truly in another physical place… any of that is fine. The key is that you articulate your goal and make design decisions that align with that objective. The execution of your project will be evaluated against those goals.
* **Consider what will make your design feel immersive.** This is your primary challenge, and it’s worth thinking beyond visual channels. How could audio enhance your design?
* **Careful with interaction.** Because of time and hardware limitations (you’ll likely be using [A-Frame](https://aframe.io/) or [Unity](https://unity.com/) + [Google cardboard](https://vr.google.com/cardboard/) or a comparable VR viewer), consider what input mechanisms you may even have available to you before getting too deep into the development. If you have experience with it or want to dive in, you may prefer to use Unity, although A-Frame can be a bit easier to learn.
* **Design ambitiously.** Learning to develop with new technologies is hard -- but rapid prototyping for design is important, so try your best. All of these cautions aside, I would *much* rather see a buggy implementation of an ambitious design than a fully operational implementation of a "safe" design. Take chances, and if the implementation doesn't work out, *that's ok*.

You can view some previous [Hall of Fame examples](../hall-of-fame.md) from our class. Here are some additional ideas from Emory: [Chinese New Year Story](https://medium.com/@kathy.ning7/design-for-another-world-vr-storytelling-2627da71af6f), [VR Art Gallery](https://medium.com/@yuton.hsu/walking-into-paintings-a-vr-gallery-c3f6a64eaca0). Finally, another example from Bucknell: [Bucknell 2100](https://medium.com/bucknell-hci/bucknell-2100-design-for-another-world-d452e9f2df7f). 

## Technology

**VR Viewers:** I have purchased several [Google Cardboard](https://www.youtube.com/watch?v=SxAj2lyX4oU) viewers for us to use. If you haven't used this before, you essentially can insert your phone into a low-cost VR viewer. It uses a binocular viewing port (two separate lenses) that can simulate depth in a virtual scene. Strapped to your face, the viewer uses your phone's gyroscope to track your movements and allow you to move around a scene. To use it, visit your VR scene in the web browser on your phone, then insert your phone in the viewer. Check out some of the [apps that have been developed for Google Cardboard](https://play.google.com/store/search?q=cardboard+apps&c=apps&hl=en_US&pli=1) for some ideas of what is possible.

**Unity:** [Unity](https://unity.com/) is a development platform and game engine for AR and VR. It relies primarily on coding in C#. Find [resources](https://learn.unity.com/) on the web to get started.

**A-Frame:** [A-Frame](https://aframe.io/) is a simple, web-based design platform that uses HTML to create VR scenes. In addition, a companion website - [Glitch](https://glitch.com/) - provides a fantastic web-based development environment that will allow you to see your code + output simultaneously. Although the building blocks of A-Frame are basic, don’t underestimate its powerful potential. This is a good option if you prefer a "coding-lite" approach. Before you start, check out all of the [interesting work](https://aframe.io/blog/) people in the A-Frame community are up to. You need not use A-Frame. If your group is familiar with an alternative (Unity, etc.), feel free to use that instead.


## Deliverables

* As always: Your group's design reflection as a blog post on Medium. **You WILL need a demo video.** Follow the guidelines in the [Design Doc](/teaching/hci/design-doc) explanation
* Your VR experience should be publicly accessible so that others can visit it (if approved by all group members). **If it's public, then you need to include this link in your design doc.** It’s fine if this is a link from Glitch (which is probably the easiest place to develop your work).
    * The VR experience link may break over time or the libraries used may get out of date. **This is why we make a video: the video link should stay stable over time.** Also, it's more likely that a reader's browser would support a video than a graphics-intensive VR environment.
* One group member should submit the Medium link on Moodle. *Be sure to notify all of your group members once you have submitted the post!*

**Grading:** Grading will be based on the [design rubric](https://docs.google.com/spreadsheets/d/1aI9LcmVZmh_977G__U4Guz_rPRCwWZs26J_yHXbhSyY/edit?usp=sharing). Be sure to complete the [peer feedback form](https://forms.gle/GFQhygcpcVjDVhzy7) linked
at the end of the [design document guide](/teaching/hci/design-doc), which will be a large part of your grade. 

-----

## Some Technical Hints: Using A-Frame
Should you choose to use A-Frame, here are some tips compiled from around the internet and HCI students from Emory. Some of the information may be out of date since they had a significant update in recent history.

There are a number of resources to get you up to speed - [A-Frame school](https://aframe.io/aframe-school/#/), and there are of course various other tutorials blog posts if you simply Google "A-Frame".

* A helpful [YouTube playlist](https://www.youtube.com/playlist?list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84) on the basics of A-Frame
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