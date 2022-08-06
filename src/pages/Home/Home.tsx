import { useEffect, useState } from 'react';

import { Box, } from '@mui/material';

import { MoviesService } from '../../shared/services/MoviesService/MoviesService';
import { IMoviesProps } from '../../shared/services/MoviesService/Types';
import { NavbarHome } from './components/NavbarHome';
import { MovieRow } from './components/MovieRow';


export const Home = () => {
	const [movie, setMovie] = useState<IMoviesProps[]>([]);
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
	}, [scrollY]);

	useEffect(() => {
		MoviesService.getAllPopularMovies()
			.then((response) => {
				if (response instanceof Error) {
					alert(response.message);
					return;
				}
				setMovie(response);
				console.log(response);
			}).catch((error) => {
				return error;
			});
	}, []);

	return (
		<Box>
			<Box
				width='100%'
				height='100%'
			>
				<NavbarHome bgOption={scrollY} />
			</Box>

			<Box
				width='100%'
				bgcolor='#141414'
			>
				{movie.map((item, index) => (
					<Box key={index}>
						<MovieRow
							movies={item.items.results}
							original_title={item.original_title}
							title={item.title}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};
