import React from 'react'

const ExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            {/* <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction => (
                    <ExpenseTransaction
                        key={expenseTransaction.id}
                        expenseTransaction={expenseTransaction}
                    />
                ))}
            </ul> */}
        </div>
    );
}

export default ExpenseList
