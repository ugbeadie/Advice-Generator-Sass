const adviceId = document.getElementsByClassName('id')[0];
const adviceText = document.getElementsByClassName('advice-text')[0];
const btn = document.getElementsByClassName('btn')[0];

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then (response =>{
    return response.json();
})
    .then(adviceData => {
        const adviceNumber = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.textContent = adviceNumber;
        adviceText.innerHTML = `<p>${advice}</p>`;
    })
    .catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', function(){
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

