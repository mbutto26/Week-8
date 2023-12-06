const myAPI = `bfqKpeqFxy7G14t2fA0MSuoUGfpq2Xbl`;
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=`;
const bookurl = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction/best-sellers/history.json`;

///lists/2019-01-20/hardcover-fiction.json

//
const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");

const myURL = `${bookurl} ${myAPI}`;
//

fetch(myUrl)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    let bookTitle = responseJson.results.book_details[0];
    console.log(bestBooks);
    let bookDescrip = responseJson.results.book_details[1];
    console.log(bookDescrip);
    let bookAuthor = responseJson.results.book_details[3];
    console.log(bookAuthor);
    let bestBooks = `${bookTitle}, ${bookDescrip}, ${bookAuthor}`;
    document.getElementById(`books-container`).innerText = bestBooks;
  });
//
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
});

/*

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });*/
