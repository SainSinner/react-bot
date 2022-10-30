import React, {useState} from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }

    const [quantity, setQuantity] = useState(0)

    function addQuantity() {
        setQuantity(quantity + 1)
    }

    function removeQuantity() {        
        setQuantity(quantity - 1)
    }


    return(
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button disabled>
                {quantity}
            </Button>
            <Button onClick={addQuantity}>+</Button>
            <Button onClick={removeQuantity}>-</Button>
            <Button disabled sclassName={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;