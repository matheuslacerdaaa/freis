import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Quinto() {

    const[num1, setNum1] = useState()
    const[num2, setNum2] = useState()
    const[num3, setNum3] = useState()
    const[res, setRes] = useState()


    function somar(){

        let soma = (Number (num1) + Number (num2) + Number (num3)) /3

        if(soma <6){
            setRes(' Não')
        }
        else{
            setRes(' Sim')
        }

    }



    return (

        <div className='exercicio5'>


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

                    <h1>Exercício 05 - Media de notas</h1>
                </div>

                <div className='azul'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6</p>


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

                <p className='p'><b>Resultado: O aluno passou?{res}</b></p>












            </main>






        </div>

    );
}