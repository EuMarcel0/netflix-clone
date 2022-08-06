import { Box, Typography } from '@mui/material';
import { IMoviesProps, IPopularMovies } from '../../../shared/services/MoviesService/Types';

interface IMovieRowProps {
	title: string;
	original_title: string;
	movies: IPopularMovies[];
}

const URL_BASE_IMAGE_MOVIE_ROW = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ title, original_title, movies }: IMovieRowProps) => {
	console.log('Teste movies', typeof movies);
	return (
		<Box>
			<Typography>{title}</Typography>
			<Box>

			</Box>
		</Box>
	);
};
