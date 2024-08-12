import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Setimo() {

    const [cor1,setCor1] = useState();
    const [cor2,setCor2] = useState();
    const [res,setRes] = useState('');

    function somar(){

        if(cor1 === 'amarelo' && cor2 === 'amarelo' || cor1 === 'vermelho' && cor2 === 'vermelho' || cor1 === 'azul' && cor2 === 'azul' || cor1 === 'amrelo' & cor2 === 'vermelho' || cor1 === ' vermelho' & cor2 === 'amarelo' || cor1 === 'amarelo' && cor2 === 'azul' || cor1 === 'azul' && cor2 === 'amarelo' || cor1 === 'azul' && cor2 === 'vermelho' || cor1 === 'vermelho' && cor2 === 'azul' ){
            setRes("true")
        }
        else{
            setRes("false")
        }

        }


   




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
                    <input type="text"  value={cor1} onChange={ e => setCor1(e.target.value)}/>


                    <div className='um'>
                        <label htmlFor="order"><b>Segunda cor</b></label>
                        <input type="text"  value={cor2} onChange={ e => setCor2(e.target.value)}/>
                    </div>

                    <div className='botao'>

                     <button onClick={somar}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: A cor é primária?{res}</b></p>






            </main>






        </div>

    );
}
