const image = document.querySelector("img");
const textUsed = document.querySelector(".text");
const userName = document.querySelector(".username");

const persons = [
  {
    name: "Chandu",
    photoUrl: "./images/girl1.jfif",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl: "./images/girl2.jfif",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl: "./images/girl3.jfif",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

let index = 0;

slideShow();

function slideShow() {
  const { name, photoUrl, text } = persons[index];
  image.src = photoUrl;
  textUsed.innerText = text;
  userName.innerText = name;
  index++;
  if (index === persons.length) {
    index = 0;
  }
  setTimeout(() => {
    slideShow();
  }, 1000);
}
