//Qno-01))
/*
    document.write("<br ><br>"+ "Qno-01"+ "<BR> <br>");

    var str = "Your String value is: " ;

    var str_value = prompt("Please Enter your  Value" , str);

    if(str_value === str_value.isInteger )
    {
        alert("Your Given Value is a Number");
    }
    else if(str_value === str_value.toString)
    {
        alert("Your Given Value is a Character");
    }
*/
//Qno-02))

/*
document.write("<br ><br>"+ "Qno-02))"+ "<BR> <br>");


     var val01 = +prompt("Please Enter An Number : " , "Your number is :");
     var val02 = +prompt("Please Enter An Number : " , "Your number is :");


     if(val01 > val02)
     {
            alert("The Larger is : " + val01 );
     }
     else if( val02 > val01)
     {
            alert("The Larger is : " + val02 );
     }
     else
     {
            alert("Some Think  is Wrong ! ");
     }
*/


//Qno-03))
/*

       document.write("<br ><br>"+ "Qno-03))"+ "<BR> <br>");

       var x = +prompt("Please Enter An Number : " , "Your number is :");

       if(x > 0)
       {
            alert("Your Given Number is  Positively :" );
       }
       else if(x  < 0)
       {
          alert("Your Given Number is Negatively :" );
       }
       else if(x === 0)
       {
        alert("Your Given Number is equal to Zero :" );
       }

*/


//Qno-04))

/*

document.write("<br ><br>"+ "Qno-04))"+ "<BR> <br>");

       var vowel01 = "a";
       var vowel02 = "e";
       var vowel03 = "i";
       var vowel04 = "o";
       var vowel05 = "u";
       
       var char = prompt("Please Enter An Letterr" , "Only one Letter");

       if(char === vowel01 || char === vowel02 || char === vowel03 || char === vowel04 || char === vowel05)
       {
           alert("True");
       }else
       {
           alert("false");
       }

*/





//Qno-05))
/*

        document.write("<br ><br>"+ "Qno-05))"+ "<BR> <br>");



        var pass01 = "syedfaraz";
        var pas02 = prompt("Please Enter Your Password" , "Your Password is");

        if(pas02 === "")
        {
                alert("Please enter your password");
        }
        else if(pass01 === pas02)
        {
            alert("Correct! ");
        }
        else
        {
            alert("Incorrect password !");
        }


*/



//Qno-06))


        document.write("<br ><br>"+ "Qno-06))"+ "<BR> <br>");


        var greeting; 
        var hour = 13;
         if (hour < 18)
          { 
             document.write(greeting = "<h1>Good day</h1>");
          } 
          else {
            document.write(greeting = "<h1>Good evening</h1>");
               }


//Qno-07))


        document.write("<br ><br>"+ "Qno-07))"+ "<BR> <br>");

        var tim = +prompt("Please Enter Current Time : " , "time e.g: 1300");

        if(tim >= 0000 && tim <= 1200 )
        {
            alert("Good Morning !!");
        }
        else if(tim >= 1200 && tim <= 1700)
        {
            alert("Good Afternoon !!");
        }
        else if(tim >= 1700 && tim <= 2100)
        {
            alert("Good Evening !!");
        }
        else if(tim >= 2100 && tim <= 2400)
        {
            alert("Good Night  !!");
        }