const appendImageElem = (keyword, index) => {
  const imgElem = document.createElement("img");
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

  const galleryElem = document.querySelector(".gallery");
  galleryElem.appendChild(imgElem);
};

const removePhoto = () => {
  const galleryElem = document.querySelector(".gallery");
  galleryElem.innerHTML = "";
};

const searchPhoto = (event) => {
  const keyword = event.target.value;
  if (event.key === "Enter" && keyword) {
    removePhoto();
    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);
    }
  }
};

const run = () => {
  const inputElem = document.querySelector("input");
  inputElem.addEventListener("keydown", searchPhoto);
};

run();
