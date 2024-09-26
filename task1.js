// Tapşırıq 1: Element Yarat və DOM-a Əlavə Et 
// Bir JavaScript funksiyası yazın ki, o yeni bir <div> elementi yaratsın və bu elementə mətn əlavə etsin. Funksiya yeni yaradılan elementi səhifənin body hissəsinə əlavə etməlidir.



function createDiv() {
    const newDiv = document.createElement('div');

   newDiv.textContent = 'Div';
   document.body.appendChild(newDiv);
//    console.log('div;',  newDiv.textContent) konsol ucun
  }
  createDiv();
