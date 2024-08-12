import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Onze() {


    const[num, setNum] = useState()
    
    const[res, setres] = useState()
    const[res1, setres1] = useState()
    const[res2, setres2] = useState()
    const[res3, setres3] = useState()
    const[res4, setres4] = useState()
    const[res5, setres5] = useState()
    const[res6, setres6] = useState()
    const[res7, setres7] = useState()
    const[res8, setres8] = useState()
    const[res9, setres9] = useState()
    const[res10, setres10] = useState()
  

    function Calculadora(){
        let numero = num
        let cont = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        setres(numero + ' x ' + cont[0] + ' = ' + (numero * cont[0]));
        setres1(numero + ' x ' + cont[1] + ' = ' + (numero * cont[1]));
        setres2(numero + ' x ' + cont[2] + ' = ' + (numero * cont[2]));
        setres3(numero + ' x ' + cont[3] + ' = ' + (numero * cont[3]));
        setres4(numero + ' x ' + cont[4] + ' = ' + (numero * cont[4]));
        setres5(numero + ' x ' + cont[5] + ' = ' + (numero * cont[5]));
        setres6(numero + ' x ' + cont[6] + ' = ' + (numero * cont[6]));
        setres7(numero + ' x ' + cont[7] + ' = ' + (numero * cont[7]));
        setres8(numero + ' x ' + cont[8] + ' = ' + (numero * cont[8]));
        setres9(numero + ' x ' + cont[9] + ' = ' + (numero * cont[9]));
        setres10(numero + ' x ' + cont[10] + ' = ' + (numero * cont[10]));
       
    }
    
    return (

        <div className='exercicio11'>


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

                    <h1>Exercício 11 - Tabuada</h1>
                </div>

                <div className='black'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Javascript que<b> escreva no terminal</b> a tabuada de um número informado pelo usuário. A mensagem deve estar no formato:
 </p>


                </div>

                <div className='section'>
                    <div className='caixa'>

                        <label htmlFor="order"><b>Informe o numero: </b></label>
                        <input type="text" value={num} onChange={e => setNum(e.target.value)}  />

                        <div className='botao'>
                            <button onClick={Calculadora}>Executar</button>
                        </div>

                    </div>


                        <p className='p'><b> <h3>{res}</h3>
                          <h3>{res1}</h3>
                          <h3>{res2} </h3>
                          <h3>{res3}</h3>
                          <h3>{res4}</h3>
                          <h3>{res5}</h3>
                          <h3>{res6}</h3>
                          <h3>{res7}</h3>
                          <h3>{res8}</h3>
                          <h3>{res9}</h3>
                          <h3>{res10}</h3>   </b></p>


                </div>


            </main>






        </div>

    );
}

