import { Box, Typography } from '@mui/material';
import { IMovieResults } from '../../../shared/services/MoviesService/MoviesService';

interface IMovieRowProps {
	title: string;
	description: string;
	movies: IMovieResults[];
}

export const MovieRow = ({ description, movies, title }: IMovieRowProps) => {
	return (
		<Box>
			<Typography>{description}</Typography>
		</Box>
	);
};
