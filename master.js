// Handel send Masege
let Send = document.getElementById("btnSend");
let YourName = document.getElementById("Your-Name");
let YourEmail = document.getElementById("Your-Email");
let YourPhone = document.getElementById("Your-Phone");
let form = document.querySelector("form");
let msgForm = document.querySelector(".msgForm");

// let  send form
function sendEmail() {
  let bodyMassege = `Name: ${YourName.value} <br> 
    Email: ${YourEmail.value} <br>
    Phone: ${YourPhone.value} <br>
    From Wep: "SKRILIK"`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "faresshessen61@gmail.com",
    Password: "DB87645B09CFA82F10DB8793B350DBDD0679",
    To: "faresshessen61@gmail.com",
    From: "faresshessen61@gmail.com",
    Subject: YourName.value,
    Body: bodyMassege,
  });
  YourName.value = "";
  YourEmail.value = "";
  YourPhone.value = "";
}

Send.onclick = function () {
  if (
    YourName.value !== "" &&
    YourEmail.value !== "" &&
    YourPhone.value !== ""
  ) {
    sendEmail();
    showPopup();
  } else {
    msgForm.style.display = "block";
    msgForm.innerHTML = "Writ all Input blank";
    setTimeout(() => {
      msgForm.style.display = "none";
    }, 3000);
  }
};

// handel Popup
let btnPopup = document.querySelector("#btnPopup");
let overlay = document.createElement("div");

//function  showPopup
function showPopup() {
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  document.querySelector(".popup").style.display = "block";
}

//function  hidePopup
btnPopup.onclick = function () {
  overlay.remove();
  document.querySelector(".popup").style.display = "none";
};
