// argent parié
var bet = 0

// argent total joueur
var moneyWin = 10

// Stats
var gamePlay = 0
var gameWin = 0
var winrate = 0



function build() {
    // Création bootstrap
    const doc = document.body
    const app = document.createElement('div')
    const container = document.createElement('div')
    const row = document.createElement('div')
    const colmd1 = document.createElement('div')
    const colmd2 = document.createElement('div')
    const colmd3 = document.createElement('div')
    const colmd4 = document.createElement('div')
    const colmd_12 = document.createElement('div')

    app.setAttribute('id', 'app')
    container.setAttribute('class', 'container')
    row.setAttribute('class', "row")
    colmd1.setAttribute('class', 'col-md-3 py-5')
    colmd2.setAttribute('class', 'col-md-3 py-5')
    colmd3.setAttribute('class', 'col-md-3 py-5')
    colmd4.setAttribute('class', 'col-md-3 py-5')
    colmd_12.setAttribute('id', 'result')
    colmd_12.setAttribute('class', 'col-md-12 py-5')
    colmd_12.innerHTML = ''


    doc.appendChild(app)
    app.appendChild(container)
    container.appendChild(row)
    row.appendChild(colmd1)
    row.appendChild(colmd2)
    row.appendChild(colmd3)
    row.appendChild(colmd4)
    row.appendChild(colmd_12)


    // Déclaration des const

    const inputBet = document.createElement('input')
    const inputForm = document.createElement('form')
    const select = document.createElement('select')
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    const option3 = document.createElement('option')
    const inputMoney = document.createElement('input')
    const inputWinrate = document.createElement('input')
    const btn = document.createElement('button')
    
    // Selecteur

    select.setAttribute('id', 'pfc')

    option1.setAttribute('value', 'pierre')
    option1.innerText = 'Pierre'

    option2.setAttribute('value', 'feuille')
    option2.innerText = 'Feuille'

    option3.setAttribute('value', 'ciseaux')
    option3.innerText = 'Ciseaux'

    btn.setAttribute('type', 'submit')
    btn.setAttribute('onclick', 'startGame()')
    btn.innerText = 'Play'

    // Input
    inputBet.setAttribute('type', 'number')
    inputBet.setAttribute('id', 'bet')

    inputMoney.setAttribute('disabled', '')
    inputWinrate.setAttribute('disabled', '')
    inputMoney.setAttribute('id', 'moneytotal')
    inputWinrate.setAttribute('id', 'winrate')

    inputBet.setAttribute('mix', '1')
    inputBet.setAttribute('max', '10000')
    inputBet.setAttribute('placeholder', 'Choisisez votre montant')
    inputMoney.setAttribute('value', `Argent : ${moneyWin}$`)
    inputWinrate.setAttribute('value', `Winrate : ${winrate.toFixed(2)}%`)

    //--------

    colmd1.appendChild(inputBet)
    colmd2.appendChild(inputForm)
    colmd2.appendChild(btn)
    colmd3.appendChild(inputMoney)
    colmd4.appendChild(inputWinrate)

    inputForm.appendChild(select)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)

}

function startGame() {
    const playerSelect = document.getElementById('pfc')
    const colmd_12 = document.getElementById('result')
    const inputBet = document.getElementById('bet')
    const inputMoney = document.getElementById('moneytotal')
    const inputWinrate = document.getElementById('winrate')
    

    var rdmNum = randomNumber(1, 3);
    bet = inputBet.value

    if(moneyWin >= bet){
        if (bet <= 0) {
            colmd_12.innerHTML = 'Vous devez saisir un montant a parié !'
        } else {

            let bot;
            let egal = 'Personne ne gagne dommage :('
            let win = 'Bien joué a toi tu gagne !'
            let loose = 'Quel dommage, tu perds :('
            gamePlay++
            
            if (rdmNum === 1) {
                bot = 'pierre'
                if (bot == playerSelect.value) {
                    colmd_12.innerHTML = egal
                } else if (playerSelect.value == "feuille") {
                    colmd_12.innerHTML = win
                    moneyWin += (bet*2)
                    gameWin++
                } else if (playerSelect.value == "ciseaux") {
                    colmd_12.innerHTML = loose
                    moneyWin -= bet
                }
            }
            if (rdmNum === 2) {
                bot = 'feuille'
                if (bot == playerSelect.value) {
                    colmd_12.innerHTML = egal
                } else if (playerSelect.value == "ciseaux") {
                    colmd_12.innerHTML = win
                    moneyWin += (bet*2)
                    gameWin++
                } else if (playerSelect.value == "pierre") {
                    colmd_12.innerHTML = loose
                    moneyWin -= bet
                }
            }
            if (rdmNum === 3) {
                bot = 'ciseaux'
                if (bot == playerSelect.value) {
                    colmd_12.innerHTML = egal
                } else if (playerSelect.value == "pierre") {
                    colmd_12.innerHTML = win
                    moneyWin += (bet*2)
                    gameWin++
                } else if (playerSelect.value == "feuille") {
                    colmd_12.innerHTML = loose
                    moneyWin -= bet
                }
            }
            
            setTimeout(function () {
                var winr = gameWin / gamePlay * 100
                inputMoney.setAttribute('value', `Argent : ${moneyWin}$`)
                inputWinrate.setAttribute('value', `Winrate : ${winr.toFixed(2)}%`)

                if(moneyWin <= 0){
                    window.location.reload();
                }
                colmd_12.innerHTML = ''
            },2000)
        }
    }else{
        colmd_12.innerHTML = `Vous n'avez pas assez d'argent !`
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// // // // // // // // // // // // // // //
build()