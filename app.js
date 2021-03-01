var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
console.log(outputDiv);
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

//calling server for processing
function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong !!");
}

function clickHandler() {
  var inputText = txtInput.value;
  // console.log(txtInput.value);

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
