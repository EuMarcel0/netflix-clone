import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { IPopularMovies } from '../../../shared/services/MoviesService/Types';
import DefaultMovieImage from '../../../assets/images/image_default_movie.jpg';

interface IMovieRowProps {
	title: string;
	original_title?: string;
	movies: IPopularMovies[];
}

const URL_BASE_IMAGE_MOVIE_ROW = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ title, movies }: IMovieRowProps) => {

	const theme = useTheme();
	const ArrowsPersonalMediaQuery = useMediaQuery(theme.breakpoints.down(1120));

	return (
		<Box paddingLeft='60px' width='100%' height='auto' sx={{ overflowX: 'hidden' }} >
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
				className='groupHover'
				display='flex'
				width='100vw'
				marginBottom='40px'
				position='relative'
				sx={{
					'&:hover': {
						'& .arrows': { opacity: '1', }
					}
				}}
			>
				<Box>
					<NavigateBeforeIcon
						className='arrows'
						sx={{
							color: '#f5f5f5',
							position: 'absolute',
							top: '0',
							left: ArrowsPersonalMediaQuery ? '-5%' : '-3%',
							zIndex: '99',
							fontSize: '10px',
							fontWeight: 'bold',
							backgroundColor: 'transparent',
							'&:hover': { backgroundColor: '#141414a2' },
							transition: '0.2s linear',
							cursor: 'pointer',
							width: '80px',
							height: '140px',
							borderRadius: '4px',
							opacity: '0'

						}}
					/>
					<NavigateNextIcon
						className='arrows'
						sx={{
							color: '#f5f5f5',
							position: 'absolute',
							top: '0',
							right: ArrowsPersonalMediaQuery ? '5%' : '4%',
							zIndex: '99',
							fontSize: '10px',
							fontWeight: 'bold',
							backgroundColor: 'transparent',
							'&:hover': { backgroundColor: '#141414a2' },
							transition: '0.2s linear',
							cursor: 'pointer',
							width: '80px',
							height: '141px',
							borderRadius: '4px',
							opacity: '0'
						}}
					/>
				</Box>
				{movies.map((item, index) => (
					<Box
						position='relative'
						key={index}
					>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='start'
						>
							<img
								width='250px'
								src={item.backdrop_path ? `${URL_BASE_IMAGE_MOVIE_ROW}${item.backdrop_path}` : DefaultMovieImage}
								alt='filme_image'
								style={{ borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}
							/>
						</Box>
					</Box>
				))}
			</Box>
		</Box >
	);
};
