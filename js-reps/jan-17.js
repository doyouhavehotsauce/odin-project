let output = document.querySelector('#output');
let i = 10;

//para.textContent = i;
//output.appendChild(para)

// for(i; i >= 0; i--){

// }

// while (i >= 0){
//     if(i == 10){
//         let para = document.createElement('p');

//         output.appendChild(para);
//         para.textContent = 'Countdown';
//     } else if (i == 0){
//         let para = document.createElement('p');

//         output.appendChild(para);
//         para.textContent = 'Blast Off!';
//     } else {
//         let para = document.createElement('p');

//         output.appendChild(para);
//         para.textContent = i;
//     }
//     i--;
// }




const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let refusedList;
let admittedList;

for(let i = 0; i < people.length; i++){
    if(people[i] === 'Phil' || people[i] === 'Lola'){
        refused.textContent += people[i] + ', ';
        refusedList = refused.innerText;
        
    } else {

        admitted.textContent += people[i] + ', ';
        admittedList = admitted.innerText;

    }  
}
for (let person of people) {
    if (person === 'Phil' || person === 'Lola') {
      refused.textContent += `${person}, `;
    } else {
      admitted.textContent += `${person}, `;
    }
  }
  
  refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
  admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
