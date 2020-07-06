#ASANA

(In process). Responsive APP to manage services from Asana Center. It is a care center that offers workshops and sessions about yoga, vegan nutrition, relaxation, meditation, professional massages and spa treatments. Companies hire this service for their employees as an effort of improving staff satisfaction. With this platform, 

Asana admins can do the following:

1) Register companies that are going to receive the service oriented to their employees.
2) Have access of all the employees that have been registered data 
3) Have access of all the treatments that have been requested 
4) Update the status of every employee's treatment 

Companies can do the following: 

1) Register their employees in the platform
2) Choose the treatment that every employee needs
3) Have access of all the treatments requested from their company and their status. 
4) Have access of all the employees that have been registered data 


First of all, you need to install Visual Studio Code, you can download it from https://code.visualstudio.com/download and follow instructions according to your OS.

BACKEND <-----------------------------------

I) Development environment preparation

a. NODE

Make sure you have 'Node.js' installed in your device. To confirm the installation, open terminal and execute 'node --version' command. If a version number appears, that means it is installed, if not, download from 'https://nodejs.org/es/download/' and install it, follow site directions.

b. XAMPP

Download XAMPP from "https://www.apachefriends.org/" Follow site directions to install according to your OS and press "Start" buttons at Apache and MySQL module options.

c. PROJECT REPOSITORY

Open GitBash terminal in the folder where the project's going to be cloned Write the next command: git clone http://github.com/mariacristinatovarsalas/asana and press enter.

II) To initiate servers:

a. Database Server

Install and open MySQL Workbench and make a connection to database server.
Import and execute the sql script that is inside BD folder of this project

b. Backend Server and open browser

Open terminal and execute commands as follows:

1) 'cd client'
2) 'npm install'
3) 'npm start'
4) 'cd server'
5) 'nodemon server'

TO LOGIN AS ADMIN

username: dustinhoffmann@gmail.com
password: dustin

TO LOGIN A COMPANY

username: acme@gmail.com
password: acme







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
