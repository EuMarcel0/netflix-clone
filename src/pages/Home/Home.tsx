import { useEffect, useState } from 'react';

import { Box, CircularProgress } from '@mui/material';

import { MoviesService } from '../../shared/services/MoviesService/MoviesService';
import { TMoviesProps } from '../../shared/services/MoviesService/Types';
import { MovieBanner } from './components/MovieBanner';
import { NavbarHome } from './components/NavbarHome';
import { MovieRow } from './components/MovieRow';
import { Footer } from '../../shared/components';

export const Home = () => {
	const [movie, setMovie] = useState<TMoviesProps[]>([]);
	const [scrollY, setScrollY] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 180) {
			setScrollY(true);
		} else {
			setScrollY(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollY]);

	useEffect(() => {
		setIsLoading(true);
		MoviesService.getAllPopularMovies()
			.then((response) => {
				setIsLoading(false);
				if (response instanceof Error) {
					alert(response.message);
					return;
				}
				setMovie(response);
			}).catch((error) => {
				alert(error.message);
			});
	}, []);

	return (
		<Box>
			{(!isLoading &&
				<Box width='100%' height='100%' >
					<NavbarHome bgOption={scrollY} />
				</Box>
			)}
			{(!isLoading &&
				<Box>
					<MovieBanner />
				</Box>
			)}
			{(isLoading &&
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					width='100vw'
					height='100vh'
					sx={{
						position: 'absolute',
					}}
				>
					<CircularProgress
						sx={{ color: '#e50914' }}
					/>
				</Box>
			)}
			{(!isLoading &&
				<Box>
					{movie.map((item, index) => (
						<MovieRow
							key={index}
							movies={item.items.results}
							original_title={item.original_title}
							title={item.title}
						/>
					))}
				</Box>
			)}
			{(!isLoading && <Footer />)}
		</Box>
	);
};
