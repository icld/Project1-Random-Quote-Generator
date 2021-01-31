/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

function getRandomNumber(max) {
  let randomNumber = Math.floor(Math.random() * Math.floor(max));
  return randomNumber
}
function getRandomQuote() {
  let i = Math.floor(Math.random() * Math.floor(quotes.length));
  let randomQuote = quotes[i];
  return randomQuote
}

function getRandomRGB() {
  let randomColor = `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`;
  document.body.style.background = randomColor;
  document.body.style.transition = `1s`;

}

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class ="quote" >${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;

  } if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;
  getRandomRGB();
  console.log(randomQuote, randomQuote.citation, html);
  document.getElementById('quote-box').innerHTML = html;
};

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
setInterval(printQuote, 10000)

// runs the function printQuote upon opening loading the page.  Found this approach on mdn while searching for a way to run function on loading a page
window.onload = printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);