let container = document.querySelector(".container")



container.appendChild(navbar());
container.appendChild(testDriveAdd());
container.appendChild(filtersSection());
container.appendChild(sectionforLogos());
container.appendChild(createMainPageContentGrid());
getCars();
getAllMakers();
populateDivForLogos();

let makerSelector = document.querySelector(".maker-selector-filters");
let modelSelector = document.querySelector(".model-selector-filters");
let fromYear = document.querySelector(".year-from-selector-filters");
let toYear = document.querySelector(".year-to-selector-filters");
let fromPrice = document.querySelector(".price-from-selector-filters");
let toPrice = document.querySelector(".price-to-selector-filters");
let fromKm = document.querySelector(".km-from-selector-filters");
let toKm = document.querySelector(".km-to-selector-filters");
// let navbarBtn = document.getElementById(".navbar");
// let filterButton=document.getElementById("menu-btn")

container.addEventListener("click", async(e)=>{

    let obj =e.target;  
    // console.log(obj)
    let filters=document.querySelector(".filters-section")
    let filterButton=document.getElementById("menu-btn")
    let carID;
    
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
    container.innerHTML="";
    
    container.appendChild(navbar())
    container.appendChild(testDriveAdd());
    container.appendChild(filtersSection());
    container.appendChild(sectionforLogos());
    container.appendChild(createMainPageContentGrid());
    getCars();
    getAllMakers();
    populateDivForLogos();

    let makerSelector = document.querySelector(".maker-selector-filters");
    makerSelector.addEventListener("change", (f)=>{
        document.querySelector(".model-selector-filters").innerHTML=""
        getAllModelsByMaker(f.target.value)
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

    } else if (obj.classList.contains("sell-offer-div-add-button")){

        let maker = document.querySelector(".maker-input").lastElementChild;
        let model = document.querySelector(".model-input").lastElementChild;
        let year = document.querySelector(".year-input").lastElementChild;
        let price = document.querySelector(".price-input").lastElementChild;
        let km = document.querySelector(".km-input").lastElementChild;
        
        if(maker.value!==""&&model.value!==""&&year.value>1950&&price.value>100&&km.value!==""){

            let car = {
                maker:maker.value,
                model:model.value,
                year:year.value,
                price:`$${price.value}`,
                km:km.value
            }
            addCar(car)

            document.getElementById("sell-now-btn").textContent="✚ Sell now"
    filterButton.classList.remove("hide")
    // container.removeChild(document.querySelector(".sell-offer-div1"))

    container.appendChild(createSuccessAdd());

        }else {
            alert("Please check input fields")
        }

        



    
    
    // container.appendChild(testDriveAdd());
    // container.appendChild(filtersSection());
    // container.appendChild(sectionforLogos());
    // container.appendChild(createMainPageContentGrid());
    // getCars();
    // getAllMakers();
    // populateDivForLogos();

    //     let makerSelector = document.querySelector(".maker-selector-filters");
    //     document.querySelector(".model-selector-filters").innerHTML=""
        
    //     makerSelector.addEventListener("change", (g)=>{
    //     document.querySelector(".model-selector-filters").innerHTML=""
    //     getAllModelsByMaker(g.target.value)
    //     })

    }else if (obj.id==="app-name"){

        container.innerHTML="";
        container.appendChild(navbar());
        container.appendChild(testDriveAdd());
        container.appendChild(filtersSection());
        container.appendChild(sectionforLogos());
        container.appendChild(createMainPageContentGrid());
        getCars();
        getAllMakers();
        populateDivForLogos();

        
    } else if (obj.id==="delete-card-btn-id"){
        // console.log(obj);
        // console.log(obj.parentNode.parentNode.parentNode)

        if(obj.parentNode.parentNode.parentNode.id!==undefined){
 // await deleteCar(obj.parentNode.parentNode.id)   
        console.log(obj.parentNode.parentNode.parentNode.id)

        }
       
    }else if (obj.id==="edit-card-btn-id" && obj.textContent==="Edit"){
        
        console.log(obj.parentNode.parentNode.id)
        
        container.innerHTML="";
        container.appendChild(navbar())
        container.appendChild(divForEditPage());
        document.querySelector(".div-for-edit-page").appendChild(createEditDiv())
        let masina = await getCarById(obj.parentNode.parentNode.id)
        document.querySelector(".div-for-edit-page").insertBefore(createCard(masina),document.querySelector(".edit-offer-div"))
        
        document.getElementById("sell-now-btn").textContent="Close"
        
        // functie ce primeste ID si impinge masina deja modificata
    
    }else if(obj.classList.contains("edit-offer-div-add-button")){

        let id = document.querySelector(".div-for-edit-page").firstElementChild.id
        // console.log(id)
        let car = {
    
            maker:document.querySelector(".edit-maker-input").lastElementChild.value,
            model:document.querySelector(".edit-model-input").lastElementChild.value,
            year:+document.querySelector(".edit-year-input").lastElementChild.value,
            price:document.querySelector(".edit-price-input").lastElementChild.value,
            mileage:+document.querySelector(".edit-km-input").lastElementChild.value
        }

        // console.log(car)
        
        await editCar(car,id);

        
        

    }


    


    if (obj.id==="menu-btn"){
        obj.id="menu-btn-filters-hidden"
        filters.classList.add("hide")
    }else if (obj.id==="menu-btn-filters-hidden"){
        obj.id="menu-btn"
        filters.classList.remove("hide")
    }
    
    
    })



makerSelector.addEventListener("change", (e)=>{
    let obj = e.target.value;
    document.querySelector(".model-selector-filters").innerHTML=""
    getAllModelsByMaker(obj)
})






// new add SELL NOW 

// console.log(filters)
// if(filters.classList.contains("hide")===false){


// } else {
// filters.classList.add("hide");
// }
