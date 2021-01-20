main();

function main (){
    
    const form = document.querySelector(".form");

    const resultado = document.querySelector("#resultado");

    form.addEventListener("submit", calculaIMC );


    function calculaIMC (evento){

        evento.preventDefault();
    
        const peso = Number(form.querySelector("#peso").value);
    
        const altura = Number(form.querySelector("#altura").value);
    
        const calc = peso / altura**2;
    
        console.log('Deu certo.');
        console.log("Resultado = " + calc.toFixed(2));
    }
}

