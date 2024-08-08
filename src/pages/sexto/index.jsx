import './index.scss'

import { Link } from 'react-router-dom'

export default function Sexto() {
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
                    <input type="text"  placeholder='0'/>

                    <label htmlFor="order"><b>Bônus mensal em porcentagem</b></label>
                    <input type="text"  placeholder='0'/>

                    <label htmlFor="order"><b>Total de descontos</b></label>
                    <input type="text"  placeholder='0'/>

                    <div className='botao'>
                     
                     <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é R$0</b></p>



            </main>

        </div>

    );
}
