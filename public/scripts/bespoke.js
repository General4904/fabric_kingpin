console.log(`Bespoke`);

const bespokeFullname = document.getElementById("bespoke-fullname");
const bespokeEmail = document.getElementById("bespoke-email");
const bespokePhoneNumber = document.getElementById("bespoke-phone-number");
const beSpokeTextInput = document.getElementsByClassName("bespoke-text-input");
const eventDate = document.getElementById("event-date");

console.log(eventDate);

const rawData = localStorage.getItem("userProfile");
const userData = JSON.parse(rawData);

window.addEventListener("load", function () {
  for (let i = 0; i < beSpokeTextInput.length; i++) {
    if (
      !userData ||
      !userData.firstname ||
      !userData.lastname ||
      !userData.middlename
    ) {
      beSpokeTextInput[i].disabled = false;
      beSpokeTextInput[i].value = "";
    } else {
      beSpokeTextInput[i].disabled = true;
      bespokeFullname.value = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
      bespokeEmail.value = `${userData.email}`;
      bespokePhoneNumber.value = `${userData.phoneNumber}`;
    }
  }

  const today = new Date();

  today.setDate(today.getDate() + 14);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const twoWeeksFromNow = `${year}-${month}-${day}`;
  eventDate.min = twoWeeksFromNow;
  eventDate.value = twoWeeksFromNow;
});
