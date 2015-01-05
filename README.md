node-webkit-redux-custombuilder
===============================

Here's a simple way to create desktop apps using node webkit, all of the versions of node-webkit are included,
based off v0.11.5 of Node-webkit. There's also a DMG creator script, that you can create on OSX.

I'm still looking for a package manager to create an .EXE file for Windows that I can run on OSX/Linux, if you know of one please
contact me, and the same for Linux.

requirements node, grunt-cli

npm install
sudo npm install -g grunt-cli

Change the app name in package json to whatever you want, it's just there for the example


Deploy Linux32 bit architecture:
===============================

grunt dist-linux32

Deploy Linux 64bit architecture:
===============================

grunt dist-linux64

Deploy Win 32bit architecture:
===============================

grunt dist-win32


Deploy OSX 32bit architecture:
===============================
grunt dist-mac32


Deploy OSX 64bit architecture:
===============================
grunt dist-mac64

Package a mac .DMG file after creating the distro
=================================================

grunt dmg