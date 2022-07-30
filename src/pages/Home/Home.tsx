import { useEffect, useState } from 'react';

import { Box, } from '@mui/material';

import { IGetAllMoviesAndSeriesProps, MoviesService } from '../../shared/services/MoviesService/MoviesService';
import { useAuthContext } from '../../shared/contexts';
import { HeaderHome } from './components/HeaderHome';

interface IHomeMoveis {
	title: string;
	description: string;
	movies: Error | IGetAllMoviesAndSeriesProps;
}

export const Home = () => {
	const { logout } = useAuthContext();
	const [movies, setMovies] = useState<IHomeMoveis[]>([]);

	const handleLogout = () => {
		logout();
	};

	useEffect(() => {
		const reqAllMoveis = async () => {
			const result = await MoviesService.getMovies();
			setMovies(result);
		};
		reqAllMoveis();
	}, []);

	return (
		<Box
			width='100vw'
			height='100vh'
			bgcolor='#141414'
		>
			<HeaderHome />
		</Box>
	);
};
