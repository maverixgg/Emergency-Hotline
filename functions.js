var loveCounter = 0;

function addFavorite(id){
    const parent = document.getElementById(id)
    if(parent.querySelector('#empty').style.display === 'none'){
        parent.querySelector('#empty').style.display = 'block';
        parent.querySelector('#full').style.display = 'none';
        loveCounter--;
    }
    else {
        parent.querySelector('#empty').style.display = 'none';
        parent.querySelector('#full').style.display = 'block';
        loveCounter++;
    }
    console.log(loveCounter);
    document.getElementById('heartCount').innerText = loveCounter;
}

document.getElementById('emergency-call').addEventListener('click', function(){
    const serviceName = document.getElementById('emergency-service').innerText
    const serviceNumber = document.getElementById('emergency-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('police-call').addEventListener('click', function(){
    const serviceName = document.getElementById('police-service').innerText
    const serviceNumber = document.getElementById('police-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('fire-call').addEventListener('click', function(){
    const serviceName = document.getElementById('fire-service').innerText
    const serviceNumber = document.getElementById('fire-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('woman-call').addEventListener('click', function(){
    const serviceName = document.getElementById('woman-service').innerText
    const serviceNumber = document.getElementById('woman-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('ambulance-call').addEventListener('click', function(){
    const serviceName = document.getElementById('ambulance-service').innerText
    const serviceNumber = document.getElementById('ambulance-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('gov-call').addEventListener('click', function(){
    const serviceName = document.getElementById('gov-service').innerText
    const serviceNumber = document.getElementById('gov-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('eee-call').addEventListener('click', function(){
    const serviceName = document.getElementById('eee-service').innerText
    const serviceNumber = document.getElementById('eee-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('brac-call').addEventListener('click', function(){
    const serviceName = document.getElementById('brac-service').innerText
    const serviceNumber = document.getElementById('brac-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})
document.getElementById('rail-call').addEventListener('click', function(){
    const serviceName = document.getElementById('rail-service').innerText
    const serviceNumber = document.getElementById('rail-number').innerText
    alert(`${serviceName}: ${serviceNumber}`)
})


document.getElementById("emergency").addEventListener('click', function(){
    addFavorite('emergency');
})

document.getElementById("police").addEventListener('click', function(){
    addFavorite('police');
})
document.getElementById("fire").addEventListener('click', function(){
    addFavorite('fire');
})
document.getElementById("woman").addEventListener('click', function(){
    addFavorite('woman');
})
document.getElementById("ambulance").addEventListener('click', function(){
    addFavorite('ambulance');
})
document.getElementById("gov").addEventListener('click', function(){
    addFavorite('gov');
})
document.getElementById("eee").addEventListener('click', function(){
    addFavorite('eee');
})
document.getElementById("brac").addEventListener('click', function(){
    addFavorite('brac');
})
document.getElementById("rail").addEventListener('click', function(){
    addFavorite('rail');
})