'use strict';

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
const getInput = document.getElementsByTagName('input');
const getP = document.getElementById('test');

for (let i = 0; i < getInput.length; i++) {
    getInput[i].addEventListener('blur', func);
}

function func() {
    getP.innerHTML =this.value;
}