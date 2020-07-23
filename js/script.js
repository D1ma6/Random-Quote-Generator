/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    source: "Joss Whedon",
  },
  {
    quote: "May the Force be with you.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars",
    year: "1977",
  },
  {
    quote: "It's alive! It's alive!",
    source: "Frankenstein",
    year: "1931",
  },
  {
    quote: "I'll be back.",
    source: "Terminator",
    citation: "The Terminator",
    year: "1984",
    tags: "#terminator",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
  },
  {
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
    source: "Kent Beck",
  },
  {
    quote:
      "Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.",
    source: "Muhammad Waseem",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    source: "Steve Jobs",
    year: "2008",
    tags: "#Steve #apple",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    source: "Alan Kay",
  },
  {
    quote:
      "A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it.",
    source: "Marvin Minsky",
    tags: "#coding #computer",
  },
  {
    quote: "It’s harder to read code than to write it.",
    source: "Joel Spolsky",
    tags: "#coding #learning",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    tags: "#Martin #Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    source: "Robert C. Martin",
    citation: " Clean Code: A Handbook of Agile Software Craftsmanship",
  },
];

/***
 * `colors` array
 ***/
let colors = ["#4967D1", "#CE3EE5", "#E53E3E", "#E2E53E", "#E5993E", "#3EE5BD"];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `getRandomColor` function
 ***/

function getRandomColor() {
  let getRandomColorNum = Math.floor(Math.random() * colors.length);

  return colors[getRandomColorNum];
}

/***
 * `printColor` function
 ***/

/***
 * `printQuote` function
 ***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let quotesInner =
    '<p class="quote">' +
    randomQuote.quote +
    "</p>" +
    '<p class="source">' +
    randomQuote.source;
  let citation = '<span class="citation">' + randomQuote.citation + "</span>";
  let year = '<span class="year">' + randomQuote.year + "</span>";
  let tags = '<span class="tags">' + randomQuote.tags + "</span>";

  if (
    randomQuote.hasOwnProperty("citation") &&
    randomQuote.hasOwnProperty("year") &&
    randomQuote.hasOwnProperty("tags")
  ) {
    quotesInner += citation + year + tags;
  } else if (
    randomQuote.hasOwnProperty("tags") &&
    randomQuote.hasOwnProperty("year")
  ) {
    quotesInner += year + tags;
  } else if (
    randomQuote.hasOwnProperty("tags") &&
    randomQuote.hasOwnProperty("citation")
  ) {
    quotesInner += citation + tags;
  } else if (
    randomQuote.hasOwnProperty("citation") &&
    randomQuote.hasOwnProperty("year")
  ) {
    quotesInner += citation + year;
  } else if (randomQuote.hasOwnProperty("tags")) {
    quotesInner += tags;
  } else if (randomQuote.hasOwnProperty("year")) {
    quotesInner += year;
  } else if (randomQuote.hasOwnProperty("citation")) {
    quotesInner += citation;
  } else {
  }
  quotesInner += "</p>";
  let randomColorNumber = getRandomColor();
  console.log(randomColorNumber);
  document.querySelector("body").style.background = randomColorNumber;
  document.getElementById("quote-box").innerHTML = quotesInner;
}
setInterval(() => {
  printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
