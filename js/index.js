const cardContainer = document.querySelector(".card-container");
const icon_open = document.querySelector(".icon_menu_open");
const icon_close = document.querySelector(".icon_menu_close");
const flyer = document.querySelector(".menu_right_flyer");

let tableauProduit = [];
tableauProduit = [
    tableauProduit[0] = {id: 0, name: "Paté Croute Individuel", price: "4,00", image: "pate_croute.jpg", ingr: ["Pâte feuilleté au beurre", "Viande de porc", "Epice"]},
    tableauProduit[1] = {id: 1, name: "Paté Croute 5 personnes", price: "15,00", image: "pate_croute__8p.jpg", ingr: ["Pâte feuilleté", "Viande de porc", "Epice"]},
    tableauProduit[2] = {id: 2, name: "Paté Croute 8 personnes", price: "19,90", image: "pate_croute__8p.jpg", ingr: ["Pâte feuilleté", "Viande de porc", "Epice"]},
    tableauProduit[3] = {id: 3, name: "Boudin Blanc Feuilleté", price: "4,00", image: "boudin_blanc_feuillete.jpg", ingr: ["Pate feuilleté", "Boudin blanc de Haybes", "Gruyère"]},
    tableauProduit[4] = {id: 4, name: "Andouillette Feuilletée", price: "4,00", image: "andouillette_feuilletee.jpg", ingr: ["Pâte feuilleté", "Andouillette", "Moutarde"]},
    tableauProduit[5] = {id: 5, name: "Tarte Au Maroilles", price: "9,90", image: "tarte_maroilles.jpg", ingr: ["Pâte levée", "Crème fraiche", "Maroilles", "Muscade"]},
    tableauProduit[6] = {id: 6, name: "Quiche Lorraine Individuelle", price: "3,00", image: "quiche.jpg", ingr: ["Pâte brisée", "Lardons", "Crème liquide", "Lait", "Sel", "Poivre", "Muscade"]},
    tableauProduit[7] = {id: 7, name: "Quiche Lorraine 6 Personnes", price: "7,90", image: "quiche.jpg", ingr: ["Pâte brisée", "Lardons", "Crème liquide", "Lait", "Sel", "Poivre", "Muscade"]},
    tableauProduit[8] = {id: 8, name: "Tartiflette Individuelle", price: "3,00", image: "tartiflette.jpg", ingr: ["Pâte brisée", "Lait", "Crème liquide", "Lardons", "Fromage à tartiflette", "Sel", "Poivre", "Muscade"]},
    tableauProduit[9] = {id: 9, name: "Tartine Façon Raclette", price: "5,80", image: "tartine_raclette.jpg", ingr: ["Baguette tradition", "Moutarde", "Lardon", "Oignon frits", "Tomate", "Fromage raclette", "Sel", "Poivre"]},
    tableauProduit[10] = {id: 10, name: "Petite Tourte Boudin Blanc", price: "4,00", image: "petite_tourte_boudin_blanc.jpg", ingr: ["Pâte feuilleté", "Boudin blanc", "Ail", "Persil", "Crème liquide", "Sel", "Poivre", "Oeufs"]},
    /*tableauProduit[11] = {id: 11, name: "Petite Quiche Au Boudin Blanc", price: "3,00", image: "quiche_boudin_blanc.jpg", ingr: ["Pâte feuilleté", "Boudin blanc", "Ail", "Persil", "Crème liquide", "Sel", "Poivre", "Oeufs"]},*/
]

function Ingredient(indexDiv){
    let lstIngredient;
    lstIngredient = "";
    for (let index2 = 0; index2 < tableauProduit[indexDiv].ingr.length; index2++) {
        if(index2 < (tableauProduit[indexDiv].ingr.length - 1)){
            lstIngredient += tableauProduit[indexDiv].ingr[index2] + ", ";
        }else{
            lstIngredient += tableauProduit[indexDiv].ingr[index2];
        }
    }
    return lstIngredient
}

function AjoutDivProduit(index){
    cardContainer.innerHTML += 
        `
        <div class="card-wrapper">
        <div class="card">
          <div class="card-front">
            <div class="p-front">
              <p>
               ` + tableauProduit[index].name +`
              </p>
            </div>
            <div class="card-img">
              <img src="../img/Ingredient/` + tableauProduit[index].image +`" alt="">
            </div>
            <div class="card-price">
              Prix : ` + tableauProduit[index].price +`€
            </div>
            <i class="arrow-icon fa-solid fa-arrow-right"></i>
          </div>
          <div class="card-back">
            <div class="p-back">
              <p>
              ` + tableauProduit[index].name +`
              </p>
            </div>
            <div class="ingredient-back">
              <span>Ingrédients :</span> 
              `
               + Ingredient(index); +
              `
            </div>
          </div>
        </div>
      </div>
        `
}

function AjoutProduit(){
    for (let index = 0; index < tableauProduit.length; index++) {
        AjoutDivProduit(index);
    }
}

AjoutProduit();

if(icon_open){
  icon_open.addEventListener("click", () => {
      if(flyer.style.display == "flex"){
        flyer.style.display = "none";
      }else{
        flyer.style.display = "flex";
      }
  })

  if(flyer){
    flyer.addEventListener("mouseleave", () => {
        flyer.style.display = "none";
      })
  }
}

if(icon_close){
  icon_close.addEventListener("click", () => {
      if(flyer.style.display == "flex"){
        flyer.style.display = "none";
      }else{
        flyer.style.display = "flex";
      }
  })


}
