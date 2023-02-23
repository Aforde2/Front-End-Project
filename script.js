const button = document.getElementById('cocktail-button');
// const drinkData = data.strDrink;



button.addEventListener('click', () =>{
    
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
.then((response) => response.json())
.then((data) => {
    let drinkList = data.drinks;
    for(let i = 0; i < drinkList.length; i++) {
        // console.log(count);
        // console.log(drinkList[i].strDrink);
        drinkList.forEach(element => {
            const div1 = document.createElement('div');
            const drinkContainer = document.getElementById('content-container');
            console.log(element.strDrink);
            div1.innerText = (element.strDrink);
            drinkContainer.append(div1)
        });
    }
    
   
   
   

    
    });
//     const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka';
    
// async function getDrinks(${url1}){
//     const x = await
// }

});


