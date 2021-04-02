menu_main = ["Pepperoni", "Vegetable", "Extra cheese", "Mushroom", "Capsicum"];

function menu() {
    document.getElementById("printMenu").innerHTML = menu_main;
}

function add() {
    initem = document.getElementById("in").value;
    menu_main.push(initem);
    document.getElementById("printMenu").innerHTML = menu_main;
}
