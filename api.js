//Began fetching biography info for characters from API

//HARDEN BUTTON
let url = "https://www.balldontlie.io/api/v1/players/";

let hardenButton = document.querySelector("#harden");

let firstBio = document.querySelector("#hardenBio");
let firstName = document.querySelector("#hardenName");

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
      firstName.innerHTML = res.first_name + " " + res.last_name;
      firstBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 35.3";
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
      firstName.innerHTML = "";
      firstBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//GREEK FREAK BUTTON
let freakButton = document.querySelector("#freak");

let secondBio = document.querySelector("#freakBio");
let secondName = document.querySelector("#freakName");

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
      secondName.innerHTML = res.first_name + " " + res.last_name;
      secondBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 30.0";
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
      secondName.innerHTML = "";
      secondBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DAME BUTTON
let dameButton = document.querySelector("#dame");

let thirdBio = document.querySelector("#dameBio");
let thirdName = document.querySelector("#dameName");

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
      thirdName.innerHTML = res.first_name + " " + res.last_name;
      thirdBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 29.8";
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
      thirdName.innerHTML = "";
      thirdBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//TRAE BUTTON
let traeButton = document.querySelector("#trae");

let fourthBio = document.querySelector("#traeBio");
let fourthName = document.querySelector("#traeName");

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
      fourthName.innerHTML = res.first_name + " " + res.last_name;
      fourthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 29.3";
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
      fourthName.innerHTML = "";
      fourthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//BEAL BUTTON
let bealButton = document.querySelector("#beal");

let fifthBio = document.querySelector("#bealBio");
let fifthName = document.querySelector("#bealName");

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
      fifthName.innerHTML = res.first_name + " " + res.last_name;
      fifthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 29.2";
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
      fifthName.innerHTML = "";
      fifthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LUKA BUTTON
let lukaButton = document.querySelector("#luka");

let sixthBio = document.querySelector("#lukaBio");
let sixthName = document.querySelector("#lukaName");

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
      sixthName.innerHTML = res.first_name + " " + res.last_name;
      sixthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 28.8";
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
      sixthName.innerHTML = "";
      sixthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//KAWHI BUTTON
let kawhiButton = document.querySelector("#kawhi");

let seventhBio = document.querySelector("#kawhiBio");
let seventhName = document.querySelector("#kawhiName");

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
      seventhName.innerHTML = res.first_name + " " + res.last_name;
      seventhBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 27.1";
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
      seventhName.innerHTML = "";
      seventhBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DBOOK BUTTON
let dbookButton = document.querySelector("#dbook");

let eigthBio = document.querySelector("#dbookBio");
let eigthName = document.querySelector("#dbookName");

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
      eigthName.innerHTML = res.first_name + " " + res.last_name;
      eigthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 26.7";
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
      eigthName.innerHTML = "";
      eigthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//RUSS BUTTON
let russButton = document.querySelector("#russ");

let ninthBio = document.querySelector("#russBio");
let ninthName = document.querySelector("#russName");

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
      ninthName.innerHTML = res.first_name + " " + res.last_name;
      ninthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 26.7";
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
      ninthName.innerHTML = "";
      ninthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//AD BUTTON
let adButton = document.querySelector("#ad");

let tenthBio = document.querySelector("#adBio");
let tenthName = document.querySelector("#adName");

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
      tenthName.innerHTML = res.first_name + " " + res.last_name;
      tenthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 26.5";
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
      tenthName.innerHTML = "";
      tenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LBJ BUTTON
let lbjButton = document.querySelector("#lbj");

let eleventhBio = document.querySelector("#lbjBio");
let eleventhName = document.querySelector("#lbjName");

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
      eleventhName.innerHTML = res.first_name + " " + res.last_name;
      eleventhBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 25.0";
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
      eleventhName.innerHTML = "";
      eleventhBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//LAVINE BUTTON
let lavineButton = document.querySelector("#lavine");

let twelthBio = document.querySelector("#lavineBio");
let twelthName = document.querySelector("#lavineName");

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
      twelthName.innerHTML = res.first_name + " " + res.last_name;
      twelthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 24.9";
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
      twelthName.innerHTML = "";
      twelthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//BI BUTTON
let biButton = document.querySelector("#bi");

let thirteenthBio = document.querySelector("#biBio");
let thirteenthName = document.querySelector("#biName");

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
      thirteenthName.innerHTML = res.first_name + " " + res.last_name;
      thirteenthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 24.9";
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
      thirteenthName.innerHTML = "";
      thirteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//DMITCH BUTTON
let dmitchButton = document.querySelector("#dmitch");

let fourteenthBio = document.querySelector("#dmitchBio");
let fourteenthName = document.querySelector("#dmitchName");

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
      fourteenthName.innerHTML = res.first_name + " " + res.last_name;
      fourteenthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 24.3";
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
      fourteenthName.innerHTML = "";
      fourteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}

//SIAKAM BUTTON
let siakamButton = document.querySelector("#siakam");

let fifteenthBio = document.querySelector("#siakamBio");
let fifteenthName = document.querySelector("#siakamName");

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
      fifteenthName.innerHTML = res.first_name + " " + res.last_name;
      fifteenthBio.innerHTML =
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
        res.weight_pounds +
        "<br />" +
        "PPG: 23.4";
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
      fifteenthName.innerHTML = "";
      fifteenthBio.innerHTML = "";
    })
    .catch(err => {
      console.log("failed", err);
    });
}
