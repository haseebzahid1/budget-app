import React from 'react'

const IncomeList = () => {
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {/* {incomeTransactions.map(incomeTransaction => (
                    <IncomeTransaction
                        key={incomeTransaction.id}
                        incomeTransaction={incomeTransaction}
                    />
                ))} */}
            </ul>
        </div>
    );
}

export default IncomeList
