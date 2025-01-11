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

>[!important]
>Create React App (CRA) has been deprecated and is no longer recommended for starting new React projects.  
>The React team removed CRA from the official documentation in early 2023.  
>Recommended alternatives include Vite, Next.js, Remix, or Gatsby.


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

---

## The node_modules folder

The **node_modules** folder is a directory in **Node.js** projects that stores third-party libraries and dependencies.  
It serves as a cache for external modules that a project depends on (**dependencies**).  
When you use **npm** (Node Package Manager) to install packages, they are downloaded and stored in this folder.  

Since you don't want to store all of those files in your repository, the node_modules folder is included in the  
**.gitignore** file. That's why this folder is greyed out in VS Code file tree.

---

## How React works

React uses only one .html file. This file loads into the browser and then React takes over and presents the rest of the content.  
The `package.json` file includes the project name, the version, some default scripts, the list of **dependencies**.  

The list of **dependencies** is important because this is how Node knows which depedencies to pull in from the **node_modules** folder.  

---

# Chapter 2 - App & JSX

We will explore the App component, which is the default component created in any new React project.  
we'll also explain what is JSX, and what we can do with it.  

---

>[!important]
>Web pages are not able to render .tsx code directly without compiling to JavaScript.    
>Websites that appear to run .tsx directly are actually using a build process that compiles   
>the TypeScript and JSX into JavaScript, and then the compiled JavaScript is executed.

---

## The 'src' folder

Let's look at our `main.tsx` file (in the past, we used to have an `index.js` file instead).  
In this file, we import our app via `import App from './App.tsx'` (line 4).  

In React, **each component gets its own file**.  
And at line 8, you can see that the **App** component is injected into the **DOM**.  
And it's injected into the element that has the id of '**root**', which is the default when you create a React project.  

---

Now, let's look at this `App.tsx` file (replaces the formerly used `App.js` file).  
You'll notice that the App component is a function. Modern React uses functional components.  
But you may see some legacy code with Class components.  

## JSX

The `return` statement in the `App()` function of our `App.tsx` file returns JSX.  
**JSX**, or **JavaScript XML**, is a syntax extension for JavaScript that allows developers to write **HTML-like code**  
within JavaScript.  

Initially created by Facebook for use with the React framework, JSX has become widely adopted across various web development frameworks.  

JSX allows us to put JavaScript expressions in the code.  
For example, we can use **variables** as the value of an image source <img src={imported_variable} />.  
These variables need to be **imported** at the top of our `App.tsx` file, or declared inside the `App()` function.  
The **curly braces** say "hey, that's a JavaScript expression, not HTML".  

Note that **objects** or **booleans** cannot be rendered to the page via JS expressions.  

To **comment** out a line of JSX code, use `{/* your code here */}`.  

**Practical example**: lines 5 to 9 + line 20 of the `Content.tsx` file.  
>Using a function to render a randomly generated name.  
This is a file we will create in the next chapter.

---

# Chapter 3 - Functional Components

Today, we'll be adding functional components to our project.  
Because that is some of the power of React, we can create components that are **reusable**.  

For that end, we'll use the VS Code extension named **ES7+ React/Redux/React-Native snippets**.  

In our `main.tsx` file, we import the `App` component from the `App.tsx` file.

The **App** component (`App.tsx`) is the default component created in any new React project.  
It's also the **parent** of all the other components in the **component tree**.  

And these other components that we will create will also need to be **imported** into the `App.tsx` file.  

## Our first child component

Let's create a `Header.tsx` file in our `src` folder.  
Use **ctrl + alt + R** to seach a React snippet, and type '**rafce**' to get the React Arrow Function Component.  
This will automatically create a function named after the file name (Header in our case).  

Note that we're not bound to use <div>, it's very easy to get caught up just using divs when using React.  
But it's best to stick with the semantic HTML tags.  

Once we've created our Header component, we need to import it into the `App.tsx` file.  
`import Header from './Header.tsx'`  

And then we can use Header in the return statement of our `App()` function to make it appear on the web page.  
```tsx
function App() {
  return (
    <>
      <div>
        <Header />  {/* this component is imported from Header.tsx */}
      </div>
```

## Our second child component

Same steps as before:
- Let's create a new file named `Content.tsx` in our `src` folder.  
- Then press **ctrl + alt + R** and type '**rafce**' to get the React Arrow Function Component.  
- Replace the <div> tag with a <main> tag.  
- import the `Content` component into the `App.tsx` file
- apply this new component to the return statement of the `App()` function

```tsx
function App() {
  return (
    <>
      <div>
        <Header />  {/* this component is imported from Header.tsx */}
        <Content />
      </div>
```

## One more component


