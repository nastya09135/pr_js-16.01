'use strict';

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.
const getInput = document.querySelectorAll('.task');
for (let i = 0; i < getInput.length; i ++) {
    getInput[i].addEventListener('click', func);
}
function func() {
    alert(this.value);
    this.removeEventListener('click', func);
}