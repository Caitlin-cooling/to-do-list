# To Do List App

This is a basic to do list app built using react. A user can currently create a to do and a confirmation message is rendered when they do so.

Please note that this is spiked as it is a learning exercise in React. I plan to complete this again fully test driven.

### Using the App
1. `git clone https://github.com/Caitlin-cooling/to-do-list.git`
2. `cd to-do-list`
3. Run command `serve` from the directory to start the HTTP server
4. Go to `http://localhost:5000` to see the app

### Dependancies
This app is written using React, and requires React-dom as well as Babel to enable the use of JSX. Please install babel using `npm install babel-cli@6 babel-preset-react-app@3`.

When contributing please ensure that you are running `npx babel --watch src --out-dir . --presets react-app/prod` from your terminal as this is listening for changes and converting JSX in to JS.

Serve is used as the HTTP server, please ensure that you have this installed using `yarn global add serve`

### Known Issues
* I would like to be able to move the rendering of the submit input along with the handleClick event handler to its' own component
* I would like to be able to move rendering of all to dos out of the app component
