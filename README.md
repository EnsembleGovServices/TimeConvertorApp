# Time Convertor Application

**Welcome to the Time Convertor App GitHub repository.The Time Convertor App provide adds custom post-type Events and provides an option for time conversion on an intuitive frontend interface**
## How to install the plugin
The Plugin can be installed with two methods:
1. Download the repository and make a zip file of "nasa-time-converter-app" and then upload the zip under the WordPress Dashboard -> Plugins -> Add new plugin.
2. Clone the repository and upload "nasa-time-converter-app" directory on the server under wp-content/plugins 

After installation, the application should appear within the plug in menu.  The plug in can be activated from the same area.

## Creating Event
The Plugin registers a custom post type **Events** in which you can add the event-related data like title, description, event location, registration link, launch and broadcast date, etc. The plug in also includes a global interactive timezone map so users can hover over different time zones to see when an event will occur. 

## Time Conversion
Time conversion is handled on the frontend via JavaScript, If the user selects a specific timezone via search then the plugin store the related cookies and converts the time using JavaScript. There is a reset option that removes the cookies and that shows the default time. 


