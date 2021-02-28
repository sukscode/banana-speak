var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text) {
  return serverURL + "?" + "text=" + text;
}
//calling server for processing
function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong !!");
}
function clickHandler() {
  var inputText = txtInput.Value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
