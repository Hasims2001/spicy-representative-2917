import jsonData from '../jsons/product.json' assert {type: 'json'};
import jsonImageData from '../jsons/product_img.json' assert {type: 'json'};

let LSData = localStorage.getItem("view_product");

if(LSData === null){
    LSData = [];
    let emty = document.createElement("h1");
    emty.innerText = "Data Not Found!";
    document.querySelector('#view').append(emty);
}else{
    // console.log(LSData);
    LSData = JSON.parse(LSData);
    let path = document.querySelector("#path");

    let name = (LSData.name).trim().split(" ");
    path.innerText = "Home / Men / " + name[name.length-1];

    let view = document.querySelector("#view");

    let indicat = document.createElement("div");
    let img_show = document.createElement("div");
    
    let product_des = document.createElement("div");
    product_des.style.textAlign = "center";
    
    let indicat_block = document.createElement("div");
    indicat_block.setAttribute("class", "indicat_block");
    

    // indicat.style.marginTop = "10%";
    // let all_img = [];
    for(let i=0; i<jsonImageData.length; i++){
        let temp = (jsonImageData[i].item_img_src).split("-");
        if(temp[temp.length-3] === LSData.img_id){
            // all_img.push(jsonImageData[i].item_img_src);
            if(temp[temp.length-1] !== "MARKETING.jpg"){
                let img_box = document.createElement("div");
                let img = document.createElement("img");
                img.setAttribute("src", jsonImageData[i].item_img_src);


                let img2 = document.createElement("img");
                img2.setAttribute("class", "img_slider");
                img2.setAttribute("src", jsonImageData[i].item_img_src);
    
                img_box.append(img);
                indicat_block.append(img_box);
                    
                // img_show_block.append();
                img_show.append(img2);
            }
           
        }
    }
    indicat.append(indicat_block);
    let index = 0;
    img_slid();
    function img_slid(){
        let img_sliding = document.getElementsByClassName("img_slider");
        console.log(img_sliding);

        // for(let i=0; i< img_sliding.length; i++){
        //     img_sliding[i].style.display = "none";
        // }
        // index++;
        // if(index > img_sliding.length){
        //     index = 1;
        // }
        // img_sliding[index-1].style.display = "block";
        // setTimeout(img_slid, 2000);
    }
    
        let brand = document.createElement("div");
        brand.setAttribute("class", "brand");

        let names = document.createElement("div");
        names.setAttribute("class", "name");
        let price = document.createElement("div");
        price.style.fontSize = "15px";
        price.style.margin = "5px 0 0";
        let main = document.createElement("div");
        main.style.fontWeight = "bold";
        main.style.margin = "10px 2px 0";
        main.style.fontSize = "22px";

        let over = document.createElement("span");
        over.style.margin = "2px 2px 0";
        over.style.fontSize = "16px";
        over.style.textDecoration = "line-through";

        let per = document.createElement("span");
        per.style.margin = "2px 2px 0";
        per.style.fontSize = "16px";
        per.style.color = "#b19975";
        per.style.fontWeight = "bold";

        let tax = document.createElement("div");
        tax.style.color = "grey";
        tax.style.fontSize = "smaller";
        tax.style.margin = "8px 0 0";

        brand.innerText = LSData.brand;
        names.innerText = LSData.name;
        price.innerText = "MRP ";
        main.innerText = LSData.main;
        over.innerText = LSData.over;
        per.innerText = LSData.per;
        tax.innerText = "Price inclusive of all taxes";
        // price = main.innerText + over.innerText + per.innerText;
        price.append(over, per);
        price.style.color = "#b19975";

        let add_div = document.createElement("div");
        add_div.setAttribute("id", "addtocartdiv");
     

        let add_border = document.createElement("div");
        add_border.setAttribute("id", "borderline");
      

        let icon_cart = document.createElement("span");
        let txt_cart = document.createElement("span");
        
        icon_cart.innerHTML = "<i class=\"fa fa-shopping-bag\" aria-hidden\=\"true\"></i>";
        txt_cart.innerText = "Add To Cart";
        
        let assured = document.createElement("div");
        assured.innerText = "HANDPICKED STYLES | ASSURED QUALITY";
        assured.style.fontSize = "12px";
        assured.style.color = "grey";

        let add_wish = document.createElement("div");
        add_wish.setAttribute("id", "addtowishdiv");
     

        let add_wishborder = document.createElement("div");
        add_wishborder.setAttribute("id", "borderline_wish");
      

        let icon_wish = document.createElement("span");
        let txt_wish = document.createElement("span");
        
        icon_wish.innerHTML = "<img src\=\"https://assets.ajio.com/static/img/pdp-wishlist-icon-desktop.svg\" alt\=\"wishlist\">";
        txt_wish.innerText = "Add To Wishlist";

        

       


        add_border.append(icon_cart, txt_cart);
        add_div.append(add_border);

        add_wishborder.append(icon_wish, txt_wish);
        add_wish.append(add_wishborder);
        product_des.append(brand, names, main, price, tax, add_div, assured, add_wish);


    view.append(indicat, img_show, product_des);
}