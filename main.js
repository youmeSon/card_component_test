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
  .catch((error) => console.log("error", error));

function displayItem(item) {
  document.querySelector(".loading").style.display = "none";

  const name = document.querySelector(".name");
  const id = document.querySelector(".id");
  const email = document.querySelector(".email");
  const phone = document.querySelector(".phone");
  const course = document.querySelector(".course__subject");
  const status = document.querySelector(".progress__result");

  let formattedName = item.name
    .split(" ")
    .filter((x) => x != "")
    .map((x) => (x = x[0].toUpperCase() + x.substr(1).toLowerCase()))
    .join(" ");

  name.innerText = `${formattedName}`;
  id.innerText = `ID: ${item.id}`;
  email.innerText = `Email: ${item.email}`;
  phone.innerText = `Tel: ${item.telephone}`;
  course.innerText = `${item.course_title}`;
  status.innerText = `${item.status}`;
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
