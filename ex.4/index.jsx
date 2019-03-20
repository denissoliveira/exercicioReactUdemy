import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, {Segundo} from './component'

// Primeiro é o nome do export default

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
,document.getElementById('app'))
