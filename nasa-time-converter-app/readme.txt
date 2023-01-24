=== Nasa Time Converter App ===
Tags: NASA, timezone, time converter, events
Requires at least: 4.7
Tested up to: 6.1
Stable tag: 1.0.0
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

The plugin allows adding events along with the timezone convert option.

== Description ==
Time Converter App provide adds custom post-type Events and provides an option for time conversion on an intuitive frontend interface

== Installation ==
The Plugin can be installed with two methods:
1. Download the repository and make a zip file of "nasa-time-converter-app" and then upload the zip under the WordPress Dashboard -> Plugins -> Add new plugin.
2. Clone the repository and upload "nasa-time-converter-app" directory on the server under wp-content/plugins

== Creating Event ==
The Plugin registers a custom post type Events in which you can add event-related data like title, description, event location, registration link, launch and broadcast date, etc. Also, the Plugin uses the selected timezone for the map on the single event page, and based on the selected timezone it will show a global map with the converted country time zone highlighted in red.

== Creating Events Listing Page ==
To create events listing page where all the events get listed please go to Pages -> Add New. In the new page, screen please select page template "Event Listing" and publish the page and it will start showing the listing page.

== Time Conversion ==
Time conversion is handled on the frontend via JavaScript, If the user selects a specific timezone via search then the plugin store the related cookies and converts the time using JavaScript. There is a reset option that removes the cookies and that shows the default time.



== Screenshots ==
1. https://nasatime.pages.dev/event-listing.png
2. https://nasatime.pages.dev/single-event.png
3. https://nasatime.pages.dev/timezone-selection.png
