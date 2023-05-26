import {useState} from "react";

function SumadeTipos (){
  const [entrada1,setentrada1] = useState("");
  const [entrada2,setentrada2] = useState("");
  const [resultado,setresultado]= useState("");

  const manejarcambioEntrada1 =(event) => {
    setentrada1(event.target.value);
    calcularResultado(event.target.value, entrada2);
  };
  const manejarcambioEntrada2 = (event) =>{
    setentrada2(event.target.value);
    calcularResultado(entrada1, event.target.value, );
  };
const calcularResultado = (valor1, valor2) => {
  if  (EsEntradaNumerica(valor1) && EsEntradaNumerica(valor2)){
    const base = parseInt(valor1);
    const exponente = parseInt(valor2);
    const potencia = Math.pow(base, exponente);
    setresultado(potencia.toString());
   } 
   else if (EsEntradaNumerica(valor1) &&  !EsEntradaNumerica(valor2)){
    const caracteres = valor2.length;
    const multiplicacion = parseInt(valor1) * caracteres;
    setresultado(multiplicacion.toString());
   } 
   else if (!EsEntradaNumerica(valor1) &&  EsEntradaNumerica(valor2)){
    const caracteres = valor1.length;
    const multiplicacion = parseInt(valor1) * caracteres;
    setresultado(multiplicacion.toString());
   } 
  else{ 
    const concatenacion = valor1 + valor2;
    setresultado(concatenacion);
    }
  };
  const EsEntradaNumerica = (entrada) => {
    return /^\d+$/.test(entrada);
  };
return (
  <div>
    <h1> suma de tipos</h1>
    <label> Entrada1:
    <input type="text" value={entrada1} onChange={manejarcambioEntrada1}/>
    </label>
    <label> Entrada2:
    <input type="text" value={entrada2} onChange={manejarcambioEntrada2}/>
    </label>
    <label> resultado:
    <input type="text" value={resultado} readOnly/>
    </label>
  </div>
);
}
export default SumadeTipos;