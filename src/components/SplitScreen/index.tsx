import { FC } from 'react';
import { Container, Pane } from './styles';

interface Props {
	children: JSX.Element[];
	leftWeight?: number;
	rightWeight?: number;
}

const SplitScreen: FC<Props> = ({
	children: [left, right],
	leftWeight = 1,
	rightWeight = 1,
}) => {
	return (
		<Container>
			<Pane weight={leftWeight}>{left}</Pane>
			<Pane weight={rightWeight}>{right}</Pane>
		</Container>
	);
};

export default SplitScreen;
