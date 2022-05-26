TeamMember：Yulong Wu
Since I was abandon by my exteamates one and a half week before the ddl.I try my best to working on my project alone.
------------------------------------------
information about my project:
My project try to replicate an popular game named Yahtzee.( For more details about the game:
https://en.wikipedia.org/wiki/Yahtzee)
---------------------------------------------------------
How to Play?
Yahtzee is basically a dice game.Personally , it takes 30% of chance, 30% of bets and 30% of choice.
You go 12 round each in each games.In each games, your aim is to get as much point as you can.
In each round , you can try rolling your dices for at most 3 times to get your prefer combination. Different conmbiantion you roll can earn different value of points for you.The combination is basically seperate into uppersection and lowersection.

For the uppersection:
you can score easily in this section .But the points you get is less than in lowersection.There are several combintaions:
Aces:for each 1 you have,you can get 1 point
Twos:for each 2 you have,you can get 2 points
Threes:for each 3 you ,you can get 3 point
Fours:for each 4 you have,you can get 4 point
Fives:for each 5 you have,you can get 4 point
Sixth:for each 6 you have,you can get 6 point
If you totally get 63 points in uppersection
you can get a bonus for extra 35 points

The lowersection:
3 of a kind:3 same dices for sum of 5 dices points
4 of a kind:4 same dices for sum of 5 dices points
All count:get sum of your dices points
Yahtzee:5 same dices,get 50 points
Small striaght:4 dices in a straight(1234X,2345X,3456X),get 30 points
Large striaght:roll 12345 or 23456,get 40 points

at the end, add all your points together.You can try to beat yourself or compete with your friends.
---------------------------------------------
How to work:
put all the zip file in one folder, unzip then.run the app.py file an you can see the game.
the templates file contain all the .html files
the static file contain all the .js and .css file
---------------------------------------------
design and development
so the design is from the Yathzee game.Trying to develop it in computer. The scoring point part needs some algorithm which made my in troubles. Took long time developing and debuging. And as I was doing it alone, I put much attention on front-end side. So the back-end is is nearly empty. Because I think it is useless that a unplayable game with a beautiful login page. But I will keep developing it even after the ddl.
----------------------------------------------
So I use Flask framework and import Bootstraps3 on it. The game algorithm is purify with javascript. And have of css style using the bootstraps module,such as container and button on bootstraps.

