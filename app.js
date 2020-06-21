/
/////task 1/////
// var fname = prompt("write your first name")
// var lname = prompt("write your first name")
// var ful = [fname,lname]
// alert("Welcome to our page" + ful)

// var len = prompt("write your favourite mobile")
// var lan2 = len.length
// document.write("my Favourte is " + len +  "<br>" + "lenght of string" + lan2)

// var a = "Areej Fatima"
// document.write(a + "<br>")
// var b = a.indexOf("m")
// document.write("index of m" + b)

//  var a = "hello world"
//  document.write(a + "<br>");
//  var b = a.lastIndexOf ("l");
// document.write("index of l" + b);

// var a = "Pakistan"
//  document.write(a + "<br>")
// var b = a.indexOf("i")
//  document.write("Character at index " + b)

//  //////task no 5/////
//  var b = prompt("find index")
//  var a = "pakistan"
//  document.write("character at index" + (a.charAt(3))

// var a = "hydrabad"
// document.write("city hydrabad")
// var b = a.replace(/hydrabad/g , "islamabad")
// document.write("<br>"+ "after replacement" + b)

// var mass = "Ali and Sami are best friends. They play cricket and football together";
// var b = mass.replace(/and/g , "&")
// document.write("Ali and Sami are best friends. They play cricket and football together"
// + "<br>" + b)

// var str = "123"
// var y = parseInt(str)
// document.write("value" + str + "<br>" + typeof(str) + "<br>" + "value" 
// + y + "<br>" + "type number")

/////task 10/////
// var city = prompt("write your Favourite dry friut")
// city2 = city.toUpperCase();
// document.write(" user input " + city + "<br>" + " upercase "+ city2
// )


// //////////////task no 11///
// var bak = prompt("what do u want?");
// var firstchar = bak.slice(0,1);
// var otherchar = bak.slice(1);
// firstchar = firstchar.toUpperCase()
// otherchar = otherchar.toLowerCase()
 
// var bak = firstchar + otherchar; console.log(bak)

// var a = ["apple","cokie","biskit", "cake"];
// for( var i=0; i< a.length; i++){
//     if (a[i] === bak){
//         alert("your item has found" )
// }else{alert("not found")}
// }
//  var a = prompt("enter here")
//  var firstchar = a.slice(0,1);
//  var otherchar = a.slice(0);
//  firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// document.write(firstchar + otherchar)



// /////task 12/////
//  var num = 13.23;
//  var y = num.toString(). replace(".", "");
//  document.write("Number" + num + "<br>" + "result" + y)

 /////task 13/////


 /////task 14/////
// var bak = prompt("what do u want?");
// bak = bak.toLowerCase
// var a = ["apple","cokie","biskit", "cake"];
// for( var i=0; i< a.length; i++){
//     if (a[i] === bak){
//         alert("your item has found" )
// }else{alert("not found")}
// }

 /////task 15/////

  /////task 16/////

// var uni = "University of Karachi"
// var un = uni.split("")
// for (var j = 0; j<21; j++)
// document.write("</br>" + un[j])

//   ///task 17/////
// var a = "pakistani"
// document.write(a + "<br>")
// var b = a.lastIndexOf("n")
// document.write("Character at index " + b)

  // /////task 18/////
  // var a = "The quick brown fox jumps over The lazy dog"
  // var cont = (a.match(/The/g) || []).length;
  // document.write(cont)

  //////chapters26-30%20///////////////

  /////////task No 1////////////

  // var a = 3.45214
  // var b = Math.round(a);
  // var c = Math.ceil(a);
  // var d = Math.floor(a);
  // document.write("Number " + a + "<br>" + "ceil " + c + "<br>" +"floor" + d  + "<br>" +"round value " + b);

  /////////task No 2////////////

  // var a = -2.673
  // var b = Math.round(a);
  // var c = Math.ceil(a);
  // var d = Math.floor(a);
  // document.write("Number " + a + "<br>" + "ceil " + c + "<br>" +"floor" + d  + "<br>" +"round value " + b);

//   /////////task No 3////////////

// var a = -4
// var b = Math.abs(a);
// document.write("Absolute value of  " + a  + " is " + b)

//   /////////task No 4////////////

// var b = Math.random()*6;
// var c = Math.floor(b)
// document.write(c)

//   /////////task No 5////////////

// var headsuser = prompt("enter heads name")
// var tailsuser = prompt("enter tails name")
// var toss = Math.random()*2
// var floor = Math.floor(toss)
// if (floor === 0 ){
// document.write("heads " + headsuser + "win the toss")}
// else{document.write("tails " + tailsuser + "win the toss")}

//   /////////task No 6////////////


// var b = Math.floor(Math.random()*100)
// document.write("random number from 1-100 " + "is " + b )


//   /////////task No 7////////////

// var wet = prompt("enter your weight")
// var conwet =parseInt(wet);
// document.write("the weight of user is in kilogram" + conwet)

//   /////////task No 8////////////

//////chapters31-34%20///////////////

// //   /////////task No 1////////////
//  var a = new Date()
// document.write(a)

//   /////////task No 2////////////

// var a = new Date();
// var b = a.toString();
// var c = b.slice(3,7)
// document.write("current Month is" + c)

//   /////////task No 3////////////

//  var a = new Date();
//  var b = a.toString();
// var c = b.slice(0,3)
//  document.write("Today is " + c)

//   /////////task No 4////////////
// var daysname = ["mon","tues","wed","thurs","fri","sat","sun"]
// var now = new Date();
// var theday = now.getDay();
// var namesofday = daysname[theday]
// if (namesofday == "sun"){
// document.write(namesofday + "today is funday")}

//   /////////task No 5////////////

//  var now = new Date();
//  var theday = now.getDate();
// if (theday <16){
// document.write( "First fifteen days of the month" + "<br>") }
// else 
//  { document.write( "Last days of the month")}

//   /////////task No 6////////////

// var date = new Date()
// var elapsmili =date.getTime()
// var elapsminu = elapsmili/6000
// document.write ("current Date" + date + "<br>")
// document.write ("Elapsed Mili Second Since Januarry 1 1970" + elapsmili + "<br>")
// document.write ("Elapsed Minutes Second Since Januarry 1 1970" + elapsminu + "<br>")

//  //   /////////task No 7////////////
//  var time = new Date();
//  var time2 = time.getHours()
//  if (time2 >12){
//  alert("its pm")}
//  else 
//   { alert( "its am")}

 //   /////////task No 8////////////

//  var date = new Date();
//  date.setDate(0);
//  document.write("later Date" + date)


//   //   /////////task No 9////////////
 var num = 24*60*60*1000
  var ram1 = new Date();
  var ram2 = new Date("June 18,2015");
  var ram4 = Math.floor(Math.abs((ram2-ram1)/num))
  document.write(ram4 + "days have passed since 1st ramadan")


    //   /////////task No 10////////////
    //   var dd = new Date();
    // var rd = new Date("Dec 05, 2015 22:50:16")
    // var yearbegin = new Date("Jan 01,2015 00:00:00")
    // var d = rd.getTime()-yearbegin.getTime();
    // var getsec = d/1000
    // document.write("On Refrence Date" + dd + "<br>" +   getsec + "second hands pas on since 2015")

      //   /////////task No 11////////////

      // var cdate = new Date();
      // document.write("Current Date" + cdate + "<br>")
      // var cd2 = cdate.setHours(cdate.getHours()-1)
      // document.write("1 hours ago, it was " + cdate)

      //   /////////task No 12////////////

    // var cd = new Date();
    // document.write("Current Date " + cd + "<br>")
    // cd.setFullYear(cd.getFullYear()-100);
    // document.write("100 Years Back,it was " + cd + "<br>")
    



// //   /////////task No 13////////////

// var dob = new Date(prompt("Enter Your Date of Birth"))
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage)

//////chapters35-38///////////////
// //   /////////task No 1////////////


// function date(){
//  var a = new Date();
//  document.write(a)
// }
// date();

// //   /////////task No 2////////////
// function name(){
// var fname = prompt("write your first name")
// var lname = prompt("write your first name")
// var ful = [fname,lname]
// alert("Welcome to our page" + ful)}

// name();

// //   /////////task No 3////////////

// function plus(){
//   var a = +prompt("enter your didgit to add")
//   var b = +prompt("enter your didgit to add")
//  alert(a+b)
// } 
// plus();
////////////////////////////////////////////////
// function add(a,b,c){
// var z = a+b+c
// return z;
// }
// var g = add (2,3,4)
// alert (g);


// //   /////////task No 4////////////

                       


 



