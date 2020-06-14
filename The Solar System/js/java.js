var question = [];

var number = 5;

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
var corrOption = document.querySelectorAll(".primary-button-correct");
var op1 = corrOption[i];
i++;
var op2 = corrOption[i];
i++;
var op3 = corrOption[i];
i++;
var op4 = corrOption[i];
i++;
var op5 = corrOption[i];
i++;


i=0;
var explain = document.querySelectorAll(".explain");
var explain1 = explain[i];
i++;
var explain2 = explain[i];
i++;
var explain3 = explain[i];
i++;
var explain4 = explain[i];
i++;
var explain5 = explain[i];
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


function checkc1(op) {
        op.addEventListener("click", function() {
            op.classList.remove("primary-button-correct");
            op.classList.add("correct-button");
            q1.classList.remove("question");
            q1.classList.add("strikethrough");
            explain1.innerHTML="<span class='correct-explain'>Correct: </span>" +queText[rarray[0]][5];
            score++;
            disableq1();
        });
    }
function checkc2(op) {
        op.addEventListener("click", function() {
            op.classList.remove("primary-button-correct");
            op.classList.add("correct-button");
            q2.classList.remove("question");
            q2.classList.add("strikethrough");
            explain2.innerHTML="<span class='correct-explain'>Correct: </span>" +queText[rarray[1]][5];
            score++;
            disableq2();
        });
    }function checkc3(op) {
        op.addEventListener("click", function() {
            op.classList.remove("primary-button-correct");
            op.classList.add("correct-button");
            q3.classList.remove("question");
            q3.classList.add("strikethrough");
            explain3.innerHTML="<span class='correct-explain'>Correct: </span>" +queText[rarray[2]][5];
            score++;
            disableq3();
        });
    }function checkc4(op) {
        op.addEventListener("click", function() {
            op.classList.remove("primary-button-correct");
            op.classList.add("correct-button");
            q4.classList.remove("question");
            q4.classList.add("strikethrough");
            explain4.innerHTML="<span class='correct-explain'>Correct: </span>" +queText[rarray[3]][5];
            score++;
            disableq4();
        });
    }
    function checkc5(op) {
        op.addEventListener("click", function() {
            op.classList.remove("primary-button-correct");
            op.classList.add("correct-button");
            q5.classList.remove("question");
            q5.classList.add("strikethrough");
            explain5.innerHTML="<span class='correct-explain'>Correct: </span>" +queText[rarray[4]][5];
            score++;
            disableq5();
        });
        }
    function check1(w) {
        w.addEventListener("click", function() {
            w.classList.remove("primary-button");
            w.classList.add("secondary-button");
            op1.classList.remove("primary-button");
            op1.classList.remove("secondary-button");
            op1.classList.add("correct-button");
            q1.classList.remove("question");
            q1.classList.add("strikethrough");
            explain1.innerHTML="<span class='incorrect-explain'>Incorrect: </span>" +queText[rarray[0]][5];
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
           explain2.innerHTML="<span class='incorrect-explain'>Incorrect: </span>" +queText[rarray[1]][5];
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
            explain3.innerHTML="<span class='incorrect-explain'>Incorrect: </span>" +queText[rarray[2]][5];
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
            explain4.innerHTML="<span class='incorrect-explain'>Incorrect: </span>" +queText[rarray[3]][5];
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
            explain5.innerHTML="<span class='incorrect-explain'>Incorrect: </span>" +queText[rarray[4]][5];
            disableq5();
            ;
        });
    }   
        checkc1(op1);
        checkc2(op2);
        checkc3(op3);
        checkc4(op4);
        checkc5(op5);
        check1(w1);
        check1(w2);
        check1(w3);
        check2(w4);
        check2(w5);
        check2(w6);
        check3(w7);
        check3(w8);
        check3(w9); 
        check4(w10); 
        check4(w11);
        check4(w12); 
        check5(w13); 
        check5(w14); 
        check5(w15); 
    console.log("fine now");

    // var pscore= document.querySelector("score")
    var submit = document.querySelector("#submission")
    submission.addEventListener("click", function(){
        // score=0;
        // for (var i = question.length - 1; i >= 0; i--) 
        //             {
        //             if (question[i]===true){score++}
        //             }
        if (score===number) {document.getElementById("score").innerHTML = "<br></br><div>Excellent!</div> <br></br> Your Score is : " +score+ "/"+ number;}
        else if (score===(number-1)) {document.getElementById("score").innerHTML = "<br></br><div>Good!</div><br></br> Your Score is : " +score+ "/"+ number;}
        else {document.getElementById("score").innerHTML = "<br></br>Your Score is : " +score+ "/"+ number;}
        disableq1(); disableq2(); disableq3(); disableq4(); disableq5();

    })
function disableq1(){
    op1.disabled=true;
    w1.disabled= true;
    w2.disabled= true;
    w3.disabled= true;

}

function disableq2(){
    w5.disabled= true;
    w6.disabled= true;
    w4.disabled= true;
    op2.disabled=true;

}
function disableq3(){
    w7.disabled= true;
    w8.disabled= true;
    w9.disabled= true;
    op3.disabled=true;
    

}
function disableq4(){
    w10.disabled= true;
    w11.disabled= true;
    w12.disabled= true;
    op4.disabled=true;
    

}
function disableq5(){
    w14.disabled= true;
    w13.disabled= true;
    w15.disabled= true;
    op5.disabled=true;

}