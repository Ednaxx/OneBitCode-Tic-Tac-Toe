// Variables

let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");

let button4 = document.getElementById("b4");
let button5 = document.getElementById("b5");
let button6 = document.getElementById("b6");

let button7 = document.getElementById("b7");
let button8 = document.getElementById("b8");
let button9 = document.getElementById("b9");

let player1 = "";
let player2 = "";

let currentPlayer = 0;
let playerOrder = [];

// Game Buttons event listeners

button1.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++

        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--

        this.disabled = true

        nextTurn()
    };
});
button2.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button3.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button4.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button5.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button6.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button7.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button8.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});
button9.addEventListener('click', function() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++
        this.disabled = true

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--
        this.disabled = true

        nextTurn()
    };
});


// Start game input


document.getElementById("startForm").addEventListener("submit", function (event) {
    event.preventDefault()

    player1 = document.getElementById("player1Name").value;
    player2 = document.getElementById("player2Name").value;

    if (player1 == "" || player2 == "") {
        document.getElementById("player1Name").value = "";
        document.getElementById("player2Name").value = "";

        if (document.getElementById("nameError") == null) {
            let nameError = document.createElement("p");
            nameError.innerText = "Please fill in both names";
            nameError.id = "nameError";
            nameError.style.color = "red";
            nameError.style.fontSize = "15px";
            nameError.style.alignSelf = "center";
            document.getElementById("startForm").appendChild(nameError);

        };
    }
    else {
        // Show game
        
        document.getElementById("start-screen").style.display = "none";

        document.getElementById("game").style.display = "block";
        
        // Random player order

        if ((Math.floor(Math.random() * 10) % 2) == 0) {
            playerOrder.push(player1, player2);
        }
        else {
            playerOrder.push(player2, player1);
        };

        document.getElementById("currentTurn").innerText = playerOrder[currentPlayer];
    };
});

function nextTurn() {
    document.getElementById("currentTurn").innerText = playerOrder[currentPlayer];

    // From b1

    if(button1.innerText === button2.innerText && button1.innerText === button3.innerText && button2.innerText === button3.innerText) {
        console.log(button1.innerText + " Wins!");
    }
    else if (button1.innerText === button4.innerText && button1.innerText === button7.innerText && button4.innerText === button7.innerText) {
        console.log(button1.innerText + " Wins!");
    }
    else if (button1.innerText === button5.innerText && button1.innerText === button9.innerText && button5.innerText === button9.innerText) {
        console.log(button1.innerText + " Wins!");
    }

    // From b2

    else if (button2.innerText === button5.innerText && button2.innerText === button8.innerText && button5.innerText === button8.innerText) {
        console.log(button1.innerText + " Wins!");
    }

    // From b3

    else if (button1.innerText === button4.innerText && button1.innerText === button7.innerText && button4.innerText === button7.innerText) {
        console.log(button1.innerText + " Wins!");
    }
    else if (button1.innerText === button4.innerText && button1.innerText === button7.innerText && button4.innerText === button7.innerText) {
        console.log(button1.innerText + " Wins!");
    }

    // From b4
}