'use strict';

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
document.querySelectorAll('p').forEach(p => {
    p.onclick = () => (p.innerText= Math.pow(p.innerText, 2))
})
