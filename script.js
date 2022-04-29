fetch('https://thejsway-server.herokuapp.com/api/articles')
  .then(response => response.json())
  .then(articles => {
    // Articles is an array
    articles.forEach(article => {
      // content, id, and title

      // 1) Create element
      const titleElement = document.createElement('h1')
      // 2) Add content / put stuff
      titleElement.textContent = article.title
      // 3) Append / put into our div
      document.querySelector('#articles').appendChild(titleElement)

      const contentElement = document.createElement('p')
      contentElement.textContent = article.content
      document.querySelector('#articles').appendChild(contentElement)
    })
  })

// fetch('https://thejsway-server.herokuapp.com/api/articles')
//   .then(response => response.json())
//   .then(articles => {
//     // Articles is an array
//     articles.forEach(article => showArticle(article))
//   })

// function showArticle (article) {
//   // content, id, and title

//   // 1) Create element
//   const titleElement = document.createElement('h1')
//   // 2) Add content / put stuff
//   titleElement.textContent = article.title
//   // 3) Append / put into our div
//   document.querySelector('#articles').appendChild(titleElement)

//   const contentElement = document.createElement('p')
//   contentElement.textContent = article.content
//   document.querySelector('#articles').appendChild(contentElement)
// }
