//Qno-01))
//     var arr1 = [ [] , [] , [] ];

//     console.log(arr1);


// //Qno-02))


//     var multiarray = [[0,1 ,2 , 3 ] , [1 , 0 , 1 , 2 ] , [2 , 1 , 0, 1 ]];
//     for(var i = 0 ; i < multiarray.length; i++){
//         document.write("<h2>" +multiarray[i] + "<br><h2>");
//     }


//Qno-03))

    // for (var i = 0; i <= 10 ;i++ ){
    //     document.write("" +i + "<br>");
    // }

//Qno-04))


// var tab_num = +prompt("Please Enter the Table Number :");
// var tab_len = +prompt("Please Enter the Table Lenght");

// for(var i = 1; i <= tab_len; i++){
//     document.write(tab_num + " *" + i + " = " + tab_num*i + "<br>" );
// }



//Qno-05))

    // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    // for(var i = 0; i < fruits.length ; i++){
        
    //     document.write( " Element of Index " + i +  "is "+fruits[i] + "<br>")
    // }



//Qno-06))

//    // TASK A
//     var count = [];
//     var index = 0;
//     for(var i = 0; i<= 15; i++ ){
//        count[index] = i;
//        index++
//     }


//     document.write("Counting : " + count + "<br/>");


//       //TASK B
//       var reverse = [];
//       var index01 = 0;
//       for(var a = 15; a >= 1; a-- ){
//          reverse[index01] = a;
//          index01++
//       }
  
  
//       document.write(" Reverse Counting  : " + reverse + "<br/>");


        //TASK C:

        // var even = [];
        // eve = 0;
        // var index02 = 0;

        // for(var x = 0; x <= 10; x++){
        //     even[index02] = eve;
        //     index02++
        //     eve = eve +2;
        // }


        // document.write(" Even Counting  : " + even+ "<br/>");



        //TASK C:

        //  var odd = [];
        //  od = 0;
        //  var index03 = 0;

        //  for(var x = 0; x <= 10; x++){
        //     odd[index03] = od;
        //      index03++
        //      od = od +3;
        //  }


        //   document.write("Odd Counting  : " +odd + "<br/>");


         
        //TASK D:


        // var ky = [];
        // var thousand = 0;

        // var index04 = 0;

        // for(var i = 0 ; i <= 10; i++){
        //     ky[index04] = thousand + "K";
        //     index04++
        //     thousand = thousand + 2;
        // }


        // document.write("Thousand K Counting   : " + ky + "<br/>");



        //Qno-07))

        // var item = ["cake", "apple pie", "cookie", "chips", "patties"];
        // var want = prompt("Welcome to Creater BAKERS ' What do you want  order SIR /MAA'M");

        // for(var i = 0; i < item.length; i++)
        // {
        //     var c = item.indexOf(want , i);

        //     if(want==item[i] )
        //     {
        //         alert("Yes we have " + want + " at index " + [i] + " .")
        //         break;
        //     }
        // }

        // if( i == item.length && b!==[i]){
        //     alert("Sorry Sir we dont have " + want);
        // }


        // //Qno-08))

        // var num = [24, 53, 78, 91, 12];
        // var largest = num[0];
        // document.write("<h2> Array Number :"+ num +"</h2>");

        
        // for(var i = 0; i<=largest; i++){
        //         if(num[i]>largest){
        //             var largest = num[i]
        //         }
        // }

        // document.write("<h2>The Largest number is <h2>" + largest+"</h2>");


        // //Qno-09))

        // var num1 = [24, 53, 78, 91, 12];
        // var small = num1[0];
        // document.write("<h2> Array Number :"+ num1 +"</h2>");

        // for(var x=0; x<=small ; x++){
        //     if(num1<small)
        //     var small = num1[x];
        // }

        // document.write("<h2>The Smallest number is <h2>" + small +"</h2>");


        //Qno-10))
        

        for(var i = 1; i<=100; i++){
            if(i%5==0){
                document.write("  ," + i);
            }
        
        }
         