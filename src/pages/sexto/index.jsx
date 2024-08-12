import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Sexto() {

    const[num1,setNum1] = useState();
    const[num2,setNum2] = useState();
    const[num3,setNum3] = useState();
    const[res,setRes] = useState('R$ 0,00');

    function somar(){

        let soma = (Number (num1) * Number (num2))
        let soma2 = (soma / 100) + Number (num1)
        let soma3 = soma2 - Number(num3)
        setRes("R$" + soma3)         
    }


    return (

        <div className='exercicio6'>


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

                    <h1>Exercício 06 - Salário Líquido</h1>
                </div>

                <div className='verde-escuro'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Java para <b>calcular o salário líquido </b>de um funcionário, a partir de seu salario base, do bônus mensal em porcentagem e do total de descontos em reais</p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Salário Base</b></label>
                    <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>

                    <label htmlFor="order"><b>Bônus mensal em porcentagem</b></label>
                    <input type="text" value={num2} onChange={e => setNum2(e.target.value)}/>

                    <label htmlFor="order"><b>Total de descontos</b></label>
                    <input type="text" value={num3} onChange={e => setNum3(e.target.value)}/>

                    <div className='botao'>
                     
                     <button onClick={somar}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é {res}</b></p>



            </main>

        </div>

    );
}
