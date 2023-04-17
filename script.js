'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log(element.value);

function butotnClick(){
    msg.innerText = 'お名前は' + element.value + 'さんですね';
  }
  
  //let nameText = document.getElementById('nameText');
  let element = document.getElementById('mytext');
  element.value = '名前';
  let msg = document.getElementById('msg');
  
  let checkButton = document.getElementById('loginButton');
  checkButton.addEventListener('click', butotnClick);