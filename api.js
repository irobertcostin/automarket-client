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
        }

        return fetch(url,options)
}


async function addCar(car){

    let data = await api('/new-car',"POST",car);

    return data.json();
}