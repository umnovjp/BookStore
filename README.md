# BookStore
## Purpose
This app will help a user to find new books to read using Google book search. Run 'npm run develop' from root directory to start the app. When it starts, a user can search for books entering queries such as a title or an author. ![image](https://user-images.githubusercontent.com/88174852/150915877-aee13ad1-cb0f-4659-9834-df2ca04cf2ec.png)
When books show up, user can save some of them. There is Save button under each book description. There are also login and signup features. Save book will only work when a user is logged in. As this readme is being populated, I still continue working on the app. Recent change is taht I can read saved book info in console.log, but I still see an error message. ![image](https://user-images.githubusercontent.com/88174852/151102888-b1b74ae8-6682-4c52-96b2-45ec593e9fda.png)

## Signup and Login
This app allows first time user to signup, and registered user to login. But during first submission, grader was not able to signup. And later LA at askBCS was not able to signup either. I was able to signup and login all this time. After debugging, LA at askBCS was able to signup. It turned out she needed to run two additional installs like 'npm install graphql' and 'npm install apollo-server-express' from her terminal watching error messages in the terminal. Also, we made some changes to server.js file. ![image](https://user-images.githubusercontent.com/88174852/151597035-8939d63e-c6ce-49b0-8fe0-ff2c7423454d.png)

## Meeting technical requirements
App has files structure according to requirements. On server side, I have server.js and auth.js files. I created schemas directory with three required files, with queries and mutations defiuned. On client side, I created queries.js, App.js and mutations.js files. I modified SearchBooks and SavedBooks file to use new technology. Develop folder did not have SignupForm.js and LoginForm.js files mentioned in the assignment. Save book features does not work yet. 

## Links
Github: https://github.com/umnovjp/BookStore

Heroku: https://immense-tundra-92120.herokuapp.com/
