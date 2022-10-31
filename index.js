let second = document.querySelector(".list");
fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((i) => i.json())
  .then((s) => {
    s.Search.forEach((item) => {
      second.innerHTML += `<li> 
      <img src ='${item.Poster}'/> 
      <h4>${item.Title}</h4>
       <h4>Year:${item.Year}</h4> 
       </li>`;
    });
  });
