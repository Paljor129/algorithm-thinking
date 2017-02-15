var myPlats = document.getElementById("containerPlats");
var content = table.plats;
var box = [];

function myMenu(plats){
  for (var i = 0; i < content.length; i++) {
    var div = document.createElement("div");
    var id = document.createElement("p");
    var nom = document.createElement("p");
    var description = document.createElement("p");
    var price = document.createElement("p");
    var selected = document.createElement("p");

    id.innerHTML = plats[i].id;
    nom.innerHTML = plats[i].nom;
    description.innerHTML = plats[i].description;
    price.innerHTML = plats[i].price;
    selected.innerHTML = plats[i].selected;

    containerPlats.appendChild(div);
    div.appendChild(id);
    div.appendChild(nom);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(selected);
  }
}
myMenu(content);
