# smartHome
A project that simulates real-world IoT (Internet of Things) based events in a 3D virtual world. Created using Janus Markup Language (JML), HTML, JavaScript, node.js and express.js.

## Description
The project contains 3 main parts:-
- 3D virtual room
- IoT event simulator
- server (to run project locally)


#### **1. 3D virtual room**
The 3D room was created using **janusweb** (a web framework for in-browser implementation of *JanusVR*) [janusweb](https://github.com/jbaicoianu/janusweb) [JanusVR](https://janusvr.com/index.html).
Refer to the links for in-depth understanding of janusweb and its detailed documentation. You can also refer to the *Janus Guide* [Janus Guide](https://janusvr.github.io/guide/#/).

The webpage containing the virtual room is `livingRoom/index.html`. This page when hosted on a web browser displays the virtual room in the browser. Various assets 
(images, audio, videos, 3D objects) that were used to create the virtual room are present under the `livingRoom/livingRoomAssets/` folder. The JavaScript file is present as *script.js* inside the livingRoomAssets folder.


#### **2. IoT event simulator**
This page provides the functionality to simulate a Doorbell Ring event. It contains a button that says *RING DOORBELL*, clicking which would cause a small window 
 displaying the *Doorbell Camera live video* to pop-up on the TV in virtual room. Also, a notification also appears in front on the TV prompting the TV viewer to take 
 suitable action (open the door or not).
 
 The webpage containing the event simulator is `eventSim/simulator.html`. It is made using HTML, CSS and JavaScript. The CSS and javascript files are present in `eventSim/eventSimAssets/` 
 named *styles.css* and *simulator_script.js* respectively.
 
 
#### **3. Communication between virtual room and event simulator**
The concept of LocalStorage is used to facilitate communication between virtual room and event simulator. Both webpages share a common variable named `doorbellStatus`
which takes 2 values - `0` and `1`. `1` means doorbell has been rung. When a person clicks the *RING DOORBELL* button in the event simulator, the `eventListener`
attached to this button sets the value of `doorbellStatus` to `1`. 
Towards the virtual room side, its javascript code contains a function named `check` that reads the value of `doorbellStatus` every 1000 milliseconds. When it encounters that 
`doorbellStatus` is set to `1` then it calls `doorbellEvent` function to simulate the events in virtual room associated with this event. The variable `doorbellStatus` is then 
again set back to `0`.


#### **4. Setting up local server**
To run this project locally, a server (named *server.js*) was created using express.js . It runs on `localhost:3000` but you can run it on any port suitable or any other way of hosting 
these pages (make sure both the pages - *virtual room* and *event simulator* share the same origin as localStorage is shared among websites having same origin only).

All the static resources like images, audio, video, js files, 3D objects of virtual room have been put under the `livingRoom/livingRoomAssets/` folder and declared as static files in the server as:
```
app.use(express.static("livingRoom/livingRoomAssets")); 
```
Similarly, the static resources have been put under the `eventSim/eventSimAssets/` and declared as static files in the server as:
```
app.use(express.static("eventSim/eventSimAssets")); 
```

The living room page (`livingRoom/index.html`) is served at 
```
localhost:3000/
```
The event simulator page (`eventSim/simulator.html`) is served at 
```
localhost:3000/simulator
```

## Using
#### **1. Run on your own system**
 a. Change the current working directory to the location where you want the cloned directory. \
 b. type:
 ```
 git clone https://github.com/Shreyras/smartHome.git
 ```
 c. cd into the smartHome folder i.e. type `cd smartHome`. \
 d. type `npm start`, this will start a local server at port 3000. \
 e. type `localhost:3000/` in a browser to open virtual room. \
 f. type `localhost:3000/simulator` in another tab/window to open event simulator. \
 g. There you go! your project is up and running!! 
 
 Below is a picture for better reference
 
 
 #### **2. Already hosted sites on GitHub Pages**
 Find the virtual room here: [Living Room]() \
 Find the event simulator here : [Event Simulator]() 
 
 
