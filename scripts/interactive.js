// for play again
document.getElementById('playAgain').addEventListener('click', function playAgain() {
    hideElementById('homePage');
    showElementById('playGround');
    hideElementById('resultPage');
    
    let expectedAlphabet = getRandomAlphabet();
    console.log(expectedAlphabet);
    addDataById("word", expectedAlphabet);
    setBgById(expectedAlphabet)

    document.getElementById('container').addEventListener('keyup', function (event) {
        const playerAlphabetText = event.key;
        console.log(playerAlphabetText)
    
        if (playerAlphabetText.toLowerCase() === expectedAlphabet.toLowerCase()) {
            console.log('you passed')
            console.log(expectedAlphabet);
            console.log(playerAlphabetText);
            removeBgById(expectedAlphabet);
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet)
            addDataById("word", expectedAlphabet);
            scoreUp();
            
        } else {
            console.log('you failed')
            removeBgById(expectedAlphabet)
            console.log(expectedAlphabet);
            console.log(playerAlphabetText);
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet);
            addDataById("word", expectedAlphabet);
            const lifeScore = lifeDown();
            if (lifeScore <= 0) {
                hideElementById('playGround');
                showElementById('resultPage');
                const finalScore = scoreUp() - 1;
                addDataById('finalScore', finalScore);
                addDataById('score', 0);
                addDataById('life', 5);
                removeBgById(expectedAlphabet);
            }
        }
    
        
    })
})




// For play Now Homepage Button

document.getElementById('playNow').addEventListener('click', function play() {
    hideElementById('homePage');
    showElementById('playGround');
    hideElementById('resultPage');
    
    let expectedAlphabet = getRandomAlphabet();
    addDataById("word", expectedAlphabet);
    setBgById(expectedAlphabet)

    document.getElementById('mainBody').addEventListener('keyup', function (event) {

        const playerAlphabetText = event.key;
    
        if (playerAlphabetText.toLowerCase() === expectedAlphabet.toLowerCase()) {
            console.log('you passed');
            console.log(expectedAlphabet);
            console.log(playerAlphabetText);
            removeBgById(expectedAlphabet);
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet)
            addDataById("word", expectedAlphabet);
            scoreUp();
            
        } else {
            console.log('you failed');
            console.log(expectedAlphabet);
            console.log(playerAlphabetText);
            removeBgById(expectedAlphabet)
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet);
            addDataById("word", expectedAlphabet);
            const lifeScore = lifeDown();
            if (lifeScore <= 0) {
                hideElementById('playGround');
                showElementById('resultPage');
                const finalScore = scoreUp() - 1;
                addDataById('finalScore', finalScore);
                addDataById('score', 0);
                addDataById('life', 5);
                removeBgById(expectedAlphabet);
            }
        }
    
        
    }
    )
})

