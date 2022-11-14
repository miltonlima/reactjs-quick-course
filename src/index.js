import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
// import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

ReactDOM.render(
    <div>
        <Card titulo="Exercício X">
            Conteudo
        </Card>

        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}
        {/* <Primeiro />
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        <ComParametro titulo="Opa" subtitulo="Eba" /> */}
    </div>,
    document.getElementById('root')
)