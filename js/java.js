var question = [];

var number = 5;

var curentQuestion = 1;


for (var i = number - 1; i >= 0; i--) {
    question[i] = false
}


var i = 0;
var ques = document.querySelectorAll(".question");
var q1 = ques[i];
i++;
var q2 = ques[i];
i++;
var q3 = ques[i];
i++;
var q4 = ques[i];
i++;
var q5 = ques[i];
i++;



i = 0;
var score = 0;
// var option = document.querySelectorAll(".correct");
var op1 = document.querySelector("#a1");
i++;
var op2 = document.querySelector("#a2");
i++;
var op3 = document.querySelector("#a3");
i++;
var op4 = document.querySelector("#a4");
i++;
var op5 = document.querySelector("#a5");
i++;

// function correct(op, q, i) {
//     op.addEventListener("click", function() {
//         op.classList.remove("primary-button");
//         op.classList.add("correct-button");
//         q.classList.remove("question");
//         q.classList.add("correct-button");
//         question[(i-1)]=true;
//         disableq1();
//     }
//     );
// }
//     correct(op1, q1, 1);
//     correct(op2, q2, 2);
//     correct(op3, q3, 3);
//     correct(op4, q4, 4);
//     correct(op5, q5, 5);

    i = 0;
    var option = document.querySelectorAll(".primary-button");
    var w1 = option[i];
    i++;
    var w2 = option[i];
    i++;
    var w3 = option[i];
    i++;
    var w4 = option[i];
    i++;
    var w5 = option[i];
    i++;
    var w6 = option[i];
    i++;
    var w7 = option[i];
    i++;
    var w8 = option[i];
    i++;
    var w9 = option[i];
    i++;
    var w10= option[i];
    i++;
    var w11= option[i];
    i++;
    var w12= option[i];
    i++;
    var w13= option[i];
    i++;
    var w14= option[i];
    i++;
    var w15= option[i];
    i++;
    var w16= option[i];
    i++;
    var w17= option[i];
    i++;
    var w18= option[i];
    i++;
    var w19= option[i];
    i++;
    var w20= option[i];
    i++;




    function check1(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op1.classList.remove("primary-button");
            op1.classList.remove("secondary-button");
            op1.classList.add("correct-button");
            q1.classList.remove("question");
            q1.classList.add("strikethrough");
           if ( w.classList[0]=="correct-button"){score++;};
            disableq1();
        });
    }

    function check2(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op2.classList.remove("primary-button");
            op2.classList.remove("secondary-button");
            op2.classList.add("correct-button");
            q2.classList.remove("question");
            q2.classList.add("strikethrough");
            if ( w.classList[0]=="correct-button"){score++;};
            disableq2();
        });
    }

    function check3(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op3.classList.remove("primary-button");
            op3.classList.remove("secondary-button");
            op3.classList.add("correct-button");
            q3.classList.remove("question");
            q3.classList.add("strikethrough");
            if ( w.classList[0]=="correct-button"){score++;};
            disableq3();
        });
    }


    function check4(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op4.classList.remove("primary-button");
            op4.classList.remove("secondary-button");
            op4.classList.add("correct-button");
            q4.classList.remove("question");
            q4.classList.add("strikethrough");
            if ( w.classList[0]=="correct-button"){score++;};
            disableq4();
        });
    }

    function check5(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op5.classList.remove("primary-button");
            op5.classList.remove("secondary-button");
            op5.classList.add("correct-button");
            q5.classList.remove("question");
            q5.classList.add("strikethrough");
            if ( w.classList[0]=="correct-button"){score++;};
            disableq5();
            ;
        });
    }
    check1(w1);
    check1(w2);
    check1(w3);
    check1(w4);
    check2(w5);
    check2(w6);
    check2(w7);
    check2(w8);
        check3(w9); 
        check3(w10); 
        check3(w11);
        check3(w12); 
        check4(w13); 
        check4(w14); 
        check4(w15); 
        check4(w16); 
        check5(w17); 
        check5(w18);
        check5(w19);
        check5(w20);
    console.log("fine now");

    // var pscore= document.querySelector("score")
    var submit = document.querySelector("#submission")
    submission.addEventListener("click", function(){
        // score=0;
        // for (var i = question.length - 1; i >= 0; i--) 
        //             {
        //             if (question[i]===true){score++}
        //             }
        if (score===number) {alert("Excellent");}
        else if (score===(number-1)) {alert("Good");};
        document.getElementById("score").innerHTML = "Your Score is : " +score+ "/"+ number;
        disableq1(); disableq2(); disableq3(); disableq4(); disableq5();

    })
function disableq1(){
    w4.disabled= true;
    w1.disabled= true;
    w2.disabled= true;
    w3.disabled= true;

}

function disableq2(){
    w5.disabled= true;
    w6.disabled= true;
    w7.disabled= true;
    w8.disabled= true;

}
function disableq3(){
    w9.disabled= true;
    w10.disabled= true;
    w11.disabled= true;
    w12.disabled= true;

}
function disableq4(){
    w14.disabled= true;
    w13.disabled= true;
    w15.disabled= true;
    w16.disabled= true;

}
function disableq5(){
    w17.disabled= true;
    w18.disabled= true;
    w20.disabled= true;
    w19.disabled= true;

}