A couple of demos of user tracking with JavaScript. 

I show some methods how to send user data back into the server. More details in my [blog article](http://www.ruanyifeng.com/blog/2019/04/user-tracking.html) (in Chinese).

- [Sync AJAX](demos/sync.html)
- [Async AJAX + sync operations](demos/loop.html)
- [Async AJAX + setTimeout](demos/settimeout.html)
- [Beacon API](demos/beacon.html)
- [ping attribute of `<a>` tag](demos/ping.html)

## How to play

First, clone the repo.

```bash
$ git clone https://github.com/ruanyf/user-tracking-demos.git
$ cd user-tracking-demos
```

Install the dependences, then launch the server.

```bash
$ npm install
$ node server.js
```

Visit http://localhost:3000 in your browser. Follow the instruction on the page, then watch what happens in the commandline.
