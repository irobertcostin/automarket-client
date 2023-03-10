// retrieve API info - all cars  
async function getCars() {

    let response = await getCarsApi();

    let contentGridParent = document.querySelector(".main-page-content-div")
    contentGridParent.appendChild(homepageContentDiv1())
    let contentGrid = document.querySelector(".homepage-content-div1")
    for (i in response.cars) {

        contentGrid.appendChild(createCard(response.cars[i]))
    }

}



// function to create new ad button

function addSellOffer() {
    let btn = document.createElement("button");
    btn.textContent = "✚ Sell now"
    btn.id = "sell-now-btn"

    return btn;
}

// function to create navbar
function navbar() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("navbar");

    let menuBtn = document.createElement("button");
    mainDiv.appendChild(menuBtn);
    menuBtn.textContent = "⚙︎"
    menuBtn.id = "menu-btn-filters-hidden"





    let appName = document.createElement("p");
    mainDiv.appendChild(appName);
    appName.id = "app-name";
    appName.textContent = "AUTOKIT.RO"


    mainDiv.appendChild(addSellOffer());


    return mainDiv;
}



// function to create a div for active filters display 

function selectedFilters(arr) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("selected-filters-div");



    for (i = 0; i < arr.length; i++) {

        let secondDiv = document.createElement("div");
        secondDiv.classList.add("selected-filters-filter-div");

        let name = document.createElement("p")
        name.id = "filter-name";
        name.textContent = arr[i];
        secondDiv.appendChild(name);

        let close = document.createElement("button");
        close.textContent = "❌";
        close.id = "uncheck-a-filter";
        secondDiv.appendChild(close)

        mainDiv.appendChild(secondDiv);


    }

    return mainDiv;

}

// function to create testDriveAdd  

function testDriveAdd() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("test-drive-ad")


    let btnDiv = document.createElement("div");
    btnDiv.classList.add("test-drive-btn-div");
    mainDiv.appendChild(btnDiv)

    let btnImg = document.createElement("img");
    btnImg.src = "./images/pirellibutton.png"
    btnDiv.appendChild(btnImg)


    let text = document.createElement("p");
    btnDiv.appendChild(text);
    text.textContent = "Test drive it"



    return mainDiv;
}

// function to create a smaller div for front page (before modal)
function createCard(obj) {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");
    mainDiv.id = obj.id

    let btnDiv = document.createElement("div");
    btnDiv.id = "div-for-btn-create-card"
    mainDiv.appendChild(btnDiv)


    let delBtn = document.createElement("button");
    // delBtn.textContent="Delete";
    let btnImg = document.createElement("img");
    btnImg.src = "./images/remove-button.png"
    delBtn.appendChild(btnImg)
    btnImg.id = "delete-card-btn-id"
    delBtn.classList.add("delete-car-button")
    btnDiv.appendChild(delBtn)

    let editBtn = document.createElement("button");
    editBtn.id = "edit-card-btn-id"
    editBtn.textContent = "Edit"
    btnDiv.appendChild(editBtn)


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div")
    mainDiv.appendChild(imgDiv)


    let poster = document.createElement("img");
    // poster.src="./images/COVER_Aventador-SVJ.webp"
    poster.src = "./images/Yellow Luxury Car Showroom Instagram Post.png"
    poster.id = "poster-card"
    imgDiv.appendChild(poster)


    let secondDiv = document.createElement("div");
    secondDiv.classList.add("card-second-div")
    mainDiv.appendChild(secondDiv)

    let maker = document.createElement("p");
    maker.id = "maker-card"
    secondDiv.appendChild(maker);
    maker.textContent = obj.maker;

    let model = document.createElement("p");
    model.id = "model-card"
    secondDiv.appendChild(model);
    model.textContent = obj.model;


    let thirdDiv = document.createElement("div");
    thirdDiv.classList.add("card-third-div")
    mainDiv.appendChild(thirdDiv)

    let year = document.createElement("p");
    year.id = "year-card"
    thirdDiv.appendChild(year);
    year.textContent = obj.year;

    let mileage = document.createElement("p")
    thirdDiv.appendChild(mileage);
    mileage.id = "mileage-card"
    mileage.textContent = obj.mileage + " km"

    // let engine = document.createElement("p");
    // engine.id="engine-card"
    // thirdDiv.appendChild(engine)
    // engine.textContent=obj.engine_size +" cm3";

    let price = document.createElement("p");
    price.id = "price-card"
    price.textContent = obj.price;
    mainDiv.appendChild(price)

    return mainDiv;
}


// create the content grid 
function createMainPageContentGrid() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main-page-content-div");

    let label = document.createElement("label");
    mainDiv.appendChild(label);
    label.textContent = "All results"
    label.id = "main-page-content-div-label"

    // mainDiv.appendChild(homepageContentDiv1())

    return mainDiv
}


// create a mainDiv for displaying homepage content
function homepageContentDiv1() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("homepage-content-div1");

    return mainDiv
}










// create maker selector

function createMakerSelector() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("maker-filter")

    let label = document.createElement("label");
    label.textContent = "Maker"
    mainDiv.appendChild(label);

    let selector = document.createElement("select");
    selector.classList.add("maker-selector-filters")
    mainDiv.appendChild(selector)

    let testOption2 = document.createElement("option");
    selector.appendChild(testOption2);


    return mainDiv;
}


// successfully added div 
function createSuccessAdd() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("confirmation-add")

    let p = document.createElement("p");
    p.textContent = "✔ Your ad has been published";
    mainDiv.appendChild(p)

    return mainDiv;

}

function createSuccessEdit() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("confirmation-add")

    let p = document.createElement("p");
    p.textContent = "✔ Your ad has been edited";
    mainDiv.appendChild(p)

    return mainDiv;

}


// populate maker selector
function populateMakerSelector(obj) {
    let option = document.createElement("option");
    option.id = "maker-selector-option-filters"
    option.text = obj;
    return option;

}


// create model selector 
function createModelSelector() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("model-filter")

    let label = document.createElement("label");
    label.textContent = "Model"
    mainDiv.appendChild(label);

    let selector = document.createElement("select");
    selector.classList.add("model-selector-filters")
    mainDiv.appendChild(selector)

    let testOption2 = document.createElement("option");
    selector.appendChild(testOption2);
    // testOption2.textContent="test"


    return mainDiv;
}




// populate model selector
function populateModelSelector(obj) {
    let option = document.createElement("option");
    option.id = "model-selector-option-filters"
    option.text = obj;
    return option;
}


// function to create km options
function createKmOption(obj) {
    let option = document.createElement("option");
    option.id = obj;
    option.textContent = obj + " Km";

    return option;
}

// function to create year option
function createYearOption(obj) {
    let option = document.createElement("option");
    option.id = obj;
    option.textContent = obj;

    return option;
}

// create year selector 
function createYearSelector() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("year-filter")

    let label = document.createElement("label");
    label.textContent = "Year"
    mainDiv.appendChild(label);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("year-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent = "From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent = "To"
    toDiv.appendChild(toLabel)

    let selector = document.createElement("select");
    selector.classList.add("year-from-selector-filters")
    fromDiv.appendChild(selector)

    let testOption1 = document.createElement("option");
    selector.appendChild(testOption1);




    let selector2 = document.createElement("select");
    selector2.classList.add("year-to-selector-filters")
    toDiv.appendChild(selector2)
    let testOption2 = document.createElement("option");
    selector2.appendChild(testOption2);

    let arr = [1970, 1980, 1990, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    for (i = 0; i < arr.length; i++) {
        selector.appendChild(createYearOption(arr[i]))
        selector2.appendChild(createYearOption(arr[i]))
    }

    return mainDiv;
}

// create price options
function createPriceOption(obj) {
    let option = document.createElement("option");
    option.id = obj;
    option.textContent = obj + "$";

    return option;
}


// create price selector
function createPriceSelector() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("price-filter")

    let label = document.createElement("label");
    label.textContent = "Price"
    mainDiv.appendChild(label);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("price-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent = "From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent = "To"
    toDiv.appendChild(toLabel)



    let selector = document.createElement("select");
    selector.classList.add("price-from-selector-filters")
    fromDiv.appendChild(selector)

    let testOption1 = document.createElement("option");
    selector.appendChild(testOption1);

    let selector2 = document.createElement("select");
    selector2.classList.add("price-to-selector-filters")
    toDiv.appendChild(selector2)

    let testOption2 = document.createElement("option");
    selector2.appendChild(testOption2);

    let arr = [1000, 5000, 10000, 50000, 100000, 150000, 200000];

    for (i = 0; i < arr.length; i++) {
        selector.appendChild(createPriceOption(arr[i]))
        selector2.appendChild(createPriceOption(arr[i]))
    }



    return mainDiv;
}


// create KM selector 
function createKmSelector() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("km-filter")

    let label = document.createElement("label");
    label.textContent = "Km"
    mainDiv.appendChild(label);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("km-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv = document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent = "From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent = "To"
    toDiv.appendChild(toLabel)

    let selector = document.createElement("select");
    selector.classList.add("km-from-selector-filters")
    fromDiv.appendChild(selector)

    let selector2 = document.createElement("select");
    selector2.classList.add("km-to-selector-filters")
    toDiv.appendChild(selector2)

    let testOption1 = document.createElement("option");
    selector.appendChild(testOption1);

    let testOption2 = document.createElement("option");
    selector2.appendChild(testOption2);

    let arr = [0, 1000, 5000, 10000, 50000, 100000, 150000, 200000];

    for (i = 0; i < arr.length; i++) {
        selector.appendChild(createKmOption(arr[i]))
        selector2.appendChild(createKmOption(arr[i]))
    }


    return mainDiv;
}

// create radio inputs for fuel
// function createFuelType (){

//     let mainDiv=document.createElement("div");
//     mainDiv.classList.add("fuel-type-filter")

//     let label = document.createElement("label");
//     label.textContent="Fuel type"
//     mainDiv.appendChild(label);

//     let secondDiv=document.createElement("div");
//     secondDiv.classList.add("fuel-filters-div")
//     mainDiv.appendChild(secondDiv)

//     let diesel = document.createElement("input");
//     diesel.type="checkbox";
//     diesel.id="diesel"
//     diesel.textContent="Diesel";
//     secondDiv.appendChild(diesel)

//     let dieselLabel = document.createElement("label");
//     dieselLabel.textContent="Diesel"
//     secondDiv.appendChild(dieselLabel);

//     let gasoline = document.createElement("input");
//     gasoline.type="checkbox";
//     gasoline.id="gasoline"
//     gasoline.textContent="Gasoline";
//     secondDiv.appendChild(gasoline)

//     let gasolinelLabel = document.createElement("label");
//     gasolinelLabel.textContent="Gasoline"
//     secondDiv.appendChild(gasolinelLabel);

//     let gpl = document.createElement("input");
//     gpl.type="checkbox";
//     gpl.id="gpl"
//     gpl.textContent="GPL";
//     secondDiv.appendChild(gpl)

//     let gplLabel = document.createElement("label");
//     gplLabel.textContent="GPL"
//     secondDiv.appendChild(gplLabel);

//     return mainDiv

// }


// create search filtered button 
function searchFilteredButton() {
    let btn = document.createElement("button");
    btn.textContent = "Search"
    btn.id = "search-filtered-btn"
    return btn;
}


// create filters section
function filtersSection() {

    let filtersSection = document.createElement("section");
    filtersSection.classList.add("filters-section")
    filtersSection.classList.add("hide")
    // filtersSection.classList.add("hide")
    filtersSection.appendChild(createMakerSelector())
    filtersSection.appendChild(createModelSelector());
    filtersSection.appendChild(createYearSelector())
    filtersSection.appendChild(createPriceSelector());
    filtersSection.appendChild(createKmSelector());
    // filtersSection.appendChild(createFuelType());
    filtersSection.appendChild(searchFilteredButton());
    return filtersSection;
}

//function to create logo div 

function logoDiv(obj) {

    let mainDiv = document.createElement("div");
    mainDiv.id = obj;

    let img = document.createElement("img");
    if (obj == "Alfa Romeo" || obj == "Aston Martin"
        || obj == "Audi"
        || obj == "Bentley"
        || obj == "BMW"
        || obj == "Porsche"
        || obj == "Mercedes-Benz"
        || obj == "Rolls-Royce"
        || obj == "Dodge"
        || obj == "Ferrari"
        || obj == "Ford"
        || obj == "Jaguar"
        || obj == "Lamborghini"
        || obj == "Volkswagen"
    ) {

        img.src = `./images/brands/${obj}.png`

        if (obj == "Alfa Romeo" || obj == "Aston Martin"
            || obj == "Audi"
            || obj == "Bentley"
            || obj == "BMW") {
            img.style.height = "40px"
        }
    }



    mainDiv.appendChild(img)

    return mainDiv;
}

// create a section for logos div 

function sectionforLogos() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add(`section-for-logos`);

    return mainDiv;
}






// create editable div 

function createEditDiv() {

    let mainDiv1 = document.createElement("div");
    mainDiv1.classList.add("edit-offer-div1");


    let mainDiv = document.createElement("div");
    mainDiv.classList.add("edit-offer-div");
    mainDiv1.appendChild(mainDiv)

    let label = document.createElement("label");
    label.classList.add("edit-offer-div-label");
    label.textContent = "Edit your offer"
    mainDiv.appendChild(label);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("edit-offer-div-second-div");
    mainDiv.appendChild(secondDiv);

    // second div 

    secondDiv.appendChild(createMakerInput());
    secondDiv.firstElementChild.classList.remove("maker-input")
    secondDiv.firstElementChild.classList.add("edit-maker-input")


    secondDiv.appendChild(createModelInput())
    secondDiv.firstElementChild.nextElementSibling.classList.remove("model-input")
    secondDiv.firstElementChild.nextElementSibling.classList.add("edit-model-input")


    secondDiv.appendChild(createYearInput())
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("year-input")
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.classList.add("edit-year-input")



    secondDiv.appendChild(createPriceInput())
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("price-input")
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("edit-price-input")
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.type = "text"


    secondDiv.appendChild(createKmInput())

    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("km-input")
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("edit-km-input")
    secondDiv.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.type = "number"

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("edit-offer-div-buttons-div");
    mainDiv.appendChild(buttonsDiv);


    let addButton = document.createElement("button");
    addButton.textContent = "Edit and publish your offer";
    addButton.classList.add("edit-offer-div-add-button");
    buttonsDiv.appendChild(addButton);

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("edit-offer-div-close-button");
    // buttonsDiv.appendChild(closeButton);

    // mainDiv1.appendChild(createAdDiv());

    return mainDiv;


}




// function to create a div with logos for filtering
async function populateDivForLogos() {

    let response = await fetch(`http://localhost:3030/all-cars/all-makers`)
    response = await response.json();



    for (i in response) {

        if (response[i] == "Alfa Romeo" || response[i] == "Aston Martin"
            || response[i] == "Audi"
            || response[i] == "Bentley"
            || response[i] == "BMW"
            || response[i] == "Porsche"
            || response[i] == "Mercedes-Benz"
            || response[i] == "Rolls-Royce"
            || response[i] == "Ferrari"
            || response[i] == "Ford"
            || response[i] == "Jaguar"
            || response[i] == "Lamborghini"
            || response[i] == "Volkswagen"
        ) {
            document.querySelector(".section-for-logos").appendChild(logoDiv(response[i]))
        }

    }
}

// functions for the add car modal

//create year input
function createYearInput() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("year-input")

    let label = document.createElement("label");
    label.textContent = "Year"


    let input = document.createElement("input");
    input.type = "number"
    mainDiv.appendChild(label);
    mainDiv.appendChild(input);


    return mainDiv;
}

//create maker input
function createMakerInput() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("maker-input")

    let label = document.createElement("label");
    label.textContent = "Maker"


    let input = document.createElement("input");
    mainDiv.appendChild(label);
    mainDiv.appendChild(input);


    return mainDiv;
}


//create model input
function createModelInput() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("model-input")

    let label = document.createElement("label");
    label.textContent = "Model"


    let input = document.createElement("input");
    mainDiv.appendChild(label);
    mainDiv.appendChild(input);


    return mainDiv;
}

//create price input
function createPriceInput() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("price-input")

    let label = document.createElement("label");
    label.textContent = "Price"


    let input = document.createElement("input");
    input.type = "number"
    mainDiv.appendChild(label);
    mainDiv.appendChild(input);


    return mainDiv;
}


//create km input
function createKmInput() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("km-input")

    let label = document.createElement("label");
    label.textContent = "Km"


    let input = document.createElement("input");
    input.type = "number"
    mainDiv.appendChild(label);
    mainDiv.appendChild(input);


    return mainDiv;
}

// ad for new sell offer div 

function createAdDiv() {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("classic-ad-car");

    let img = document.createElement("img");
    img.src = "./images/brands/classicad.png"
    mainDiv.appendChild(img)


    let textDiv = document.createElement("div")
    textDiv.id = "car-ad-desc"
    mainDiv.appendChild(textDiv);

    let p1 = document.createElement("p");
    p1.textContent = "Thousands of sellers and buyers trust us."
    textDiv.appendChild(p1)
    p1.id = "car-ad-title"
    let p2 = document.createElement("p");
    p2.textContent = "Romania's biggest vehicle marketplace"
    textDiv.appendChild(p2)
    let p3 = document.createElement("p");
    p3.textContent = "Over 200.000 daily unique visitors"
    textDiv.appendChild(p3)
    let p4 = document.createElement("p");
    p4.textContent = "More than 30.000 active sell offers"
    textDiv.appendChild(p4)
    let p5 = document.createElement("p");
    p5.textContent = "Functionalities which will guide you to success"
    textDiv.appendChild(p5)
    // thousands of sellers and buyers trust us.
    // Romania/s biggest vehicle marketplace
    // over 200.000 daily unique visitors
    // More than 30.000 active sell offers
    // Functionalities that will guide you to success

    return mainDiv

}


// create new modal for new sell offers 
function createNewSellOfferDiv() {

    let mainDiv1 = document.createElement("div");
    mainDiv1.classList.add("sell-offer-div1");


    let mainDiv = document.createElement("div");
    mainDiv.classList.add("sell-offer-div");
    mainDiv1.appendChild(mainDiv)

    let label = document.createElement("label");
    label.classList.add("sell-offer-div-label");
    label.textContent = "Create your offer by describing the product you wish to sell"
    mainDiv.appendChild(label);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("sell-offer-div-second-div");
    mainDiv.appendChild(secondDiv);

    // second div 

    secondDiv.appendChild(createMakerInput());
    secondDiv.appendChild(createModelInput())
    secondDiv.appendChild(createYearInput())


    secondDiv.appendChild(createPriceInput())
    secondDiv.appendChild(createKmInput())

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("sell-offer-div-buttons-div");
    mainDiv.appendChild(buttonsDiv);


    let addButton = document.createElement("button");
    addButton.textContent = "Create and publish sell offer";
    addButton.classList.add("sell-offer-div-add-button");
    buttonsDiv.appendChild(addButton);

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("sell-offer-div-close-button");
    // buttonsDiv.appendChild(closeButton);

    mainDiv1.appendChild(createAdDiv());


    return mainDiv1;
}




// retrieve allMakers API for the filter by maker section 
async function getAllMakers() {

    let response = await getAllCarMakersApi();
    // response=await response.json();
    // console.log(response)

    // console.log(response)
    for (i in response) {
        // console.log(response[i]);
        document.querySelector(".maker-selector-filters").appendChild(populateMakerSelector(response[i]))
    }
}


// get all models by maker 

async function getAllModelsByMaker(param) {

    let response = await getAllModelsByMakerApi(param)
    // response=await response.json();

    // document.querySelector(".model-selector-filters").appendChild(populateModelSelector(""))

    for (i in response) {

        document.querySelector(".model-selector-filters").appendChild(populateModelSelector(response[i]))

    }

}


// get all cars by model 

async function getAllCarsByModel(param) {

    let response = await getAllCarsByModelApi(param)
    // response = await response.json();

    for (let i = 0; i < response.length; i++) {
        document.querySelector(".main-page-content-div").appendChild(createCard(response[i]))
    }

}


// get all cars by maker 

async function getAllCarsByMaker(param) {

    let response = await getAllCarsByMakerApi(param);
    // response=await response.json();

    let contentGridParent = document.querySelector(".main-page-content-div")
    contentGridParent.appendChild(homepageContentDiv1())
    let contentGrid = document.querySelector(".homepage-content-div1")

    for (let i = 0; i < response.length; i++) {
        contentGrid.appendChild(createCard(response[i]))
    }

}

async function getAllCarsByMakerLogo(param) {

    let response = await getAllCarsByMakerApi(param);
    // response=await response.json();

    let contentGrid = document.querySelector(".main-page-content-div")
    contentGrid.innerHTML="";
    // contentGridParent.appendChild(homepageContentDiv1())
    // let contentGrid = document.querySelector(".homepage-content-div1")

    for (let i = 0; i < response.length; i++) {
        contentGrid.appendChild(createCard(response[i]))
    }

}


// get Car by Id 

async function getCarById(id) {

    let response = await getCarByIdApi(id);
    // response= await response.json();

    let maker = document.querySelector(".edit-maker-input").lastElementChild
    let model = document.querySelector(".edit-model-input").lastElementChild
    let year = document.querySelector(".edit-year-input").lastElementChild
    let price = document.querySelector(".edit-price-input").lastElementChild
    let km = document.querySelector(".edit-km-input").lastElementChild

    maker.value = response.maker;
    model.value = response.model;
    year.value = +response.year;
    price.value = response.price;
    km.value = response.mileage;

    // console.log(response);
    return response;
}


// create a div for edit page 

function divForEditPage() {

    let main = document.createElement("div");
    main.classList.add("div-for-edit-page");

    return main;

}


async function editCar(car,id){

    
    

    await editCarApi(car,id);

    


}




async function getFilteredCars(){

    let url = `/all-cars/filtered/?`
    

    let maker = document.querySelector(".maker-selector-filters")
    let model = document.querySelector(".model-selector-filters")
    let minYear=document.querySelector(".year-from-selector-filters")
    let maxYear=document.querySelector(".year-from-selector-filters")
    let minPrice = document.querySelector(".price-from-selector-filters")
    let maxPrice = document.querySelector(".price-to-selector-filters")
    let minMil = document.querySelector(".km-from-selector-filters")
    let maxMil = document.querySelector(".km-to-selector-filters")


    let query = {

        maker:maker.value,
        model:model.value,
        minYear:minYear.value,
        maxYear:maxYear.value,
        minPrice:minPrice.value.replace("$",""),
        maxPrice:maxPrice.value.replace("$",""),
        minMil:minMil.value,
        maxMil:maxMil.value,
    }

    if(query.maker){
        url+=`maker=${query.maker}`
    }

    if(query.model){
        url+=`&model=${query.model}`
    }

    if(query.minYear){

        url+=`&minYear=${query.minYear}`
    }


    if(query.maxYear){

        url+=`&maxYear=${query.maxYear}`
    }

    if(query.minPrice){

        url+=`&minPrice=${query.minPrice}`
    }

    if(query.maxPrice){

        url+=`&maxPrice=${query.maxPrice}`
    }

    if(query.minMil){

        url+=`&minMil=${query.minMil}`
    }

    if(query.maxMil){

        url+=`&maxMil=${query.maxMil}`
    }

    console.log(url)

    arr = await getFilteredCarsApi(url);

    document.querySelector(".main-page-content-div").innerHTML="";
    for(let i =0;i<arr.length;i++){

        document.querySelector(".main-page-content-div").appendChild(createCard(arr[i]));

    }

}