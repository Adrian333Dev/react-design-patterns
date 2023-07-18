import { FC } from 'react';
import { IProduct } from '../../types/product';

interface LargeProductItemProps {
	product: IProduct;
}

const LargeProductItem: FC<LargeProductItemProps> = ({
	product: { name, price, description, rating },
}) => {
	return (
		<div>
			<div>{`${name} - ${price}`}</div>
			<div>{description}</div>
			<div>{rating}</div>
		</div>
	);
};

export default LargeProductItem;
