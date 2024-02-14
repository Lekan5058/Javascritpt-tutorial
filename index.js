function clickBtn3() {
    // console.log("hello world")

    document.getElementById("name").innerText = "Zamani"
    document.getElementById("name").style.color = "blue"
    document.getElementById("name").style.fontSize = "30px"
   
}
// ways of declearing variables

// var
// let
// const

// javascript is case sensitive

//+ addition
//- subtraction
//* multiplication
// / division
// ** exponentiation
// % modulus


let message = "this is the second javascript class"

var myAge =100 + 20

var firtsnumber = 100
var secondnumber = 50

console.log(firtsnumber+secondnumber)



//data types

// String = "wwlcome"
// number = 123456789
// boolean = true or false
// null = 0
// undefined = undefined
// array = [1,2,3,4,5, "shola", "bola", "tola", true]
// object = { myNmae : "Fola", age : 100}

// text formarting


var name = "Dayo"; //string data type
var age = 20.877666;
let myNumber = 10; //number data type




let gender = true; // boolean data type
// var name = "Fola"
// let name = "Tolu"


// console.log(typeof gender)

// console.log(Math.round(age));
// // console.log(Math.round(age));
// console.log(Math.trunc(age));
// console.log(Math.Max (10, 20, 30, 40,50));
// console.log(Math.Min (10, 20, 30, 40,50));

// console.log(name.toLocalLoweCase());
// console.log(name.toUpperCase());
// console.log


function checkScore(){
    let score = document.getElementById('score').value;

    if (score > 0 && score < 40){
        document.getElementById('result').innerHTML = "Fail"
        document.getElementById('result').style.color= "red"

    }

    else if (score >= 40 && score <=44){
        document.getElementById('result').innerHTML = "Pass E"
        document.getElementById('result').style.color= "Green"
        document.getElementById('result').style.fontSize= "24px"

    }
    else if (score >= 45 && score <=50){
        document.getElementById('result').innerHTML = "Pass D"
        document.getElementById('result').style.color= "Yellow"
        document.getElementById('result').style.fontSize= "24px"

    }
    else if (score >= 45 && score <=50){
        document.getElementById('result').innerHTML = "Pass D"
        document.getElementById('result').style.color= "Yellow"
        document.getElementById('result').style.fontSize= "24px"

    }
    else if (score >= 51 && score <=60){
        document.getElementById('result').innerHTML = "Pass C"
        document.getElementById('result').style.color= "Yellow"
        document.getElementById('result').style.fontSize= "24px"

    }
    else if (score >= 61 && score <=70){
        document.getElementById('result').innerHTML = "Pass B"
        document.getElementById('result').style.color= "Yellow"
        document.getElementById('result').style.fontSize= "24px"

    }
    else if (score >= 71 && score <=100){
        document.getElementById('result').innerHTML = "Pass A"
        document.getElementById('result').style.color= "Yellow"
        document.getElementById('result').style.fontSize= "24px"

    }
    
    else if (score = " "){
        document.getElementById('result').innerHTML = "KINDLY CHECK YOUR SCORE"
        document.getElementById('result').style.color= "Blue"
        document.getElementById('result').style.fontSize= "24px"

    }
   
}


