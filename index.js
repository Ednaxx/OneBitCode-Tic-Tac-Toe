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

button1.addEventListener('click', mark)
button2.addEventListener('click', mark)
button3.addEventListener('click', mark)
button4.addEventListener('click', mark)
button5.addEventListener('click', mark)
button6.addEventListener('click', mark)
button7.addEventListener('click', mark)
button8.addEventListener('click', mark)
button9.addEventListener('click', mark)

function buttonBgDarker() {
    this.style.backgroundColor = "rgba(270, 270, 270, 0.70)"
};

function buttonBgNormal() {
    this.style.backgroundColor = "rgba(255, 255, 255, 0.87)"
};


button1.addEventListener("mouseover", buttonBgDarker);
button1.addEventListener("mouseout", buttonBgNormal);

button2.addEventListener("mouseover", buttonBgDarker);
button2.addEventListener("mouseout", buttonBgNormal);

button3.addEventListener("mouseover", buttonBgDarker);
button3.addEventListener("mouseout", buttonBgNormal);

button4.addEventListener("mouseover", buttonBgDarker);
button4.addEventListener("mouseout", buttonBgNormal);

button5.addEventListener("mouseover", buttonBgDarker);
button5.addEventListener("mouseout", buttonBgNormal);

button6.addEventListener("mouseover", buttonBgDarker);
button6.addEventListener("mouseout", buttonBgNormal);

button7.addEventListener("mouseover", buttonBgDarker);
button7.addEventListener("mouseout", buttonBgNormal);

button8.addEventListener("mouseover", buttonBgDarker);
button8.addEventListener("mouseout", buttonBgNormal);

button9.addEventListener("mouseover", buttonBgDarker);
button9.addEventListener("mouseout", buttonBgNormal);



document.getElementById("playAgainButton").addEventListener("click", function() {location.reload()})

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

function mark() {
    if(currentPlayer == 0) {
        this.innerText = "X"
        this.style.color = "red"

        currentPlayer++

        this.disabled = true
        this.removeEventListener("mouseover", buttonBgDarker);

        nextTurn()
    }
    else {
        this.innerText = "O"
        this.style.color = "blue"

        currentPlayer--

        this.disabled = true
        this.removeEventListener("mouseover", buttonBgDarker);

        nextTurn()
    };
};

function nextTurn() {
    document.getElementById("currentTurn").innerText = playerOrder[currentPlayer];

    if (currentPlayer == 0) {
        document.getElementById("currentTurn").style.color = "red"
    }
    else {
        document.getElementById("currentTurn").style.color = "blue"
    };

    // First line

    if(button1.innerText === button2.innerText && button1.innerText === button3.innerText && button2.innerText === button3.innerText 
        && button1.innerText != "" && button2.innerText != "" && button3.innerText != "") 
        {
            winState(button1.innerText)
        
            button1.style.backgroundColor = "#8feb34";
            button2.style.backgroundColor = "#8feb34";
            button3.style.backgroundColor = "#8feb34";
        }

    // Second line

    else if (button4.innerText === button5.innerText && button4.innerText === button6.innerText && button5.innerText === button6.innerText
        && button4.innerText != "" && button5.innerText != "" && button6.innerText != "")
        {
            winState(button4.innerText)
            
            button4.style.backgroundColor = "#8feb34";
            button5.style.backgroundColor = "#8feb34";
            button6.style.backgroundColor = "#8feb34";
        }

    // Third line

    else if (button7.innerText === button8.innerText && button7.innerText === button9.innerText && button8.innerText === button9.innerText
        && button7.innerText != "" && button8.innerText != "" && button9.innerText != "")
        {
            winState(button7.innerText)
        
            button7.style.backgroundColor = "#8feb34";
            button8.style.backgroundColor = "#8feb34";
            button9.style.backgroundColor = "#8feb34";
        }

    // First column

    else if (button1.innerText === button4.innerText && button1.innerText === button7.innerText && button4.innerText === button7.innerText 
        && button1.innerText != "" && button4.innerText != "" && button7.innerText != "") 
        {
            winState(button1.innerText)

            button1.style.backgroundColor = "#8feb34";
            button4.style.backgroundColor = "#8feb34";
            button7.style.backgroundColor = "#8feb34";
        }

    // Second column

    else if (button2.innerText === button5.innerText && button2.innerText === button8.innerText && button5.innerText === button8.innerText 
        && button2.innerText != "" && button5.innerText != "" && button8.innerText != "") 
        {
            winState(button2.innerText)
        
            button2.style.backgroundColor = "#8feb34";
            button5.style.backgroundColor = "#8feb34";
            button8.style.backgroundColor = "#8feb34";
        }

    // Third column

    else if (button3.innerText === button6.innerText && button3.innerText === button9.innerText && button6.innerText === button9.innerText
        && button3.innerText != "" && button6.innerText != "" && button9.innerText != "") 
        {
            winState(button3.innerText)
        
            button3.style.backgroundColor = "#8feb34";
            button6.style.backgroundColor = "#8feb34";
            button9.style.backgroundColor = "#8feb34";
        }

    // First diagonal

    else if (button1.innerText === button5.innerText && button1.innerText === button9.innerText && button5.innerText === button9.innerText 
        && button1.innerText != "" && button5.innerText != "" && button9.innerText != "") 
        {
            
            winState(button1.innerText)
        
            button1.style.backgroundColor = "#8feb34";
            button5.style.backgroundColor = "#8feb34";
            button9.style.backgroundColor = "#8feb34";
        }

    // Second diagonal

    else if (button3.innerText === button5.innerText && button3.innerText === button7.innerText && button5.innerText === button7.innerText
        && button3.innerText != "" && button5.innerText != "" && button7.innerText != "")
        {
            winState(button3.innerText)
            
            button3.style.backgroundColor = "#8feb34";
            button5.style.backgroundColor = "#8feb34";
            button7.style.backgroundColor = "#8feb34";
        }

    // Draw

    else if (button1.innerText != "" && button2.innerText != "" && button3.innerText != "" && button4.innerText != "" 
    && button5.innerText != "" && button6.innerText != "" && button7.innerText != "" && button8.innerText != "" && button9.innerText != "")
    {draw()};
    
};


function winState(player) {
    disableButtons()

    if (player == "X") {
        document.getElementById("gameResult").innerText = playerOrder[0] + " wins!";
    }
    else {
        document.getElementById("gameResult").innerText = playerOrder[1] + " wins!";
    };

    document.getElementById("pop-up-window").style.display = "flex";
    document.getElementById("gameResult").style.color = document.getElementById("currentTurn").style.color;
};

function draw() {
    disableButtons()

    document.getElementById("gameResult").innerText = "Draw!";

    document.getElementById("pop-up-window").style.display = "flex";
    document.getElementById("gameResult").style.color = "#777"
};


function disableButtons() {
    button1.disabled = true
    button1.removeEventListener("mouseover", buttonBgDarker);

    button2.disabled = true
    button2.removeEventListener("mouseover", buttonBgDarker);

    button3.disabled = true
    button3.removeEventListener("mouseover", buttonBgDarker);

    button4.disabled = true
    button4.removeEventListener("mouseover", buttonBgDarker);

    button5.disabled = true
    button5.removeEventListener("mouseover", buttonBgDarker);

    button6.disabled = true
    button6.removeEventListener("mouseover", buttonBgDarker);

    button7.disabled = true
    button7.removeEventListener("mouseover", buttonBgDarker);

    button8.disabled = true
    button8.removeEventListener("mouseover", buttonBgDarker);

    button9.disabled = true
    button9.removeEventListener("mouseover", buttonBgDarker);
};