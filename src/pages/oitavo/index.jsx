import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Oitavo() {

    
    return (

        <div className='exercicio8'>


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

                    <h1>Exercício 08 - Temperatura Corporal</h1>
                </div>

                <div className='azul-vermelho'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Java que a partir da temperatura, <b>avalie a situação </b>da pessoa conforme a tabela. Ao final, apresente a classificação.</p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe a temperatura</b></label>
                    <input type="text"  placeholder='0'/>

                    <div className='botao'>
                        <button>Executar</button>
                    </div>

                </div>

                <p className='p'><b>A situação para a sua temperatura é: </b></p>






            </main>






        </div>

    );
}

