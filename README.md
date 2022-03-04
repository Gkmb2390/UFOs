# UFOs

# Purpose of Excercise
    
    Update Dana's website to include filter functionality for multiple criteria.  In order to do so, we would need to update the html and app.js coding.  This includes adding into a new function, creating a forEach loop to run through the multiple fields and some if else logic to remove or add fields that have been added to the filters. 

# Results of Project

    The updates we made to the webpage allow for the use of filtering with multiple criteria filled out.  In order to make this functionality work we adapted certian pieces of code and fucntions from the original webpage design. 
# Quick Updates to App.JS & HTML    
    Initially we need to create a new vairable that is capabale of holding the multiple filter information.  We achieved this by creating the empty filters variable using 'filters = {}'.

    Then we update the html document to incorporate the new filter fields; such as city, state, country and shape.  We removed the button that previously occupied the space beneath the date filter and included the code for the additional fields as seen below.

    [Image of the filter fields from HTML]

# updateFilters Function Walkthrough
    Next we create a new function 'updateFilters' that will work through the multiple fields.  In order to recognize those fields that are changing we create the 'filterElem' variable, using 'let'.  We set the variable equal to the d3.select(this) - which recognizes changes that occur on the page.  

    Following that we create a variable to save the value of the 'filterElem' that we just created.  Creating the new 'filterValue' variable and selecting the value of the property of the 'filterElem' variable.  We can now recall the value of anything changed on the page; more specifically within the filters section. 

    The 'filterId' variable is the next item that we need to create in order to save the 'id' attribute of the 'filterElem' and store it for recall in our next section of the function.  

    Now we pass our 'filterValue' & 'filterId' through a simple if else statment.  Working through the statement we argure that if there is a filterValue that has been created; we update the 'filters' variable to include the ''filterId' as a key and set the value of that key equal to the 'filterValue' that has been created.  When the 'else' statement is triggered it removes the 'filterId' keys from the 'filters' variable, since it did not recognize a 'filterValue' in the first portion of the argument. 

    Lastly in this portion of the function we call the next function - which allows for the filtering of the table; aptly named the 'filterTable' function.  See the image below that depicts the sections of code described above.   

    [Image of the Update Filters Function]

# filterTable Function Walkthrough

    First we update the function 'filterTable' to incldue the argument 'tableData'; which we initiailly setup to be a constant.  This way we will be able to effect the data being pulled from the data.js document - which has been set equal to the 'tableData' constant variable.  

    In the next section of the 'filterTable' function we set the new 'filteredData' variable as equal to the tableData varibale.

    The next part was the most complex portion of the coding that gave me a great amount of difficulty.  We are asked to loop through our filters and see if any data in the filters fields matches data within the 'tableData'.

    First we establish the filteredData as equal to the filteredData that is being filtered by the action '.filter'.  The value being filtered from our 'filteredData' is the function() with the item argument.  Inside the function of 'function(item)' we have created a for loop that works through the 'Key(s)' in our 'filters' variable from the very beginning of the excercise.  Inside that for loop we are checking to see if the item(i.e. key of the filters) is equivalent to a value of either 'undefined' or if it matches any of the 'filters' key(s) as a boolean operator (i.e. true or false).  Having converted the filter values into booleans we can then return those values that equal to true and false - which would be fed into our previous functions based on the if else statement outlined in the 'updateFilters' function.

    Having completed the loop, we return to one of the initial functions given to us at the beginning of the excercise - 'buildTable' - which is passed the argument of 'filteredData' - so that we can see the changes make to the filter enacted. 

    [Image of the Filter table function]

# Listening Events

    Similar to the module work we have to design an event listener for when changes are made to the document.  Previously we were able to focus our attention to the button ids found in the HTML - since we removed those items we need to change our listening event coding.  As shown in the Hint video for the Challenge; we can update our listening event by changing the text within the d3.selectAll statement.  Specifically updating the item we are looking/listening for as any type of 'input', when we hear the input has been pass we fire the 'on' portion of the statement which allows for the change to call the 'updateFilters function. 
    
    Which returns us back to the top of the edited code we are submitting and allows for the changes made to be reflected in the HTML table. 

# Summary

    One drawback to the design of the webpage - is that it can't account for permutations of data, such as incomplete date - or only partially correct pieces of information.  For example, if I were searching for a Shape = 'light' and a date = 1/1.  The filters eliminate all the results, since they do not allow for incomplete matches to exist.  

    I would suggest we remedy this filtering function by allowing for incomplete matches to be matched as closely as possible.  Alternatively we could alert those using the website that all values must be 'complete' matching the examples place in the 'placeholder' value of the HTML.

    Similarly we could code the page to filter to those entries that match at least 1 of the complete values.  In this way we could allow for the users to narrow their serach by reviewing the partially complete data that they have filtered by so far.  