import { Box, Button, CardMedia, Typography } from '@mui/material';

import { Footer, LoginContainer, ShadeBackground } from './Style';
import { useAuthContext } from '../../shared/contexts';
import LogoName from '../../assets/images/logo.svg';
import Bg from '../../assets/images/bg2.png';
import { Form } from '@unform/web';
import { UnformInputText } from '../../shared/components';

interface ILoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: ILoginProps) => {
	const { isAuthenticated } = useAuthContext();

	//Será renderizado apenas se o usuário estiver autenticado
	if (isAuthenticated) {
		return <>{children}</>;
	}


	//Será renderizado se o usuário não estiver autenticado
	return (
		<Box
			width='100vw'
			height='100vh'
			display='flex'
		>
			<Box width='100%' height='auto' >
				{/* Shade in background image */}
				<ShadeBackground style={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 }}>
					<CardMedia component={'img'} src={Bg} width='100%' height='100%' sx={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 }} />
				</ShadeBackground>
			</Box>
			<Box
				component={'header'}
				width='100%'
				display='flex'
				flexDirection='column'
				alignItems='start'
				justifyContent='start'
				paddingY={3}
				paddingX={5}
				position='absolute'
				top='0'
				left='0'
				right='0'
				bottom='0'
			>
				<Box width='170px'>
					<CardMedia component={'img'} src={LogoName} width={50} height='auto' />
				</Box>
				<LoginContainer>
					<Box
						bgcolor='#000000ab'
						width='100%'
						maxWidth='450px'
						height='100%'
						maxHeight='660px'
						padding={4}
					>
						<Box>
							<Typography color='#FFF' variant='h2' fontSize='32px' fontWeight='bold'>Entrar</Typography>
						</Box>
						{/* Form area */}
						<Box>
							<Form onSubmit={console.log}>
								<UnformInputText name='user' />
							</Form>
						</Box>
					</Box>
				</LoginContainer>
			</Box>
			<Footer>
			</Footer>
		</Box >
	);
};
