





// const API = "./jsons/nav.json";
// const API = "../jsons/product.json";
// fetch(API).then((temp)=>{
//     return temp.json();
// }).then((data)=>{
//     displayData(data);   
// }).catch((error)=>{
//     console.log(error);
// })

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

// calling wating in navbar
// let display_men_category = document.querySelector("#display_men_category");
// function waiting(){
//     setInterval(()=>{
//         display_men_category.style.display = "none";
//         console.log(display_men_category.innerText);
//     }, 1000);
// }

let men = document.querySelector("#men");
let display = document.querySelector("#display_men");
let fetchedData = [];

// body (slider)
let first = ['./images/homepage/D-UHP-BirthdayBash-5080.webp', './images/homepage/30032023-UHP-D-Main-P2-DennislingoWedani-Flat60.webp', './images/homepage/30032023-UHP-D-Main-P3-MnSSuperdry-Min50Extra35.webp', './images/homepage/30032023-UHP-D-Main-P4-AvaasaDNMX-Flat60.webp', './images/homepage/30032023-UHP-D-Main-P5-SkechersCultsport-3050.webp', './images/homepage/30032023-UHP-D-Main-P6-ShiningDivaYoubella-Under399.webp', './images/homepage/30032023-UHP-D-Main-P7-ThomasScottHummel-Flat60.webp'];

let second = ['./images/homepage/Citibank_1440x128-new.jpg', './images/homepage/IDBI-1440x128-23.webp'];

let third = ['./images/homepage/D-UHP-HitStyles-Sectionheader.webp'];

let four = ['./images/homepage/30032023-UHP-D-Top-P1-XintSnitch-Flat60.webp', './images/homepage/30032023-UHP-D-Top-P2-MnS-Min40Extra35.webp','./images/homepage/30032023-UHP-D-Top-P3-AvaasaSiyaahi-Upto60.webp','./images/homepage/30032023-UHP-D-Top-P4-KetchTIGC-Min50.webp','./images/homepage/30032023-UHP-D-Top-P5-USPASPykar-Under1999.webp','./images/homepage/30032023-UHP-D-Top-P6-Activewear-PumaPerformax-Min50.webp'];

let five = ['./images/homepage/D-UHP-FeatureCollection-SectionHeader.webp'];

let six = ['./images/homepage/UHP-encrustd-banner-1440x470-revised.gif'];

let seven = ['./images/homepage/1440x128-mobikwiknew.webp', './images/homepage/1440x128-Paytm-ggg.webp'];

let eight = ['./images/homepage/D-UHP-Bestsellers-Sectionheader.webp'];

let nine = ['./images/homepage/D-UHP-Bestsellers-Menswestern-Starting299.webp', './images/homepage/D-UHP-Bestsellers-womenswestern-Starting199.webp', './images/homepage/D-UHP-Bestsellers-WomensEthnic-Starting249.jpg', './images/homepage/D-UHP-Bestsellers-Footwear-upto80.webp', './images/homepage/D-UHP-Bestsellers-kidswear-starting129.webp', './images/homepage/D-UHP-Bestsellers-accessories-starting179.webp', './images/homepage/D-UHP-Bestsellers-DecorKitchen-upto80.webp', './images/homepage/D-UHP-Bestsellers-MensEthnicwear-upto80.webp.webp'];

let ten = ['./images/homepage/D-UHP-Yourdailyfashionscoop.webp'];

let eleven = ['./images/homepage/30032023-UHP-D-Daily-P1-HeelsShoes-SMClarksAldo-2050.webp', './images/homepage/30032023-UHP-D-Daily-P2-BestWardrobe-TIGCBritishClub-Min50.webp', './images/homepage/30032023-UHP-D-Daily-P3-ZinkOrchidBlues-Flat55Extraupto35.webp', 
'./images/homepage/30032023-UHP-D-Daily-P5-IndiePicks-Min50.webp',
'./images/homepage/30032023-UHP-D-Daily-P5-SoigneFits-RituKumarSatyaPaul-Starting2499.webp',
'./images/homepage/30032023-UHP-D-Daily-P6-Heels-CLEverqupid-Starting799.webp'];

let twelve = ['./images/homepage/D-UHP-TrendSettersForHim.webp'];

let thirteen = ['./images/homepage/30032023-d-mhp-uhphim-p1-gas-scotch&soda-min65.webp','./images/homepage/30032023-d-mhp-uhphim-p2-levis-jack&jones-flat40.webp', './images/homepage/30032023-d-mhp-uhphim-p3-guess-lovemoschino-min70.webp', './images/homepage/30032023-d-mhp-uhphim-p4-crocs-redtape-upto40.webp', './images/homepage/30032023-d-mhp-uhphim-p5-puma-min40.webp'];
//  './images/homepage/', './images/homepage/',

let fourteen = ['./images/homepage/D-UHP-Forher.webp'];

let fifteen = ['./images/homepage/30032023-UHP-D-UHPwomen-p1-tommy-ck-min35.webp', './images/homepage/30032023-UHP-D-UHPwomen-p2-ritukumar-masaba-starting2499.jpg', './images/homepage/30032023-UHP-D-UHPwomen-p3-matchitt-teamspirit-under399.webp', './images/homepage/30032023-UHP-D-UHPwomen-p4-styli-karigari-min50.jpg', './images/homepage/30032023-UHP-D-UHPwomen-p5-biba-aurelia-flat65.webp'];

let sixteen = ['./images/homepage/D-UHP-AJIOExclusives.webp'];

let seventeen = ['./images/homepage/D-UHP-Superdry-3050.webp', './images/homepage/D-UHP-Sponsor-GAP-Flat50.webp', './images/homepage/D-UHP-DNMX-Min60.webp','./images/homepage/D-UHP-GAS-3060.webp', './images/homepage/D-UHP-Portico-upto50.jpg', './images/homepage/D-UHP-karigari-min50.webp', './images/homepage/D-UHP-Avaasa-Starting299.webp', './images/homepage/D-UHP-Netplay-Starting299.webp'];

let eighteen = ['./images/homepage/D-UHP-HotTrending-Sectionheader.webp'];

let  nineteen = ['./images/homepage/D-UHP-HotTrending-AvaasaNetplayAcai-upto70.webp', './images/homepage/D-UHP-HotTrending-FigDNMX-Starting299.webp', './images/homepage/D-UHP-HotTrending-AvaasaSiyaahi-Min60.webp', './images/homepage/D-UHP-HotTrending-LCRio-upto70.webp', './images/homepage/D-UHP-Trends-Menswear-NetplayPerformax-Starting2993wd.webp', './images/homepage/D-UHP-HotTrending-KGFrendzRio-Under499.jpg', './images/homepage/D-UHP-HotTrending-Footprints-Upto70.webp', './images/homepage/D-UHP-Trends-Azorte-Flat50%20(1).webp'];

let twenty = ['./images/homepage/D-UHP-JIT-SectionHeader.webp'];

let twentyone = ['./images/homepage/29032023-UHP-D-JIT -P1-Brands-Flat50+Extraupto35.webp', './images/homepage/29032023-UHP-D-JIT -P2-Brands-Flat40+Extraupto35.webp', './images/homepage/29032023-UHP-D-JIT -P3-Brands-Min40.webp' , './images/homepage/29032023-UHP-D-JIT -P4-Brands-Upto80.webp', './images/homepage/29032023-UHP-D-JIT -P5-Brands-Min40.webp', './images/homepage/29032023-UHP-D-JIT -P6-Brands-Starting299+Extraupto35.jpg', './images/homepage/29032023-UHP-D-JIT -P7-Brands-Under999+Extraupto35.webp'];

let twentytwo = ['./images/homepage/D-UHP-PremiumPicks-SectionHeader.webp'];

let twentythree = ['./images/homepage/D-UHP-Premiumpicks-P1-Min60.webp', './images/homepage/D-UHP-PremiumPicks-Superdry-BHPC-3050-Revised .webp', './images/homepage/D-UHP-PremiumPicks-AldoSteveMadden-3050.webp', './images/homepage/D-UHP-PremiumPicks-DieselGstarraw-Upto40.webp', './images/homepage/D-UHP-PremiumPicks-MnS-Upto50.webp', './images/homepage/D-UHP-PremiumPicks-GuessKennethCole-Upto60ff.webp'];

let twentyfour = ['./images/homepage/D-UHP-The Ethnic Affair-Section Header.webp'];
let twentyfive = ['./images/homepage/D-UHP-The Ethnic Affair-P1-Starting599.webp', './images/homepage/D-UHP-The Ethnic Affair-P3-Starting499.webp', './images/homepage/D-UHP-The Ethnic Affair-P4-Starting499.webp', './images/homepage/D-UHP-The Ethnic Affair-P5-Upto80.webp', './images/homepage/D-UHP-The Ethnic Affair-P6-Starting499.webp'];

let twentysix = ['./images/homepage/D-UHP-The Final Touches - Section Header.webp'];
let twentyseven = ['./images/homepage/D-UHP-The Final Touches -P1-Min50.webp', './images/homepage/UHP-D-P2-The Final Touch-Upto50.webp', './images/homepage/D-UHP-The Final Touches -P3-Under1999.webp', './images/homepage/D-UHP-The Final Touches -P4-Starting1299.webp', './images/homepage/D-UHP-The Final Touches -P5-Upto80.webp', './images/homepage/D-UHP-The Final Touches -P6-Upto70+Extra10.webp', './images/homepage/D-UHP-The Final Touches -P7-Under499.webp', './images/homepage/D-UHP-The Final Touches -P8-Upto70.jpg'];

// './images/homepage/.webp', './images/homepage/.webp'
let slider_one_1 = document.querySelector("#container > div:nth-child(1)");
let slider_one_2 = document.querySelector("#container > div:nth-child(2)");
let slider_two_1 = document.querySelector("#container > div:nth-child(3)");
let slider_one_3 = document.querySelector("#container > div:nth-child(4)");
let slider_two_2 = document.querySelector("#container > div:nth-child(5)");
let slider_two_3 = document.querySelector("#container > div:nth-child(6)");
let slider_one_4 = document.querySelector("#container > div:nth-child(7)");
let slider_two_4 = document.querySelector("#container > div:nth-child(8)");
let slider_three_1 = document.querySelector("#container > div:nth-child(9)");
let slider_two_5 = document.querySelector("#container > div:nth-child(10)");
let slider_one_5 = document.querySelector("#container > div:nth-child(11)");
let slider_two_6 = document.querySelector("#container > div:nth-child(12)");
let slider_one_6 = document.querySelector("#container > div:nth-child(13)");
let slider_two_7 = document.querySelector("#container > div:nth-child(14)");
let slider_one_7 = document.querySelector("#container > div:nth-child(15)");
let slider_two_8 = document.querySelector("#container > div:nth-child(16)");
let slider_three_2 = document.querySelector("#container > div:nth-child(17)");
let slider_two_9 = document.querySelector("#container > div:nth-child(18)");
let slider_one_8 = document.querySelector("#container > div:nth-child(19)");
let slider_two_10 = document.querySelector("#container > div:nth-child(20)");
let slider_one_9 = document.querySelector("#container > div:nth-child(21)");
let slider_two_11 = document.querySelector("#container > div:nth-child(22)");
let slider_three_3 = document.querySelector("#container > div:nth-child(23)");
let slider_two_12 = document.querySelector("#container > div:nth-child(24)");
let slider_three_4 = document.querySelector("#container > div:nth-child(25)");
let slider_two_13 = document.querySelector("#container > div:nth-child(26)");
let slider_three_5 = document.querySelector("#container > div:nth-child(27)");


// let indicators = document.createElement("div");
// indicators.style.display = "inline-block";
// indicators.style.textAlign = "center";
// indicators.style.width = "100%";


displaySlider(first, slider_one_1, "slider_img_1");
displaySlider(second, slider_one_2, "slider_img_2");

displayBanner(third,slider_two_1);

displaySlider(four, slider_one_3, "slider_img_3");


displayBanner(five,slider_two_2);

displayBanner(six,slider_two_3);

displaySlider(seven, slider_one_4, "slider_img_4");

displayBanner(eight,slider_two_4);

displayMultiImage(nine, slider_three_1, "multi_img_1");

displayBanner(ten,slider_two_5);

displaySlider(eleven, slider_one_5, "slider_img_5");

displayBanner(twelve,slider_two_6);

displaySlider(thirteen, slider_one_6, "slider_img_6");

displayBanner(fourteen,slider_two_7);

displaySlider(fifteen, slider_one_7, "slider_img_7");

displayBanner(sixteen,slider_two_8);

displayMultiImage(seventeen, slider_three_2, "multi_img_2");

displayBanner(eighteen,slider_two_9);

displaySlider(nineteen, slider_one_8, "slider_img_8");

displayBanner(twenty,slider_two_10);

displaySlider(twentyone, slider_one_9, "slider_img_9");

displayBanner(twentytwo,slider_two_11);

displayMultiImage(twentythree, slider_three_3, "multi_img_3");

displayBanner(twentyfour,slider_two_12);

displayMultiImage(twentyfive, slider_three_4, "multi_img_4");

displayBanner(twentysix,slider_two_13);

displayMultiImage(twentyseven, slider_three_5, "multi_img_5");

function displaySlider(data, name, cname){
    // indicators.innerHTML = "";
    data.forEach((element) => {
        let a = document.createElement("a");
        a.setAttribute("href", "");
        let img = document.createElement("img");
        img.setAttribute("src", element);
        img.setAttribute("class", cname);
        img.style.width = "100%";
        
        // let dot = document.createElement("span");
        // dot.setAttribute("class", "dot");
        // indicators.append(dot);
        a.append(img);
        name.append(a);
    });
    // name.append(indicators);
    let ind = 0;
    sliding();
    function sliding(){
        let imgtag = document.getElementsByClassName(cname);
        // let dots = document.getElementsByClassName("dot");
        for(let i=0; i< imgtag.length; i++){
            imgtag[i].style.display = "none";
        }
        ind++;
        if(ind > imgtag.length){
            ind = 1;
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        //   }
        
        imgtag[ind-1].style.display = "block";
        // dots[ind-1].className += " active";
        setTimeout(sliding, 2000);
    }
}

 
function displayBanner(data, name){
    data.forEach((element) => {
        let img = document.createElement("img");
        img.setAttribute("src", element);
        img.setAttribute("class", "banner_img")
    
        // let key = document.createElement("div");
        // indicator.append(key);
        name.append(img); 
    });
}

function displayMultiImage(data, name, cname){
    name.style.display = "flex";
    data.forEach((element) => {
        let a = document.createElement("a");
        a.setAttribute("href", "");
        let img = document.createElement("img");
        img.setAttribute("src", element);
        img.setAttribute("class", cname);
        img.style.width = "100%";
        
        // let key = document.createElement("div");
        // indicator.append(key);
        a.append(img);
        name.append(a);// indicator
    });
    let ind = 0;
    let imgtag = document.getElementsByClassName(cname);
}

