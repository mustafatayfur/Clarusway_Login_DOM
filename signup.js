//DOM Tree --> Console Tab

// Reaching DOM element
let firstNameInputById = document.getElementById("first_name");
let firstNameInputByClassName = document.getElementsByClassName("input--style-4")[0];
let firstNameInputByTagName= document.getElementsByTagName("input")[0];
let firstNameInputByName= document.getElementsByName("first_name")[0];
let firstNameInputByQuerySelectorId = document.querySelector("#first_name");
let firstNameInputByQuerySelectorClass = document.querySelector(".input--style-4");
let firstNameInputByQuerySelectorAllClass = document.querySelectorAll(".input--style-4")[0];

let lastNameInputById = document.getElementById("last_name");

// console.log(firstNameInputById);
// console.log(firstNameInputByClassName);
// console.log(firstNameInputByTagName);
// console.log(firstNameInputByName);
// console.log(firstNameInputByQuerySelectorId);
// console.log(firstNameInputByQuerySelectorClass);

// attribute vs. property
//getAttribute(""), setAttribute("", "")

firstNameInputById.value = "Ryan";
lastNameInputById.value = "Daniel";

// console.log(firstNameInputById.value);

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥
// document.querySelector("#full_name").value = `${firstNameInputById.value.toUpperCase()} ${lastNameInputById.value.toUpperCase()}`;
// document.getElementsByName("email")[0].value = `${firstNameInputById.value.toLowerCase()}.${lastNameInputById.value.toLowerCase()}@clarusway.com`;
// let positions = document.getElementsByName("position");
// if (document.getElementsByName("email")[0].value.includes("@clarusway.com")) {
//     // positions[0].checked = true;
//     positions[0].setAttribute("checked", true);
// } else {
//     // positions[1].checked = true;
//     positions[1].setAttribute("checked", true);
// }

let inputClass = firstNameInputById.getAttribute("class");
// console.log(inputClass);
// firstNameInputById.setAttribute("class", "redColorClass");

//property
// firstNameInputById.className = "redColorClass";
firstNameInputById.classList.add("redColorClass");
// firstNameInputById.classList.remove("input--style-4");
// firstNameInputById.style.color = "red";
console.log(firstNameInputById.className);
console.log(firstNameInputById["className"]);

//innerHTML, innerText, text Content (Header div)
let headerDiv = document.querySelector("#headerId");
// console.log(headerDiv.innerHTML);
// console.log(headerDiv.innerText);
// console.log(headerDiv.textContent);

//img logo append to headerDiv 
//with innerHTML
headerDiv.innerHTML += `<img src="img/logo.png" id="logo" />`;

//child Elements(catch div lastchild and assign class)
let childrenOfHeaderDiv = headerDiv.children;
// console.log(childrenOfHeaderDiv);
// console.log(childrenOfHeaderDiv[1]);
// console.log(headerDiv.firstElementChild);
// console.log(headerDiv.lastElementChild);
headerDiv.lastElementChild.className = "headerLogo";

//parentNode, parentElement(document.documentElement)

//with appendChild
// let logo = document.createElement("img");
// logo.setAttribute("src", "img/logo.png")
// logo.style.width = "50px";
// logo.style.height = "50px";
// headerDiv.appendChild(logo);

//append text to element
let newtext = document.createTextNode(" Way to Reinvent Yourself.");
headerDiv.appendChild(newtext);
// // 🔥🔥🔥🔥🔥  PATH OPTION APPEND CHALLENGE  🔥🔥🔥🔥🔥
//With forEach
var pathList = ["FullStack", "AWS-Devops", "Data Science"];
const paths = document.querySelector('#paths');
for (let i = 0; i < pathList.length; i++) {
    paths.innerHTML += `<option>${pathList[i]}</option>`;
}

// for (item of pathList) {
//   paths.innerHTML += `<option>${item}</option>`;
// }

// pathList.forEach((element) => {
//   paths.innerHTML += `<option>${element}</option>`;
// });


// catching paremeters from url after submit

