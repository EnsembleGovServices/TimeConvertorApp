# Time Convert App

**Welcome to the Time Convert App GitHub repository. Time Convert App provide adds custom post-type Events and provides an option for time conversation on the frontend side**

## Creating Event
Plugin register a custom post type **Events** in which you can add the event-related data like title, description, event location, registration link, lunch and broadcast date, etc. Also, the Plugin uses the selected timezone for the map on the single event page, and based on the selected timezone it will show the map.

## Time Conversion
Time conversion is handled on the frontend via JavaScript and the cookies, If the user selects a specific timezone via search then the plugin store the related cookies and converts the time using JavaScript. There is a reset option that removes the cookies and that shows the default time. 

## City/Region Search
On plugin activation, it will create a table along with the data of city, state, country, and timezone which was grabbed from [geonames.org](http://www.geonames.org/). When a user search for a specific city/region then the plugin grabs search for data in the database and based on the result it will return the results.