# haystax10
Create a simple web app. Connect to the public Twitter API and display the last 5 public tweets for a username that is entered into and input dialog. Make sure the CSS and HTML is proper and looks decent. The output should show the tweet content, date/time, and a count of how many words are from the English dictionary.

## See the Live Demo
See a live demo at [http://35.196.237.113/haystax10](http://35.196.237.113/haystax10/) (in progress)
<p align="left">
  <a href="http://35.196.237.113/haystax10/">
    <img src="./images/twitter_app1.png" alt="Screenshot of App">
    <img src="./images/twitter_app2.png" alt="Screenshot of App Registered">
  </a>
</p>

## Launching the App Locally
*Please note, you must launch the Python backend API for search functionality to work.* 
*Follow the instructions in the `/backend` folder to set up a backend API.*
You can run the *frontend* of the application locally by following these steps.

### Prerequisites
* [NodeJS](https://nodejs.org/en/download/) - an open source server framework
* [npm](https://www.npmjs.com/get-npm) - a package manager for Node.js packages
* [http-server](https://www.npmjs.com/package/http-server) - a simple, zero-configuration command-line HTTP server
* [Python](https://www.python.org/downloads/) (optional) - for an alternative server

### Installing
Clone this repository onto your local computer
```
git clone -b master https://github.com/johnkntran/haystax10.git haystax10
```
Then `cd haystax10` to go into the repository.
Install all package dependencies
```
npm install
```
Run a local HTTP server, such as *http-server*
```
http-server
```
Alternatively, if you have Python installed, you can run a simple HTTP server
```
python -m SimpleHTTPServer 8080
```
Navigate to [http://localhost:8080/](http://localhost:8080/) on your browser and you should see the application running.