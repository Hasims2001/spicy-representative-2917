import jsonData from '../jsons/product.json' assert {type: 'json'};
import jsonImageData from '../jsons/product_img.json' assert {type: 'json'};

let LSData = localStorage.getItem('addtocart');
let products = document.querySelector("#products");
let heading = document.querySelector("#heading");
if(LSData === null){
    LSData = [];
    heading.innerText = "Please Add Product to Cart";
}
else{
    LSData = JSON.parse(LSData);  
    let totalprice = [];
    for(let i=0; i<LSData.length; i++){
        
        let card = document.createElement("div");
        card.style.display = "flex";
        card.style.justifyContent = "space-evenly";
        // card.style.textAlign = "center";
        let img = document.createElement("img");
        for(let t=0; t<jsonImageData.length; t++){
            let temp = (jsonImageData[t].item_img_src).trim().split("-");
            if(LSData[i].img_id === temp[temp.length-3]){
                img.setAttribute("src", jsonImageData[t].item_img_src);
                break;
            }
        }

        let name = document.createElement("p");

        name.innerHTML = LSData[i].brand + "<br> " +  LSData[i].name;
        
        let price = document.createElement("p");
        price.style.backgroundColor = "#fff";

        let main = document.createElement("span");
        main.style.fontWeight = "bold";
        main.style.margin = "2px 2px 0";

        let over = document.createElement("span");
        over.style.textDecoration = "line-through";
        over.style.margin = "2px 2px 0";

        
        let per = document.createElement("span");
        per.style.color = "#b19975";
        per.style.fontWeight = "bold";
        per.style.margin = "2px 2px 0";


        main.innerText = LSData[i].main;
        over.innerText = LSData[i].over;
        per.innerText = LSData[i].per;


        let qunty = document.createElement("div");
        qunty.style.display = "flex";
        qunty.style.margin = "16px 0";
        let incbtn = document.createElement("button");
        let val = document.createElement("p");
        let decbtn = document.createElement("button");
        incbtn.style.border = "none";
        incbtn.style.padding = "8px";
        incbtn.style.height = "fit-content";
        decbtn.style.border = "none";
        decbtn.style.padding = "8px";
        decbtn.style.height = "fit-content";

        val.style.padding = "7px";
        val.style.margin = "0px";

        incbtn.innerText = "+";
        decbtn.innerText = "-";
        val.innerText = "1";
        
        let total = document.createElement("p");
        let finalprice = Number((LSData[i].main).replace("₹", ""));
        total.innerText = finalprice*Number(val.innerText);
        
        incbtn.addEventListener("click", ()=>{
            val.innerText = Number(val.innerText) + 1;
            total.innerText = finalprice*Number(val.innerText);
            totalprice.push(Number(total.innerText));

        });
        decbtn.addEventListener("click", ()=>{
            if(Number(val.innerText) > 1){
                val.innerText = Number(val.innerText) - 1;
                total.innerText = finalprice*Number(val.innerText);

            }
        });

        totalprice.push(Number(total.innerText));

        qunty.append(decbtn,val, incbtn);
        price.append(main, over, per);
        card.append(img, name, price, qunty, total);
        products.append(card);
        
    }

    let totalbill = document.querySelector("#totalbill");
    let amont = document.createElement("p");
    amont.style.float = "right";
    amont.style.marginRight = "25px";
    amont.style.float = "right";

    let sum = 0;
    for(let i=0; i<totalprice.length; i++){
        sum += totalprice[i];
    }

    amont.innerText = "Bill Amount : " + sum + ".00";

    let discount  = document.createElement("p");
    discount.innerText = "Discount : 0.00";
    discount.style.float = "right";

    let tbil  = document.createElement("p");
    tbil.innerText = "Total Bill : " + sum +".00";
    tbil.style.float = "right";

    let placebtn  = document.createElement("button");
    placebtn.innerText = "Place Your Order";
    placebtn.style.width = "fit-content";
    placebtn.style.textAlign = "center";
    placebtn.style.border = "none";
    placebtn.style.borderRadius = "5px";
    placebtn.style.padding = "10px";
    placebtn.style.cursor = "pointer";

    placebtn.style.margin = "auto";

    totalbill.append(amont,discount, tbil, placebtn);
} 




