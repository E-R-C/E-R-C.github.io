// Write JavaScript here
nounList = [];

function setHeaders(wordList){
  // Capitalize Everything
  for(var i = 0; i < wordList.length; i++){
    wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].substring(1);
  }
  headerValue = wordList.join(" ");

  var items = document.getElementsByClassName("headerVal");
  for(var k = 0; k < items.length; k++){
    items[k].innerText = headerValue;
  }
  updateWord(wordList[0], "word1");
  updateWord(wordList[1], "word2");
  updateWord(wordList[2], "word3");
}
function updateWord(word, theClass){
  elements = document.getElementsByClassName(theClass);
  for(var x = 0; x < elements.length; x++){
    elements[x].innerText = word;
  }
  console.log(elements);
}

function makeWebsite(){
  if (nounList.length === 0){
    getNounsString("nounlist.txt", nounListCallback);
  } else {
    console.log(nounList[0]);
    setHeaders(randomPick3);
  }
  document.getElementById("MainItem").style.backgroundImage = 'url("https://picsum.photos/800/200?random")';
}

function randomPick3(){
  result = []
  for (var i = 0; i < 3; i++){
    var index = Math.floor(Math.random() * nounList.length);
    result.push(nounList[index]);
  };
  return result;
}
function nounListCallback(responseText){
  nounList = nounStringToList(responseText);
}
function changeFonts(){
  document.body.style.fontFamily = fontArrays[counter];
  counter += 1;
  counter %= fontArrays.length;
}
var counter = 0;
var fontArrays = ["'Rammetto One', cursive", '"Comic Sans MS", cursive, sans-serif', "'Libre Barcode 39', cursive", "'Indie Flower', cursive",
"'Dosis', sans-serif", "'Anton', sans-serif", "'Libre Baskerville', serif", "'Fjalla One', sans-serif"
];
function getNounsString(fileName, callback){
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    callback(xmlhttp.responseText);
  }
};
xmlhttp.open("GET", fileName, true);
xmlhttp.send();
}

function nounStringToList(nounString){
  return nounString.split("\n");
}
