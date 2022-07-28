import { Box, Button } from '@mui/material';
import { useAuthContext } from '../../contexts';

export const Login = () => {

	const { login } = useAuthContext();


	return (
		<Box>
			<Button variant='contained' onClick={() => login('eve.holt@reqres.in', 'cityslicka')}>LOGAR</Button>
		</Box>
	);
};
