import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext);


    console.log(expenseTransactions);
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction => (
                    <IncomeTransaction
                        key={expenseTransaction.id}
                        incomeTransaction={expenseTransaction} />
                ))}

            </ul>
        </div>
    );
}

export default ExpenseList
