import { FC } from 'react';
import { IProduct } from '../../types/product';

interface SmallProductItemProps {
	product: IProduct;
}

const SmallProductItem: FC<SmallProductItemProps> = ({
	product: { name, price },
}) => {
	return <div>{`${name} - ${price}`}</div>;
};

export default SmallProductItem;
