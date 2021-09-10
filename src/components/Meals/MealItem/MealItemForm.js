import React from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css'

function MealItemForm(props) {
    return (
        <div>
            <form className="form">
                <Input label="Amount" input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'   }} />
                <button>+ Add</button>
            </form>
        </div>
    )
}

export default MealItemForm
