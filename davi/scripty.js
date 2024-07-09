let nome;
let nota1;
let nota2;
let nota3;
let media;



function capturas() {

    nome = document.getElementById("nome").value;
    console.log(nome);
    nota1 = document.getElementById("nota1").value;
    console.log(nota1);
    nota2 = document.getElementById("nota2").value;
    console.log(nota2);
    nota3 = document.getElementById("nota3").value;
    console.log(nota3);




};
function calculos() {
    
    media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    media = media.toFixed(2);
    

   
    

}
function resposta() {
    
    if (isNaN(media))  {
        alert("Por favor, preencha todos os campos corretamente");
    }else{
        document.getElementById("result").innerHTML = "Para as notas: <br> nota 1° :" + nota1 + "<br> nota 2° : " + nota2 + "<br> nota 3° : " + nota3 + " <br> A média do aluno: " + nome + " é: " + media;
    }

  localStorage.resultado = media;

   

}

// function salvaDados() {
//     let dados = JSON.stringify(media);
//     fetch("/dados.json", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
        
//         },
//         body: dados
//     })
//     .then(Response => Response.json())
//     .then(data =>{

//     })

    

// }

document.addEventListener('submit', function (event) {
    event.preventDefault();
    
    capturas();
    calculos()
    resposta()
});

console.log(nome, nota1, nota2, nota3);