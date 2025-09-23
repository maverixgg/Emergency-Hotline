var loveCounter = 0;
let coinCount = document.getElementById('coins')
let callHistory = []
let copynum = document.getElementById('copy-num')

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

function calling(id){
    let currentCoin = parseInt(coinCount.innerText)
    if(currentCoin>=20){
        currentCoin -= 20
        coinCount.innerText = currentCoin
    }
    else {
        alert('Not Enough Coins')
        return;
    }
    const serviceName = document.getElementById(`${id}-service`).innerText
    const serviceNumber = document.getElementById(`${id}-number`).innerText
    alert(`${serviceName}: ${serviceNumber}`)

    let time = new Date().toLocaleTimeString();
    console.log(time)

    const history = {
        Service: serviceName,
        Number: serviceNumber,
        Time: time
    }

    callHistory.push(history)
    console.log(callHistory)

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerHTML = ''

    for(let i of callHistory){
        const div = document.createElement('div')
        div.innerHTML = 
        `
        <div class="flex justify-between bg-[#FAFAFA] p-3 rounded-xl shadow-md my-3">
                        <div>
                            <h1>${i.Service}</h1>
                            <h2>${i.Number}</h2>
                        </div>
                        <h3>${i.Time}</h3>
        </div>
        `
        historyContainer.prepend(div)
    }
}

function numCopy(id){
    const num = document.getElementById(`${id}-number`).innerText
    navigator.clipboard.writeText(num).then(() => {
        alert("Number copied: " + num);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });

    let store = parseInt(copynum.innerText)
    copynum.innerText = store+1
}

document.getElementById('emergency-copy').addEventListener('click', function(){
    numCopy('emergency')
})
document.getElementById('police-copy').addEventListener('click', function(){
    numCopy('police')
})
document.getElementById('fire-copy').addEventListener('click', function(){
    numCopy('fire')
})
document.getElementById('ambulance-copy').addEventListener('click', function(){
    numCopy('ambulance')
})
document.getElementById('woman-copy').addEventListener('click', function(){
    numCopy('woman')
})
document.getElementById('eee-copy').addEventListener('click', function(){
    numCopy('eee')
})
document.getElementById('rail-copy').addEventListener('click', function(){
    numCopy('rail')
})
document.getElementById('brac-copy').addEventListener('click', function(){
    numCopy('brac')
})
document.getElementById('gov-copy').addEventListener('click', function(){
    numCopy('gov')
})

document.getElementById('clear-btn').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerHTML = ''
    historyContainer.innerText = 'No calls dialed'
})

document.getElementById('emergency-call').addEventListener('click', function(){
    calling('emergency')
})
document.getElementById('police-call').addEventListener('click', function(){
    calling('police')
})
document.getElementById('fire-call').addEventListener('click', function(){
    calling('fire')
})
document.getElementById('woman-call').addEventListener('click', function(){
    calling('woman')
})
document.getElementById('ambulance-call').addEventListener('click', function(){
    calling('ambulance')
})
document.getElementById('gov-call').addEventListener('click', function(){
    calling('gov')
})
document.getElementById('eee-call').addEventListener('click', function(){
    calling('eee')
})
document.getElementById('brac-call').addEventListener('click', function(){
    calling('brac')
})
document.getElementById('rail-call').addEventListener('click', function(){
    calling('rail')
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