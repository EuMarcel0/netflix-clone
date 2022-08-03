import { useEffect, useState } from 'react';

import { Box, } from '@mui/material';

import { IMoviesProps, MoviesService } from '../../shared/services/MoviesService/MoviesService';
import { NavbarHome } from './components/NavbarHome';
import { MovieRow } from './components/MovieRow';
import { ListMovieContainer } from './Styles';


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
		const reqAllMovies = async () => {
			const result = await MoviesService.getMovies();
			if (result) {
				setMovie(result);
			}
		};
		reqAllMovies();
	}, []);

	return (
		<>
			<Box
				width='100%'
				height='100%'
			>
				<NavbarHome bgOption={scrollY} />
			</Box>
			<ListMovieContainer>
				<Box>
					{movie.map((item, index) => (
						<MovieRow
							key={index}
							description={item.description}
							title={item.title}
							movies={item.movies}
						/>
					))}
				</Box>
			</ListMovieContainer>
		</>
	);
};
