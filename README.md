# Summary
Titanic was biggest ship of its time, a engineering marvel that sank on its first voyage. Many passengers perished in this tragedy. In the attached visualization, patterns for survived passengers are depicted where we see that survival chances of passengers were highest if they belong to high class compartment or they were female.  

# Design
* Our main data of interest is count of survivals and non-survivals and how are they correlated with different other data. We used height of vertical bars to depict this count and how they vary with different categories as part of x axes.
* Now we would need to separate count of survived and non-survived passengers in length of vertical bar. We tackled this separation by color as visual encoding so that we get a stacked bar chart, where length of red part indicate count of perished passengers.
* After displaying basic plot of histogram of survival and non-survival rates, we want user to decide his own narrative of story. We provide this interaction by providing different buttons, which user can click to show plots with granular patterns for survived passengers.

# Feedback
1) A description was missing, which left user confused and reader could not make a story.  
2) Interaction was missing in visualization.  
3) There was error in survival and non-survival numbers as they were interchanged due to bug.  

Above feedback was taken from Udacity discussions at  
https://discussions.udacity.com/t/titanic-dataset-visualization-feedback-needed/185318/2  
https://discussions.udacity.com/t/need-feedback-for-p6-flight-cancellation/185528/3  

As per above suggestions, I added summary of data. I also added buttons after displaying a basic chart so that user can decide his own narrative with different charts to show. I corrected the bug of interchange of survival and non-survival.  
  
As per last review, following feedback has also been incorporated.  
4) Use of red-color to depict survival was counter-intuitive. Now red shows non-survival count.  
5) In surival versus class/gender plot, Male/Female bar was not labelled properly creating confusion. Now we have changed it to show Gender labels in x-axis with different levels of classes.  

# Resources
https://d3js.org/   
http://dimplejs.org/   
https://www.kaggle.com/c/titanic  
