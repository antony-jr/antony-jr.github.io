---
author: Antony Jr.
title: FreeCAD the most unusual popular open source project in a "Good Way" 💖
description: "If you had worked with any popular open source project, you may know that they are very picky. Except for FreeCAD."
tag: Personal
image: "/blog-posts-assets/2021-01-24.png"
read: 5
---

**Four years** ago I started working on a simple C++ library called **"AppImage Updater Bridge**. This project was a alternative
to the **AppImage Update** library made by the AppImage folks. The upstream project used a lot of legacy code and was tailored for
more vanilla C++ folks and was sort of like a reference implementation. Also they lacked good documentation. But I can't blame
the upstream because they are more focused on the core functionality of AppImages.


My new C++ library was geared towards the **Qt folks**. The goal was to make a Qt plugin which can do the update mechanism with 
less legacy code and make full use of the Qt framework. The software was made to work as a standalone library and a plugin to be 
used with [**Update Deploy Qt**](https://github.com/antony-jr/updatedeployqt).

My main end goal for this piece of software is to use it with [**Update Deploy Qt**](https://github.com/antony-jr/updatedeployqt) which can
give any Qt based Application a nice updater with zero code change and this is programming language independent. This idea was very old 
but still I'm lazy to execute this idea 😅😅😅

**In the past I've tried to ask some Qt folks to try this project if they thought about giving their application which is packaged as 
AppImage a nice updater.**

The first person to adopt is [technic93](https://gitlab.com/technic93)(I have no idea about his real name). He is the author and maintainer 
of [e2designer](https://gitlab.com/technic93/e2designer) which is a **"Skin editor for enigma2"** (I have no idea about enigma2 😆). Go checkout 
his/her project or his/her other works.

There was lot of people, only small open source projects were ready to adopt this. Some say **Open Source is like business**, I think that a lot
of developers think that way that's why when a open source project gets huge they are very picky and would wish for stability over cutting edge.

One such software might be **qTox**, It's a chatting application which is secure. They actually used my library for like 2 weeks, Then they 
just said it lacks **more eyes on the project**(Hmm... in a word stars) so they reverted my changes. And this actually took significant work 
to implement in their application. But I never minded because my end goal was not make the qTox folks use it anyway. I just wanted more users
on board to see if I really did a good job.

**Now let's come to FreeCAD.**

Quoting from Wikipedia, *"FreeCAD is a free and open-source (under the LGPLv2+ license) general-purpose parametric 3D computer-aided design (CAD) modeler and a building information modeling (BIM) software with finite element method (FEM) support"*.

So you get the idea. In simple words it's a 3D modeler and open source alternative for other Computer Aided Design softwares which costs a lot.

Recently I've talked to some FreeCAD users and developers. They all seem like nice folks. The community is huge and diverse that they don't put
all the work on a single person like what some open source projects do.

The author of the AppImage project itself opened a issue on FreeCAD for a self-update from FreeCAD itself. See this [issue](https://github.com/FreeCAD/FreeCAD-AppImage/issues/27) for the entire conversation.
One user with the handle [luzpaz](https://github.com/luzpaz) also insisted FreeCAD.

Finally everything was in place because of [Lorenz Lechner](https://looooo.github.io/mini-blog/), one of the core contributors to FreeCAD who helped to setup everything and make a alpha release.

I was actually not expecting much response from this improvement because you know there is the official update tools and stuff so why would anyone 
use the inbuilt updater.

But I was wrong because **FreeCAD is a unusual popular open source project because they listen to every single member of the community.** 
And they are not very picky like other popular projects. They are simple.


And on October 14th 2020 they tweeted about this new feature,

```tweet
1316351710609235972
```

I hope every popular open source project listen to the community and not just force something to them. **Forcing something in open source is not 
really good. Firefox does it and Gnome does it. They are the fastest way to kill a project.**


Thanks for taking your time to read this post.
