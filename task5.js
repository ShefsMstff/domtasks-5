// Tapşırıq 5: Bir Neçə Element Yarat və Əlavə Et
// Elə bir funksiya yazın ki, mövcud <ul> elementinə beş yeni <li> elementi yaratsın və əlavə etsin, və hər bir <li> 1-dən 5-ə qədər nömrələnmiş olsun.

function addElements() {
    const list = document.getElementById('list');
for (let i = 1; i <= 5; i++) {
      const li = document.createElement('li');
      li.textContent = `${i}`;
list.appendChild(li); 
   }
}
 document.getElementById('addBtn').addEventListener('click', addElements);
  

  

