let container = document.querySelector(".container")



container.appendChild(navbar());
container.appendChild(testDriveAdd());
container.appendChild(filtersSection());
container.appendChild(sectionforLogos());
container.appendChild(createMainPageContentGrid());
getCars();
getAllMakers();
getAllModelsByMaker("Acura");
populateDivForLogos();
// filters section selectors 

let makerSelector = document.querySelector(".maker-selector-filters");
let modelSelector = document.querySelector(".model-selector-filters");
let fromYear = document.querySelector(".year-from-selector-filters");
let toYear = document.querySelector(".year-to-selector-filters");
let fromPrice = document.querySelector(".price-from-selector-filters");
let toPrice = document.querySelector(".price-to-selector-filters");
let fromKm = document.querySelector(".km-from-selector-filters");
let toKm = document.querySelector(".km-to-selector-filters");
// let navbarBtn = document.getElementById(".navbar");

container.addEventListener("click",(e)=>{

    let obj =e.target;  
    
    
    
    if(obj.id==="sell-now-btn"&& obj.textContent==="✚ Sell now"){
        obj.textContent="Close"
    
        container.removeChild(document.querySelector(".test-drive-ad"))
        document.querySelector(".filters-section").classList.add("hide")
        container.removeChild(document.querySelector(".section-for-logos"))
        container.removeChild(document.querySelector(".main-page-content-div"))
        container.removeChild(document.querySelector(".filters-section"))
        filterButton.classList.add("hide")
        container.appendChild(createNewSellOfferDiv())
    } else if (obj.id==="sell-now-btn"&& obj.textContent==="Close"){
    
    obj.textContent="✚ Sell now"
    filterButton.classList.remove("hide")
    container.removeChild(document.querySelector(".sell-offer-div1"))
    
    container.appendChild(testDriveAdd());
    container.appendChild(filtersSection());
    container.appendChild(sectionforLogos());
    container.appendChild(createMainPageContentGrid());
    getCars();
    getAllMakers();
    populateDivForLogos();

    let makerSelector = document.querySelector(".maker-selector-filters");
    makerSelector.addEventListener("change", (e)=>{
        document.querySelector(".model-selector-filters").innerHTML=""
        getAllModelsByMaker(e.target.value)
    })
    } else if (obj.id==="search-filtered-btn"){

        let filteredMaker = document.querySelector(".maker-selector-filters").value;
        let filteredModel = document.querySelector(".model-selector-filters").value;
    

    if(filteredModel===""||filteredModel===undefined||filteredModel===NaN){

        // get all cars by maker
        document.querySelector(".main-page-content-div").innerHTML="";
        // document.querySelector(".main-page-content-div").appendChild(selectedFilters(['test1','test2','test3']))
        getAllCarsByMaker(filteredMaker);
        
        
    } else {
        document.querySelector(".main-page-content-div").innerHTML="";
        // document.querySelector(".main-page-content-div").appendChild(selectedFilters(['test1','test2','test3']))
        getAllCarsByModel(filteredModel);
    }

    }
    
    
    })



// makerSelector.addEventListener("change", (e)=>{
//     let obj = e.target.value;
//     document.querySelector(".model-selector-filters").innerHTML=""
//     getAllModelsByMaker(obj)
// })

// filter section hide/show
let filterButton=document.getElementById("menu-btn")
filterButton.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj);
    let filters=document.querySelector(".filters-section")
    if(filters.classList.contains("hide")==false){
        filters.classList.add("hide");
    } else {
        filters.classList.remove("hide")
    }
    

})


let search = document.getElementById("search-filtered-btn")
search.addEventListener("click",(e)=>{

    let obj = e.target;
    

    

    

    
})

let previousPage = container.innerHTML



// new add SELL NOW 

