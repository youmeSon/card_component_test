// fetch the items
function loadItems() {
  return fetch("http://leads.beta.openstudycollege.info/getTopLeads")
    .then((response) => response.json())
    .then((items) => items);
}

loadItems()
  .then((items) => {
    displayItem(items[0]);
  })
  .catch((eroor) => console.log("error", error));

function displayItem(item) {
  console.log(item);
}

// toggle

const galleryBtn = document.querySelector(".gallery__toggle-btn i");
const galleryItems = document.querySelector(".gallery__container");

const courseBtn = document.querySelector(".course__toggle-btn i");
const courseContent = document.querySelector(".course__content");
const course = document.querySelector("#course");

const changeToggleBtn = (event) => {
  if (event.target.classList.contains("fa-chevron-right")) {
    event.target.classList.remove("fa-chevron-right");
    event.target.classList.add("fa-chevron-down");
  } else {
    event.target.classList.add("fa-chevron-right");
    event.target.classList.remove("fa-chevron-down");
  }
};

galleryBtn.addEventListener("click", (event) => {
  galleryItems.classList.toggle("active");
  changeToggleBtn(event);
});

courseBtn.addEventListener("click", (event) => {
  courseContent.classList.toggle("active");
  course.classList.toggle("active");
  changeToggleBtn(event);
});
