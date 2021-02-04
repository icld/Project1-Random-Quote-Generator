/* random number function that accepts one argument, the maximum acceptable random number.  This function will be called in other functions.   */
function getRandomNumber(max) {
  let randomNumber = Math.floor(Math.random() * Math.floor(max));
  return randomNumber
}

// uses getRandomNumber () with the length of the quotes array to return a random object
function getRandomQuote() {
  let i = getRandomNumber(quotes.length);
  let randomQuote = quotes[i];
  return randomQuote
}

// uses getRandomNumber() to generate a random rgb value.  changes background color with transition time
function getRandomRGB() {
  let randomColor = `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`;
  document.body.style.background = randomColor;
  document.body.style.transition = `1s`;

}

/* stores the return of getRandomQuote() in var randomQuote which is used to access
properties of the object and print them as strings between html tags.  
calls getRandomRGB. */
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class ="quote" >${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.species) {
    html += `<span class="species">-${randomQuote.species}</span>`;
  }
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

/* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
calls printQuote() every 10s */
setInterval(printQuote, 10000)

/* runs the function printQuote upon opening loading the page.  Found this approach on mdn while searching for a way to call function upon loading a page */
window.onload = printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);