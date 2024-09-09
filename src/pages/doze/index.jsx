import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Doze() {

    const[num1, setNum1] = useState()
    const[num2, setNum2] = useState()
    const[num3, setNum3] = useState()
    const[res, setRes] = useState()


    function somar(){

        let soma = (Number (num1) + Number (num2) + Number (num3)) /3

        if(num1 > 10 || num2 > 10 || num3 > 10){
            setRes('Nota inválida. Ela deve estar entre 0 e 10.');
        }
        else if(num1 < 0 || num2 < 0 || num3 < 0){
            setRes('Nota inválida. Ela deve estar entre 0 e 10.');
        }

        else{


       setRes('a media calculada foi ' + soma.toFixed(2))
    }

    }



    return (

        <div className='exercicio12'>


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
                    <Link className='voltar' to='/'>
                        <img src='/assets/images/voltar.png' />
                    </Link>

                    <h1>Exercício 12 - Notas válidas</h1>
                </div>

                <div className='azul-escuro'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript que <b>calcule a meida de três notas</b> informadas pelo usuario. O programa deve garantir que enquanto o usuario não informar uma nota válida <b>0 menor ou igual a 10</b>, uma mensagem seja enviada informando o intervalo válido e solicitando a nota novamente</p>

                </div>



                <div className='caixa'>


                <div className='grupo'>

                   <div className='um'>
                     <label htmlFor="order"><b>Primeira Nota</b></label>
                        <input type="text" value={num1} onChange={ e => setNum1 (e.target.value)} />
                    </div> 

                    <div className='dois'>
                        <label htmlFor="order"><b>Segunda Nota</b></label>
                        <input type="text" value={num2} onChange={ e => setNum2 (e.target.value)} />
                    </div>

                    
                    <div className='tres'>
                        <label htmlFor="order"><b>Terceira Nota</b></label>
                        <input type="text" value={num3} onChange={ e => setNum3 (e.target.value)} />
                    </div>

                </div>


                    <div className='botao'>

                        <button onClick={somar}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: {res}</b></p>












            </main>






        </div>

    );
}