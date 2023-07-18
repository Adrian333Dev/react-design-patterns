import { ReactNode } from 'react';

interface RegularListProps<T> {
	items: T[];
	component: (props: T) => ReactNode;
}

export default function RegularList<T>({
	items,
	component,
}: RegularListProps<T>) {
	return (
		<div>
			{items.map((item, index) => {
				return <div key={index}>{component(item)}</div>;
			})}
		</div>
	);
}
