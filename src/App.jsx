import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <Card titulo="Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente Com Parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
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
    </div>
)