const button = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');

// const drinkData = data.strDrink;



button.addEventListener('click', () =>{
    
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
// .then((response) => response.json())
// .then((data) => {
//     let drinkList = data.drinks;
//     console.log(data);
//     for(let i = 0; i < drinkList.length; i++) {
//         // console.log(count);
//         // console.log(drinkList[i].strDrink);
//         drinkList.forEach(element => {
//             const div1 = document.createElement('div');
//             const drinkContainer = document.getElementById('content-container');
//             // console.log(element);
//             div1.innerText = (element.strDrink);
//             drinkContainer.append(div1)
//         });
        
//     }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
   
   
   

    
<<<<<<< HEAD
//     });

});


foodBtn.addEventListener('click', () =>{
    
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}&tags=vegetarian`)
.then((response) => response.json())
.then((data) => {
    let foodList = data.recipes;
    for(let i = 0; i < foodList.length; i++) {
        // console.log(count);
        // console.log(drinkList[i].strDrink);
        foodList.forEach(element => {
            // const img = document.createElement('img');
            const  img_src = element.image;
            const title = element.title;
            const instructions =element.instructions;
            const servings =element.servings;
            const summary =element.summary;
            const glutenFree =element.glutenFree;
            const vegetarian =element.vegetarian;
            const vegan =element.vegan;
            const cheap =element.cheap;
            const div1 = document.createElement('div');
            const p1 = document.createElement('p');
            p1.innerHTML = instructions;
            const drinkContainer = document.getElementById('content-container');
            console.log(element.title);
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
        });
    }
   
    // console.log(vegan);
});
=======
    });
<<<<<<< HEAD
//     const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';
    
// async function getDrinks(${url1}){
//     const x = await
// }
=======
>>>>>>> main

>>>>>>> 81d0b0edc68f9bfb236cd5e4c35e4a01f9570bae
});


