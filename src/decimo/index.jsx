import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Decimo() {

    
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

                    <h1>Exercício 09 - Sorvete</h1>
                </div>

                <div className='roxo'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Javascript que <b>calcule o total </b>a se paagr em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100g é R$ 3,50 </b>mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui </b>50 centavos. Se o total de gramas for menor ou igual a zero, enviar a mensagem <b>"Peso Inválido".</b> </p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe a quantidade de gramas:</b></label>
                    <input type="text"  placeholder='0'/>

                    <div className='botao'>
                        <button>Executar</button>
                    </div>

                </div>

                <p className='p'><b> O total a pagar é: R$ </b></p>






            </main>






        </div>

    );
}

