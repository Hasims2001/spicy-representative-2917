let men = document.querySelector("#men");
let display = document.querySelector("#display_men");
let fetchedData = [];
const API = "./jsons/nav.json";
fetch(API).then((temp)=>{
    return temp.json();
}).then((data)=>{
    displayData(data);   
}).catch((error)=>{
    console.log(error);
})

// console.log(fetchedData);

// if(fetchedData !== null){
//  displayData(fetchedData);   
// }

// function displayData(temp){
//     temp = temp.categories.men;
//     // display.innerHTML = "";
//     console.log(temp);
// 
//     temp.forEach(element => {
//         
//     });
//     
// }
