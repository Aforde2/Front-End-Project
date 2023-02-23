const button = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');
const agebtn = document.getElementById('age-button');
// const key = 'ec7ce5cfef164612b06852deef009231'
const key = 'e2ca639f28d54b3aaddaafe103badf37'
// const drinkData = data.strDrink;

button.addEventListener('click', () => {
    clearContentContainer();
    // button.disabled = true
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then((response) => response.json())
        .then((data) => {
            let drinkList = data.drinks;
            console.log(data);
            const drink = randomdrink (drinkList)
        })

      
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

// fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
   
   
   

    
//     });

});

function randomdrink (drinks) {
    let randomIndex = Math.floor(Math.random() * drinks.length);

    let drink = drinks[randomIndex];
    return drink;

}


foodBtn.addEventListener('click', () => {
    clearContentContainer();
    foodBtn.disabled = true
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}&tags=vegetarian`)
    .then((response) => response.json())
    .then((data) => {
        let foodList = data.recipes;
        console.log(data);

        // onsole.log(count);
        // console.log(drinkList[i].strDrink);
        foodList.forEach(element => { 
            // addToContentContainer_OLD(element)
            addToContentContainer(element)
        });
        // console.log(vegan);
    });

});

function addToContentContainer_OLD(element){
     // const img = document.createElement('img');
     const img_src = element.image;
     const title = element.title;
     const instructions = element.instructions;
     const servings = element.servings;
     const summary = element.summary;
     const glutenFree = element.glutenFree;
     const vegetarian = element.vegetarian;
     const vegan = element.vegan;
     const cheap = element.cheap;
     const div1 = document.createElement('div');
     const p1 = document.createElement('p');
     p1.innerHTML = instructions;
     const drinkContainer = document.getElementById('content-container');
     // console.log(element.title);
     div1.innerText = (element.title);
     // drinkContainer.append(div1)
     // drinkContainer.append(p1)
     
     drinkContainer.innerHTML = `<div class="card" style="width: 18rem;">
         <img src="${img_src}" class="card-img-top" alt="...">
         <h3>${title}</h3>
         <div class="card-body">
             <p class="card-text">${instructions}</p>
         </div>
         </div>`
}

function clearContentContainer(){
    const contentContainerDiv = document.getElementById('content-container');
    contentContainerDiv.innerHTML = "";
}



function addToContentContainer(element){
    const contentContainerDiv = document.getElementById('content-container');
    const foodOrDrinkDiv = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const card_body_div = document.createElement('div');
    const p = document.createElement('p');

    img.src =  element.image;
    img.className = "card-img-top"
    img.alt = "..."

    h3.innerHTML = element.title;

    p.innerHTML = element.instructions;
    p.className = "card-text"

    card_body_div.className = "card-body"
    card_body_div.appendChild(p);

    foodOrDrinkDiv.className = "card"
    foodOrDrinkDiv.style = "width: 18rem;"
    foodOrDrinkDiv.appendChild(img);
    foodOrDrinkDiv.appendChild(h3);
    foodOrDrinkDiv.appendChild(card_body_div);

    contentContainerDiv.appendChild(foodOrDrinkDiv);
}


