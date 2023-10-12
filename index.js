let questionsContainer= document.querySelector('.questions-container');
let btn= document.querySelector('.form__btn');
let submitQuestions= document.querySelector('.submitQuestionsButton');
let submitQuestionsContainer= document.querySelector('.submitQuestionsButton-container');
let submitQuestionsNote= document.querySelector('.submitQuestionsNote');
let newPractice= document.querySelector('.newPractice');
let formMistake= document.querySelector('.formMistake');
let form= document.querySelector('.form');
let formMistakeButton= document.querySelector('.formMistake__button');
let checkAnswersPopup= document.querySelector('.checkAnswersPopup');
let checkAnswersPopupButton= document.querySelector('.checkAnswersPopup__button');
let newPracticeLink= document.querySelector('.newPractice__link');

let mainRightAnswerArray=[];
let formMistakeButtonNotClicked= true;
let checkAnswersPopupButtonNotClicked= true;

btn.addEventListener('click', ev => {
  ev.preventDefault();
  let name= document.querySelector('.first-name').value;
  let quantity= document.querySelector('.questions').value;
  let rightAnswerArray=[];
  submitQuestionsNote.style.display= 'none';

  if (name.length>2 && quantity) {
    questionsContainer.innerHTML= `<h3 class="form__heading">Hallo ${name}</h3>`;

    // start radios section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const radios = document.querySelectorAll('input[type="radio"]');
    // const radios = document.querySelectorAll('.input-container').input;
    let radiosNumber = 10;

    for (let i = 0; i < radios.length; i++) {
      // console.log(radios[i].value);
      if (radios[i].checked) {
        console.log(radios[i].value);
        radiosNumber = radios[i].value;
      }

    }

// end of test +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    for (let i=1; i<=quantity; i++) {
      let firstNumber= Math.ceil(Math.random() * 10);
      // added ++++++
      while (firstNumber > radiosNumber) {
        firstNumber= Math.ceil(Math.random() * 10);
      }
      // finish +++++
      let secondNumber= Math.ceil(Math.random() * 10);
      let rightAnswer= firstNumber*secondNumber;
      rightAnswerArray.push(rightAnswer);

      let question= `<li>
        <span class="iNumber">Q<sub>${i}</sub>.</span> <span class="firstNumber">${firstNumber}</span> x <span class="secondNumber">${secondNumber}</span> = <input type="number" class="answer">
      </li>`
      questionsContainer.innerHTML+= question;
    }

    document.querySelector('.first-name').value='';
    document.querySelector('.questions').value='';
    submitQuestionsContainer.style.display= 'block';
    mainRightAnswerArray=rightAnswerArray
    rightAnswerArray=[];
    window.location.href='#questions-container';

  } else {
      formMistake.style.transform= 'translateY(0)';
      // window.location.href='#form__heading';
  }
})

// submitQuestionsButton
  submitQuestions.addEventListener('click', ev => {
    let studentInputArray= document.querySelectorAll('.answer');
    newPractice.style.display= 'block';
    window.location.href='#newPractice';


    if (checkAnswersPopupButtonNotClicked) {
      questionsContainer.style.opacity= '.1';
      submitQuestionsContainer.style.opacity= '.1';
      newPracticeLink.style.opacity= '0';
        checkAnswersPopup.style.opacity= '1';
        checkAnswersPopup.style.transform= 'translateX(0)';
    }


      let allQuestions= studentInputArray.length;
      let studentNote= 0;
    for (let i=0; i<studentInputArray.length; i++) {


      if(studentInputArray[i].value==mainRightAnswerArray[i]) {
        studentNote++;
        studentInputArray[i].style.backgroundColor='green';
      } else {
        console.log('no');
        studentInputArray[i].style.backgroundColor='red';
      }

    }
    let noteText= `Deine Note ist <b>${studentNote}</b> von <b>${allQuestions}</b>`;
    submitQuestionsNote.innerHTML= noteText;
    submitQuestionsNote.style.display= 'block';
  })

  // new practice
  newPractice.addEventListener('click', ev => {
    newPractice.style.display= 'none';
  })

  // formMistakeButton
  formMistakeButton.addEventListener('click', ev => {
    formMistake.style.transform= 'translateY(-120%)';
    form.style.opacity= '1';
  })

  // checkAnswersPopupButton
  checkAnswersPopupButton.addEventListener('click', ev => {

    newPracticeLink.style.opacity= '1';
    newPracticeLink.classList.add('bounceInRight', 'delay-1s');


    checkAnswersPopup.style.opacity= '0';
    checkAnswersPopup.style.transform= 'translateX(-100%)';
    questionsContainer.style.opacity= '1';
    submitQuestionsContainer.style.opacity= '1';
    checkAnswersPopupButtonNotClicked= false;
  })
