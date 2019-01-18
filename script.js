
//EXERCICE 1.1

let container = document.createElement("div");
document.body.appendChild(container);

let title = document.createElement("h1"); //create of the h1
container.appendChild(title); //h1 integration
title.textContent = "Cinéma Le Dauphin"; //h1 text

let p = document.createElement("p"); //create of the paragraph p
container.appendChild(p); //p integration
p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)." //text of my paragraph
let btnContinue = document.createElement("input"); //create input of the button
container.appendChild(btnContinue); //
btnContinue.type = "button"; //assigned him his type
btnContinue.value = "Voir les films à l’affiche cette semaine" //add text to the button

btnContinue.addEventListener("click", watchMovie, false);//add event listener for function watchMovie

function watchMovie() {
  container.hidden = true
  container2.hidden = false
}

// EXERCICE 1.2

let movies = [ //Create table movies 2 dimension
  ["titre du film", "realisateur", "nationalité", "année", "durée", "version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

// EXERCICE 1.3

let container2 = document.createElement("div");
container2.hidden = true;
document.body.appendChild(container2);

function arraydisplay(movies) {

  let i = 0; //declaration of the variable
  let j; //declaration of the variable
  let currentElmt; //create of the current element
  let currentElmt2; //create of the current element
  let table; //table create
  let tbody; //create tbody
  let tr; //create tr
  let td; //create td

  table = document.createElement("table"); //create the table
  container2.appendChild(table); //set the table in the body

  tbody = document.createElement("tbody"); //create of the tbody
  table.appendChild(tbody); //append the tbody in the table

  while (i < movies.length) { //Condition of continuation
    currentElmt = movies[i];
    let tr = document.createElement("tr");//create tr

    j = 0;

    while (j < currentElmt.length) {
      currentElmt2 = currentElmt[j];//Recovery of the current element
      let td = document.createElement("td");//generated a tr
      td.textContent = currentElmt[j];
      tr.appendChild(td);//append td in tr
      j++
    }
    tbody.appendChild(tr)
    i++
  }
}
arraydisplay(movies);


//----EXERCICE 2.1-------

let table2Dimension = [//Create Array 2 Dimension
      ['SUBSTANCES', 'Température de fusion ou solidification en °C', 'Température d’ébullition en °C'],
      ['acide acétique', '17', '118'],
      ['acide nitrique', '-41', '86'],
      ['acide sulfurique', '10', '290'],
      ['alcool éthylique', '-114', '78'],
      ['aluminium', '660', '2450']
];

//----EXERCICE 2.2------


function function2Dimension(table2Dimension , number){

  let array2 = [];
  let i = 0;
  let currentElmnt ;
  let nameSubstances ;
  let temperatureBoilling ;
  
  while (i < table2Dimension.length) {
    currentElmnt = table2Dimension[i];
    nameSubstances = currentElmnt[0];
    temperatureBoilling =  parseInt(currentElmnt[2]);

    if (temperatureBoilling < number) {
    array2.push(nameSubstances);
    }
   i = i +1;
  }
  return array2
  }
console.log(function2Dimension)
