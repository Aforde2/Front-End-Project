const drinkBtn = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');
const input = document.getElementById('query');
const searchBtn = document.getElementById('search');
let randomNum = Math.floor(Math.random() * 20 + 1); //<== random number between 1-20
console.log(randomNum);
searchBtn.addEventListener('input', () => {
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=cae44d7078c3414a8f7abd3a8419364a&tags=vegetarian`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    });
});


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

drinkBtn.addEventListener('click', () =>{

fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=${randomNum}`, options)
	.then(response => response.json())
	.then(data => {
        console.log(data);
        let drinkList = data;
                const alcoholic = data[0].alcoholic;
                const cocktailName = data[0].cocktail_name;
                const description = data[0].description;
                const garnish = data[0].garnish;
        //         // const ingredient = element.ingredients.ingredient.name;
        //         const img_src2 = element.glasses[0].glass.img_url;
                const drinkContainer = document.getElementById('content-container1');
                const div1 = document.createElement('div');
        
            
            drinkContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
           
            <h3>${cocktailName}</h3>
            <p class="card text-center"><small class="text-muted">serves: ${garnish}</small></p>
            <div class="card-body">
              <p class="card-text"><small>${description}</small></p>
              <p class="card-footer"><small class="text muted"${alcoholic}</small></p>
            </div>
          </div>`
          drinkContainer.append(div1);
        });
    
    
        

    
});




const key = 'cae44d7078c3414a8f7abd3a8419364a';
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
   
   
   

    
//     });

});



    console.log(data);
    let foodList = data.recipes;
        foodList.forEach(element => {//<== grabs each variable from recipe array

            const  img_src = element.image;
            const title = element.title;
            const instructions =element.instructions;
            const servings =element.servings;
            const summary =element.summary;
            const foodContainer = document.getElementById('content-container2');
            
            
            
        foodContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
        <img src="${img_src}" class="card-img-top" alt="...">
        <h3>${title}</h3>
        <p class="card text-center"><small class="text-muted">serves: ${servings}</small></p>
        <div class="card-body">
          <p class="card-text"><small>${instructions}</small></p>
          <p class="card-footer"><small class="text muted"${summary}</small></p>
        </div>
      </div>`
        });


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

});




