const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === ' ' || height <= 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height';
    }
    else if (weight === ' ' || weight <= 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight';
    }
    else{
        const heightInMeters = height / 100; // convert cm to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`

    }
});
