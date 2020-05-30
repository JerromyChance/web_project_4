//variable declarations
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const edit = document.querySelector('.profile__edit-btn');
const name = document.querySelector('.profile__name');
const editName = document.querySelector('.edit_name');
const job = document.querySelector('.profile__job');
const editJob = document.querySelector('.edit_job');
const save = document.querySelector('.modal__save-btn');
const close = document.querySelector('.modal__close-btn');


//change modal display to 'flex' from 'none; open modal 
// closes on `.modal__close-btn` or `.modal__save-btn` are clicked
function modalDisplay() {
  modal.classList.toggle('modal');
}

//edit and apply changes to profile
//prevent default load upon clicking '.modal__save-btn'
//call modalClose when '.modal__save-btn' is clicked
function update(event) {
  name.textContent = editName.value;
  job.textContent = editJob.value;

  event.preventDefault();

  modalDisplay()
}

//open modal when '.profile__edit-btn' is clicked
edit.addEventListener('click', modalDisplay);

//save and close when '.modal__save-btn' is clicked
save.addEventListener('click',update);

//close modal when '.modal__close-btn' or 'modal__save-btn' are clicked
close.addEventListener('click', modalDisplay);