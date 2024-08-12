import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Primeiro() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [res, setRes] = useState('R$ 0,00')


    function somar(){

        let soma = (Number(num1) * Number(num2)) /100
        let soma2 = Number(num1) - soma
        setRes("R$" + soma2)
    }

    
    return (

        <div className='exercicio1'>


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

                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>

                <div className='amarelo'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe o valor do pedido</b></label>
                    <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>


                    <div className='um'>  
                        <label htmlFor="order"><b>Informe o valor do Cupom</b></label>
                        <input type="text"  value={num2} onChange={e => setNum2(e.target.value)}/>
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

