const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");

const searchForm = document.getElementById("best-books-form");
const searchBtn = document.getElementById("submit");

const myAPI = `bfqKpeqFxy7G14t2fA0MSuoUGfpq2Xbl`;
const url = `https://api.nytimes.com/svc/books/v3/lists/overview/hardcover-fiction.json?api-key=`;
const bookurl = `https://api.nytimes.com/svc/books/v3/lists/overview/hardcover-fiction/best-sellers.json?api-key=`;

const myUrl = `${bookurl}` + `${myAPI}`;

function booksEl() {
  fetch(`${myUrl}`)
    .then((response) => response.json())
    .then((data) => {
      const bookOne = data.results.lists[0].books[0];
      const bookOneEl = [bookOne.title, bookOne.author, bookOne.description];
      document.querySelector(".book-one").innerHTML = bookOneEl;

      const bookTwo = data.results.lists[0].books[1];
      const bookTwoEl = [bookTwo.title, bookTwo.author, bookTwo.description];
      document.querySelector(".book-two").innerHTML = bookTwoEl;

      const bookThree = data.results.lists[0].books[2];
      const bookThreeEl = [
        bookThree.title,
        bookThree.author,
        bookThree.description,
      ];
      document.querySelector(".book-three").innerHTML = bookThreeEl;

      const bookFour = data.results.lists[0].books[3];
      const bookFourEl = [
        bookFour.title,
        bookFour.author,
        bookFour.description,
      ];
      document.querySelector(".book-four").innerHTML = bookFourEl;

      const bookFive = data.results.lists[0].books[4];
      const bookFiveEl = [
        bookFive.title,
        bookFive.author,
        bookFive.description,
      ];
      document.querySelector(".book-five").innerHTML = bookFiveEl;

      console.log(booksEl);
    });
  document.querySelector("#books-container").style.display = "block";
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  booksEl(searchForm.value);
});

// Fetch bestselling books for date and add top 5 to page
