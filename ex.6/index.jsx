import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

// Primeiro é o nome do export default

ReactDOM.render(
    <Family lastName='Oliveira'>
        <Member name='Denis' />
        <Member name='Daniel' />
        <Member name='Danilo' />
    </Family>        
,document.getElementById('app'))
