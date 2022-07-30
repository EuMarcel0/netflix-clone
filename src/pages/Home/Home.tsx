import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAuthContext } from '../../shared/contexts';
import { MoviesService } from '../../shared/services/MoviesService/MoviesService';



export const Home = () => {
	const { logout } = useAuthContext();

	const handleLogout = () => {
		logout();
	};

	useEffect(() => {
		const reqAllMoveis = async () => {
			const result = await MoviesService.getMovies();
			console.log(result);
		};
		reqAllMoveis();
	}, []);


	return (
		<Box
			width='100vw'
			height='100vh'

			bgcolor='#DDD'
		>
			<Typography variant='h4'>Home</Typography>
			<Button onClick={handleLogout}>SAIR</Button>
		</Box>
	);
};
