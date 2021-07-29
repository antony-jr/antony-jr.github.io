---
image: "/project-assets/sharemyhost.png"
title: Share My Host
github: https://github.com/antony-jr/ShareMyHost
description: "Qt/QML C++ application that can make file sharing easy as possible. Primarily built to stream videos to Kodi or a Smart TV."
---


**ShareMyHost** is a simple and powerful program written in C++/QML using Google's material 
design guidelines. It gives a *very simple http server for sharing file(s) within your
local network*. It uses **mount points** which are sort of like http endpoints with directory
listing to specific directories in your file system.

For example, You create a **Mount Point**(say /Animes to /home/user/Anime) then you can access
the directory listing and all its files at ```http://ip:port/Animes``` (Ex: http://192.168.1.3:8080/Animes).


[Get Binaries from Releases](https://github.com/antony-jr/ShareMyHost/releases)


## Features


* *Easy to Use* - This program is specifically built for ease of use.

* *Support for Kodi HTTP Client* - The best of my knowledge, this is the only application which supports listing of files in kodi 
  from the mount points.

* *Directory Listing by Default* - No need to fight with permissions in linux.

* *Automatic Permission Managemnt* - No need to worry about who owns what.

* *Mongoose Server as Backend* - Uses a trusted Web Server.

* *Material Design* - Built using QML with Material Style.


# Support 

If you think that this project is **cool** then you can give it a :star: or :fork_and_knife: it if you want to improve it with me. I really :heart: stars though!   

You can also tweet about me on twitter , get connected with me [@antonyjr0](https://twitter.com/antonyjr0)

Thank You! :smiley_cat:

# Icons

All icons used in this program has been made by [Icons8](https://icons8.com). 

# Mongoose Server Usage

This program uses the mongoose server for serving contents, Since it's in GPLV2 this program is also under 
GPLV2 to comply with the license. 

The source of mongoose server has been heavily modified to our specific use case, such as the usage with
mount points. Therefore for updating the mongoose server code, we must be careful not to remove the 
modified code. *All modification to the code is mentioned in the top of source files.*


# License

The GNU General Public License V2.

Copyright (C) Antony Jr.

