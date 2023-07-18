import { FC } from 'react';
import { IPerson } from '../../types/person';

interface UserInfoProps {
	user: IPerson;
}

const UserInfo: FC<UserInfoProps> = ({
	user: { name, age, hairColor, hobbies },
}) => {
	return (
		<>
			<h3>{name}</h3>
			<p>Age: {age} years</p>
			<p>Hair Color: {hairColor}</p>
			<p>Hobbies: {hobbies.join(', ')}</p>
		</>
	);
};

export default UserInfo;
