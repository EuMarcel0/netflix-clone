import { Box, Typography } from '@mui/material';
import { IMovieResults } from '../../../shared/services/MoviesService/MoviesService';

interface IMovieRowProps {
	title: string;
	description: string;
	movies: any[];
}

const URL_BASE_IMAGE_MOVIE_ROW = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ description, movies, title }: IMovieRowProps) => {
	console.log('Teste movies', typeof movies);
	return (
		<Box>
			<Typography>{description}</Typography>
			<Box>

			</Box>
		</Box>
	);
};
