var message = '';
var quote;
var source;
var Year;

function getRandomQuote (quoteList) {
  for ( var i = 0; i < quoteList.length; i += 1) {
  quote = quoteList[i].quote;
  source = quoteList[i].source;
  Year = quoteList[i].Year;
 return quoteList[Math.floor(Math.random() * quoteList.length)];
}
}


var quoteList = [
    {quote: 'WOOO!!', 
     source: "-Ellen, Queen of Durham",
     Year: 2018},
     
    {quote: "Im your huckleberry", 
     source: "-Doc Holiday, Tombstone"},

    {quote: "In a dark place we find oursleves,  and a little more knowledge lights our way.",
    source: '-Yoda'},

    {quote: "No one likes a grumpy muffin.",
    source: '-Ellen, Queen of Durham',
    Year: 2019},

    {quote: "Nothing will work unless you do", 
     source: 'Maya Angelou'},

    {quote: "I learned that courage is not the absence of fear but the triumph over it",
     source: 'Nelson Mandela'},
]

function printQuote (getRandomQuote) {
  var getRandomQuote
  var string = ' '
  string = <p class="quote">  </p>
  <p class="source"> 
  <span class="citation">  </span>
  <span class="Year"> </span>
</p>
}

message += '<h2>quoteList' + getRandomQuote + '</h2>'

function print(message) {
  var quoteBoxDiv = document.getElementById("quoteBox");
  quoteBoxDiv.innerHTML = message;
}
print(message);
console.log(getRandomQuote);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
