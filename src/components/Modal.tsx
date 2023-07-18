import { FC, MouseEvent, ReactNode, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 1001;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 1rem;
	border-radius: 0.5rem;
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background-color: transparent;
	font-size: 1.5rem;
	padding: 0.5rem;
	cursor: pointer;
	&:hover {
		color: red;
	}
`;

interface ModalProps {
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			{isOpen && (
				<Overlay onClick={() => setIsOpen(false)}>
					<StyledModal
						onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
					>
						<CloseBtn onClick={() => setIsOpen(false)}>X</CloseBtn>
						{children}
					</StyledModal>
				</Overlay>
			)}
		</>
	);
};

export default Modal;
