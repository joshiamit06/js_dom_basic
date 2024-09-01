const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==='' || height <=0 || isNaN(height)){
        results.innerHTML = "Please enter valid height"
    }
    if(weight==='' || weight <=0 || isNaN(weight)){
        results.innerHTML = "Please enter valid weight"
    }
    else{
        results.innerHTML = (weight/((height*height)/10000)).toFixed(2)
    }

})