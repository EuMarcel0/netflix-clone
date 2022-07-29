import { Box, Button } from '@mui/material';
import { useAuthContext } from '../../shared/contexts';

export const Home = () => {
	const { logout } = useAuthContext();

	const handleLogout = () => {
		logout();
		console.log('logout');
	};

	return (
		<Box>
			Home page
			<Button onClick={handleLogout}>Sair</Button>
		</Box>
	);
};
