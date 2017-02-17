var head = document.createElement("div");
var btnPan = document.createElement("BUTTON");
console.log(btnPan);
var panierTxt = document.createTextNode("PANIER")
console.log(panierTxt);
// var btnTxt = document.createElement("p");
// btnTxt.innerHTML = "<p>panier</p>";
head.appendChild(btnPan);
btnPan.appendChild(panierTxt)
document.body.appendChild(head);
btnPan.style.float = "right";
head.style.margin = "20px";


var main = document.createElement("div");
main.classList.add("containerPlats");
document.body.appendChild(main);
var myPlats = document.getElementsByClassName("containerPlats");
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

    var btn = document.createElement("BUTTON");
    console.log(btn);
    var btnTxt = document.createTextNode("Order")
    console.log(btnTxt);

    btn.addEventListener("click", function pan() {
      console.log(btn);
      alert("helo gombot");
    });

    id.innerHTML = plats[i].id;
    nom.innerHTML = plats[i].nom;
    description.innerHTML = plats[i].description;
    price.innerHTML = plats[i].price;
    selected.innerHTML = plats[i].selected;
    btn.innerHTML;

    main.style.display = "flex";
    main.style.justifyContent = "center";
    div.style.textAlign = "center";
    div.style.height = "250px";
    div.style.width = "200px";
    div.style.backgroundColor = "blue";
    div.style.color = "white";
    div.style.margin = "30px";
    btn.style.backgroungColor = "yellow";


    main.appendChild(div);
    div.appendChild(id);
    div.appendChild(nom);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(selected);
    btn.appendChild(btnTxt);
    div.appendChild(btn);

  }
}
myMenu(content);







// $("#myButton").click(function () {
//     var test = $('<button>Test</button>').click(function () {
//         alert('hi');
//     });
    // $("#nodeAttributeHeader").attr('style', 'display: table-row;');
    // $("#addNodeTable tr:last").before('<tr><td>' + test.html() + '</td></tr>');
// })
