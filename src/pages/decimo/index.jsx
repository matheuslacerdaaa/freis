import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Decimo() {

    const[alt, setAlt] = useState(0)
    const[pes, setPes] = useState(0)
    const[res, setRes] = useState(0)
    const[res2, setRes2] = useState(0)


    function calcularImc(){
        let altura = alt
        let peso = pes
        let imc = pes / (alt * alt)
        let condicao = ''

        if(imc >= 40){
            condicao = 'Obesidade Grau III'
        }
        else if(imc >= 35 && imc < 39.9){
            condicao = 'Obesidade Grau II'
        }
        else if(imc >= 30 && imc < 34.9){
            condicao = 'Obesidade Grau I'
        }
        else if(imc >= 25 && imc < 29.9){
            condicao = 'Sobrepeso'
        }
        else if(imc >= 18.5 && imc < 24.9){
            condicao = 'Peso Normal'
        }
        else if(imc < 18.5){
            condicao = 'Abaixo do Peso'
        }
        else{
            condicao = 'Erro'
        }

        setRes2(imc.toFixed(2))
        setRes(condicao)
    }

    
    return (

        <div className='exercicio10'>


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

                    <h1>Exercício 10 - IMC</h1>
                </div>

                <div className='beggie'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Java que a partir da altura e do peso de uma pessoa, <b>calcule o IMC </b>e avalie a faixa correspondente a tabela. Ao final, apresente o IMC e a situação. </p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe a altura:</b></label>
                    <input type="text"  value={alt} onChange={e => setAlt(e.target.value)}/>
                    <label htmlFor="order"><b>Informe o peso:</b></label>
                    <input type="text"  value={pes} onChange={e => setPes(e.target.value)}/>

                    <div className='botao'>
                    <button onClick={calcularImc}>Executar</button>
                    </div>

                </div>

                <p className='p'><b> Seu IMC é: {res2} <br />
                 <br />Sua classificação é: {res} </b></p>





            </main>






        </div>

    );
}

