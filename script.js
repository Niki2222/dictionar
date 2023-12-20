let wordsList = [
    {word: "cuvant",
    meaning: "Unitate de bază a vocabularului, care reprezintă asocierea unui sens (sau a unui complex de sensuri) și a unui complex sonor."},
    {word: "an",
    meaning: "Perioadă de timp care corespunde unei revoluții a Pământului în jurul Soarelui și care cuprinde 12 luni."},
    {word: "balon",
    meaning: "Jucărie de cauciuc foarte subțire, mai ales în formă de sferă, umplută cu aer sau cu un gaz ușor"},
    {word: "dorinta",
    meaning: "Stare sufletească a celui care tinde, râvnește, aspiră la ceva"},
    {word: "eclipsa",
    meaning: "Dispariție totală sau parțială, de scurtă durată, a imaginii unui astru, ca urmare a interpunerii unui corp ceresc între el și observator sau a intrării lui în conul de umbră al altui corp ceresc fără lumină proprie"}
];

function searchWord() {
    let wordListLength = wordsList.length;
    let foundWord = document.getElementById('foundWord');
    let searchedWord = document.getElementById('wordToSearch').value.toLocaleLowerCase();
    if (searchedWord.length === 0) {
        document.getElementById('wordToSearch').placeholder = "please enter a word you are looking for";
        foundWord.style.display = "none";
    }
    let wordNotFound = wordListLength; //variable used as a flag
    for (let i = 0; i < wordListLength; ++i) {
        if (searchedWord === wordsList[i].word) {
            wordNotFound = wordListLength - 1;
            foundWord.innerHTML = `
                <div id="foundWord">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Searched word</th>
                            <th scope="col">Meaning</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${wordsList[i].word}</td>
                            <td>${wordsList[i].meaning}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            `
            foundWord.style.display = "block";
        }
    }
    if (wordNotFound === wordListLength && searchedWord.length > 0) {
        let answer = prompt("This word is not in the dictionary. If you want to add it, enter 'yes'?").toLocaleLowerCase();
        if (answer === "yes") {
            foundWord.style.display = "none";
            addWord(searchedWord);
        } else {
            foundWord.style.display = "none";
            document.getElementById('wordToSearch').value = "";
        }
    }
}   

function addWord(element) {
    let newWord = {word: element, meaning: "new added word"};
    if (element.length > 0) {
        wordsList.push(newWord);
    }
}


