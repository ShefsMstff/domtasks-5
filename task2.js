// Tapşırıq 2: Mətn Məzmununu Dəyişdir
// Elə bir funksiya yazın ki, müəyyən bir id-yə sahib <p> elementini seçib, onun mətnini "Salam, Dünya!" olaraq dəyişdirsin.

function changeText(){
    const par=document.getElementById('p')
    par.textContent='Turing'
}
changeText()