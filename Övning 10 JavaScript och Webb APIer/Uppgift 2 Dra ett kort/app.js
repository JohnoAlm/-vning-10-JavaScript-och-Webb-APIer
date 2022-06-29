let cardButton = document.querySelector("#cardBtn");
let cardImage = document.querySelector("#cardImg");
let cardText = document.querySelector("#cardTxt");

const drawCard = function(){

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1",{
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {

        console.log(data);
        const newImageElement = document.createElement("img");
        cardImage.innerHTML = "";

        data.cards.forEach(card => {
            newImageElement.setAttribute("src", `${card.image}`);
            cardImage.appendChild(newImageElement);

            cardText.innerHTML = `${card.suit} ${card.value}`;
        })
    })
    .catch(err => console.log(err))
}

cardButton.addEventListener("click", function(){
    drawCard();
})
