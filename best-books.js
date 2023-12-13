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
      console.log(responseJson);

      document.getElementById("books-container") = data.book_details[0],[1], [3];
      console.log(bestBooks);
      
      console.log(bookDescrip);
      
      console.log(bookAuthor);
      
    });
}
//
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
});

