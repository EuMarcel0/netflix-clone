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
	const [scrollY, setScrollY] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 150) {
			setScrollY(true);
		} else {
			setScrollY(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
			width='100%'
			height='100%'
			bgcolor='#141414'
		>
			<HeaderHome bgOption={scrollY} />
			<Box>
				{[...new Array(999)].map((item, index) =>
					`Cras mattis consectetur purus sit amet fermentum.
					Cras justo odio, dapibus ac facilisis in, egestas eget quam.
					Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
				)}
			</Box>
		</Box>
	);
};
