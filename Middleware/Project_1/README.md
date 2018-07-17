## Nodejs Express Server with Middleware ##

*Middleware*

In this lesson we begin with the basics of building an express server.

Lets begin by starting a new project. Create a folder. We called ours Project_1. Then inside your new folder lets initialize a new git repository, and then initialize npm. This will give us a package.json and a repo to save our changes to.

`git init`</br>
`npm init -y`

Now let's install Express.

`npm i express body-parser cors`

*Great!! We are ready to start coding!*

Now in our project folder we will open a file named index.js

Inside it we add

```JavaScript
const express = require('express');
```
This allows us to use express as our server.

Next:

```JavaScript
const server = express();
```
The above initializes an express server instance.

<h3><strong>Introducing our first middleware :</strong></h3>
So, far we have learned the basics of getting a Node Express server up and running. Now we need to start adding some functionality. We will start with our global middleware.

Global middleware are functions that allow you to execute methods before the final route is reached. So let start with a common module.

First let's grab our `body-parser` module.
```JavaScript
const bodyParser = require('bodyParser');
```
<sub>Take the time to google packaged modules like bodyParser to find out all of the methods available to the module.</sub>

Now we implement the `bodyParser` middleware.

```JavaScript
server.use(bodyParser.json());
```
Question: So what does `bodyParser.json()` do? 



```JavaScript
const cors = require('cors');
```
<sub>Take the time to google packaged modules like bodyParser to find out all of the methods available to the module.</sub>

Now we implement the `bodyParser` middleware.

```JavaScript
server.use(cors());
```
Question: So what does `cors()` do? 



Now, we create our first route, and pass it our first middleware.
```JavaScript
server.route('/').get((req, res) => {
    res.status(200).send('<h1>Hello World with Middleware</h1>');
});
```
 We dive into middleware in the next lesson, for now we will continue. Inside our middleware we respond to the request with a success status code and a plain text/html "Hello World" heading.

Finally we have to tell the server where to listen.
```JavaScript
const app = server.listen(PORT, () => {
    console.log(`You have reached : ${app.address().address}:${app.address().address}`);
});
```
Note that we assign the server to create the app. this allows us to handle events on the server like getting its address and port.
```JavaScript
    app.address().address
```


<h2><strong>Our first <i>Hello World</i> Express Server with Middleware</strong></h2>
</br>
Now we can run our program.
In out terminal we type:

`node index.js`

and in our terminal we see 

```
You have reached : address:port
```

when we visit http://address:port we see

```
Hello World with Middleware
```

Congradulations you have completed your first Express server application. In our next less we dive in to more advance functions and features that make for a robust back-end server.

<sub>Download our project here Test</sub>
