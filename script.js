const drinkBtn = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');
const input = document.getElementById('query');
const searchFoodBtn = document.getElementById('searchFood');
const searchDrinkBtn = document.getElementById('searchDrink')
const userInput = document.getElementById('userSearch')
const userSelectionDisplay = document.getElementById('userSelectionDisplay')
let randomNum = Math.floor(Math.random() * (20 - 1 + 1) + 1); //<== random number between 1-20
console.log(randomNum);

searchDrinkBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const reqValues = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b29fc64d5dmsha8ed2b40f31773ap164a7ejsn6aa4d4243795',
            'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
        }
    };
    let val = userInput.value 
    fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=${val}&limit=20`, reqValues)
        .then(response => response.json())
        .then(data => {
            const newDiv = document.createElement('div')
            let name = data[0].cocktail_name
            let description = data[0].description
            const imgPlaceholder = './Cocktail_Bar_Image.webp'
            newDiv.innerHTML = `
            <img src="${imgPlaceholder}" />
            <h2>${name}</h2>
            <h6>${description}</h6>
            `
            userSelectionDisplay.appendChild(newDiv)   






        })
        .catch(err => console.error(err));
})

searchFoodBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let val = userInput.value 
    fetch (`https://api.spoonacular.com/food/menuItems/search?query=${val}&apiKey=cae44d7078c3414a8f7abd3a8419364a`)
    .then (response => response.json())
    .then (data => {
        const newDiv = document.createElement('div')
        let title = data.menuItems[0].title
        let image = data.menuItems[0].image
        let servings = data.menuItems[0].servings.number
        newDiv.innerHTML = `
        <img src="${image}" />
        <h2>${title}</h2>
        <h6>${servings}</h6>
        `
        userSelectionDisplay.appendChild(newDiv)
        console.log(image)


    })

})



    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

drinkBtn.addEventListener('click', () =>{

fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20`, options)
	.then(response => response.json())
	.then(data => {
        console.log(data);
        let drinkList = data;
                const alcoholic = data[randomNum].alcoholic;
                const cocktailName = data[randomNum].cocktail_name;
                const description = data[randomNum].description;
                const garnish = data[randomNum].garnish;
        //         // const ingredient = element.ingredients.ingredient.name;
        //         const img_src2 = element.glasses[0].glass.img_url;
        const imgPlaceholder = './Cocktail_Bar_Image.webp'
                const drinkContainer = document.getElementById('content-container1');
                const div1 = document.createElement('div');
        
            
            drinkContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
           
            <img src="${imgPlaceholder}"  alt="placeholder-image"/>
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


// searchBtn.addEventListener('input', () => {

foodBtn.addEventListener('click', () => {
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=cae44d7078c3414a8f7abd3a8419364a`)
    .then(response => response.json())
    .then(data => {
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

    
            // const glutenFree =element.glutenFree;
            // const vegetarian =element.vegetarian;
            // const vegan =element.vegan;
            // const cheap =element.cheap;
            // const div1 = document.createElement('div');
            // const p1 = document.createElement('p');
            // p1.innerHTML = instructions;
            // console.log(element.title);
            // div1.innerText = (element.title);
        
    });
});

            // const drinkContainer = document.getElementById('content-container');


    // console.log(data);
    // let foodList = data.recipes;
    //     foodList.forEach(element => {//<== grabs each variable from recipe array

    //         const  img_src = element.image;
    //         const title = element.title;
    //         const instructions =element.instructions;
    //         const servings =element.servings;
    //         const summary =element.summary;
    //         const foodContainer = document.getElementById('content-container2');
            
            
            
    //     foodContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
    //     <img src="${img_src}" class="card-img-top" alt="...">
    //     <h3>${title}</h3>
    //     <p class="card text-center"><small class="text-muted">serves: ${servings}</small></p>
    //     <div class="card-body">
    //     <p class="card-text"><small>${instructions}</small></p>
    //     <p class="card-footer"><small class="text muted"${summary}</small></p>
    //     </div>
    //     </div>`
    //     });


    //         const glutenFree =element.glutenFree;
    //         const vegetarian =element.vegetarian;
    //         const vegan =element.vegan;
    //         const cheap =element.cheap;
    //         const div1 = document.createElement('div');
    //         const p1 = document.createElement('p');
    //         p1.innerHTML = instructions;
    //         const drinkContainer = document.getElementById('content-container');
    //         console.log(element.title);
    //         div1.innerText = (element.title);
    //         // drinkContainer.append(div1)
    //         // drinkContainer.append(p1)
            
    //     drinkContainer.innerHTML = `<div class="card" style="width: 18rem;">
    //     <img src="${img_src}" class="card-img-top" alt="...">
    //     <h3>${title}</h3>
    //     <div class="card-body">
    //         <p class="card-text">${instructions}</p>
    //     </div>
    //     </div>`
//         });
//     }
//     // console.log(vegan);
// });

// });




