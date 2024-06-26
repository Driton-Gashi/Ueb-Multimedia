
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

// Slider animation

// Slider
const slider = document.querySelector(".moving");

const forward = () => {
  if (slider.classList.contains("forward-1")) {
    slider.classList.remove("forward-1");
    slider.classList.add("forward-2");
  } else if (slider.classList.contains("forward-2")) {
    slider.classList.remove("forward-2");
  } else if (slider.classList.length == 1) {
    slider.classList.add("forward-1");
  } else if (slider.classList.contains("backward-2")) {
    slider.classList.remove("backward-2");
    slider.classList.add("backward-1");
  } else if (slider.classList.contains("backward-1")) {
    slider.classList.remove("backward-1");
  }
  clearInterval(automaticSliderInterval);
  automaticSliderInterval = setInterval(automaticSlider, 5000);
};

const back = () => {
  if (slider.classList.contains("forward-1")) {
    slider.classList.remove("forward-1");
  } else if (slider.classList.contains("forward-2")) {
    slider.classList.remove("forward-2");
    slider.classList.add("forward-1");
  } else if (slider.classList.length == 1) {
    slider.classList.add("backward-1");
  } else if (slider.classList.contains("backward-1")) {
    slider.classList.remove("backward-1");
    slider.classList.add("backward-2");
  } else {
    slider.classList.remove("backward-2");
  }
  clearInterval(automaticSliderInterval);
  automaticSliderInterval = setInterval(automaticSlider, 5000);
};

const automaticSlider = () => {
  if (slider.classList.contains("forward-2")) {
    slider.classList.remove("forward-2");
    slider.classList.add("forward-1");
  } else if (slider.classList.contains("forward-1")) {
    slider.classList.remove("forward-1");
  } else if (slider.classList.length == 1) {
    slider.classList.add("backward-1");
  } else if (slider.classList.contains("backward-1")) {
    slider.classList.remove("backward-1");
    slider.classList.add("backward-2");
  } else {
    slider.classList.remove("backward-2");
    slider.classList.add("forward-2");
  }
};

let automaticSliderInterval = setInterval(automaticSlider, 4000);

// Slider animation end


// Dropdown effect in the nav menu at "Guide" option
const dropdownParent = document.querySelector(".dropdown-parent ");
const dropdownMenu = document.querySelector(".dropdown");
const dropdownIcon = document.querySelector(".dropdown-icon");

dropdownParent.addEventListener("mouseover", () => {
  dropdownMenu.classList.remove("hide");
  dropdownIcon.classList.remove("bi-chevron-down");
  dropdownIcon.classList.add("bi-chevron-up");
});
dropdownParent.addEventListener("mouseout", () => {
  dropdownMenu.classList.add("hide");
  dropdownIcon.classList.add("bi-chevron-down");
  dropdownIcon.classList.remove("bi-chevron-up");
});

// Change profile Status to active, busy or invisible
const profileStatus = document.querySelector(".status");
const statusChange = () => {
  if (profileStatus.value == "active") {
    profileOption.style.setProperty("--selection-background", "green");
  } else if (profileStatus.value == "busy") {
    profileOption.style.setProperty("--selection-background", "red");
  } else if (profileStatus.value == "invisible") {
    profileOption.style.setProperty("--selection-background", "white");
  } else {
  }
};

const menu = document.querySelector(".menu");

const showMenu = () => {
  menu.classList.add("active");
  document.body.classList.add("noScroll");
};
const hideMenu = () => {
  menu.classList.remove("active");
  document.body.classList.remove("noScroll");
};
