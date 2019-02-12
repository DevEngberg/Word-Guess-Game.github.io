prompt('Press any key to get started!');

var rapperTypeArr = ['Snoop Dog', 'Puff Daddy', 'Ice Cube', 'Dr Dre', 
'Eazy E','Too Short', 'Two Pac', 'Coolio','Method Man', 'Ice T']

var rapperType = rapperTypeArr[Math.floor(Math.random() * rapperTypeArr.length)];

var s;
var count = 10;
var answerArray = [];


// array with underscor //

function startUp() {
  for (var i = 0; i < rapperType.length; i++) {
    answerArray[i] = "_";
  }


  s = answerArray.join("rapper");
  document.getElementById("answer").innerHTML = s;
}

// function allows the user to type a letter //

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < rapperType.length; i ++) {
      if (rapperType[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>10) {
    document.getElementById("stat").innerHTML = "Did you get it?";
  }
}