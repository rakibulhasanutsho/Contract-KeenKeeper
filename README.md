------Project name : Friend Keen Keeper
...description: The project help to build my communication with friend extremely.We set my goals to contact how many days after we communicate my friend. 

### Navbar 
--Design the Navbar exactly like the Figma design
--Put your logo on the left side
--Put your navigation links on the right side — links are: Home, Timeline, Stats
--Each link should have an icon next to the text
--The active page link should look different (highlighted), just like the Figma design

### Banner
--Banner Section (Top of the Home page):
--Show a centered title and subtitle
--Add a button with an icon (e.g., "Add a Friend")
--Show 4 summary cards below the banner, following the Figma design
### Json Data
--- create json data using ai
    ...id
    ...picture
    ...name
    ...tags
    ...goal
    ...bio
    ...next_due_date
    ...status
    ...days_since_contact
    ...email
    
### Homepage friend section 
    ---design it almost figma
        ....picture
        ....name
        ....days_since_contact
        ....tags
        ....status(background color conditionally use figma)
### Friend details page
    ----it divided 2 col 
        ... first col show friend details
            --- picture
            --- name
            
            --- tags 
            --- email
            --- skill
        ... second col show relation with friend 
            --- goal
            --- days_since_contact
            --- next_due_date
            --- avgContact days
            .... use communicating medium 
                ... Calls
                ... Message
                ... Video
                --- when we click any button (calls, message, video ) show a toast functionally with name
            --- functionally add communication history in details page

### Timeline
  --- functionally  Save All friend communication history  with date and name 

### Footer
---Design and add a footer section that matches the Figma design
### Responsive
---The entire website must work correctly on mobile, tablet, and desktop screen sizes
###Others
   ---Add a 404 Page for any unknown/invalid route
   ---Show a loading animation while the friends data is being fetched on the Home page
   ---Show a relevant toast notification when the user clicks Call, Text, or Video
   ---Make sure reloading any page after deployment does not cause an error

###Friendship Analytics Page (Stats Page)
    ---The page must have a "Friendship Analytics" heading at the top
    ---Add a Pie Chart (using Recharts) showing the count of Call / Text / Video interactions — match the Figma layout
###Timeline Filter
    ---Add filter options on the Timeline page so users can filter entries by: Call, Text, or Video