import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

   


export default function Nono() {

    const [num1,setNum1] = useState()
    const [res,setRes] = useState()

    function somar(){
        let ret = Number(num1) / 100
        let soma =  ret * 3.50
        let soma2 =  ret * 3.00

        if(num1 <= 999){
            setRes("R$" + soma)
        }

        else if(num1 >=  1000){
            setRes("R$" + soma2)
        }

        else if (num1 === 0){
            setRes("peso inválido")
        }
        else{
            setRes("peso inválido")
        }
    }

    
    return (

        <div className='exercicio9'>


            <header>

                <img src='/assets/images/logo.png' />
                <h2>React FreiS</h2>


                <nav>

                    <Link className='inicio' to='/'>Inicio</Link>
                    <Link className='sobre' to='/sobre'>Sobre</Link>

                </nav>

            </header>

            <main>


                <div className='titulo'>
                    <Link className='voltar' to= '/'>
                        <img src= '/assets/images/voltar.png' />
                    </Link>

                    <h1>Exercício 09 - Sorvete</h1>
                </div>

                <div className='roxo'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Javascript que <b>calcule o total </b>a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100g é R$ 3,50 </b>mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui </b>50 centavos. Se o total de gramas for menor ou igual a zero, enviar a mensagem <b>"Peso Inválido".</b> </p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe a quantidade de gramas:</b></label>
                    <input type="text"  onChange={num1} onChange={ e => setNum1(e.target.value)}/>

                    <div className='botao'>
                        <button onClick={somar}>Executar</button>
                    </div>

                </div>

                <p className='p'><b> O total a pagar é: {res}</b></p>






            </main>






        </div>

    );
}

