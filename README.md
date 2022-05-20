# Rock-Paper-and-Scissors-Game
-Fun game with good user expereince

# Group Members
1. Chaitanya Bhargav N 
2. Darshan Ghorpade
3. Abhitesh Kumar
4. Tushar Jayant

# Azure services used in project 
1. Azure Static Web App
    Azure Static Web Apps allows you to build modern web applications that automatically 
    publish to the web as your code changes.
    

# [Go to Rock,Paper and Scissors game](https://zealous-river-09636a810.1.azurestaticapps.net/)

# [Go to Video Demo](https://drive.google.com/file/d/1fgq3RPLLrgZPxfozrEcoP8l-C-C7d6Ps/view?usp=sharing)

# Screen Captures of project
<img src="https://github.com/nallapu27/Rock-Paper-and-Scissors-Game/blob/main/Game%20screenshots/Game%20screenshots/Game%20Home%20page.png" height=400 width=1000 />
<img src="https://github.com/nallapu27/Rock-Paper-and-Scissors-Game/blob/main/Game%20screenshots/Game%20screenshots/Game%20page%20Screenshot.png" height=400 width=1000 />
<img src="https://github.com/nallapu27/Rock-Paper-and-Scissors-Game/blob/main/Game%20screenshots/Game%20screenshots/Result%20declaration%20Screenshot.png" height=400 width=1000/>

# **Description of the Rock Paper Scissors Game**:
- Rock,Paper and Scissors is a fun game where there is a single player in this game whose opponent is computer in this game.
- The player in this game chooses any of the three options Rock or Paper or Scissors and accordingly the computer randomly generates an option at the same time.
- Depending upon both the player and computer options and based on the game logic the result is declared as either player or computer is won or may be a tie.
- This game  contains 10 rounds where each time the player or computer winning game is considered as one round and tie is not considered as a round.
- Accordingly the scores are incremented at each round of the game. 
- After  10 rounds the result is declared based upon the scores of player and computer at that time.
- The player can replay the game or can get back to the game home page after the result is declared.

# **Tools and Languages used in development of the game**:
- The hompe page is developed completely using html where all the content there is written using appropriate html elements.The video html element was also added in this page
- The CSS style properties are used to style up these html elements using appropriate class names and id names for almost all the html elements.
- Some of the CSS properties that were involved with particular type of html elements are border properties,margin and padding properties,flex properties,text styling and decoration 
properties and transformation as well as fadeout,fadein properties were used.
- The second page(game page) is designed as similar to first page using html and css properties where many image elements were also added.
- Java script is most extensively used for developing the game logic in this game where some js properties like query selectors,onclick attributes,class name attributes,set timeout attributes are used in conjunction 
with js objects,functions,variables and loops.
- Special important property that is animations are added using keyframes in css to create an animation effect of hand shaking of both player and computer when they are playing a
round.


# **Game development logic**:
- Whenever the player clicks on any option in response to it the computer randomly generates an option and both the player choice and computer choice and rounds count is sent as 
parameters to a  function in which depending on the options and game winning strategies the corresponding lose or win or tie text is appropriately displayed.
- This function also makes coreesponding increment in player score and computer score and round count depending on the result of each round.It also displays the right image of both player choice and 
computer choice in each round.
- If the game is a tie rounds count is not incremented and it is incremented in other cases.
- Three variables are created to store player score,computer score and to count number of rounds completed and each time in the foreach loop the round count is passed as a paramter
to a function.
- The function everytime checks whether or not round count exceeds 10 and when it becomes equal to 10 the function instructions are exceuted where the player score and computer
score is compared and appropriately the winning or losing or tie gameover result is displayed.
- The settime out attribute is used in the foreach loop which makes 2s delay in siaplaying the appropriate images of both player and computer whenever an option is clicked.
- The 2s gap everytime is used to add handshake effect animation which is also present in the foreach loop and gets activated whenever any option is clicked by the player in the game rounds.

# **Conclusion**:
- The above lines are brief description of this game project.Since this an open source public project anyone can suggest any changes or suggestions to improvise this project.
- New suggestions and improvements to this game are always welcomed.
