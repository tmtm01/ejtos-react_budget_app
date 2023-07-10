import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);
        if (val<totalExpenses){
            alert("Can't do reduce budget below allocated values.")
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: val, 
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                        required='required'
                        type='number'
                        step="10"
                        id='cost'
                        value={budget}
                        onInput={(event) => changeBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};
export default Budget;
