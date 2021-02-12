import {basePath,version} from "./config";
//funcion para mostrar los usuarios
export function getUsersApi(){
    const url= `${basePath}/${version}/users`;
    const params={
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    };

    return fetch(url,params)
                .then(response=>{
                    return response.json();
                }).then(result=>{
                    return result.data;
                }).catch(e=>{
                    return ({message:e.message});
                });
};
//para añadir usuarios
export function postUsersApi(data){
    const url= `${basePath}/${version}/users`;
    const params={
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        },
    };

    return fetch(url,params)
        .then(response =>{ 
            return response.json();
        })
        .then(result=>{
            if(result.user){
                return {ok:true,message:'Usuario Creado Correctamente'};
            }
            return {ok:false,message:result.message};
        })
        .catch((e)=>{return {ok:false , message:e.message};
        });
};

//para buscar un usuario por id
export function getUserAPI(userId){
    const url=`${basePath}/${version}/users/${userId}`;
    const params={
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
    }

    return fetch(url,params)
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                return result;
            })
            .catch(err=>{
                return err.message;
            });
}

