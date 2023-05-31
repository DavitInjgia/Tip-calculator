import React from 'react'
import ResultsContainer from './ResultsContainer'
import TipAmount from './components/TipAmount/TipAmount'
import Total from './components/Total/Total'
import Reset from './components/Reset/Reset'

function Results() {
  return (
    <ResultsContainer tipAmount = {<TipAmount/>} total = {<Total/>} reset = {<Reset/>}/>
  )
}

export default Results
