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
function modalOpen() {
  modal.classList.toggle('modal');
}

//change modal display to 'none from 'flex; close modal
function modalClose() {
  modal.classList.toggle('modal');
}

//edit and apply changes to profile
//prevent default load upon clicking 'save'
//call modalClose when 'save' is clicked
function update(apply) {
  name.textContent = editName.value;
  job.textContent = editJob.value;

  apply.preventDefault();

  modalClose();
}

//open modal when '.profile__edit-btn' is clicked
edit.addEventListener('click', modalOpen);

//save when '.modal__save-btn' is clicked
save.addEventListener('click',update);

//close modal when '.modal__close-btn' or 'modal__save-btn' are clicked
close.addEventListener('click', modalClose);