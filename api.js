//Began fetching biography info for characters from API

//HARDEN BUTTON
let url = "https://www.balldontlie.io/api/v1/players/";

let hardenButton = document.querySelector("#harden");

let firstBio = document.querySelector("#hardenBio");

hardenButton.addEventListener("click", hardenBio);
hardenButton.addEventListener("mouseout", nohardenBio);

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
      firstBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
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
      firstBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//GREEK FREAK BUTTON
let freakButton = document.querySelector("#freak");

let secondBio = document.querySelector("#freakBio");

freakButton.addEventListener("click", freakBio);
freakButton.addEventListener("mouseout", nofreakBio);

function freakBio(e) {
  e.preventDefault();
  let newUrl = url + "15/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      secondBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nofreakBio(e) {
  e.preventDefault();
  let newUrl = url + "15/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      secondBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DAME BUTTON
let dameButton = document.querySelector("#dame");

let thirdBio = document.querySelector("#dameBio");

dameButton.addEventListener("click", dameBio);
dameButton.addEventListener("mouseout", nodameBio);

function dameBio(e) {
  e.preventDefault();
  let newUrl = url + "278/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      thirdBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nodameBio(e) {
  e.preventDefault();
  let newUrl = url + "278/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      thirdBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//TRAE BUTTON
let traeButton = document.querySelector("#trae");

let fourthBio = document.querySelector("#traeBio");

traeButton.addEventListener("click", traeBio);
traeButton.addEventListener("mouseout", notraeBio);

function traeBio(e) {
  e.preventDefault();
  let newUrl = url + "490/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fourthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function notraeBio(e) {
  e.preventDefault();
  let newUrl = url + "490/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fourthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//BEAL BUTTON
let bealButton = document.querySelector("#beal");

let fifthBio = document.querySelector("#bealBio");

bealButton.addEventListener("click", bealBio);
bealButton.addEventListener("mouseout", nobealBio);

function bealBio(e) {
  e.preventDefault();
  let newUrl = url + "37/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fifthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nobealBio(e) {
  e.preventDefault();
  let newUrl = url + "37/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fifthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LUKA BUTTON
let lukaButton = document.querySelector("#luka");

let sixthBio = document.querySelector("#lukaBio");

lukaButton.addEventListener("click", lukaBio);
lukaButton.addEventListener("mouseout", nolukaBio);

function lukaBio(e) {
  e.preventDefault();
  let newUrl = url + "132/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      sixthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nolukaBio(e) {
  e.preventDefault();
  let newUrl = url + "132/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      sixthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//KAWHI BUTTON
let kawhiButton = document.querySelector("#kawhi");

let seventhBio = document.querySelector("#kawhiBio");

kawhiButton.addEventListener("click", kawhiBio);
kawhiButton.addEventListener("mouseout", nokawhiBio);

function kawhiBio(e) {
  e.preventDefault();
  let newUrl = url + "274/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      seventhBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nokawhiBio(e) {
  e.preventDefault();
  let newUrl = url + "274/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      seventhBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DBOOK BUTTON
let dbookButton = document.querySelector("#dbook");

let eigthBio = document.querySelector("#dbookBio");

dbookButton.addEventListener("click", dbookBio);
dbookButton.addEventListener("mouseout", nodbookBio);

function dbookBio(e) {
  e.preventDefault();
  let newUrl = url + "57/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      eigthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nodbookBio(e) {
  e.preventDefault();
  let newUrl = url + "57/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      eigthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//RUSS BUTTON
let russButton = document.querySelector("#russ");

let ninthBio = document.querySelector("#russBio");

russButton.addEventListener("click", russBio);
russButton.addEventListener("mouseout", norussBio);

function russBio(e) {
  e.preventDefault();
  let newUrl = url + "472/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      ninthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function norussBio(e) {
  e.preventDefault();
  let newUrl = url + "472/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      ninthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//AD BUTTON
let adButton = document.querySelector("#ad");

let tenthBio = document.querySelector("#adBio");

adButton.addEventListener("click", adBio);
adButton.addEventListener("mouseout", noadBio);

function adBio(e) {
  e.preventDefault();
  let newUrl = url + "117/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      tenthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function noadBio(e) {
  e.preventDefault();
  let newUrl = url + "117/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      tenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LBJ BUTTON
let lbjButton = document.querySelector("#lbj");

let eleventhBio = document.querySelector("#lbjBio");

lbjButton.addEventListener("click", lbjBio);
lbjButton.addEventListener("mouseout", nolbjBio);

function lbjBio(e) {
  e.preventDefault();
  let newUrl = url + "237/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      eleventhBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nolbjBio(e) {
  e.preventDefault();
  let newUrl = url + "237/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      eleventhBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LAVINE BUTTON
let lavineButton = document.querySelector("#lavine");

let twelthBio = document.querySelector("#lavineBio");

lavineButton.addEventListener("click", lavineBio);
lavineButton.addEventListener("mouseout", nolavineBio);

function lavineBio(e) {
  e.preventDefault();
  let newUrl = url + "268/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      twelthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nolavineBio(e) {
  e.preventDefault();
  let newUrl = url + "268/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      twelthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//BI BUTTON
let biButton = document.querySelector("#bi");

let thirteenthBio = document.querySelector("#biBio");

biButton.addEventListener("click", biBio);
biButton.addEventListener("mouseout", nobiBio);

function biBio(e) {
  e.preventDefault();
  let newUrl = url + "227/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      thirteenthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nobiBio(e) {
  e.preventDefault();
  let newUrl = url + "227/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      thirteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DMITCH BUTTON
let dmitchButton = document.querySelector("#dmitch");

let fourteenthBio = document.querySelector("#dmitchBio");

dmitchButton.addEventListener("click", dmitchBio);
dmitchButton.addEventListener("mouseout", nodmitchBio);

function dmitchBio(e) {
  e.preventDefault();
  let newUrl = url + "322/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fourteenthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nodmitchBio(e) {
  e.preventDefault();
  let newUrl = url + "322/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fourteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//SIAKAM BUTTON
let siakamButton = document.querySelector("#siakam");

let fifteenthBio = document.querySelector("#siakamBio");

siakamButton.addEventListener("click", siakamBio);
siakamButton.addEventListener("mouseout", nosiakamBio);

function siakamBio(e) {
  e.preventDefault();
  let newUrl = url + "416/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fifteenthBio.innerHTML =
        "Name: " +
        res.first_name +
        " " +
        res.last_name +
        "<br />" +
        "Team: " +
        res.team.full_name +
        "<br />" +
        "Position: " +
        res.position +
        "<br />" +
        "Height: " +
        res.height_feet +
        "'" +
        res.height_inches +
        "<br />" +
        "Weight: " +
        res.weight_pounds;
    })
    .catch(err => {
      console.log("failed", err);
    });
}

function nosiakamBio(e) {
  e.preventDefault();
  let newUrl = url + "416/";

  fetch(newUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success");
      console.log(res);
      fifteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}
