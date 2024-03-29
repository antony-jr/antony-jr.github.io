---
author: Antony Jr.
title: ShareMyHost for streaming Movies from my Computer to Kodi
description: "My solution on streaming Movies in my local network to my TV with Kodi."
image: "/blog-posts-assets/2019-11-21.png"
tag: Project
read: 5
---

Streaming anything from one device to another requires a basic network connection. At my home my main computer and my Smart TV
built using a *Raspberry Pi* is connected to my broadband network. So everything at my home is connected by LAN.

I used to use **http-server**(node module) to stream movies from my computer to my Smart TV but it was kind of hard to use and 
was not made for streaming movies. Also I had to frequently change directories and to change to different location to stream different 
content to my Smart TV.

So I looked for some solution for this problem. What I wanted was a software which could create HTTP endpoints to specific locations 
on my computer.

Surprisingly there was no software that follows my description.

I'm Software Engineer so I built the software I needed. Simple as that. It is worthy to note that I'm not a professional software engineer.


I used Mongose server and embeded it into my Qt/QML application **ShareMyHost**. I modified the mongose server source code to use 
http mountpoints.

You can checkout the project at https://github.com/antony-jr/ShareMyHost, If you want to support it please star it.

