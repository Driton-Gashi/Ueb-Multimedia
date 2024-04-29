
// On Scroll Effect
window.onscroll = () => {
    myFunction();
  };
  
  var header = document.querySelector("header");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  var myFunction = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("header-aktive");
    } else {
      header.classList.remove("header-aktive");
    }
  };

const minecraftAudio = document.querySelector(".minecraft-audio");
const mute = document.querySelector(".mute");
const unMute = document.querySelector(".unMute");

// play music
const playSound = () => {
  minecraftAudio.play();
  unMute.classList.toggle("hide");
  mute.classList.toggle("hide");
};

const stopSound = () => {
  minecraftAudio.pause();
  unMute.classList.toggle("hide");
  mute.classList.toggle("hide");
};

//play music
mute.addEventListener("click", playSound);

//stop music
unMute.addEventListener("click", stopSound);


// Profile Option add and remove
const profileOption = document.querySelector(".profile");
const profile = document.querySelector(".profile img");
const profileMenu = document.querySelector(".profile-menu");
let EmriPerdoruesit = "";
profile.addEventListener("click", () => {
  profileMenu.classList.toggle("hide");
});
// Nese klikon jasht profile menu automatikisht me e mbyll profile menu
document.body.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("profile-menu") &&
    !e.target.parentNode.classList.contains("profile") &&
    !e.target.parentNode.classList.contains("profile-menu") &&
    !e.target.parentNode.classList.contains("status-wrapper") &&
    !e.target.parentNode.classList.contains("edit-profile-li")
  ) {
    profileMenu.classList.add("hide");
  }
});

// Inbox Section

const inboxWrapper = document.querySelector(".inbox-wrapper");
const showInbox = () => {
  inboxWrapper.classList.add("active");
};
const hideInbox = () => {
  inboxWrapper.classList.remove("active");
};


const deleteMessageBtn = document.querySelectorAll(".delete-message");

deleteMessageBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".inbox-message").classList.add("deleted");

    setTimeout(() => {
      e.target.closest(".inbox-message").classList.add("hide");
    }, 500);
  });
});
// Inbox Section end