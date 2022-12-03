var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult1 = document.querySelector('.result-1');
var elResult2 = document.querySelector('.result-2');
var elResult3 = document.querySelector('.result-3');
var elResult4 = document.querySelector('.result-4');
var elWarning = document.querySelector('.alert');

var humanSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    
    if (elInput.value < 0 || isNaN(elInput.value)) {
        elWarning.classList.remove('d-none');
        return ;
    }
    
    
    

    function calcTime(way) {

        elResult1.textContent = Math.floor(way / humanSpeed) + ' soat ' + Math.floor(((way / humanSpeed) - Math.floor(way / humanSpeed)) * 60) + ' minut';

        elResult2.textContent = Math.floor(way / bikeSpeed) + ' soat ' + Math.floor(((way / bikeSpeed) - Math.floor(way / bikeSpeed)) * 60) + ' minut';

        elResult3.textContent = Math.floor(way / carSpeed) + ' soat ' + Math.floor(((way / carSpeed) - Math.floor(way / carSpeed)) * 60) + ' minut';

        elResult4.textContent = Math.floor(way / planeSpeed) + ' soat ' + Math.floor(((way / planeSpeed) - Math.floor(way / planeSpeed)) * 60) + ' minut';

        return;
        
    }

    calcTime(elInput.value.trim());
    

});