import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
        <ComParametro titulo="Opa"
            subtitulo="Eba" />
    </div>,
    document.getElementById('root')
)