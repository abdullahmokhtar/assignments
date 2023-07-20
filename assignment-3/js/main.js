const nameElement = document.getElementById("name");
const urlElement = document.getElementById("url");
const btnElement = document.getElementById("btn");
const tableContentElement = document.getElementById("t-content");
const deleteBtn = document.getElementById("delbtn");
let bookmarkList;

const display = () => {
  let data = "";
  for (let i = 0; i < bookmarkList.length; i++) {
    data += `<tr>
    <td>${i + 1}</td>
    <td class="text-capitalize">${bookmarkList[i].name}</td>
    <td><a href="${
      bookmarkList[i].url
    }" target="_blank" class="btn visitbtn"><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
    <td><button type="button" class="btn btn-danger" onclick=deleteHandler(${i})><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
  }
  tableContentElement.innerHTML = data;
};

const reset = () => {
  nameElement.value = "";
  urlElement.value = "";
  nameElement.classList.remove("is-valid");
  urlElement.classList.remove("is-valid");
};

const deleteHandler = (index) => {
  bookmarkList.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
  display();
};

if (localStorage.getItem("bookmarks")) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
  display();
} else {
  bookmarkList = [];
}

const validateName = () => {
  let index = bookmarkList.findIndex(
    (bookmark) => bookmark.name === nameElement.value
  );

  console.log(index);
  if (nameElement.value.trim().length >= 3 && index === -1) {
    nameElement.classList.add("is-valid");
    nameElement.classList.remove("is-invalid");
  } else {
    nameElement.classList.remove("is-valid");
    nameElement.classList.add("is-invalid");
  }
  return nameElement.value.trim().length >= 3 && index === -1;
};

const validateURL = () => {
  const pattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
  if (pattern.test(urlElement.value)) {
    urlElement.classList.add("is-valid");
    urlElement.classList.remove("is-invalid");
  } else {
    urlElement.classList.remove("is-valid");
    urlElement.classList.add("is-invalid");
  }
  return pattern.test(urlElement.value);
};

btnElement.onclick = () => {
  const bookmark = {
    name: nameElement.value,
    url: urlElement.value,
  };
  if (!validateName() || !validateURL()) {
    const element = document.createElement("div");
    element.innerHTML = `
    <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <p class="pb-2 fw-semibold fs-4">Site Name or Url is not valid, Please follow the rules below :</p>
    <ul>
    <li ><i class="fa-regular fa-circle-right p-2"></i> Site name must be unique and contain at least 3 characters</li>
    <li ><i class="fa-regular fa-circle-right p-2"></i> Site URL must be a valid one</li>
    </ul>`;
    swal({
      content: element,
    });
    return;
  }

  bookmarkList.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
  reset();
  display();
};
