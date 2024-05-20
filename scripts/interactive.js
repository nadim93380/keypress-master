// For play Now Homepage Button

document.getElementById('playNow').addEventListener('click', function () {
    hideElementById('homePage');
    showElementById('playGround');
    hideElementById('resultPage');
    
    let expectedAlphabet = getRandomAlphabet();
    addDataById("word", expectedAlphabet);
    setBgById(expectedAlphabet)

    document.getElementById('mainBody').addEventListener('keyup', function (event) {

        const playerAlphabetText = event.key;
    
        if (playerAlphabetText.toLowerCase() === expectedAlphabet.toLowerCase()) {
            console.log('you passed')
            removeBgById(expectedAlphabet);
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet)
            addDataById("word", expectedAlphabet);
            scoreUp();
            
        } else {
            console.log('you failed')
            removeBgById(expectedAlphabet)
            getRandomAlphabet()
            expectedAlphabet = getRandomAlphabet();
            setBgById(expectedAlphabet);
            addDataById("word", expectedAlphabet);
            const lifeScore = lifeDown();
            if (lifeScore < 0) {
                hideElementById('playGround');
                showElementById('resultPage'); 
            }
        }
    
        
    })

})

