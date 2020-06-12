


//------------PROFILE MODAL

//variable declarations
const modalWindow = document.querySelector('.modal');
const editModal = document.querySelector('.modal__type_edit-profile');
const addModal = document.querySelector('.modal__type_add-place');
const imageModal = document.querySelector('.modal__type_image');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');

const name = document.querySelector('.profile__name');
const editName = document.querySelector('.edit_name');

const job = document.querySelector('.profile__job');
const editJob = document.querySelector('.edit_job');

const placeHeading = document.querySelector('.place__heading');
const addPLace = document.querySelector('.add__place');

const placeImage = document.querySelector('.place__image');
const addPlaceImage = document.querySelector('.add_place-image');

const editSaveButton = document.querySelector('.edit__save');
const addSaveButton = document.querySelector('.place__save');

const editClose = editModal.querySelector('.modal__edit-close');
const addClose = addModal.querySelector('.modal__add-close');
const imageClose = imageModal.querySelector('.modal__image-close');

const likeButton = document.querySelector('.place__like-btn');


//change modal display to 'flex' from 'none; open modal 
// closes on `.modal__close-btn` or `.modal__save-btn` are clicked
function modalDisplay(modal) {
  modal.classList.toggle('modal');
}


//edit and apply changes to profile
//prevent default load upon clicking '.modal__save-btn'
//call modalClose when '.modal__save-btn' is clicked
function updateProfile(event) {
  name.textContent = editName.value;
  job.textContent = editJob.value;

  event.preventDefault();

  modalDisplay()
}

                function addPlace(event) {
                  placeHeading.textContent = addPLace.value;
                  placeImage.textContent = addPlaceImage.value;

                  event.preventDefault();

                  modalDisplay()
                }

  function showImage() {
    likeButton.style.backgroundImage = url('../../../images/black-heart.png');
  }

//open modal when '.profile__edit-btn' is clicked


editButton.addEventListener('click', () => {
  modalDisplay(editModal);
});
editClose.addEventListener('click', () => {
  modalDisplay(editModal);
});
editModal.addEventListener('submit', updateProfile);

addButton.addEventListener('click', () => {
  modalDisplay(addModal);
});
addClose.addEventListener('click', () => {
  modalDisplay(addModal);
});
addModal.addEventListener('submit', addPlace);

// placeImage.addEventListener('click', () => {
//   modalDisplay(imageModal);
// });
imageClose.addEventListener('click', () => {
  modalDisplay(imageModal);
});

// likeButton.addEventListener('click', () => {
//   showImage();
// });

// //save and close when '.modal__save-btn' is clicked
editSaveButton.addEventListener('click', updateProfile);
addSaveButton.addEventListener('click', addPlace);


//----------------------CARDS

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

initialCards.forEach ((data) => {
  const placeTemplate = document.querySelector('.place-template').content.querySelector('.place');
  const placeElement = placeTemplate.cloneNode(true);

  const placeImage = placeElement.querySelector('.place__image');
  const placeHeading = placeElement.querySelector('.place__heading');
  const placeLike = placeElement.querySelector('.place__like-btn');
  const placeRemove = placeElement.querySelector('.place__remove-btn');

  placeHeading.textContent = data.name;
  placeImage.style.backgroundImage = `url(${data.link})`;

  placeLike.addEventListener('click', () => {
    // changeHeartColor()
  })

  placeRemove.addEventListener('click', (e) => {
    // remove card()
    e.target.closest('.place').remove();
  })

  placeImage.addEventListener('click', () => {
      // openModal()
      modalDisplay(imageModal);
      // showImage();
  })

  const list = document.querySelector('.places');
  list.prepend(placeElement);

})