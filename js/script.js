/******************************************
*****************************************/

/***
 * `quotes` array
***/
var quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    citation: 'https://www.brainyquote.com/quotes/walt_disney_131873',
    year: 2019,
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: 'John Lennon',
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    source: 'Margaret Mead',
  }
];

// record current quote index to make sure the new quote is not the same as the current quote
var currentQuoteIndex = 1;

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // make sure the new quote is not the same as the current quote
  var same = true;

  while(same) {
    var randomNum = Math.floor(Math.random() * quotes.length);
    if (randomNum != currentQuoteIndex) {
      currentQuoteIndex = randomNum;
      same = false;
    }
  }

  console.log(randomNum)
  return quotes[randomNum];
}

/***
 * `printQuote` function
***/
function printQuote() {
  // get new random quote
  var randomQuote = getRandomQuote();

  // output to frontend
  var html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click", printQuote);