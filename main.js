let numbers = [[1000],[2000], [3000]];
let usFormat = numbers.toLocaleString('en-US');
// usFormat: "1,000,2,000,3,000"
// 1. Saari images aur unki positions ka ek data array banayein
const bgSlides = [
  { url: "https://images.pexels.com/photos/19394891/pexels-photo-19394891.jpeg", pos: "center" },
  { url: "https://images.pexels.com/photos/22775646/pexels-photo-22775646.jpeg", pos: "center 30%" },
  { url: "https://images.pexels.com/photos/16789919/pexels-photo-16789919.jpeg", pos: "center 10%" },
  { url: "https://images.pexels.com/photos/17290619/pexels-photo-17290619.jpeg", pos: "center 68%" },
  { url: "https://images.pexels.com/photos/19394891/pexels-photo-19394891.jpeg", pos: "center 85%" },
  { url: "https://images.pexels.com/photos/18444060/pexels-photo-18444060.jpeg", pos: "center 85%" },
  { url: "https://images.pexels.com/photos/33630679/pexels-photo-33630679.jpeg", pos: "center 60%" },
  { url: "https://images.pexels.com/photos/12510056/pexels-photo-12510056.jpeg", pos: "center 70%" },
  { url: "https://images.pexels.com/photos/19094064/pexels-photo-19094064.jpeg", pos: "center 45%" },
  { url: "https://images.pexels.com/photos/5816640/pexels-photo-5816640.jpeg",   pos: "center 35%" },
  { url: "https://images.pexels.com/photos/26082632/pexels-photo-26082632.jpeg", pos: "center 28%" }
];

let currentIndex = 0;
const htmlElement = document.documentElement; // 'html' tag ko select karne ke liye

// 2. Background change karne ka function
function changeBackground() {
  const currentSlide = bgSlides[currentIndex];
  
  // HTML style ko update karna
  htmlElement.style.backgroundImage = `url('${currentSlide.url}')`;
  htmlElement.style.backgroundPosition = currentSlide.pos;

  // Index ko agle step par le jana, aur end me dobara 0 se start karna (Infinite loop)
  currentIndex = (currentIndex + 1) % bgSlides.length;
}

// 3. Pehli image foran load ho jaye
changeBackground();

// 4. Har 33 seconds (33000 milliseconds) baad image change ho
setInterval(changeBackground,10000);
let body=document.querySelector("body");
let btn=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".resetbtn");
let newbtn=document.querySelector(".newbtn");
let hide=document.querySelector(".hide");
let msg=document.querySelector(".msg");
let msg2=document.querySelector(".msg2");
let username1=document.querySelector("#username1");
let username2=document.querySelector(".username2");
let submitbtn=document.querySelector("#submitbtn");
let hidebox=document.querySelector(".container");
username1.focus();
let turnO=true;
let step = 1;
const winpatterns=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];
window.addEventListener("resize", function(){

   if(window.innerWidth <= 850 && msg.innerText!==""){
     hidebox.classList.remove("container");
   }
   if(window.innerWidth > 850 && window.innerHeight > 450){
     hidebox.classList.add("container");
   }
   if(window.innerWidth > 850 && window.innerHeight > 0 && msg.innerText!==""  &&  window.innerHeight < 450 ){
    hidebox.classList.remove("container");
   }
   if(window.innerWidth <= 850){
      hidebox.classList.remove("container");
    }
    if(msg.innerText ===""){
      hidebox.classList.add("container");
    }
   
});
function handlevent(){
    if(window.innerWidth <= 850){
      hidebox.classList.remove("container");
    }


};
username1.addEventListener("input",handlevent);

submitbtn.addEventListener("click",function(){
   if(step === 1){
      if (username1.value.length > 10) {
         alert("Name should be 10 characters or less.");
         username1.value="";
         return;
      }
      if (username1.value.length > 7 && window.innerWidth<=1050) {
         alert("Name should be 7 characters or less.");
         username1.value="";
         return;
      }
      hidebox.classList.add("container");
      username1.style.display="none";
      username2.classList.remove("hideuser2");
      username2.focus();
      step = 2;
   }else if(step === 2){
      if (username2.value.length > 10) {
         alert("Name should be 10 characters or less.");
         username2.value="";
         return;
      }
      if (username2.value.length > 7 && window.innerWidth<=1050) {
         alert("Name should be 7 characters or less.");
         username2.value="";
         return;
      }
      username2.classList.add("hideuser2");
      btn.forEach((boxes)=>{
         boxes.disabled=false;
         boxes.style.cursor="grab";
         newbtn.classList.remove("hidenewbtn");
         rstbtn.classList.remove("hiderstbtn");
         step=3;
      submitbtn.style.display="none";
      });
   }});

username1.addEventListener("keydown", function(e) {
   if (e.key === "Enter") {
            if (username1.value.length > 10) {
         alert("Name should be 10 characters or less.");
         username1.value="";
         return;
      }
      if (username1.value.length > 7 && window.innerWidth<=1050) {
         alert("Name should be 7 characters or less.");
         username1.value="";
         return;
      }
      hidebox.classList.add("container");
      username1.style.display="none";
      username2.classList.remove("hideuser2");
      username2.focus();
      step=2;
 }
 });
 
 username2.addEventListener("keydown", function(e) {
   if (e.key === "Enter") {
      if (username2.value.length > 10) {
         alert("Name should be 10 characters or less.");
         username2.value="";
         return;
      }
      if (username2.value.length > 7 && window.innerWidth<=1050) {
         alert("Name should be 7 characters or less.");
         username2.value="";
         return;
      }
   username2.classList.add("hideuser2");
   btn.forEach((boxes)=>{
      boxes.disabled=false;
      newbtn.classList.remove("hidenewbtn");
      rstbtn.classList.remove("hiderstbtn");
      submitbtn.style.display="none";
   });}}); 

body.addEventListener("keydown",function(e){
if(e.key==="Delete"){
newbutton();
}
});

const resetbutton=()=>{
username1.style.display="";
username1.value="";
username2.value="";
turnO=true;
msg.innerText="";
username1.focus();
hidebox.classList.add("container");
step=1;
btn.forEach((boxes)=>{
   boxes.disabled=true;
});
rstbtn.classList.add("hiderstbtn");
newbtn.classList.add("hidenewbtn");
submitbtn.style.display="";
enableboxes();
hide.classList.add("hide");
};


const newbutton=()=>{
   turnO =true;
   btn.forEach((boxes)=>{
      boxes.disabled=false;
   })
   hidebox.classList.add("container");
   enableboxes();
   hide.classList.add("hide");
   msg.innerText="";
};

const disableboxes=()=>{
   for(let boxes of btn){
      boxes.disabled=true;
      };};
const enableboxes=()=>{
   for(let boxes of btn){
     boxes.innerText="";
     boxes.style.background="transparent";
   }
};

btn.forEach((box) => {
   box.disabled=true;
   box.addEventListener("click",()=>{
      if(turnO){
         box.innerText="O";
         box.style.color="white";
         turnO=false;
         box.style.background="linear-gradient(to bottom,blue,#25ced1 ,#ffffff)";
      }else{
         box.innerText="X";
         box.style.color="blue";

         turnO=true;
         box.style.background="linear-gradient(to bottom,#06d6a0,rgb(0, 247, 12),#06bee1)";

      }
      box.disabled=true;
      checkWinner();

      });

   });


   const showwinner = (winner)=>{
      if(window.innerWidth > 850 && window.innerHeight > 0 &&  window.innerHeight < 450 ){
         setTimeout(function() {
            hidebox.classList.remove("container");
            msg.innerText=`Congratulations\nWinner Is:\n `;
            msg2.innerText=`${winner}`;
            hide.classList.remove("hide");
         }, 400);
       }
      if(window.innerWidth<=850 ){  
         setTimeout(function() {
            hidebox.classList.remove("container");
            msg.innerText=`Congratulations\nWinner Is:\n `;
            msg2.innerText=`${winner}`;
            hide.classList.remove("hide");
         }, 400);
      }
      if(window.innerWidth >= 851){
         msg.innerText=`Congratulations\nWinner Is:\n `;
         msg2.innerText=`${winner}`;
         hide.classList.remove("hide");
      }

};
const checkWinner = () => {
   for(let pattern of winpatterns){
   let   posval1=btn[pattern[0]].innerText;
   let   posval2=btn[pattern[1]].innerText;
   let   posval3=btn[pattern[2]].innerText;
   if(posval1!= ""&& posval2 !=""&& posval3 !=""){
       if(posval1===posval2 && posval2 === posval3){
         let winner;
           if(posval1==="O"){
           winner = username1.value==""?"Player 1":username1.value;
           }if(posval1==="X"){
           winner = username2.value==""?"Player 2":username2.value
           }

      disableboxes();
      showwinner(winner);
       }}}};

       rstbtn.addEventListener("click", resetbutton);
       newbtn.addEventListener("click", newbutton);
