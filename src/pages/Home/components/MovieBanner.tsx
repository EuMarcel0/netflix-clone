import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { MoviesService } from '../../../shared/services/MoviesService/MoviesService';
import { IPopularMovies, TMoviesProps } from '../../../shared/services/MoviesService/Types';

interface IMovieBannerProps {
	movies: TMoviesProps[]
}

export const MovieBanner = ({ movies }: IMovieBannerProps) => {
	const [movie, setMovie] = useState<TMoviesProps[]>([]);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		MoviesService.getAllNetflixOriginals()
			.then((response) => {
				if (response instanceof Error) {
					alert(response.message);
					return;
				} else {
					const randomNumber = Math.floor(Math.random() * response.results.length - 1);
					const chosenMovie = response.results[randomNumber].id;

					MoviesService.getAllNetflixOriginalsDetails(chosenMovie)
						.then((response) => {
							if (response instanceof Error) {
								alert(response.message);
								return;
							}
							console.log(response);
						});
				}

			});
	}, []);



	return (
		<Box
			width='100%'
			height={smDown ? '400px' : mdDown ? '800px' : '100vh'}
			bgcolor='primary.main'
		>
			BANNER
		</Box>
	);
};
