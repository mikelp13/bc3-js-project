import '../css/styles.css';
// import devTemplates from '../templates/dev-templates.hbs';
import { modalBackDrop } from '../modal-window/dev-modal';
// import { modalBackDrop } from '../../modal/modalBackDrop';

const studentBtn = document.querySelector('.js-students');
studentBtn.addEventListener('click', hendelOpenStudentModal);
function hendelOpenStudentModal(e) {
  modalBackDrop();
  const container = document.querySelector('.modal');
  const closeBnt = document.querySelector('.student-modal__close-btn');
  function closeModal() {
    container.classList.remove('show-modal');
  }
  closeBnt.addEventListener('click', closeModal);
}
