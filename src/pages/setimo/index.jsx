import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Setimo() {


    return (

        <div className='exercicio7'>


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

                    <h1>Exercício 07 - Cores Primárias</h1>
                </div>

                <div className='rosa'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para <b>verificar</b> se duas cores primárias</p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Primeira cor</b></label>
                    <input type="text"  placeholder='cor'/>


                    <div className='um'>
                        <label htmlFor="order"><b>Segunda cor</b></label>
                        <input type="text"  placeholder='cor'/>
                    </div>

                    <div className='botao'>

                     <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: A cor é primária?</b></p>






            </main>






        </div>

    );
}
