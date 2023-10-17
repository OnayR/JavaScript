const studenten = [];

function printName() {
    // Paakt de ingevulde naam en achternaam en slaat het op
    let name = document.getElementById("naam").value;
    let lastName = document.getElementById("achternaam").value;

    // Pusht het de array 
    studenten.push([name, lastName]);

    // Cleared de input fields
    document.getElementById("naam").value = "";
    document.getElementById("achternaam").value = "";

    // Roept updateList() aan
    updateList();
}

function updateList() {
    console.log("click")
    // Maakt een list aan met elementId myList
    const myList = document.getElementById("myList");

    // Cleared de list
    myList.innerHTML = '';

    let nummer = 1;
    // for each loop die de data neerzet
    studenten.forEach(entry => {
        const node = document.createElement("li");
        node.setAttribute("id", nummer);
        node.setAttribute("onClick", "this.remove()");
        const textnode = document.createTextNode(`${nummer} Name: ${entry[0]}, Last Name: ${entry[1]}`);
        node.appendChild(textnode);
        myList.appendChild(node);
        console.log(myList);
        nummer++;
    });
}