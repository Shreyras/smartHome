# smartHome
A project that simulates real-world IoT (Internet of Things) based events in a 3D virtual world. Created using Janus Markup Language (JML), HTML, JavaScript, node.js and express.js.

## Description
The project contains 3 main parts:-
- 3D virtual room
- IoT event simulator
- server (to run project locally)


###**1. 3D virtual room**
The 3D room was created using **janusweb** (a web framework for in-browser implementation of *JanusVR*) [janusweb](https://github.com/jbaicoianu/janusweb) [JanusVR](https://janusvr.com/index.html).
Refer to the links for in-depth understanding of janusweb and its detailed documentation. You can also refer to the *Janus Guide* [Janus Guide](https://janusvr.github.io/guide/#/).

The webpage containing the virtual room is `livingRoom/index.html`. This page when hosted on a web browser displays the virtual room in the browser. Various assets 
(images, audio, videos, 3D objects) that were used to create the virtual room are present under the `livingRoom/livingRoomAssets/` folder. The JavaScript file is present as *script.js* inside the livingRoomAssets folder.


###**2. IoT event simulator**
This page provides the functionality to simulate a Doorbell Ring event. It contains a button that says *RING DOORBELL*, clicking which would cause a small window 
 displaying the *Doorbell Camera live video* to pop-up on the TV in virtual room. Also, a notification also appears in front on the TV prompting the TV viewer to take 
 suitable action (open the door or not).
 
 The webpage containing the event simulator is `eventSim/simulator.html`. It is made using HTML, CSS and JavaScript. The CSS and javascript files are present in `eventSim/eventSimAssets/` 
 named *styles.css* and *simulator_script.js* respectively.
 
 
###**3. Communication between virtual room and event simulator**
The concept of LocalStorage is used to facilitate communication between virtual room and event simulator. Both webpages share a common variable named `doorbellStatus`
which takes 2 values - `0` and `1`. `1` means doorbell has been rung. When a person clicks the *RING DOORBELL* button in the event simulator, the `eventListener`
attached to this button sets the value of `doorbellStatus` to `1`. 
Towards the virtual room side, its javascript code contains a function named `check` that reads the value of `doorbellStatus` every 1000 milliseconds. When it encounters that 
`doorbellStatus` is set to `1` then it calls `doorbellEvent` function to simulate the events in virtual room associated with this event. The variable `doorbellStatus` is then 
again set back to `0`.
