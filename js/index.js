var authors = [
  {
    name: "― Oscar Wilde",
    quoteText: "“Be yourself; everyone else is already taken.”",
  },
  {
    name: "― Sarah Kay",
    quoteText:
      "“I have seen the best of you, and the worst of you, and I choose both.”",
  },

  {
    name: "― Joyce Carol Oates",
    quoteText: "“Keep a light, hopeful heart. But ­expect the worst.”",
  },

  {
    name: " Mahatma Gandhi",
    quoteText: "“Be the change that you wish to see in the world.”",
  },
  {
    name: " ― Mark Twain",
    quoteText: "“If you tell the truth, you don't have to remember anything.”",
  },
];

function displayQuotes() {
  var randomNum = Math.floor(Math.random() * authors.length);

  document.getElementById("text").innerHTML = `${authors[randomNum].quoteText}`;
  document.getElementById("name").innerHTML = ` ${authors[randomNum].name} `;
  var currentIndex;
  do {
    currentIndex = randomNum - 1;
    currentIndex++;
  } while (currentIndex !== randomNum);
}
