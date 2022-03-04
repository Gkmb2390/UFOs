# UFOs

# Purpose of Excercise
    
    Update Dana's website to include filter functionality for multiple criteria.  In order to do so, we would need to update the html and app.js coding.  This includes adding into a new function, creating a forEach loop to run through the multiple fields and some if else logic to remove or add fields that have been added to the filters. 

# Results of Project

    The updates we made to the webpage allow for the use of filtering with multiple criteria filled out.  In order to make this functionality work we adapted certian pieces of code and fucntions from the original webpage design. 
    
    Initially we need to create a new vairable that is capabale of holding the multiple filter information.  We achieved this by creating the empty filters variable using 'filters = {}'.

    Then we update the html document to incorporate the new filter fields; such as city, state, country and shape.  We removed the button that previously occupied the space beneath the date filter and included the code for the additional fields as seen below.

    [Image of the filter fields from HTML]


    Next we create a new function 'updateFilters' that will work through the multiple fields.  In order to recognize those fields that are changing we create the 'filterElem' variable, using 'let'.  We set the variable equal to the d3.select(this) - which recognizes changes that occur on the page.  

    Following that we create a variable to save the value of the 'filterElem' that we just created.  Creating the new 'filterValue' variable and selecting the value of the property of the 'filterElem' variable.  We can now recall the value of anything changed on the page; more specifically within the filters section. 

    