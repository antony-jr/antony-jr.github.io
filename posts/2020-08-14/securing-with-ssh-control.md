---
author: Antony Jr.
title: Securing my Cloud Instance with SSH Control
description: "My take on using my self-made software solution for securing my Cloud Instance"
tag: Security
read: 2
---

As you may know, I recently got my cloud instance from Hetzner. The overall security at Hetzner is well made but there is no 
2FA with SMS at Hetzner because of some security hole in SMS based 2FA. 

Hetzner do provide 2FA with Yubikey(Around $2000) which costs a fortune for poor souls like me. But there is also 2FA with 
**Google Authenticator** or **TOTP** app which can be installed in any Android Phone with zero cost(For TOTP you have pay a extra fee 
to backup your keys). But I don't use Android Phone and I'm pretty sure I will not be using it in the foreseeable future. 
Also **Google Authenticator is not cloud based so if you lose your phone or if it is broken, Forever you are locked out of your account**.

So until some TOTP based app is open source and free, I think I will have to wait.

Now the Cloud Dashboard is not the only area you need to secure when hosting a server. There is also **SSH Server**.
If someone has your server's IP address they can easily do a brute force attact on your **SSH** login. There are some ways to 
mitigate this, like you can use Public Key Crypto and avoid password logins. But still there is a chance someone can overload your SSH server.

So to avoid this I was searching for some kind of a switch that can securely turn SSH Server **ON** or **OFF** on my remote server. The 
result of that was **SSH Control**. It is simple and powerful *Python/Flask* application which can trun ON or OFF your SSH Server remotely 
using your **GPG Private Key** as authentication.

For more information please check out the project at https://github.com/antony-jr/ssh-control


In my opinion SSH Control is very secure, I even use it for my cloud instance, When your SSH Server is off, there is no way someone can 
get access to your server even if they have your SSH Private Key. But if they do get their hands on your GPG and SSH Private Key then
there is no saving you. That's why you should keep your GPG Private Key in paper prints and not store on any cloud server. Know more about this 
[here](https://en.wikipedia.org/wiki/Paper_key).


If you want to test the security level of my SSH Control program you can try to crack it at ```https://api.antonyjr.in/SSHControl```, if you 
do manage to crack it, I hope you would open a issue at my project page at https://github.com/antony-jr/ssh-control

I think SSH Control might be useful for you too.
