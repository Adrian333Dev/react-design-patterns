import { FC } from 'react';
import { IPerson } from '../../types/person';

export interface ISmallPersonItemProps {
	person: IPerson;
}

const SmallPersonItem: FC<ISmallPersonItemProps> = ({
	person: { name, age },
}) => {
	return <p>{name} is {age} years old.</p>;
};

export default SmallPersonItem;
