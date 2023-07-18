import { FC } from 'react';
import { IPerson } from '../../types/person';

interface LargePersonItemProps {
	person: IPerson;
}

const LargePersonItem: FC<LargePersonItemProps> = ({
	person: { name, age, hairColor, hobbies },
}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
			<p>Hobbies: {hobbies.join(', ')}</p>
		</div>
	);
};

export default LargePersonItem;
