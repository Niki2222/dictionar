let wordsList = ["word", "year"];

let foundWord = document.getElementById('foundWord');

function searchWord() {
    let searchedWord = document.getElementById('wordToSearch').value.toLocaleLowerCase();
    if (searchedWord.length === 0) {
        document.getElementById('wordToSearch').placeholder = "please enter a word you are looking for";
        foundWord.style.display = "none";
    }
    if (wordsList.includes(searchedWord)) {
        showSearchedWord(searchedWord);
    }
    if (!wordsList.includes(searchedWord)) {
        addWord(searchedWord);
    }
}  

function showSearchedWord(element) {
    foundWord.innerHTML = `
        <div id="foundWord">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Searched word</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>${element}</td>
                </tr>
                </tbody>
            </table>
        </div>
    `
    foundWord.style.display = "block";
}

function addWord(elem) {
    if (!wordsList.includes(elem) && elem.length > 0) {
        let answer = prompt("This word is not in the dictionary. If you want to add it, enter 'yes'?").toLocaleLowerCase();
        if (answer === "yes") {
            foundWord.style.display = "none";
            wordsList.push(elem);
        } else {
            foundWord.style.display = "none";
            document.getElementById('wordToSearch').value = "";
        }
    }
}


