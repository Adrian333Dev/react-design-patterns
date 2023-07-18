import { FC } from 'react';
import { IProduct } from '../../types/product';

interface ProductInfoProps {
	product: IProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({
	product: { name, price, description, rating },
}) => {
	return (
		<>
			<h3>{name}</h3>
			<p>Price: ${price}</p>
			<p>Description: {description}</p>
			<p>Rating: {rating}</p>
		</>
	);
};

export default ProductInfo;
