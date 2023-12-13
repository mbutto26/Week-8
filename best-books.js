const searchForm = document.getElementById("best-books-form");
const searchBtn = document.getElementById("submit");

const myAPI = `bfqKpeqFxy7G14t2fA0MSuoUGfpq2Xbl`;
const url = `https://api.nytimes.com/svc/books/v3/lists/overview/hardcover-fiction.json?api-key=`;
const bookurl = `https://api.nytimes.com/svc/books/v3/lists/overview/hardcover-fiction/best-sellers.json?api-key=`;

const formEl = document.getElementById("best-books-form");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const myUrl = `${bookurl}` + `${myAPI}`;

function booksEl() {
  fetch(`${myUrl}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#books-container").innerHTML =
        data.results.lists[0].books[0].author;
      document.querySelector("#books-container").innerHTML =
        data.results.lists[0].books[0].title;
      document.querySelector("#books-container").innerHTML =
        data.results.lists[0].books[0].description;

      console.log(data);
    });
  document.querySelector("#books-container").style.display = "block";
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  booksEl(searchForm.value);
});

// Fetch bestselling books for date and add top 5 to page
