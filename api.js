//Began fetching biography info for characters from API

let url = "https://www.balldontlie.io/api/v1/players/";

let hardenButton = document.querySelector("#harden");

let firstBio = document.querySelector("#hardenBio");

function hardenBio(e) {
  e.preventDefault();
  let newUrl = url + "192/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      firstBio.innerText = res.first_name + " " + res.last_name;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nohardenBio(e) {
  e.preventDefault();
  let newUrl = url + "192/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      firstBio.innerText = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

hardenButton.addEventListener("click", hardenBio);
hardenButton.addEventListener("mouseout", nohardenBio);
