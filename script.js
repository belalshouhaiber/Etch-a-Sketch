const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.color-pick');
let choice = 'black';
drawGrid(16);
function clrScreen(){  
    container.innerHTML = "";
    let gridsize = prompt('Please enter a new grid size',16);
    drawGrid(gridsize);

}

for(let button of buttons){
    button.addEventListener('click', function(e){
        choice = button.id;
        clrScreen;
    })
}

function drawGrid(size){
    for(let i=0;i<size**2;i++){
        const newDiv = document.createElement('div')
        newDiv.className = 'pixel';
        newDiv.style.display = 'flex';
        container.appendChild(newDiv);
    }
   container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;

    pixels = document.querySelectorAll('.pixel');
    for(let pixel of pixels){
        pixel.addEventListener('mouseover', function(e){
            switch(choice){
                case 'black':
                    e.target.style.backgroundColor = 'black'
                    break;
                case 'colors':
                    e.target.style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)}`
                    break;                                       
            }         
            
        })
    }
}