# Infomentum Front End Test
### 1. Create App Structure Model

####  App
- Navbar
  - brand logo & text
  - list
    - list items
    - links
  - search bar
    - search button
  - donation button

- Donation Header & text
- Donation Widget
  - sub-heading
  - select bar, text & image
  - donation buttons
  - checkbox & text
  - donation form & submit button

- Footer
  - lists
    - list items
    - links
    - icons
  - brand logo & text
  - location

### 2. Setup file Structure
### 3. Add dependencies
### 4. Set Up Webpack
### 5. Set Sass variables
### 6. Build out Navbar
### 7. Build out Donation section
### 8. Build out Footer
### 9. Build out functions to handle donation widget
### 10. Start App
Using the terminal, navigate to the root of the app.
Type npm start, and in the browser type http://localhost:8080/.


# Notes
In creting this application I did not create a post route from the form,
and decided to keep the information containted within state to appear inside an alter.
If this was to be a real world situation I would create a route to post the form information
so that it could be saved into a database.
If I was to spend more time working at this app, I would have created some logic to
handle the checkbox, and the information to be added to the other information stored
in state.
I also would have taken the time to create a burger navigation button to have the nav items hide, and drop down for small tablet, and mobile screen sizes.

I opened the mockup png in a browser, used zoom controls to set the mockup png
to use up 100% of the browser width, and created my app to model this size.

I decided to use React with Webpack, Scss, and bootstrap 4.
