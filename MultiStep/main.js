const steps = document.querySelectorAll('.step');
const form = document.querySelector ('.blocks');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const submit = document.querySelector('.submit');

let currentStep = 1;

function showStep(step){
    if(step == 1){
        prev.style.display = "none";
        document.querySelector(".buttons").style.justifyContent = "flex-end";
    }else{
        prev.style.display = "block";
        document.querySelector(".buttons").style.justifyContent = "space-between";
    }
    if(step == 4){
        next.style.display = "none";
        submit.style.display = "block";
        
    }else{
        next.style.display = "block";
        submit.style.display = "none";
    }
    steps.forEach((s) => s.style.display = 'none');
    document.getElementById(`block-${step}`).style.display = 'block';
}

function nextStep(){
    if(currentStep > 0 && currentStep < 4){
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep(){
    if(currentStep > 1 && currentStep <= 4){
        currentStep--;
        showStep(currentStep);
    }
}

showStep(currentStep);