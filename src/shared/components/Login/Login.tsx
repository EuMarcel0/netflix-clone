import { Box, Button, Typography } from '@mui/material';
import { useAuthContext } from '../../contexts';

interface ILoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: ILoginProps) => {

	const { login, isAuthenticated } = useAuthContext();

	if (isAuthenticated) {
		return <>{children}</>;
	}
	return (
		<Box>
			<Typography variant="h4">Tela de Login</Typography>
			<Button variant='contained' onClick={() => login('eve.holt@reqres.in', 'cityslicka')}>LOGAR</Button>
		</Box>
	);
};
