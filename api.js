//Began fetching biography info for characters from API

//Access token - 10222160096055616

// fetch("https://superheroapi.com/api/10222160096055616/226/biography/", {
//   method: "GET"
// });

// let url = "https://superheroapi.com/api/10222160096055616/";

// let drStrange = document.querySelector("#strangeBio");

// let dsbutton = document.querySelector("#strange");

// dsbutton.addEventListener("click", drstrangeBio);

// function drstrangeBio(e) {
//   e.preventDefault();
//   let drUrl = url + "226/" + "biography/";

//   fetch(drUrl)
//     .then(res => {
//       return res.json();
//     })
//     .then(res => {
//       console.log("success");
//       console.log(res);
//       drStrange.innerText = res.name + " " + "(" + res.aliases + ")";
//     })
//     .catch(err => {
//       console.log("failed", err);
//     });
// }

// let url = "https://www.balldontlie.io/api/v1/players/";

// let drStrange = document.querySelector("#hardenBio");

// let dsbutton = document.querySelector("#harden");

// dsbutton.addEventListener("click", jhardenBio);

// function jhardenBio(e) {
//   e.preventDefault();
//   let drUrl = url + "140/";

//   fetch(drUrl)
//     .then(res => {
//       return res.json();
//     })
//     .then(res => {
//       console.log("success");
//       console.log(res);
//       hardenBio.innerText = res.first_name + " " + res.last_name;
//     })
//     .catch(err => {
//       console.log("failed", err);
//     });
// }
