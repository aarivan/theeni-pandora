"Theeni Pandora" is a Stand Alone Application that helps the users to find nearby Food trucks based on geography and lists the food they serve. The application allows users to search for food recipes based on the course, cuisine, and/or ingredients.

The users can save these recipes and their favorite food truck information, rate them, and also provide comments/suggestions. Additionally, users can follow another user - provides a one stop shop to follow foodies for their reviews on food and restaurants and chefs for their new recipes and kitchen hacks are most sought after by the users.


Users:

Admin

    can add users/comments
    can view the list of users
    can update the details pertaining to the user/comments
    can delete the details of a user/comments

General User

    can search for food truck or recipe information
    can save their favorite recipe or food truck details
    can rate/comment on the derived information

Relationships between users:

    General User - Can follow another user (or multiple users)
    Admin - create/delete access to users

Relationships between domain objects:

    Favourites- Combination of Food truck and recipe information put together as a list (one to many)
    Recipe/Food truck - Can be a part of favorite/favorites (many to many)


Production Environment:

The application can be accessed using the following link : http://theeni-pandora.herokuapp.com/
