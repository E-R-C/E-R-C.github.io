// Write JavaScript here
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

function makeWebsite(callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    var result = [];
    if (this.readyState == 4 && this.status== 200){
      var jsonObj = JSON.parse('{"r":'+ this.responseText + "}");
      for(var i = 0; i < jsonObj.r.length; i++){
        result.push(jsonObj.r[i].word);
      }
      callback(result);
    }
  };
  xhttp.open("GET", "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1&maxCorpusCount=-1&minDictionaryCount=25&maxDictionaryCount=-1&minLength=3&maxLength=-1&sortBy=alpha&limit=3&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", true);
  xhttp.send();
  document.getElementById("MainItem").style.backgroundImage = 'url("https://picsum.photos/800/200?random")';
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
