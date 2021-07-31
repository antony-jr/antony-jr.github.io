---
image: "/project-assets/qarchive.png"
imageWidth: "300px"
title: QArchive
url: https://antony-jr.github.io/QArchive
github: https://github.com/antony-jr/QArchive
description: "Async C++ Cross-Platform library that modernizes libarchive using Qt5 🚀. Simply extracts 7z hamburger, Tarballs 🎱 and other supported formats by libarchive. 💖"
---


QArchive is a cross-platform C++ library that modernizes libarchive , This library helps you to extract and compress 
archives supported by libarchive. The whole library itself is crafted to work perfectly well with the 
Qt event loop and thus its a perfect fit for your Qt projects.

I personally made this project to extract .7z archives in order to create a library that can update Qt Apps installed via
Qt Installer Framework without using the updater tool provided by Qt , because I hated using sub-process and besides
I wanted a in-built updater for my application and that's not possible with the already provided updater from 
Qt Installer Framework.

## Features

* *Single threaded and Non-Blocking API* - Using Qt's Event Loop. (**you can optionally run in a different thread**)

* *Easy to Use API* - Made some effort to match Qt's style.

* *Cyclic API , No use of mutex* - The whole library is fully cyclic and therefore no mutex is used.(Only signals and slots.)

* *Drink the Qt Kool-aid* - In a positive way.


# Getting Started

Learn more about **QArchive** at the official [documentation](https://antony-jr.github.io/QArchive).


## Conan

*Thanks to [Eric Riff](https://github.com/ericriff)*.

Starting from version **2.0.1** QArchive is available on the [Conan C/C++ package manager](https://conan.io/), which means you can download prebuilt packages for all major platforms (Windows, Linux, macOS, etc).

Find an example on how to consume Conan's precompiled packages in the examples folder.


# Thank You ![Thank You](https://img.shields.io/badge/Always-Say%20Thank%20You!-blue.svg?style=flat-square)

I really need to thank the developers of these libraries for creating it because QArchive is elegant because of them! :heart:   

* [libarchive](https://github.com/libarchive/libarchive)
* [Qt](https://github.com/qt)



# Support

If you think that this project is **cool** then you can give it a :star: or :fork_and_knife: it if you want to improve it with me. I really :heart: stars though!   


# License

The BSD 3-clause "New" or "Revised" License.

Copyright (C) 2017-present, QArchive Contributors and Antony J.R

All Rights Reserved.

