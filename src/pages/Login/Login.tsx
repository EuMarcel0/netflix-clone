import { useRef, useState } from 'react';

import { Box, Button, CardMedia, Typography, useTheme, Link, Divider, IconButton, useMediaQuery, CircularProgress } from '@mui/material';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Form } from '@unform/web';
import * as yup from 'yup';

import { ToastAlert, UnformInputText } from '../../shared/components';
import { FooterLogin } from './components/FooterLogin';
import { useAuthContext } from '../../shared/contexts';
import LogoName from '../../assets/images/logo.svg';
import { Footer, LoginContainer } from './Styles';
import Bg from '../../assets/images/bg2.png';
import { FormHandles } from '@unform/core';

interface ILoginProps {
	children: React.ReactNode;
}
interface IloginValidationYupSchemaProps {
	user: string;
	password: string;
}

const loginValidationYupSchema: yup.SchemaOf<IloginValidationYupSchemaProps> = yup.object().shape({
	user: yup.string().required().email(),
	password: yup.string().required().min(6),
});

export const Login = ({ children }: ILoginProps) => {
	const { isAuthenticated, login } = useAuthContext();
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const unformRef = useRef<FormHandles>(null);
	const [isLoading, setIsLoading] = useState(false);

	if (isAuthenticated) {
		return <>{children}</>;
	}

	const handleLogin = (data: IloginValidationYupSchemaProps) => {
		setIsLoading(true);
		loginValidationYupSchema.validate(data, { abortEarly: false })
			.then((dataValidated) => {
				setIsLoading(true);
				login(dataValidated.user, dataValidated.password)
					.then(() => {
						setIsLoading(false);
					});
			})
			.catch((errors: yup.ValidationError) => {
				setIsLoading(false);
				const validationError: { [key: string]: string } = {};
				errors.inner.forEach((error) => {
					if (error.path) {
						validationError[error.path] = error.message;
					}
					unformRef.current?.setErrors(validationError);
				});

			});
	};

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === 'NumpadEnter') {
			unformRef.current?.submitForm();
		}
	});

	return (
		<Box width='100%' height='100%' display='flex' >
			<Box>
				<CardMedia
					component={'img'}
					src={Bg}
					width='100%'
					height='100%'
					sx={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 }}
				/>
			</Box>
			<Box
				component={'header'}
				width='100%'
				display='flex'
				flexDirection='column'
				alignItems='start'
				justifyContent='start'
				paddingY={3}
				paddingX={smDown ? 1 : 5}
				position='absolute'
				top='0'
				left='0'
				right='0'
				bottom='0'
			>
				<Box
					width='170px'
				>
					<CardMedia component={'img'} src={LogoName} width={50} height='auto' />
				</Box>
				<LoginContainer>
					<Box
						bgcolor='#000000ab'
						width='100%'
						maxWidth={smDown ? '100%' : '450px'}
						height='100%'
						maxHeight='660px'
						overflow={'hidden'}
						padding={theme.spacing(smDown ? 2 : 8)}
						sx={{ borderRadius: '4px' }}
					>
						<Box marginBottom={3}>
							<Typography color='#FFF' variant='h2' fontSize='32px' fontWeight='bold'>Entrar</Typography>
						</Box>

						<Box>
							<Form ref={unformRef} onSubmit={handleLogin}>
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
								onClick={() => unformRef.current?.submitForm()}
							>
								{isLoading ? <CircularProgress size={28} sx={{ color: '#fff' }} /> : 'Entrar'}
							</Button>
						</Box>
						<Box width='100%' >
							<Box
								width='100%'
								display='flex'
								justifyContent='end'
								marginTop={theme.spacing(1)}
							>
								<ToastAlert
									message='This is a clone. For more information, visit the site: www.netflix.com'
									description='Precisa de ajuda?'
									vertical={'top'}
									horizontal={'left'}
								/>
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
						<Box width='100%' display='flex' justifyContent='center' marginTop={theme.spacing(3)}>
							<ToastAlert
								message='Email: eve.holt@reqres.in | Senha: cityslicka'
								description='Obter email e senha'
								vertical={'top'}
								horizontal={'left'}
							/>
						</Box>
						<Box
							width='100%'
							display='flex'
							justifyContent='center'
							alignItems='center'
							marginTop={theme.spacing(5)}
						>
							<Link href='https://github.com/EuMarcel0/' target='_blank' rel="noreferrer" >
								<IconButton>
									<GitHub sx={{ color: '#f5f5f5' }} fontSize='small' />
								</IconButton>
							</Link>
							<Link href='https://www.linkedin.com/in/marcelo-ribeiro-da-silva-aa444921b/' target='_blank' rel="noreferrer">
								<IconButton>
									<LinkedIn sx={{ color: '#f5f5f5' }} fontSize='small' />
								</IconButton>
							</Link>
							<Link href='https://api.whatsapp.com/send/?phone=5577991776299&text=Ol%C3%A1%2C+tudo+bem%3F&app_absent=0' target='_blank' rel="noreferrer">
								<IconButton>
									<WhatsApp sx={{ color: '#f5f5f5' }} fontSize='small' />
								</IconButton>
							</Link>
						</Box>
					</Box>
				</LoginContainer>
			</Box >
			<Footer>
				<FooterLogin />
			</Footer>
		</Box >
	);
};
