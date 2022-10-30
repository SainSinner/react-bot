import React, {useState} from 'react';
import Button from '../Button/Button';

const Counter = function () {
    const [quantity, setQuantity] = useState(0)

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    
    function removeQuantity() {        
        setQuantity(quantity - 1)
    }

    return (
        <div>
            <Button disabled>
                {quantity * product.price}
            </Button>
            <Button onClick={addQuantity}>+</Button>
            <Button onClick={removeQuantity}>-</Button>            
        </div>
    );
};

export default Counter;
