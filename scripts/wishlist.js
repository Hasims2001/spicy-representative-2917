import jsonData from '../jsons/product.json' assert {type: 'json'};
import jsonImageData from '../jsons/product_img.json' assert {type: 'json'};


let LSData = localStorage.getItem("wishlist");

if(LSData === null){
    LSData = [];
}else{
    LSData = JSON.parse(LSData);
}

let products = document.querySelector("#products");

    let count = 0;


    displayProduct(LSData);
   
    function displayProduct(temp){
        products.innerHTML = "";
        for(let t=0; t<temp.length; t++){
            let img_match = temp[t].img_id;
        for(let i=0; i<jsonImageData.length; i++){
            
            let id = (jsonImageData[i].item_img_src).split("-");
            if(img_match === id[id.length-3]){
                count++;
                let card = document.createElement("div");
                card.style.textAlign = "center";
                card.style.cursor = "pointer";
                
                let img = document.createElement("img");
                img.setAttribute('class', 'product_img');
                
                let brand = document.createElement("div");
                brand.setAttribute("class", "brand");
    
                let name = document.createElement("div");
                name.setAttribute("class", "name");
                let price = document.createElement("div");
                price.style.fontSize = "15px";
                let main = document.createElement("span");
                main.style.fontWeight = "bold";
                main.style.margin = "2px 2px 0";
                let over = document.createElement("span");
                over.style.margin = "2px 2px 0";
                over.style.fontSize = "12px";
    
                let per = document.createElement("span");
                per.style.margin = "2px 2px 0";
                per.style.fontSize = "12px";
                per.style.color = "#b19975";
                img.setAttribute("src", jsonImageData[i].item_img_src);
                img_match = id[id.length-3];
                img.style.width = "100%";
                
                for(let j=0; j<temp.length; j++){
                    if(jsonImageData[i].item_link_href === temp[j].item_link_href){
                        brand.innerText = temp[j].item_brand;
                        name.innerText = temp[j].item_name;
    
                        main.innerText = (temp[j].item_discountprice).replace('?', '₹');
                        over.innerText = (temp[j].item_price).replace('?', '₹');
                        per.innerText = temp[j].item_discount;
    
                        // price.innerText = main +"  "+ over + "  " + per;
                        
                    }
                }
                price.append(main, over, per);
                card.append(img, brand, name, price);
                products.append(card);
            over.style.textDecoration = "line-through";
            card.addEventListener("click", ()=>{
                window.location = "./view_product.html";
            });
            break; 
        }
        
        
    } 
    let item_count = document.querySelector("#sort_cont > #itemcount");
    item_count.innerText = String(count) + " Items Found";  
}

    
    }

let fivebtn = document.querySelector("#fivebtn");
let threebtn = document.querySelector("#threebtn");

fivebtn.addEventListener('click', ()=>{

    fivebtn.style.backgroundImage = "linear-gradient(90deg,#939393 7px,#939393 0,#fff 0,#fff 0)";
    document.querySelector("#gridbtnfive").style.borderColor = "#939393";
    threebtn.style.backgroundImage = "linear-gradient(90deg,#c4c4c4 7px,#c4c4c4 0,#fff 0,#fff 0)";
    document.querySelector("#gridbtnthree").style.borderColor = "#c4c4c4";

    // $('#products').css("animation", "fadeIn 2s");
    $('#products').css("grid-template-columns", "repeat(5, minmax(0, 1fr)");
});
threebtn.addEventListener('click', ()=>{

    threebtn.style.backgroundImage = "linear-gradient(90deg,#939393 7px,#939393 0,#fff 0,#fff 0)";
    document.querySelector("#gridbtnthree").style.borderColor = "#939393";
    fivebtn.style.backgroundImage = "linear-gradient(90deg,#c4c4c4 7px,#c4c4c4 0,#fff 0,#fff 0)";
    document.querySelector("#gridbtnfive").style.borderColor = "#c4c4c4";

    // $('#products').css("animation", "fadeIn 2s");
    $('#products').css("grid-template-columns", "repeat(3, minmax(0, 1fr)");
});
