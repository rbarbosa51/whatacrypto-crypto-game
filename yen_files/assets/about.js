const GenerateQuote = async () =>{
  var url="https://type.fit/api/quotes";

  const response=await fetch(url);
  const quoteList = await response.json();
  const randomIdx = Math.floor(Math.random()*quoteList.length);
  const quoteText = quoteList[randomIdx].text;
  const auth = quoteList[randomIdx].author;
  
  if(!auth) author = "Anonymous";

  document.getElementById("quote-text").innerHTML="'" + quoteText + "'";
  document.getElementById("quote-author").innerHTML= "~" + auth +"~";
}

GenerateQuote();