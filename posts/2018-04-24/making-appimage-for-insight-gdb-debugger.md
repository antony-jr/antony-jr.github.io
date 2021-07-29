---
author: Antony Jr.
title: Making AppImage for Insight GDB Debugger for Reading a Book on Assembly
description: "How I made an AppImage for Insight GDB Debugger for finishing Step by Step Assembly Book by Jeff Duntemann"
image: "/blog-posts-assets/2018-04-24.png"
imageCopyright: Redhat
tag: AppImage
read: 10
---

For a long time I really wanted to study Assembly, just because I like to be close to metal. While some think
that abstraction is the key, I perceive things a bit differently. I like abstraction but with atomic understanding about what is being 
abstracted. Like how we study about atoms but we abstract it away when we speak about logic gates.

Like atoms, I really wanted to understand how raw instructions are written and linked.

So for the basics I bought "Step by Step Assembly" by Jeff Duntemann from Amazon. The book arrived soon enough for me to get
started.

I was already a decent software engineer(I hope). So the book was not that hard for me. For the first week I was just reading 
everything, I was not really trying anything out, Because I'm really lazy.

So one fine day I thought I would give a try on the exercises to test my understanding on the study. As the book stated, it requested
me to install Ubuntu and then install the packages Kate and Insight GDB Debugger.

I was using Arch linux with KDE Plasma back then(still I'm using the same distro and DE). So Kate was already installed.
As for Insight, I searched the Arch linux official repo and with no avail I did not find anything about it. 
This was not something I've never experienced since Arch linux is kind of make it work yourself. 
So I tried to compile Insight from source but the problem is that it depends on very old software that is 
only available in old ubuntu releases.

So the first thing I thought was compiling this from **Travis-CI**. If you are not familiar with *Travis-CI*, it is a 
continuous integration SaaS(Software as a Service) that is **free for open source projects**.
*Travis-CI* has support for multiple distros and even the old ubuntu stable releases.

My choice was to use *Ubuntu Trusty Thar* in *Travis-CI*. 


Now comes the packaging for the compiled binaries, My first choice is of course **AppImages**. AppImage is perfect for this use case because
we need to support execution of this binary on most linux distros.

The hard part was trianging the dependencies of the binaries that was not caught by the ```ldd``` command.

### Learning Tcl/Tk

If you are not familiar with it, it's a programming language used to describe graphical user interface for the Tkinter library.
Tkinter library is really good(and really old), I've used in the past, like 5 years ago.

I needed to learn some Tcl to search for Insight's(TCL/Tk) libraries dynamically at runtime. My main patch is only a few lines which 
fixes this issue. Without this fix you will not be able to run Insight even if you compile it yourself(unless you put the required tcl files 
at a static location).


### Victory after a lot of spam mails from Travis-CI

Finally I was able to download the AppImage from my github releases and try it out. It ran without any trouble this time. But I have 
to admit, It was more fun doing this project than reading the book itself. Because the time spent on this will benefit someone 
atleast.

You can checkout the project at https://github.com/antony-jr/insight

### Reaching out to the Author

I tweeted my AppImage to the Author(*Jeff Duntemann*) as he gave a post on his official website on some hard workarounds for the insight 
problem. What is the point in solving a problem if no one is going to use it?

```tweet
989128614137315333
```

He replied very soon indeed, and he even tweeted about that to some.

```tweet
996603976010186752
```

# Conclusion

In the end it was fun learning Assembly. I think everyone should learn Assembly before calling themselves a computer wiz.
