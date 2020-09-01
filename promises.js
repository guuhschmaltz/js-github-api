var minhaPromise = function(){
    return new Promise(function(resolve, reject){
    //O resolve é a função que utilizaremos dentro da promise
    //quando o resultado obtido for sucesso e o reject retornaremos
    //quando o resultado não for de sucesso.
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/guuhschmaltz');
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição');
            }
        }
    }
    });
}
//A sintaxe de .THEN .CATCH é muito usada para requisições.

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });


//MODO 
//var xhr = new XMLHttpRequest();

//xhr.open('GET', 'https://api.github.com/users/guuhschmaltz');
//xhr.send(null);

//xhr.onreadystatechange = function() {
//    if (xhr.readyState === 4){
//        console.log(JSON.parse(xhr.responseText))
//    }
//}

