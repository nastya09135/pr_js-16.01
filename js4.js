'use strict';

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

const getInput = document.querySelectorAll('.task');

for (let i = 0; i < getInput.length; i += 1) {
    getInput[i].addEventListener('blur', func);
}

function func() {
    if (Number(this.dataset.length) === Number(this.value.length)) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
}