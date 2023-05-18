const steps = numbers.length;
//we add 4 empty strings at the start and end of the array
numbers.unshift('', '', '', '');
numbers.push('', '', '', '');

console.log(steps);
document.getElementById('progress_total').innerText = ' / ' + (steps);

let started = false;
let globalInterval;

let currentStep = localStorage.getItem('numbers_display-currentStep') ? parseInt(localStorage.getItem('numbers_display-currentStep')) : 4;
const finalStep = steps - 4;

document.getElementById('progress_step').max = steps - 1;
document.getElementById('progress_step').value = currentStep - 4;

//add current numbers to the slots on page load
const slots = document.querySelectorAll('.num');
var newNumbers = numbers.slice(currentStep - 5, currentStep + 4);
newNumbers.forEach((num, index) => {
    slots[index].innerHTML = '<span>' + num + '</span>';
});

const startBtn = document.getElementById('btn-start');
startBtn.addEventListener('click', startFlow);

const stopBtn = document.getElementById('btn-stop');
stopBtn.addEventListener('click', stopFlow);

const goToBtn = document.getElementById('goToStep');
goToBtn.addEventListener('click', goToStep);

function startFlow() {
    if (!started) {
        started = true;
        startBtn.classList.add('active');
        globalInterval = setInterval(() => {
            console.log('start');
            document.getElementById('a').classList.add('flow');
            setTimeout(() => {
                document.getElementById('a').classList.remove('flow');
                moveDown();
            }, 1000);
        }, document.getElementById('time').value * 1000);
    }
}

function stopFlow() {
    console.log('stop');
    started = false;
    startBtn.classList.remove('active');
    document.getElementById('a').classList.remove('flow');
    clearInterval(globalInterval);
}

function goToStep() {
    const step = document.getElementById('progress_step').value;
    if (step > 0 && step <= steps) {
        stopFlow();
        currentStep = parseInt(step) + 4 - 1;
        moveDown();
    } else {
        alert('Please enter a valid step number.');
    }
}

function moveDown() {
    //check whether we have reached the end
    if (currentStep > steps + 4) {
        stopFlow();
        return;
    }

    //first we remove the number from the last slot
    slots[slots.length - 1].innerText = '';

    var newNumbers = numbers.slice(currentStep - 4, currentStep + 5);

    //then we add the new numbers to the slots
    newNumbers.forEach((num, index) => {
        slots[index].innerHTML = '<span>' + num + '</span>';
    });

    //then we increment currentStep
    currentStep++;
    //then we update the progress
    document.getElementById('progress_step').value = currentStep - 4;
    //then we save the currentStep in localStorage
    localStorage.setItem('numbers_display-currentStep', currentStep);
}