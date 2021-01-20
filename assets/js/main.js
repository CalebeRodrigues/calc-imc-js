main();

function main (){
    
    let boolean;

    const form = document.querySelector(".form");

    const resultado = document.querySelector("#resultado");

    form.addEventListener("submit", calculaIMC );


    function calculaIMC (evento){

        evento.preventDefault();

        if(Number(form.querySelector("#peso").value)){
            
            if(Number(form.querySelector("#altura").value)){
                const peso = Number(form.querySelector("#peso").value);
        
                const altura = Number(form.querySelector("#altura").value);
            
                const calc = peso / altura**2;
            
                console.log("Resultado = " + calc.toFixed(2));
                console.log("Nivel: " + getGrauIMC(calc));

                resposta = `Seu IMC é ${calc.toFixed(2)} (${getGrauIMC(calc)})`;
                boolean = true;
            }
            else{
                resposta = "Invalid argument 'Altura'!"
                boolean = false;
            }

        }
        else{

            resposta = "Invalid argument 'Peso'!";
            boolean = false;

        }
        
        createParagraph(boolean, resposta);
        console.log(resposta);
    }

    function getGrauIMC(calc){

        const tipos = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
                 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];


        
        if(calc <= 18.5){
            return tipos[0];
        }
        else if(calc >= 18.5 && calc <= 24.9){
            return tipos[1];
        }
        else if(calc >= 25 && calc <= 29.9){
            return tipos[2];
        }
        else if(calc >= 30 && calc <= 34.9){
            return tipos[3];
        }
        else if(calc >= 35 && calc <= 39.9){
            return tipos[4];
        }
        else if(calc >= 40){
            return tipos[5];
        }
    }

    function createParagraph (bool, resposta){
        if(bool){
            resultado.innerHTML = `<p id="resulTrue"> ${resposta}</p>`;
        }
        else{
            resultado.innerHTML = `<p id="resulFalse"> ${resposta}</p>`;
        }
    }
}

