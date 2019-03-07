/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// Repository of quotes to be shown on the page

var quotes = [
  { quote: 'Our greatest glory is not in never falling, but in rising every time we fall.', source: 'Confucius', citation: 'facebook', year: '2009' },
  { quote: 'All our dreams can come true, if we have the courage to pursue them.', source: 'Walt Disney' },
  { quote: 'It does not matter how slowly you go as long as you do not stop.', source: 'Confucius', citation: 'twitter', year: '2010' },
  { quote: 'Everything you’ve ever wanted is on the other side of fear.', source: 'George Addair' },
  { quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', source: 'Winston Churchill' }
];

// Return a random quote from quotes array

function getRandomQuote() {
  var randNumber = Math.floor(Math.random() * 5);
  return quotes[randNumber];
}


// Renders a random quote on the page and changes the background color

function printQuote() {
  var randQuote = getRandomQuote();
  var quoteContent = '<p class="quote">' + randQuote.quote + '</p>';
  quoteContent += '<p class="source">' + randQuote.source;

  if (randQuote.citation) {
    quoteContent += '<span class="citation">' + randQuote.citation + '</span>';
  }
  if (randQuote.year) {
    quoteContent += '<span class="year">' + randQuote.year + '</span>';
  }
  quoteContent += '</p>';

  document.getElementById('quote-box').innerHTML = quoteContent;
  document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(' 
    + Math.floor(Math.random() * 255) + ',' 
    + Math.floor(Math.random() * 255) + ',' 
    + Math.floor(Math.random() * 255) + ')';
}


// Invokes printQuote function after click event

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Executes printQuote function every 3 seconds
setInterval(printQuote, 3000);
