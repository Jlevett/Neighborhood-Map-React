# Neighborhood Map React Single Page App
By Jeremy Levett
![label](https://camo.githubusercontent.com/dff1e27eb75261fc03e40cb83600cab6f23871d8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f556461636974792d52656163742d3032623365342e737667)

## About
This single page app uses the Google maps API and the location-based service Foursquare API to list some attractions in the Blue Mountains Katoomba, Australia.

[Run it live here](https://jlevett.github.io/Neighborhood-Map-React/ "Live App Here")

This application follow this [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)

This app was design from ground up, utilizing the create-react-app tool.
It uses [google-maps-react](https://www.npmjs.com/package/google-maps-react)

## How to Use the App
1. The app will load a map of Katoomba, Blue Mountains with markers for each attraction and a list of of these attractions in the sidebar.
2. Click on a map marker or name of the attractions list to get details about the specific attraction.

## Local Installation 
Note: Make sure you have the latest Node.js installed.

1. Navigate to the directory that contains the project.
2. Open up Git Bash in this location.
3. Run 'npm install'

  ### Start App:
  1. npm start
  2. Run 'serve -s build'
  3. Open http://localhost:3000

  ### Start in Production Mode:
  1. Run 'serve -s build'
  2. Open http://localhost:5000
  Note: The service worker is only functional in production mode.

## Important
This application uses API's from Google maps and Foursquare, and developer free plans are only limited to a certain number of requests per day so you may experience being to not load content.

## Technology
* ReactJs
* HTML
* CSS
* Foursquare API
* Google Maps API

