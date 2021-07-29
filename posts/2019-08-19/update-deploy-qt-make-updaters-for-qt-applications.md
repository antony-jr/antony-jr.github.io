---
author: Antony Jr.
title: "Update Deploy Qt: Making updaters for Qt Application with a single command"
description: "Future plans for Update Deploy Qt, A project that aims to make updater for Qt Application with less code as possible, ideally with a single command"
image: "/blog-posts-assets/2019-08-19.png"
tag: Dev Tools
read: 5
---

This project was tought a very long time ago. I actually thought of using simple *subprocess* to achive this but eventually got a hack to 
do this without using *subprocess* by directly injecting code into the application's memory and execution cycle(I will talk about this in 
this post).

Initially I had planned to support the following distribution methods but changed it along the way,

   * Qt Installer Framework and
   * Github Releases


For these two distribution methods I created the below two projects,
   
   * QPluginInstaller (https://github.com/antony-jr/QInstallerBridge)
   * GHReleasesBridge (Deleted the Repo)

So after having the entire project at alpha stage, I suggested it to a AppImage developer to use it as their solution for
updating their AppImages. But the guys at AppImage said that they needed the Zsync algorithm's way of updating and not my
distribution methods. 

So Now that there is some users who want this, I thought I might need to implement this in the future anyway so I started working 
on the bridge **for updating AppImages using the Zsync Algorithm**. After finishing that I created the beta version of 
updatedeployqt. 

It initially gained support from some Qt projects. But some were skeptical because there were less stars on the project.

If you want to support the project then please star it at https://github.com/antony-jr/updatedeployqt


![issue](/blog-posts-assets/updatedeployqtissue.png)

**I have put the project on pause because the code injection did not seem to work well Qt/QML projects. But Now I've finally discovered
on how to do that but I'm really really lazy on implementing it.**

### Note About Code Injection

Similar to Games, Qt uses a plugin system which loads shared libraries on runtime. One such shared library is Qt's basic core plugin for
each platform. I recompiled that specific plugin with my custom code to load my bridges according to the configuration given in json
format by the user. Now when a Qt Application is deployed the actual Qt core plugin is replaced with my mod Qt core plugin.

This gives my bridges to execute within the target program's memory.

### Conclusion

I'm really planning to revive this project as soon as possible but a lot of things are more important in life than some hobby 
project, So hopefully in the near future(maybe 2023 or 2024) the project might be in stable release. 
