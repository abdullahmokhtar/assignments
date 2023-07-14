const qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    qoute: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    qoute: "“Our lives are defined by opporunities even the ones we miss.”",
    author: "Abdullah Mokhtar",
  },
  {
    qoute: "“When you decide to be something, you can be it.”",
    author: "Omar Mohammed",
  },
  {
    qoute: "“We All need memories to remind ourselves who we are.”",
    author: "Kareem Mansour",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    qoute:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "Mahatma Gandhi",
  },
  {
    qoute: "“You miss 100% of the shots you don't take.”",
    author: "Wayne Gretzy",
  },
];

const btnElement = document.getElementById("btn");
const qouteContainerElement = document.getElementById("quote-container");
const authorContainerElement = document.getElementById("author-container");

btnElement.onclick = () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * qoutes.length);
  } while (qouteContainerElement.innerHTML === qoutes[randomNumber].qoute);

  qouteContainerElement.innerHTML = qoutes[randomNumber].qoute;
  authorContainerElement.innerHTML = `by: ${qoutes[randomNumber].author}`;
};

console.log(qoutes.length);
