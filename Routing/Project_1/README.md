## Nodejs Express Server with Middleware and Routing##

*Middleware*

In this lesson we take what we have learned with middleware and add routing so as our application grows larger our code can stay managable.

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

After let's grab our `body-parser` module.
```JavaScript
const bodyParser = require('bodyParser');
```

Next let's grab our `cors` module.

```JavaScript
const cors = require('cors');
```

Next:

```JavaScript
const server = express();
```
The above initializes an express server instance.

Now we implement the `bodyParser` middleware.

```JavaScript
server.use(bodyParser.json());
```
Question: So what does `bodyParser.json()` do? 

Now we implement the `cors` middleware.


```JavaScript
server.use(cors());
```

Question 1: So what does `cors()` do? 
Question 2: Why is it important?



Next, we add our two middleware.
```JavaScript
server.use('/Foo', fooMiddleware);
server.use('/Bar', barMiddleware);

```

Lastly in the index.js file we have to tell the server where to listen.

```JavaScript
const app = server.listen(PORT, () => {
    console.log(`You have reached : ${app.address().address}:${app.address().address}`);
});
```

Now that we have completed our index.js we can create two new files. In the same directory we create 
`fooMiddleware.js` and `barMiddleware.js`
In our example we are assigning a middleware based on a route.
`http://example.com/foo` and `http:/example.com/bar` lets create those files now.

Inside  fooMiddleware.js 
```JavaScript
const express = require('express');
const fooRoute = express.Route();
```

Now we can create a couple of routes!
```JavaScript
fooRoute.get('/', (req, res) => {
    res.send('<h1>Foo with no bar is no foo bar!</h1>')
});
```

```JavaScript
fooRoutes.get('/bar', (req, res) => { 
    res.send('<h1>Foo with Bar is foobar!</h1>')
});
```
Inside  barMiddleware.js 
```JavaScript
const express = require('express');
const barRoutes = express.Route();
```

Now we can create a couple of routes!
```JavaScript
barRoutes.get('/', (req, res) => { 
    res.send('<h1>Bar has none!</h1>')
});
```

```JavaScript
barRoutes.get('/None', (req, res) => { 
    res.send('<h1>Bar None! Routing is Fun!</h1>')
});
```
<h3><strong>Middleware can be local to a scope or global!</strong></h3>
So, far we have learned the basics of getting a Node Express server up and running a bit on middleware and now we have touched on routing. Let look into the methods a server can receive and send data. Some of these methods include `get` as we used already. 

In the next lesson we take routing to the next level with our basic C.R.U.D example.

</br>
Now we can run our program.
In out terminal we type:

`node index.js`

and in our terminal we see 

```
You have reached : address:port
```

when we visit `http://address:port/Foo` we see


<h1>Foo with no bar is no foo bar!</h1>


when we visit `http://address:port/Foo/bar` we see


<h1>Foo with Bar is foobar!</h1>

Congradulations you have completed another Express server application. In our next lesson we continue to dive in to more advance functions and features that make for a robust featurefull back-end server.

<sub>Download our project here Test</sub>