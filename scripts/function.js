// function for hide elemeny
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
// function for show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
// function for random alphabet
function getRandomAlphabet() {
    const alphabetlist = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetlist.split('');

    const getrandom = Math.random() * 25;
    const randomIndex = parseInt(getrandom)
    const randomAlphabet = alphabetArray[randomIndex];
    return randomAlphabet;
}

// function for change inner text 
function addDataById(elementId, data) {
    const element = document.getElementById(elementId);
    element.innerText = data; 
}

// function for score up
function scoreUp() {
    const scoreField = document.getElementById('score');
    const scoreFieldText = scoreField.innerText;
    const prevScore = parseInt(scoreFieldText);
    const newScore = prevScore + 1;
    addDataById('score', newScore);
    return newScore;
}

// function for life down
function lifeDown() {
    const lifeField = document.getElementById('life');
    const lifeFieldText = lifeField.innerText;
    const prevLife = parseInt(lifeFieldText);
    const newLife = prevLife - 1;
    addDataById('life', newLife);
    return newLife
}

// function for set BG bt id 
function setBgById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-500');
}
// function for remove bg by id
function removeBgById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-500');
}


// function for gameplay
