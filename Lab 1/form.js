function onFormSubmit(e) {
  e.preventDefault();
  const formattedObj = getFormattedData(e);
  console.log("formattedObj", formattedObj);
  console.log("Data", getData())
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(formattedObj),
  });
}

function getFormattedData(e) {
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData.entries());
  const selectedElements = document.querySelectorAll(
    "input[type=checkbox][name=car_type]:checked"
  );
  const vals = Array.from(selectedElements).map((e) => e.value);
  formObj.car_type = vals;
  return formObj;
}

function getData() {
  const formData = {};
  const firstName = document.getElementById("fName").value;
  formData.firstName = firstName;
  const lastName = document.getElementById("lName").value;
  formData.lastName = lastName;
  const favLang = document.querySelector(
    "input[type=radio][name=fav_lang]:checked"
  ).value;
  formData.favLang = favLang;
  const selectedElements = document.querySelectorAll(
    "input[type=checkbox][name=car_type]:checked"
  );
  const vals = Array.from(selectedElements).map((e) => e.value);
  formData.carType = vals;
  const carBrand = document.getElementById("car_brand").value;
  formData.carBrand = carBrand;
  return formData;
}
