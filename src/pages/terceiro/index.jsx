import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Terceiro() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [num3, setNum3] = useState()
    const [res, setRes] = useState('R$ 0,00')

    function somar(){

        const p = 13.50
        const m = 15.0
        const g = 17.50

        let soma = Number ((num1) * p) +  Number ((num2) * m) +  Number ((num3) * g)
        setRes("R$ " + soma)
    }


    return (

        <div className='exercicio3'>


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

                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </div>

                <div className='azul'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>


                </div>



                <div className='caixa'>


                <div className='grupo'>

                   <div className='um'>
                     <label htmlFor="order"><b>Quantidade pequeno</b></label>
                        <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                    </div> 

                    <div className='dois'>
                        <label htmlFor="order"><b>Quantidade medio</b></label>
                        <input type="text"  value={num2} onChange={e => setNum2(e.target.value)} />
                    </div>

                    
                    <div className='tres'>
                        <label htmlFor="order"><b>Quantidade grande</b></label>
                        <input type="text" value={num3} onChange={e => setNum3(e.target.value)} />
                    </div>

                </div>


                    <div className='botao'>

                        <button onClick={somar}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é {res}</b></p>












            </main>






        </div>

    );
}