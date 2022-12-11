const generateQuote = async () =>{
  var url="https://type.fit/api/quotes";

  const response = await fetch(url);
  const quoteList = await response.json();
  const randomIdx = Math.floor(Math.random()*quoteList.length);
  const quoteText = quoteList[randomIdx].text;
  let authorName = quoteList[randomIdx].author;
  
  if(!authorName) {
    authorName = "Anonymous";
  }

  document.getElementById("quote-text").innerHTML="'" + quoteText + "'";
  document.getElementById("quote-author").innerHTML= "~" + authorName +"~";
}

function changeQuote() {
  generateQuote();
  setInterval(generateQuote, 3000);
}

changeQuote();


