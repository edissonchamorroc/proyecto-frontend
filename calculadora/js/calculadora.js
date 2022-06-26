var resultado=document.getElementById("disp");
var variable1=0,variable2=0,operando;
document.querySelectorAll(".btn").forEach(elementos =>{
    elementos.addEventListener("click",elementos=>{
            var valor=elementos.target.value;
            if(valor=="+"){

                    variable1=resultado.textContent;
                    resultado.textContent="";
                    operando=valor;

            }
            else if(valor=="-"){

                    variable1=resultado.textContent;
                    resultado.textContent="";
                    operando=valor;

            }
            else if(valor=="*"){

                    variable1=resultado.textContent;
                    resultado.textContent="";
                    operando=valor;
   

            }
            else if(valor=="/"){

                    variable1=resultado.textContent;
                    resultado.textContent="";
                    operando=valor;


            }
            else if(valor=="="){
                switch (operando) {
                    case "+":
                        variable2=resultado.textContent;
                        resultado.textContent=sumar(variable1,variable2);
                        break;
                    case "-":
                        variable2=resultado.textContent;
                        resultado.textContent=resta(variable1,variable2);
                    break;
                    case "*":
                        variable2=resultado.textContent;
                        resultado.textContent=mult(variable1,variable2);
                        break;
                    case "/":
                        variable2=resultado.textContent;
                        resultado.textContent=div(variable1,variable2);
                        break;
                    default:
                        break;
                }
            }
            else if(valor=="c"){
                resultado.textContent="";
                variable1=variable2=0;
            }
            else{
                resultado.textContent+=valor;
            }        
            
    });
});

function sumar(variable1,variable2){
    console.log(variable1+"-----"+variable2);
        return Number(variable1)+Number(variable2);
}
function resta(variable1,variable2){
    console.log(variable1+"-----"+variable2);
    return Number(variable1)-Number(variable2);
}
function mult(variable1,variable2){
    console.log(variable1+"-----"+variable2);
    return Number(variable1)*Number(variable2);
}
function div(variable1,variable2){
    console.log(variable1+"-----"+variable2);
    if(variable2!="0"){
        return Number(variable1)/Number(variable2);
    }
    else{
        return "error";
    }
    
}