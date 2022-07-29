import { Box, Button, CardMedia, Typography } from '@mui/material';
import { shade } from 'polished';

import { useAuthContext } from '../../contexts';
import Bg from '../../../assets/images/bg2.png';
import LogoName from '../../../assets/images/logo.svg';
import { ShadeBackground } from './Style';

interface ILoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: ILoginProps) => {
	const { login, isAuthenticated } = useAuthContext();

	//Será renderizado apenas se o usuário estiver autenticado
	if (isAuthenticated) {
		return <>{children}</>;
	}


	//Será renderizado se o usuário não estiver autenticado
	return (
		<Box
			width="100vw"
			height="100vh"
			display="flex"
		>
			<Box width="100%" height="100%" >
				{/* Shade in background image */}
				<ShadeBackground />
				<CardMedia component={'img'} src={Bg} width='100%' height='100%' />
			</Box>
			<Box
				component={'header'}
				width='100%'
				height='90px'
				display='flex'
				alignItems='center'
				justifyContent='start'
				paddingY={2}
				paddingX={5}
				position='absolute'
				top='0'
				left='0'
				right='0'
				bottom='0'
			>
				<Box width='170px' height='45px'>
					<CardMedia component={'img'} src={LogoName} width={50} height='auto' />
				</Box>
			</Box>
		</Box>
	);
};
