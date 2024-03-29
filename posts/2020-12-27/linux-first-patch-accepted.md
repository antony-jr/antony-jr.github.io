---
author: Antony Jr.
title: 🥳 My first patch got accepted into the Linux Kernel 🥳
description: "My first patch to the Linux Kernel recently got merged into the upstream."
tag: Personal
image: "/blog-posts-assets/2020-12-27.png"
imageCopyright: Kernel.org
read: 2
---

I don't know about you but contributing to the Linux Kernel was my long time goal. Actually I do not wish to be 
a one time contributor but a life long one. Just for the kicks.

In the last quater of 2020 I got myself involved with the **postmarketOS** folks who aim to mainline mobile phones so
**the mainline kernel** can run on phones. 

You see typically android phones use a very old linux kernel version which is heavily modified by the vendor.
This means you are at the mercy of your vendor and the moment the vendor stops software updates your phone can't
get latest security fixes and new features. The only way to tackle this is to mainline everything the vendor did
not mainline. This means fixing the poor code they written and making them pass the reviews from the maintainer.

**This is extreamly painful job. You have to port drivers and device tree for your phone.**

I mainlined my old **ASUS Zenfone 2 Laser** phone which was stuck in Linux Kernel 3.10.x, Now it runs the latest mainline 
kernel, at the time of writing it is **5.11-rc4**.

But I have to say that the folks at **postmarketOS** really helped a lot. If you want to explore something amazing then
try mainlining your phone too. It's a very good experience.

I sent the initial device tree for my device to maintainer of the Qualcomm groups tree of linux and it got accepted 
and was merged into the upstream after two weeks. I actually watered down a lot of story because I'm too lazy to write
all of it. 

![Kernel Commit Log](/blog-posts-assets/2020-12-27.png)


**It's very exciting to see my name along with the great "Linus Torvalds", I just wish I can get to a position where I could 
argue with him someday.** 😊😊😊

Thanks for reading.


