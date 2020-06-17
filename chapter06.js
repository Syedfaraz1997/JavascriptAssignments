//Qno-01))

/*

    document.write("<br> <br> Qno-01) <br>" + "<br> <br>");

    document.write("<h3>Result</h3>");

    var a = 10;

    document.write("The value of a is : " + a + " <br> <br>");

    document.write(" <h4............................................... </h4> " + "<br> <br>   ");

    var b = ++a;

    document.write("The value of  ++a is: " + b + " <br>  ");

    document.write("Now the value of a is : " + a + "<br> <br> <br> <br> <br> <br>  ");

    var c = a++;
    
    document.write("The value of a++ is: " + c + " <br>  ");
    document.write("Now the value of a is : " + a + "<br> <br> <br> <br> <br> <br>  ");

    var d = --a;

    document.write("The value of --a is: " + d + " <br>  ");
    document.write("Now the value of a is : " + a + "<br> <br> <br> <br> <br> <br>  ");

    var e = a--;

    document.write("The value of a-- is: " + e + " <br>  ");
    document.write("Now the value of a is : " + a + "<br> <br> <br> <br> <br> <br");

*/



//Qno02))


 /*   document.write("<br> <br> Qno-02) <br>" + "<br> <br>");


    var a = 2 ;
    var b = 1;
    var result = --a - --b + ++b + b--;
//     Explain     1 -  0  +  1  +  1   each output step by step


    document.write("<h3>a is :" + a  + " <br>");
    document.write(" b is :" + b + "<br <br>");
    document.write(" Result  is :" + result + "<br <br></h3>");
*/


//Qno-03))


   /* 
        document.write("<br> <br> Qno-03) <br>" + "<br> <br>");

        var  a = "Your Name is";
        var name = prompt("Please Enter Your Name : " , a);
        

        alert("Welcome to " + name);

    */




    //Qno-05))

/*
   
        document.write("<br> <br> Qno-05) <br>" + "<br> <br>");
 
        var number = 5;

        var table_number = +prompt("Please enter your number" , number);
        
        
       for(i =1; i <= 10; i++){

        document.write( table_number + " * " + i +  " = " + table_number*i + "<br>");
       }

*/
    //Qno-06))

     document.write("<br> <br> Qno-05) <br>" + "<br> <br>");

      var math = "Obtain Number is : ";
      var Physics = "Obtain Number is : ";
      var Chemistry = "Obtain Number is : ";


      var math_number = +prompt("Enter your Maths Number :" , math);
      var Physics_number = +prompt("Enter your Physics Number :"  , Physics);
      var Chemistry_number = +prompt("Enter your Chemistry Number :" , Chemistry);

    
    
      document.write("Subject  " + "  ||      "  +  " Total_Marks "  + "   ||   "  + " Obtains Marks  "  + "  ||  "  +  "Persentage <br> " );
    
        var total = math_number + Physics_number + Chemistry_number;
        var total_marks = 300;

       var persentage  = total/total_marks*100;

       document.write("Mathamatics ||:" +" || " + "100    ||" + "     ||    "  +  math_number  + "  ||    "+ math_number + "%  <br><br>" );
       document.write("Physics :  ||" +"  || " + "100    ||" + "    "  +  Physics_number + "     ||   "+ math_number + "  % <br><br>" );
       document.write("Chemistry  || :" +"  || " + "100    ||" + "  ||    "+  Chemistry_number + "    ||   "+ Chemistry_number + "  % <br><br>" );

       document.write("<h3>Your Obtain Marks is :</h3>" + total + "<br> <br>");
       document.write("<h3>Your Parcentage is :</h3>" + persentage);







    




