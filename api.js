function api(path, method='GET', body=null){

    // const e declarata o data, pe cat let se redeclara la folosirea functiei 


        const url = "http://localhost:3030"+ path;

        const options = {

            method,

            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            },
        

        };

        if(body!==null){
            options.body = JSON.stringify(body);


            // stringify transforma din javascript in json 
            // parse transforma din json in javascript
        }

        return fetch(url,options)
}




async function getCarsApi(){

    let data = await api(`/all-cars`)

    return data.json();
}

async function getAllCarMakersApi(){

    let data = await api(`/all-cars/all-makers`)

    return data.json();

}


async function getAllModelsByMakerApi(param){

    let data = await api(`/all-cars/models-by-maker/maker=${param}`)
    return data.json();
}   


async function getAllCarsByModelApi(param){


    let data = await api(`/all-cars/cars-by-model/model=${param}`)
    return data.json()
}


async function getAllCarsByMakerApi(param){

    let data = await api(`/all-cars/cars-by-maker/maker=${param}`)
    return data.json();

}


async function getCarByIdApi(id) {

    let data = await api(`/all-cars/car-by-id/id=${id}`)
    return data.json();
}



async function addCar(car){

    let data = await api('/new-car',"POST",car);

    return data.json();
}

async function deleteCar(id){

    let data = await api('/all-cars/delete/id='+id,"DELETE");

    return data.json();
}


async function editCarApi(car,id){

    let data = await api('/edit-car/car-id='+id,"PUT",car);
    return data.json();


}