import './index.scss'

import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="inicio">


      <header>

        <img src='/assets/images/logo.png'/>
        <h2>React FreiS</h2>




        <nav>

          <Link className='inicio' to='/'>Inicio</Link>
          <Link className='sobre' to='/sobre'>Sobre</Link>

        </nav>

      </header>

      <main>

        <h2>Escolha um treino...</h2>

        <span>

          <div className='card1'>

            <Link className='amarelo' to= '/primeiro'></Link>

            <h3>Cupom de desconto</h3>
            <p>Exercício 01</p>


          </div>

          <div className='card2'>

          <Link className='verde' to= '/segundo'></Link>

            <h3>Converter Kg/gramas</h3>
            <p>Exercício 02</p>


          </div>


          <div className='card3'>

          <Link className='azul' to= '/terceiro'></Link>

            <h3>Valor total por quantidade</h3>
            <p>Exercício 03</p>


          </div>

          <div className="card4">
            <Link className='marrom' to='/quarto'></Link>

            <h3>Cálculo de tempo</h3>
            <p>Exercício 04</p>
          </div>

        </span>
          <div className="card5">
            <Link className='vermelho' to='/quinto'></Link>

            <h3>Media de notas</h3>
            <p>Exercício 05</p>
          </div>


        

      </main>


    </div>
  );
}

export default App;
