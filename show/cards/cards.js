

function alignCards() {

    var containers = document.getElementsByClassName("cards-container");
    for (var i = 0; i < containers.length; i++) {
        var container  = containers[i];
        var cards = container.getElementsByClassName("card");
        // set card row number and column number
        var n_cards = cards.length;
        var n_cols = Math.ceil(Math.sqrt(n_cards));
        var row = 0;
        var col = 0;
        for (var j = 0; j < n_cards; j++) {
            var card = cards[j];
            card.style.gridRow = row + 1;
            card.style.gridColumn = col + 1;
            col++;
            if (col == n_cols) {
                col = 0;
                row++;
            }
        }



    }

}

window.addEventListener("load", alignCards);
