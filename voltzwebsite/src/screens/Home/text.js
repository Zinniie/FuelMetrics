import Man1 from "../../assets/images/man2.jpg";
import Man2 from "../../assets/images/man6.jpg";
import Woman1 from "../../assets/images/woman.jpg";
import Woman2 from "../../assets/images/woman2.jpg";


export const text = [
  {
    
    id: 1,
    src: Man1,
    alt: "Image 4",
    title: "yhgay Holland",
    desc: "Owner of King",
    review: "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kind or information. Interms of devices. I have never comnlained about<br/> them since the ourchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
  },
  {
    id: 2,
    src: Woman1,
    alt: "Image 4",
    title: "Jeffrey Harp",
    desc: "CEO HomeMe",
    review: "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kind or information. Interms of devices. I have never comnlained about<br/> them since the ourchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
  },
  {
    id: 3,
    src: Man2,
    alt: "Image 4",
    title: "Jeffrey Harp",
    desc: "CEO HomeMe",
    review: "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kind or information. Interms of devices. I have never comnlained about<br/> them since the ourchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
  },
  {
    id: 4,
    src: Woman2,
    alt: "Image 4",
    title: "Jeffrey Harp",
    desc: "CEO HomeMe",
    review: "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kind or information. Interms of devices. I have never comnlained about<br/> them since the ourchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
  },
];

// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function (){
//   showPerson(currentItem);
//   // so we reuse this function when we need it..... refer to the former exapmle; i attached it below
  
// });
// // so as not to repeat the above everytime and add ijn eventlisteners; we would set up a function
// // show person based on item'
// function showPerson(person){
//   const item = text[person];
//   img.src = item.img; 
//   // targets/changes the image
//   author.textContent = item.name;
//   // targets/changes the name
//   job.textContent = item.job;
//   info.textContent = item.text;
// }

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// nextBtn.addEventListener("click", function(){
//   // increment currentiTEM; everytime we click next button; we access different person; we get an error after the 3rd  array because we cannot access that item cus it doesnt exist; we fix it with the if statement 
//   // > review.length - 1); currentItem = 0;; that is start from te scratch\
//   currentItem++;
//   if(currentItem > text.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem ) 
// });

// // show previous person
// prevBtn.addEventListener("click", function(){
//   // decreement
//   currentItem--;
//   if(currentItem < 0) {
//     currentItem = text.length - 1;
//   }
//   showPerson(currentItem );
// });

// // show random person
// randomBtn.addEventListener("click", function(){
//   currentItem = Math.floor(Math.random() * text.length);
//   console.log(currentItem);
//   showPerson(currentItem);
// })
export default text;