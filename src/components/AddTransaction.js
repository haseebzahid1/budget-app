import React from 'react'

const AddTransaction = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input
                        type="text"
                        name="incomeText"
                        // value={incomeText}
                        placeholder="Add Income..."
                        // autoComplete="off"
                        // onChange={onChangeIncome}
                    />
                    <input
                        type="number"
                        name="incomeAmount"
                        // value={incomeAmount}
                        placeholder="Amount"
                        // autoComplete="off"
                        // onChange={onChangeIncome}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form >
                <div className="input-group expense">
                    <input
                        type="text"
                        name="expenseText"
                        // value={expenseText}
                        placeholder="Add Expense..."
                        // autoComplete="off"
                        // onChange={onChangeExpense}
                    />
                    <input
                        type="number"
                        name="expenseAmount"
                        // value={expenseAmount}
                        // placeholder="Amount"
                        // autoComplete="off"
                        // onChange={onChangeExpense}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default AddTransaction
