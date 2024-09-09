import { useState } from 'react';
import './index.scss'

import { Link } from 'react-router-dom'

export default function Treze() {

    const[num1, setNum1] = useState();
    const[res, setRes] = useState('0.00');


    function somar(){

        let soma = (Number (num1) / 1000)
        setRes(soma)

    }


    return (

        <div className='exercicio13'>


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

                    <h1>Exercício 13 - Leitor</h1>
                </div>

                <div className='laranja'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Digite</b></label>
                    <input type="text"  value={num1} onChange={ e => setNum1(e.target.value)}/>

                    <div className='botao'>
                     
                     <button onClick={somar}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é {res}</b></p>

                 





            </main>






        </div>

    );
}
