import { Box, Button, CardMedia, Typography, useTheme, Link, Divider, IconButton } from '@mui/material';

import { Footer, LoginContainer, ShadeBackground } from './Style';
import { useAuthContext } from '../../shared/contexts';
import LogoName from '../../assets/images/logo.svg';
import Bg from '../../assets/images/bg2.png';
import { Form } from '@unform/web';
import { ToastAlert, UnformInputText } from '../../shared/components';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';

interface ILoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: ILoginProps) => {
	const { isAuthenticated } = useAuthContext();
	const theme = useTheme();

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
						padding={theme.spacing(8)}
						sx={{ borderRadius: '4px' }}
					>
						<Box marginBottom={3}>
							<Typography color='#FFF' variant='h2' fontSize='32px' fontWeight='bold'>Entrar</Typography>
						</Box>
						{/* Form area */}
						<Box>
							<Form onSubmit={console.log}>
								<UnformInputText name='user' label='Email ou número de telefone' />
								<UnformInputText name='password' label='Senha' type='password' />
							</Form>
							<Button
								variant='contained'
								fullWidth
								size='large'
								sx={{
									py: '11px',
									mt: '25px',
									textTransform: 'capitalize',
									fontSize: '16px',
									backgroundColor: '#e50914',
									'&:hover': {
										backgroundColor: '#fb1c27',
									}
								}
								}
							>
								Entrar
							</Button>
						</Box>
						<Box width='100%' >
							<Box
								width='100%'
								display='flex'
								justifyContent='end'
								marginTop={theme.spacing(1)}
							>
								<ToastAlert />
							</Box>
							<Box
								display='flex'
								marginTop={theme.spacing(8)}
							>
								<Typography variant='caption' fontSize='inherit' sx={{ color: '#b3b3b3' }}>
									Novo por aqui?
								</Typography>
								<Divider orientation='vertical' sx={{ mr: '5px' }} />
								<Link
									href='https://www.netflix.com/br-en/'
									variant='caption'
									fontSize='inherit'
									sx={{ color: '#f5f5f5' }}
								>
									Assine agora
								</Link>
							</Box>
						</Box>
						<Box
							width='100%'
							display='flex'
							justifyContent='center'
							alignItems='center'
							marginTop={theme.spacing(6)}
						>
							<a href='https://github.com/EuMarcel0/' target='_blank' rel="noreferrer" >
								<IconButton>
									<GitHub fontSize='small' />
								</IconButton>
							</a>
							<a href='https://www.linkedin.com/in/marcelo-ribeiro-da-silva-aa444921b/' target='_blank' rel="noreferrer">
								<IconButton>
									<LinkedIn fontSize='small' />
								</IconButton>
							</a>
							<a href='https://api.whatsapp.com/send/?phone=5577991776299&text=Ol%C3%A1%2C+tudo+bem%3F&app_absent=0' target='_blank' rel="noreferrer">
								<IconButton>
									<WhatsApp fontSize='small' />
								</IconButton>
							</a>
						</Box>
					</Box>
				</LoginContainer>
			</Box >
			<Footer>
			</Footer>
		</Box >
	);
};
