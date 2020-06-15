//-------------------------General-----------------------------------

const modalWindow = document.querySelector('.modal');
const likeButton = document.querySelector('.place__like-btn');
const modalSwitch = document.querySelector('.modal__display-image')

function modalDisplay(modal) {
  modal.classList.toggle('modal');
}

//---------------------Edit Profile-----------------------------------

const editModal = document.querySelector('.modal__type_edit-profile');
const editButton = document.querySelector('.profile__edit-btn');
const name = document.querySelector('.profile__name');
const editName = document.querySelector('.edit_name');
const job = document.querySelector('.profile__job');
const editJob = document.querySelector('.edit_job');
const editSaveButton = document.querySelector('.edit__save');
const editClose = editModal.querySelector('.modal__edit-close');

function updateProfile(event) {
  name.textContent = editName.value;
  job.textContent = editJob.value;

  event.preventDefault();

  modalDisplay(editModal)
}

editButton.addEventListener('click', () => {
  modalDisplay(editModal);
});

editClose.addEventListener('click', () => {
  modalDisplay(editModal);
});

editModal.addEventListener('submit', updateProfile);

// editSaveButton.addEventListener('click', updateProfile);


//------------------------Add Place-----------------------------------

const addModal = document.querySelector('.modal__type_add-place');
const addButton = document.querySelector('.profile__add-btn');
const placeHeading = document.querySelector('.place__heading');
const addPLace = document.querySelector('.add__place');
const placeImage = document.querySelector('.place__image');
const addPlaceImage = document.querySelector('.add_place-image');
const addSaveButton = document.querySelector('.place__save');
const addClose = addModal.querySelector('.modal__add-close');
const newPLace = addModal.querySelector('.modal__form');

function addPlace(event) {
  placeHeading.textContent = addPLace.value;
  placeImage.textContent = addPlaceImage.value;
  
  event.preventDefault();

  modalDisplay();
};

const list = document.querySelector('.places');

const renderPlace = (data) => {
  list.prepend(createPlace(data));
};

addButton.addEventListener('click', () => {
  modalDisplay(addModal);
});

addClose.addEventListener('click', () => {
  modalDisplay(addModal);
});

addModal.addEventListener('submit', (e) => {
  e.preventDefault();

  renderPlace({name: placeHeading, link: placeImage});

  modalDisplay(addModal);
});

// addSaveButton.addEventListener('click', addPlace);
addModal.addEventListener('submit', addPlace);



//--------------------------------Image Zoom-----------------------------

const imageModal = document.querySelector('.modal__type_image');
const modalImage = document.querySelector('.modal__image');
const modalCaption = document.querySelector('.modal__image-caption');
const imageClose = imageModal.querySelector('.modal__image-close');

function imageModalDisplay() {
  imageModal.classList.toggle('modal__display-image');
}

function displayImage(data){

  modalImage.src = data.link;
  modalImage.alt = data.name;
  modalCaption.textContent = data.name;

  imageModalDisplay(imageModal);
};

imageClose.addEventListener('click', () => {
  imageModalDisplay(imageModal);
});


//------------------------------Like Button-----------------------------

function toggleHeart(e){
  e.target.classList.toggle('place__liked');
}



//-------------------------------Default Places-------------------------

//card array
const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const placeTemplate = document.querySelector('.place-template').content.querySelector('.place');

const createPlace = (data) => {
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');
  const placeHeading = placeElement.querySelector('.place__heading');
  const placeLike = placeElement.querySelector('.place__like-btn');
  const placeRemove = placeElement.querySelector('.place__remove-btn');

  placeHeading.textContent = data.name;
  placeImage.style.backgroundImage = `url(${data.link})`;

  placeLike.addEventListener('click', (e) => {
    toggleHeart(e);
  })

  placeRemove.addEventListener('click', (e) => {
    e.target.closest('.place').remove();
  })

  placeImage.addEventListener('click', () => {
    displayImage(data);
  })

  return placeElement;
}



initialCards.forEach ((data) => {
  renderPlace(data);
})

  

