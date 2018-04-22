
# dying with serial

  Just a few tests with a led, an arduino and serial
  
<b>ino:</b> Contains the file with the emission and reading of the arduino serial

<b>api:</b> Contains a server / api made in python using flask, it has endpoints to accept connections and send values to arduino serial. Not the best practice, but worth the test.

<b>web:</b> Contains a react application that consumes api and is able to light up the led via the button.

![enter image description here](https://i.imgur.com/y2uz0sT.gif)

<b>mobile:</b> Contains a react native application that also consumes api, being able to turn on and off the led.

![enter image description here](https://i.imgur.com/1u5W2qL.gif)

<b>pong:</b> Contains an extremely simple version of pong game, implemented in javascript using the p5.js library. When the ball hits any of the paddles the led will turn off or on.

![enter image description here](https://media.giphy.com/media/51W52dUEfrK37tQKJO/giphy.gif)

## Checklist
- [x] Serial Arduino
- [x] Face detector
- [x] API
- [x] Web
- [x] Mobile
- [x] Pong
- [ ] Qrcode 


## Built With

  
*  [Flask](https://github.com/pallets/flask) - The Python micro framework for building web applications.
*   [p5.js](https://github.com/processing/p5.js) - p5.js is a JS client-side library for creating graphic and interactive experiences, based on the core principles of Processing
*   [platformio](https://github.com/platformio/platformio-core) - An open source ecosystem for IoT development 👽 Cross-platform IDE and unified debugger. Remote unit testing and firmware updates.
*   [React](https://github.com/facebook/react) - Library for building user interfaces
*   [React-native](https://github.com/facebook/react-native) - A framework for building native apps with React.

