import { Box, CardMedia, Typography } from '@mui/material';
import { IPopularMovies } from '../../../shared/services/MoviesService/Types';

interface IMovieRowProps {
	title: string;
	original_title?: string;
	movies: IPopularMovies[];
}

const URL_BASE_IMAGE_MOVIE_ROW = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ title, movies }: IMovieRowProps) => {
	return (
		<Box
			paddingLeft='60px'
		>
			<Box paddingY='20px'>
				<Typography
					variant='h5'
					fontWeight={'bold'}
					color='#f5f5f5'
				>
					{title}
				</Typography>
			</Box>
			<Box
				display='flex'
				width='100vw'
				marginBottom='40px'
			>
				{movies.map((item, index) => (
					<Box
						key={index}
					>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='start'
						>
							<img
								width='250px'
								src={`${URL_BASE_IMAGE_MOVIE_ROW}${item.backdrop_path}`}
								alt='filme_image'
								style={{ borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}
							/>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};
