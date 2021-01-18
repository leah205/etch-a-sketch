
const para = document.querySelector('.para')
let grid = document.querySelector('.grid');

for(i=0;i<16;i++){
    initialDiv = document.createElement('div');
    initialDiv.classList.add('square');
    grid.appendChild(initialDiv);
    }
    let squares = document.querySelectorAll('.square');
let squaresArr = Array.from(squares);
squares.forEach((square) => { 
square.addEventListener('mouseenter', function blue(){
    square.classList.add('blue');
}
)

});
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    clearGrid();
    newGrid();
});
    function clearGrid(){
        squares.forEach((square) => {
        square.classList.remove('blue');
        square.classList.add('square');
    
    })
       
    }
      
  function newGrid(){
      para.textContent = '';
    let numberSquares = Array.from(squares).length;
      let gridPreference = prompt('Pick your grid preference:', '4');
      let totalGrid = gridPreference * gridPreference;
      grid.style.cssText = `grid-template-columns: repeat(${gridPreference}, 1fr);
      grid-template-rows: repeat(${gridPreference}, 1fr);`
      if(gridPreference>100){
           para.textContent = 'Grid size can not exceed 100';
      }
      else if(totalGrid>numberSquares){
          for(let i = numberSquares; i<totalGrid; i++){
            newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.classList.add('newSquares');
              grid.appendChild(newSquare);
        }
  }
  else{
      
      for(let i = numberSquares; i>totalGrid; i--){
          
      removedSquare = squaresArr[squaresArr.length - 1];
      removedSquare.classList.remove('square');
      squaresArr.pop();
      console.log(squares)
      }
      squares.forEach((square)=>{
          
      })
   squaresArr = Array.from(squares);
      
  }
  squares = document.querySelectorAll('.square');
  squares.forEach((square) => { 
   square.addEventListener('mouseenter', function blue(){
       square.classList.add('blue');
   }
   )
   
   });
   console.log(squares)
  }
