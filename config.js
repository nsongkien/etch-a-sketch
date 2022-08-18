window.onload=function(){

let currentColor='black';

const container = document.querySelector('.boxesContainer');
for (i=0;i<16*16;i++) {
   var div = document.createElement('div');
   div.className='box';
   div.textContent='';
   container.appendChild(div);
}
addBoxes()

//change grid size button
const gridsizebutton=document.querySelector('.changeGridSize')
gridsizebutton.addEventListener('click',(e) => {
   const boxes= document.querySelectorAll('.box')
   deleteBoxes(boxes);
   let gridsize = document.createElement('div');
   gridsize.textContent = prompt(`Insert the number of grid: `,);
   if (gridsize.textContent>100) {
      gridsize.textContent = prompt(`Cannot exceeds 100
Insert the number of grid again: `,);
   }
   console.log(gridsize.textContent);
   generateGrid(gridsize.textContent);
   container.style.gridTemplateColumns=`repeat(${gridsize.textContent},auto)`;
   addBoxes()
})

function addBoxes() {
   const boxes= document.querySelectorAll('.box')
   boxes.forEach((box) => {
      box.addEventListener('mouseover',(e) => {
         box.classList.add(currentColor);
      })      
   });
}


function generateGrid(gridsize) {
   for (i=0; i<gridsize*gridsize; i++) {
      var div = document.createElement('div');
      div.className='box';
      div.textContent='';
      container.appendChild(div);
   }  
}
function deleteBoxes(allBoxes) {
   allBoxes.forEach((box) => {
      box.parentNode.removeChild(box);
   })
}




}