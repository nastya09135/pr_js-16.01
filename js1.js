'use strict';

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
const getInput = document.querySelectorAll('.task');
const getP = document.querySelector('#test');

for (let i = 0; i < getInput.length; i += 1) {
    getInput[i].addEventListener('blur', func);
}

function func() {
    getP.innerHTML = getP.innerHTML + this.value;
}