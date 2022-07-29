import styled from 'styled-components';

export const ShadeBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: -3;
`;

export const LoginContainer = styled.div`
	height: calc(80vh - 45px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const Footer = styled.div`
	height: 100%;
	max-height: 255px;
	width: 100vw;

	position: absolute;
	bottom: -170px;
	left: 0;
	right: 0;

	background-color: #000000ab;
`;
