//Variabler

const button = document.querySelector('.vodka');
const display = document.querySelector('.displayOfScore');
const multiplierButton = document.querySelector('#multiply')
const multiplierCostText = document.querySelector('#multiplierCost')
const totalClicksAmount = document.querySelector('#totalClicks')
const totalMultiplierScore = document.querySelector('#totalMultiplier')
const autoClickerButton = document.querySelector('#autoclicker')
const autoClickerCostText = document.querySelector('#autoClickerCost')
const sidneySelector = document.querySelector('.sidney')
const sidneySelector2 = document.querySelector('.sidney2')
const alcholicButton = document.querySelector('#localAlcoholic')
const alcoholicCostText = document.querySelector('#localAlcoholicCost')
const russianButton = document.querySelector('#russianDad')
const russianCostText = document.querySelector('#russianDadCost')
const alcoholicSelector1 = document.querySelector('.localAlcholic')
const alcoholicSelector2 = document.querySelector('.localAlcoholic2')
const russianSelector1 = document.querySelector('.russianDad')
const russianSelector2 = document.querySelector('.russianDad2')



let vodkaScore = 0;
let clickValue = 1;
let originalClickValue = 1;
let multiplier = 1;
let totalClicks = 0;
let amountOfSidney = 0;
let amountOfAlcoholics = 0;
let amountOfRussians = 0;
let totalAutoPerSecond = 0;


//powerups cost
let multiplierCost = 20;
let autoClickerCost = 50;
let alcoholicsClickerCost = 100;
let russianClickerCost = 200;

//displayScoreFunction
function displayScoreFunction () {
    display.innerHTML = vodkaScore;
}

//displayMultiplierTimes
function displayMultiplierTimes () {
    totalMultiplierScore.innerHTML = 'Clicks are multiplied '+ multiplier + ' times'
}


//displayTotalClicks
function displayTotalClicks () {
    totalClicksAmount.innerHTML = totalClicks;
}

//displayMultiplierCost
function displayMultiplierCost () {
    multiplierCostText.innerHTML = multiplierCost;
}

//displayAutoClickCost
function displayAutoClick () {
    autoClickerCostText.innerHTML = autoClickerCost
}

//displayPictureOnBuy
function displayPictureOnBuy() {
    sidneySelector.style.display = "block";
}

//displayPictureOnBuy
function displayPictureOnBuy2() {
    sidneySelector2.style.display = "block";
}

//displayPictureOnBuy - Alcholic 1
function displayPictureOnBuyAlcoholic1() {
    alcoholicSelector1.style.display = "block";
}
//displayPictureOnBuy - Alcoholic 2
function displayPictureOnBuyAlcoholic2() {
    alcoholicSelector2.style.display = "block";
}

//display russianCostOnBuy
function displayAlcoholicCost() {
    alcoholicCostText.innerHTML = alcoholicsClickerCost
}
//displayPictureOnBuy - Russian 1
function displayPictureOnBuyRussian1() {
    russianSelector1.style.display = "block";
}
//display russianCostOnBuy
function displayRussianCost() {
    russianCostText.innerHTML = russianClickerCost
}


//displayPictureOnBUy - Russian 2
function displayPictureOnBuyRussian2() {
    russianSelector2.style.display = "block";
}


//increaseScoreforAutoclicker
function increaseScoreForAutoClick () {
    vodkaScore += originalClickValue;
    displayScoreFunction()
}
//increaseScoreforAlcoholic
function increaseScoreForAlcoholic () {
    vodkaScore += originalClickValue+1;
    displayScoreFunction()
}
//increaseScoreforRussian
function increaseScoreForRussian () {
    vodkaScore += originalClickValue+2;
    displayScoreFunction()
}


//disable button
function disableButton (desiredButton) {
    desiredButton.disabled = true;
}



//increaseOnClick
button.addEventListener('click',function(){
    vodkaScore += clickValue;
    totalClicks += originalClickValue;
    displayScoreFunction()
    displayTotalClicks()
    displayMultiplierTimes()
})


//multiplier
multiplierButton.addEventListener('click', function (){
    if (vodkaScore >= multiplierCost) {
        vodkaScore -= multiplierCost;
        if (vodkaScore < 0) {
            vodkaScore = 0;
        }
        multiplier += 1;
        clickValue = multiplier
        displayScoreFunction()
        multiplierCost *= multiplier
        displayMultiplierCost()
        displayMultiplierTimes()
    }
    })

// autoclicker
if (amountOfSidney <= 2) {
    autoClickerButton.addEventListener('click', function () {
            if (vodkaScore >= autoClickerCost) {
                vodkaScore -= autoClickerCost;
                if (vodkaScore < 0) {
                    vodkaScore = 0;
                }
                amountOfSidney += 1
                setInterval(increaseScoreForAutoClick, 1000)
                autoClickerCost *= 2.5
                displayPictureOnBuy()
                displayScoreFunction()
                displayAutoClick()
                if (amountOfSidney >= 2) {
                    displayPictureOnBuy2()
                    disableButton(autoClickerButton)

                }
            }
        }
    )
}
//alcoholic buy

alcholicButton.addEventListener('click', function(){
        if (vodkaScore >= alcoholicsClickerCost) {
            vodkaScore -= alcoholicsClickerCost;
            if (vodkaScore < 0) {
                vodkaScore = 0;
            }
            amountOfAlcoholics+=1
            setInterval(increaseScoreForAlcoholic, 1000)
            alcoholicsClickerCost *= 5
            displayPictureOnBuyAlcoholic1()
            displayScoreFunction()
            displayAlcoholicCost()
            displayAutoClick()

            if (amountOfAlcoholics >= 2) {
                displayPictureOnBuyAlcoholic2()
                disableButton(alcholicButton)

            }
        }
    }
)

//Russian buy

russianButton.addEventListener('click', function(){
        if (vodkaScore >= russianClickerCost) {
            vodkaScore -= russianClickerCost;
            if (vodkaScore < 0) {
                vodkaScore = 0;
            }
            amountOfRussians+=1
            setInterval(increaseScoreForRussian, 1000)
            russianClickerCost *= 10
            displayPictureOnBuyRussian1()
            displayScoreFunction()
            displayRussianCost()
            displayAutoClick()

            if (amountOfRussians >= 2) {
                displayPictureOnBuyRussian2()
                disableButton(russianButton)
            }
        }
    }
)

