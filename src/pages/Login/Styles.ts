import styled from 'styled-components';

interface Props {
	height: number;
	bgcolor: string;
}

export const LoginContainer = styled.div`
	height: calc(80vh - 45px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const FooterLogin = styled.div`
	height: 100%;
	max-height: ${({height} : Props) => height}px;
	width: 100%;
	padding-bottom: 10px;
	position: absolute;
	bottom: -170px;
	left: 0;
	right: 0;
	overflow-y: hidden;
	background-color: ${({bgcolor} : Props) => bgcolor};
`;
