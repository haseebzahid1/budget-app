import React from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import ExpenseList from './components/ExpenseList'
import Header from './components/Header'
import IncomeList from './components/IncomeList'


const App = () => {
    return (
       
            <div className='container'>
                <div className='app-wrapper'>
                    <Header />
                    <Balance />
                    <IncomeList /> 
                    <ExpenseList />
                    <AddTransaction />
                </div>
            </div>
       
    )
}

export default App
