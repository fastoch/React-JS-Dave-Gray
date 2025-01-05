# React-JS-Dave-Gray

free 9 hour React course by Dave Gray - https://youtu.be/RVFAyFWO4go

Many **Frontend frameworks** exist, but React JS stands out as the most in-demand choice and as the library that has dominated the industry over the last decade.

This React course is a pre-requisite for following chapters 12 to 17 in Dave Gray's TypeScript course:  
https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702900-industry-tools/5527326-typescript

Of course, to follow this React course, you need to understand HTML, CSS and JavaScript (JS).  

>[!Note]
>This follow-up video for React Router version 6 provides an update for the blog project in the original course video:   
>https://youtu.be/XBRLVRjZ3CQ

---

# Chapter 1

React is a open-source front-end JS library for building User Interfaces (UIs) or UI components.  
Its initial release was in May 2013, and it was developed by Facebook and the dev community.  

website = https://react.dev/  

To get started with React, we need to make sure we installed Node.js.  
- check currently installed version: `node -v`  
- install on Arch Linux: `sudo pacman -S nodejs`

It might be useful to also install the React Dev Tools for your favorite Web browser.  

Let's create our first React project: 
- open a terminal window in VS code
- `npm create vite@latest`  
- name your project, select React (framework), and TypeScript (variant)
- `cd` into your project directory
- run `npm install` to install missing dependencies
- run `npm run dev` to start your dev server
- ctrl + click on the provided URL (http://localhost:5173/)

Now we can go to the Extensions tab in VS Code (ctrl + shift + X) and install the ES7+ extension.  
The exact name is **ES7+ React/Redux/React-Native snippets**.

**Additional tip**:
- open VS Code settings via ctrl + ,
- search for 'Emmet'
- find 'Emmet: include languages'
- to use Emmet abbreviations for React, add 'javascript' (key) and 'javascriptreact' (value).

Now, we can open a terminal window (ctrl + J): 
- `cd` into our React project's folder if not already the current folder
- `code .` to open another instance of VS Code from this folder
- close our current instance of VS Code to keep working inside the new one