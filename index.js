let questionsContainer= document.querySelector('.questions-container');
let btn= document.querySelector('.form__btn');
let submitQuestions= document.querySelector('.submitQuestionsButton');
let submitQuestionsContainer= document.querySelector('.submitQuestionsButton-container');

let mainRightAnswerArray=[];

btn.addEventListener('click', ev => {
  ev.preventDefault();
  let name= document.querySelector('.first-name').value;
  let quantity= document.querySelector('.questions').value;
  let rightAnswerArray=[];

  if (name.length>2 && quantity) {
    questionsContainer.innerHTML= `<h3 class="form__heading">Hello ${name}</h3>`;

    for (let i=1; i<=quantity; i++) {
      let firstNumber= Math.ceil(Math.random() * 10);
      let secondNumber= Math.ceil(Math.random() * 10);
      let rightAnswer= firstNumber*secondNumber;
      rightAnswerArray.push(rightAnswer);

      let question= `<li>
        <span class="iNumber">Q<sub>${i}</sub>.</span> <span class="firstNumber">${firstNumber}</span> x <span class="secondNumber">${secondNumber}</span> = <input type="number" class="answer">
      </li>`
      questionsContainer.innerHTML+= question;
    }


  } else {
    let error= `<li>Please fill the form first</b></li>`;
    questionsContainer.innerHTML= error;
  }

  document.querySelector('.first-name').value='';
  document.querySelector('.questions').value='';
  submitQuestionsContainer.style.display= 'block';
  mainRightAnswerArray=rightAnswerArray
  rightAnswerArray=[];
})

// submitQuestionsButton
  submitQuestions.addEventListener('click', ev => {
    let studentInputArray= document.querySelectorAll('.answer');

    for (let i=0; i<studentInputArray.length; i++) {

      if(studentInputArray[i].value==mainRightAnswerArray[i]) {
        console.log('ok');
        studentInputArray[i].style.backgroundColor='green';
      } else {
        console.log('no');
        studentInputArray[i].style.backgroundColor='red';
      }
    }

  })
