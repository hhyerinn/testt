const quotes = [
    {
        quote: "For the things we have to learn before we can do them, we learn by doing them.",
        author: "Aristotle",
    },
    {
        quote: "To win without risk is to triumph without glory..",
        author: "Pierre Corneille",
    },
    {
        quote: "Love truth, and pardon error..",
        author: "Voltaire",
    },
    {
        quote: "We would never learn to be patient if there were only joy in the world.",
        author: "Helen Keller",
    },
    {
        quote: "Fashion is architecture: it is a matter of proportions.",
        author: "Gabriel Coco Chanel",
    },
    {
        quote: "Nature magically suits a man to his fortunes, by making them the fruit of his character.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Education is a progressive discovery of our own ignorance.",
        author: "Will Durant",
    },
    {
        quote: "The absent are never without fault, nor the present without excuse.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
        author: "Albert Einstein",
    },
    {
        quote: "Love is the difficult realization that something other than oneself is real.",
        author: "Iris Murdoch",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;