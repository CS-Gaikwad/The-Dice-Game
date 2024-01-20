let pl1 = prompt("Enter The Name Of Player1: ");
let pl2 = prompt("Enter The Name Of Player2: ");
const b1 = document.getElementsByClassName("btn-outline-warning")[0];
const b2 = document.getElementsByClassName("btn-light")[0];
var m = 0;
var n = 0;
let obito1 = document.getElementsByClassName("dotA");
let obito2 = document.getElementsByClassName("dotB");
var a= new Date();
var seconds=a.getSeconds();

reset();

b1.addEventListener("click", () => {
  setTimeout(() => {
      reset();
      roll();
      result();
  }, 100);

});

b2.addEventListener("click", () => {
  reset();
  alert("Reset Complete ! ");
});

function roll() {
  m = Math.floor(Math.random(seconds) * 6) + 1;
  check(m, 0);
  n = Math.floor(Math.random(seconds) * 6) + 1;
  check(n, 7);
  console.log(
    " Here are the scores for Player1 = " + m + " and " + "Player2 = " + n
  );
}

function check(b, d) {
  let c = d;
  if (m == n) {
    document.getElementsByClassName("result")[0].innerHTML = "It's a Draw !";
  }

  switch (b) {
    case 1:
      hide(0 + c);
      hide(1 + c);
      hide(2 + c);
      unhide(3 + c);
      hide(4 + c);
      hide(5 + c);
      hide(6 + c);
      break;
    case 2:
      unhide(0 + c);
      hide(2 + c);
      hide(1 + c);
      hide(3 + c);
      hide(4 + c);
      hide(5 + c);
      unhide(6 + c);
      break;
    case 3:
      hide(0 + c);
      hide(1 + c);
      unhide(2 + c);
      unhide(3 + c);
      unhide(4 + c);
      hide(5 + c);
      hide(6 + c);
      break;
    case 4:
      unhide(0 + c);
      hide(1 + c);
      unhide(2 + c);
      hide(3 + c);
      unhide(4 + c);
      hide(5 + c);
      unhide(6 + c);
      break;
    case 5:
      unhide(0 + c);
      hide(1 + c);
      unhide(2 + c);
      unhide(3 + c);
      unhide(4 + c);
      hide(5 + c);
      unhide(6 + c);
      break;
    case 6:
      unhide(0 + c);
      unhide(1 + c);
      unhide(2 + c);
      hide(3 + c);
      unhide(4 + c);
      unhide(5 + c);
      unhide(6 + c);
      break;
    default:
      console.log("error at switch" + b);
      break;
  }
}

function hide(a) {
  if (a < 7) {
    obito1[a].classList.add("hide");
  } else if (a >= 7) {
    a = a - 7;
    obito2[a].classList.add("hide");
  }
}
function unhide(a) {
  if (a < 7) {
    obito1[a].classList.remove("hide");
  } else if (a >= 7) {
    a = a - 7;
    obito2[a].classList.remove("hide");
  }
}

function result() {
  document.getElementsByTagName("h2")[0].textContent = pl1;
  document.getElementsByTagName("h2")[1].textContent = pl2;
  if (m > n) {
    // alert("Player 1 wins !!!");
    document.getElementsByClassName("result")[0].innerHTML = pl1 + " Wins !!! ";
  } else if (m < n) {
    // alert("Player 2 wins !!!");
    document.getElementsByClassName("result")[0].innerHTML = pl2 + " Wins !!! ";
  }
  // reset();
}

function reset() {
  document.getElementsByClassName("result")[0].innerHTML =
    "Just Roll The Dispute Away";
  document.getElementsByTagName("h2")[0].textContent = "Player 1";
  document.getElementsByTagName("h2")[1].textContent = "Player 2";

  for (let i = 0; i < obito1.length; i++) {
    obito1[i].classList.remove("hide");
  }
  obito1[3].classList.add("hide");

  for (let i = 0; i < obito2.length; i++) {
    obito2[i].classList.remove("hide");
  }
  obito2[3].classList.add("hide");
}
