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

        <span>
          <div className="card5">
            <Link className='vermelho' to='/quinto'></Link>

            <h3>Media de notas</h3>
            <p>Exercício 05</p>
          </div>

          <div className="card6">
            <Link className='verde-escuro' to='/sexto'></Link>

            <h3>Salário liquído</h3>
            <p>Exercício 06</p>
          </div>

          <div className="card7">
            <Link className='rosa' to='/setimo'></Link>

            <h3>Cores Primárias</h3>
            <p>Exercício 07</p>
          </div>

          <div className="card8">
            <Link className='azul-vermelho' to='/oitavo'></Link>

            <h3>Temperatura Corporal</h3>
            <p>Exercício 08</p>
          </div>
        </span>


          <span className='tres'>

            <div className="card9">
              <Link className='roxo' to='/nono'></Link>

              <h3>Sorvete</h3>
              <p>Exercício 09</p>
            </div>

            <div className="card10">
              <Link className='beggie' to='/decimo'></Link>

              <h3>IMC</h3>
              <p>Exercício 10</p>
            </div>

            <div className="card11">
              <Link className='black' to='/onze'></Link>

              <h3>Tabuada</h3>
              <p>Exercício 11</p>
            </div>

            
            <div className="card12">
              <Link className='azul-escuro' to='/doze'></Link>

              <h3>Notas válidas</h3>
              <p>Exercício 12</p>
            </div>

          </span>

          <span className='quatro'> 
          
          <div className="card13">
              <Link className='laranja' to='/treze'></Link>

              <h3>Leitor</h3>
              <p>Exercício 13</p>
            </div>

            <div className="card14">
              <Link className='lilais' to='/quatorze'></Link>

              <h3>Primo</h3>
              <p>Exercício 14</p>
            </div>

            <div className="card15">
              <Link className='cinza' to='/quinze'></Link>

              <h3>Pessoas</h3>
              <p>Exercício 15</p>
            </div>

            <div className="card15">
              <Link className='cinza' to='/quinze'></Link>

              <h3>Pessoas</h3>
              <p>Exercício 15</p>
            </div>

          
          
          
          
          </span>
          
         

          

        

        

      </main>


    </div>
  );
}

export default App;
