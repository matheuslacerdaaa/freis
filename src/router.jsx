import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './pages/sobre'
import App from './pages/inicio';
import Notfound from './pages/notfound';
import Primeiro from './pages/primeiro';
import Segundo from './pages/segundo';
import Terceiro from './pages/terceiro';
import Quarto from './pages/quarto';
import Quinto from './pages/quinto';
import Sexto from './pages/sexto'
import Setimo from './pages/setimo';
import Oitavo from './pages/oitavo';
import Nono from './pages/nono';
import Decimo from './pages/decimo';
import Onze from './pages/onze';
import Doze from './pages/doze';
import Treze from './pages/treze';
import Quatorze from './pages/quatorze';
import Quinze from './pages/quinze';


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/primeiro' element= {<Primeiro/>} />
                <Route path= '/segundo' element= {<Segundo/>} />
                <Route path= '/terceiro' element= {<Terceiro/>} />
                <Route path= '/quarto' element= {<Quarto/>} />
                <Route path='/quinto' element= {<Quinto/>} />
                <Route path='/sexto' element={<Sexto/>} />
                <Route path='/setimo' element={<Setimo />} />
                <Route path='/oitavo' element= {<Oitavo />} />
                <Route path='/nono' element= {<Nono />} />
                <Route path='/decimo' element= {<Decimo />} />
                <Route path='/onze' element= {<Onze />} />
                <Route path='/doze' element= {<Doze />} />
                <Route path='/treze' element= {<Treze />} />
                <Route path='/quatorze' element= {<Quatorze />} />
                <Route path='/quinze' element= {<Quinze />} />

                <Route path='*' element={<Notfound/>}/>
                
            </Routes>
        </BrowserRouter>

    )

}