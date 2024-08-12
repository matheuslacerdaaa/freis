import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Quarto() {

    const[num1,setNum1] = useState ();
    const[num2,setNum2] = useState ();
    const[res,setRes] = useState ('0h');


    function somar(){
        let soma = (Number (num1) * Number (num2)) / 3600
        setRes(soma.toFixed(2) + "h")
    }

  


    return (

        <div className='exercicio4'>


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

                    <h1>Exercício 04 - Cálculo de tempo</h1>
                </div>

                <div className='marrom'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Nome do livro</b></label>
                    <input type="text" />

                    <label htmlFor="order"><b>Total de páginas</b></label>
                    <input type="text"  value={num1} onChange={ e => setNum1(e.target.value)}/>

                    <label htmlFor="order"><b>Tempos em segundos por página</b></label>
                    <input type="text"  value={num2} onChange={ e => setNum2(e.target.value)}/>

                    <div className='botao'>
                     
                     <button onClick={somar} >Executar</button>

                    </div>

                </div>

                <p className='p'><b>Você lerá em {res}</b></p>



            </main>

        </div>

    );
}
