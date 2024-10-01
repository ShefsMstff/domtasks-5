// // function groupByGrade(students) {
// //   return students.reduce((acc, student) => {
// //     // 1. Şagirdin grade dəyərini alırıq.
// //     const grade = student.grade;

// //     // 2. Əgər accumulator-da bu grade yoxdursa, boş array yaradılır.
// //     if (!acc[grade]) {
// //       acc[grade] = [];
// //     }

// //     // 3. Mövcud grade-ə sahib tələbənin adını həmin grade arrayinə əlavə edirik.
// //     acc[grade].push(student.name);

// //     // 4. Geriye accumulator-u qaytarırıq ki, növbəti iterasiyada da istifadə edilsin.
// //     return acc;
// //   }, {}); // Boş obyektlə başlayırıq.

// // }


// // yığcam

// // function groupByGrade(students) {
// //   return students.reduce((acc, student) => {
// //     // Mövcud açar yoxdursa, yaradıb əlavə edirik
// //     (acc[student.grade] = acc[student.grade] || []).push(student.name);
// //     return acc;
// //   }, {});
// // }



// // const students = [
// //   { name: 'Alice', grade: 'A' },
// //   { name: 'Bob', grade: 'B' },
// //   { name: 'Charlie', grade: 'A' },
// //   { name: 'David', grade: 'C' }
// // ];

// // const groupedStudents = groupByGrade(students);
// // console.log(groupedStudents);


// // function groupByAge(people) {
// //   return people.reduce((acc, person) => {
// //     let groupAge;
// //     if (person.age <= 18) {
// //       groupAge = 'child'; 
// //     } else if (person.age <= 35) {
// //       groupAge = 'youngAdult';
// //     } else {
// //       groupAge = 'adult';
// //     }

// //     if (!acc[groupAge]) {
// //       acc[groupAge] = [];
// //     }
// //     acc[groupAge].push(person.name);

// //     return acc;

// //   }, {});
// // }





// // yığcam

// // function groupbyAge(people){
// //   return people.reduce((acc,person)=>{
// //     const groupAge = person.age <= 18 ? 'child' 
// //                      : person.age <= 35 ? 'youngAdult' 
// //                      : 'adult';
// //     (acc[groupAge] = acc[groupAge] || []).push(person.name);
// // return acc

// //   },{})
  
// // }
// // const people = [
// //   { name: 'John', age: 15 },
// //   { name: 'Sarah', age: 22 },
// //   { name: 'Mike', age: 37 },
// //   { name: 'Lisa', age: 18 },
// //   { name: 'Tom', age: 30 }
// // ];

// // const groupedPeople = groupbyAge(people);
// // console.log(groupedPeople);

// // function groupByauthor(books){
// //   return books.reduce((acc,book)=>{
// // const author= book.author
// // if (!acc[author]) {
// //          acc[author] = [];
// //        }
// //        acc[author].push(book.title);
// //        return acc;

// //   },{})
// // }
// // const books = [
// //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
// //   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
// //   { title: '1984', author: 'George Orwell' },
// //   { title: 'Pride and Prejudice', author: 'Jane Austen' },
// //   { title: 'Animal Farm', author: 'George Orwell' }
// // ];
// // const groupedBooks=groupByauthor(books);
// // console.log(groupedBooks)



// // function calculateTotalSales(sales) {
// //   return sales.reduce((acc, sale) => {
// //     const totalValue = sale.price * sale.quantity;
// //     acc[sale.product] = (acc[sale.product] || 0) + totalValue;
// //     return acc;
// //   }, {});
// // }

// // const sales = [
// //   { product: 'Laptop', price: 1200, quantity: 3 },
// //   { product: 'Phone', price: 700, quantity: 5 },
// //   { product: 'Headphones', price: 45, quantity: 10 },
// //   { product: 'Keyboard', price: 70, quantity: 7 },
// //   { product: 'Mouse', price: 25, quantity: 15 }
// // ];

// // const totalSales = calculateTotalSales(sales);
// // console.log(JSON.stringify(totalSales, null, 2));


// // function sumArray(numbers) {
// //   return numbers.reduce((acc, number) => {
// //     return acc + number;
// //   }, 0);
// // }

// // const numbers = [1, 2, 3, 4, 5];
// // const totalSum = sumArray(numbers);
// // console.log(totalSum);  // 15




// // function deepFlatten(array) {
// //   return array.flat(Infinity);
// // }

// // const nestedArray = [1, [2, [3, 4], 5], [6], 7];
// // const flattenedArray = deepFlatten(nestedArray);
// // console.log(JSON.stringify(flattenedArray));  

// // const people = [
// //   { name: 'Alice', age: 25 },
// //   { name: 'Bob', age: 30 },
// //   { name: 'Charlie', age: 25 },
// //   { name: 'David', age: 30 }
// // ];

// // console.log(people.sort((a,b)=>a.age-b.age));





// // function findMostFrequent(arr) {
// //     const frequencyMap = {}; // 1. Addım
// //     let maxCount = 0;        // 2. Addım
// //     let mostFrequent = '';   // 3. Addım
  
// //     // 4. Addım: Hər bir elementi keçirik və onun tezliyini hesablayırıq
// //     for (let word of arr) {
// //       if (frequencyMap[word]) {
// //         frequencyMap[word]++; // Söz artıq varsa, onun tezliyini artırırıq
// //       } else {
// //         frequencyMap[word] = 1; // Əgər ilk dəfədirsə, onun tezliyini 1 edirik
// //       }
  
// //       // 5. Addım: Əgər cari sözün tezliyi maksimumdan çoxdursa, onu yeniləyirik
// //       if (frequencyMap[word] > maxCount) {
// //         maxCount = frequencyMap[word];
// //         mostFrequent = word;
// //       }
// //     }
  
// //     return mostFrequent; // 6. Addım: Ən çox təkrarlanan sözü qaytarırıq
// //   }
  
// //   const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
// //   console.log(findMostFrequent(words)); // 'banana'
  



// // function removeDuplicates(arr) {
// //     return arr.filter((value, index) => arr.indexOf(value) === index); // 1. Addım
// //   }
  
// //   const nums = [1, 2, 2, 3, 4, 4, 5];
// //   console.log(removeDuplicates(nums)); // [1, 2, 3, 4, 5]

// //Destructin


// const surname = 'Shafagh';

// const person = {
//     name:'Mehdi',
//     surname:'Refiyev',
//     // age:20,
//     assets:['Melissa','Mirvari'],
//     'single select':1,
//     car:{
//         marka:'BMW',
//         model:'F10',
//         seat:4,
//         accessorires:['parfume','qolbaq'],
//         skills: {
//             // html:true,
//             js:false}
//     }
// };

// // const array = [12,['salammmmmm','test'],{name:'Mehdi'},55555,3,4,5,6,7,8];

// // const [,salam]=array;

// // console.log('test',name)

// // const data = ['MTN','BMT','ABS'];
// // data.find(element=>element==='ABS')
// // const [,,Mehdi] = data;

// // const [,,,,,,fizzzaaaaaa] = array;
// // array.find(element=>element===8);

// // console.log(sixth);

// // const value = array[3];

// // const {age=0} = person;

// // const {car:{skills:{html = false}}} = person;

// // console.log('html',html)

// //  const shafag = person.surname;

// // const { surname:fullname } = person;
// // console.log('before',person);

// // const vanillaJs = person.car.skills.js;

// // const { car : { accessorires : pishiyim } } = person;
// // const {car: { skills : { js : vanillaJs } } } = person;
// // console.log('after',person)
// // console.log({vanillaJs});

// // const { car:{accessorires} } = person;
// // console.log('fullname',shafg)
// // console.log('car'  ,);
// // console.log('marka'  ,accessorires);


// // const asset = person.assets;
// // const newAge = person[age];
// // const singleSelect = person['single select'];






// //   console.log(fullname.includes('f2707'));
// //   console.log(fullname.indexOf('E'));


//   function Custom_Index(str,target){
//     let another ='';
//     for (let i = 0; i < str.length; i++) {
//       if(str[i] === target[i]){
//         another+=target[i];
        
//       }
//       if(another === target){
//         return i;
//       }
        
//     }
//     return -1;
//   }
//   const fullname = 'Fizza Sultaova fe2707 Fizza';
//   console.log(fullname.toLowerCase());
//   console.log(fullname.toUpperCase());
//   console.log(fullname.replace(/zza/g,'dexter'))
//   console.log(Custom_Index(fullname,'fe2707'));


// function createPargrapg(){
//     const newElement = document.createElement('p');
//     newElement.innerText = 'Bashqa cur';
//     document.body.append(newElement);
// }

// setTimeout(()=>{
//     createPargrapg();
// },2000);

// setInterval(()=>{
//     alert('FE2707 fav')
// },2000);


const increaseBtn = document.querySelector('#increaseBtn');
const stopBtn = document.querySelector('#stopBtn');

let interval;
const counterElement = document.querySelector('#counter');



increaseBtn.addEventListener('click',() => {
   let counter =  Number(counterElement.innerText);
   interval = setInterval(()=>{
    counter++;
    counterElement.innerText = counter;
  },1000);
});


stopBtn.addEventListener('click',() => {
    clearInterval(interval);
})










  