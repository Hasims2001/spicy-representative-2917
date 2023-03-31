import jsonData from '../jsons/product.json' assert {type: 'json'};
import jsonImageData from '../jsons/product_img.json' assert {type: 'json'};


let item_count = document.querySelector("#sort_cont > #itemcount");
item_count.textContent = String(jsonData.length) + " Items Found";

let products = document.querySelector("#products");
// if(jsonData.length !== 0){
    displayProduct();
    function displayProduct(){
    products.innerHTML = "";
    let img_match = "";
    for(let i=0; i<jsonImageData.length; i++){
        let card = document.createElement("div");
        card.style.textAlign = "center";
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
        let id = (jsonImageData[i].item_img_src).split("-");
        
        if(img_match === id[id.length-3]){
            continue;
        }else{
            img.setAttribute("src", jsonImageData[i].item_img_src);
            img_match = id[id.length-3];
            img.style.width = "100%";
            for(let j=0; j<jsonData.length; j++){
                if(jsonImageData[i].item_link_href === jsonData[j].item_link_href){
                    brand.innerText = jsonData[j].item_brand;
                    name.innerText = jsonData[j].item_name;

                    main.innerText = (jsonData[j].item_discountprice).replace('?', '₹');
                    over.innerText = (jsonData[j].item_price).replace('?', '₹');
                    per.innerText = jsonData[j].item_discount;

                    // price.innerText = main +"  "+ over + "  " + per;
                    
                }
            }
        over.style.textDecoration = "line-through";

            price.append(main, over, per);
            card.append(img, brand, name, price);
            products.append(card);
        }
        
        
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

    let selector = document.querySelector("#sorting");
    
    selector.addEventListener("change", ()=>{
        if(selector.value === "Price (lowest first)"){
            let filtered = jsonData.filter((ele)=>{
                // if((ele.item_discountprice).replace('?', ''))
            });
        }
    })


// }else{
//     let error = document.createElement("h1");
//     error.innerText = "Data Not Found!";
//     products.append(error);
// }