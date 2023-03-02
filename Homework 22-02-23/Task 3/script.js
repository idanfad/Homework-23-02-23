

async function getRandomDrinks() {
    let loading = document.body.innerHTML = "Loading Cocktails...";
  
    setInterval(async()=>{
        
        let requestDrinksAPi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        let json = await requestDrinksAPi.json();
        let name = json.drinks[0].strDrink;
        console.log(name);
        headerCreator(name)
    
    
        let i = 1;
        while (true) {
            let ingredient = json.drinks[0]['strIngredient' + i];
            if (ingredient === null) {
                break;
            }
            const response1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient);
            const json1 = await response1.json();
            console.log(json1);
            
            printIngredients(json1.ingredients[0].strIngredient,json1.ingredients[0].strDescription,json1.ingredients[0].strAlcohol);
            i+= 1;
        }
    },7000);
   


}

getRandomDrinks();


function printIngredients(name,description,isAlcholic){
    
    let newBlock = document.createElement('div');
    newBlock.innerHTML = 
    `
    <b>Ingredient name</b>: ${name}<br><br>
    <b>Description</b>: ${description || ""}<br><br>
    <b>Is Alchoholic</b>: ${isAlcholic || ""}`;
    newBlock.style.paddingBottom = "15px";
    newBlock.style.fontSize = "14pt";
    document.body.appendChild(newBlock);
}

function headerCreator(name){
    document.body.innerHTML = "";
    let newBlock = document.createElement('div');
    let newText = document.createTextNode(name);
    newBlock.style.textAlign = "center";
    newBlock.style.fontSize = "25pt";
    newBlock.style.paddingTop = "15px";


    newBlock.appendChild(newText);
    document.body.appendChild(newBlock);
}