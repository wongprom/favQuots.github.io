// Have to use fetch() like this for this type of API

const apiKey = "673e3863be09306aa8aa0a3801bd906e";
const fetchOptions = {
    headers: {
        'Authorization': 'Token token="673e3863be09306aa8aa0a3801bd906e"'
    }
}
const spinner = document.getElementById('spinner');

function randomQuots() {
    fetch('https://favqs.com/api/quotes', fetchOptions)
        .then(function (response) {
            return response.json();    
        })
        .then(function (randomQuots) {    
            displayRandomQuots(randomQuots);            
        })
        .catch(function (error) {
            console.log(error);
        })
}
randomQuots();

function displayRandomQuots(randomQuots) {
    const text_block = document.getElementById('text_block');
    let todaysQuot = `
    <p> ${randomQuots.quotes[0].body}</p>
    `;
    text_block.insertAdjacentHTML('beforeend',todaysQuot);
}

//search form 
const input = document.getElementById('input');
input.addEventListener('change', function () {
    let inputValue = input.value;
    getQuotsBySearchField(inputValue);   
})

//get quot by searh field
function getQuotsBySearchField(inputValue) {
    fetch(`https://favqs.com/api/quotes/?filter=${inputValue}`, fetchOptions)
        
    .then(function (response) {
            return response.json();
        })
        .then((Searchdata) => {
            displaySearchQuots(Searchdata);  
        })
        .catch(function (error) {
            console.log(error);
        })
}
 
function displaySearchQuots(Searchdata){
for (let i = 0; i < 10; i++) {
    const quotObject = Searchdata.quotes[i];
    const outputSearch = document.getElementById('outPutSearch');
    let searchQuots = `
    <p>${quotObject.body}</p>
    `;
    outPutSearch.insertAdjacentHTML('beforeend',searchQuots);
    console.log(quotObject.body);  
  }
}

 
   
    
   

   
    
    
    
 