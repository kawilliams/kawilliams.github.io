---
name: atria
layout: research-page
title: Visualizing a Moving Target ("Atria")
thumbnail: ./img/movingtarget.png
this_pdf: ./papers/williams_vis2019.pdf
---

#### Atria is a multi-view execution graph visualization that I built for the Phylanx project. The story of how we created this visualization, in spite of pitfalls, is in our "Visualizing a Moving Target" paper. The visualization was subsequently used by our HPC collaborators for work in two other papers. 

![The full Atria visualization, with an expression graph, code view, and list of nodes ranked from slowest to fastest.](/research/img/atria.png)

*Abstract:* Common pitfalls in visualization projects include lack of data availability and the domain users’ needs and focus changing too rapidly for the design process to complete. While it is often prudent to avoid such projects, we argue it can be beneficial to engage them in some cases as the visualization process can help refine data collection, solving a “chicken and egg” problem of having the data and tools to analyze it. We found this to be the case in the domain of task parallel computing where such data and tooling is an open area of research. Despite these hurdles, we conducted a design study. Through a tightly-coupled iterative design process, we built Atria, a multi-view execution graph visualization to support performance analysis. Atria simplifies the initial representation of the execution graph by aggregating nodes as related to their line of code. We deployed Atria on multiple platforms, some requiring design alteration. We describe how we adapted the design study methodology to the “moving target” of both the data and the domain experts’ concerns and how this movement kept both the visualization and programming project healthy. We reflect on our process and discuss what factors allow the project to be successful in the presence of changing data and user needs.



## Papers
K. Williams, A. Bigelow and K. Isaacs, "[Visualizing a Moving Target: A Design Study on Task Parallel Programs in the Presence of Evolving Data and Concerns](/research/papers/williams_vis2019.pdf)," in IEEE Transactions on Visualization and Computer Graphics, vol. 26, no. 1, pp. 1118-1128, Jan. 2020, doi: 10.1109/TVCG.2019.2934285.
* [Supplemental material](/research/papers/atria/supplemental.pdf) (PDF)
* [Written artifact example](/research/papers/atria/written-artifact.txt)
* [Video](https://vimeo.com/370668837) (from InfoVis 2019)


