import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { IPopularMovies } from '../../../shared/services/MoviesService/Types';
import DefaultMovieImage from '../../../assets/images/image_default_movie.jpg';
import { useRef, useState } from 'react';

interface IMovieRowProps {
	title: string;
	original_title?: string;
	movies: IPopularMovies[];
}

const URL_BASE_IMAGE_MOVIE_ROW = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ title, movies }: IMovieRowProps) => {
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);

	const theme = useTheme();
	const ArrowsPersonalMediaQuery = useMediaQuery(theme.breakpoints.down(1120));

	const handleClick = (direction: string) => {
		setIsMoved(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<Box paddingLeft='60px' position='relative'>

			{/* Navbar */}
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
				width='100%'
				height='auto'
				display='inline-flex'
				marginBottom='40px'
				sx={{
					'&:hover': {
						'& .arrows': { opacity: '1', }
					},
					overflowX: 'hidden'
				}}
				ref={rowRef}

			>
				<NavigateBeforeIcon
					className='arrows'
					onClick={() => handleClick('left')}
					sx={{
						color: '#f5f5f5',
						position: 'absolute',
						top: '27%',
						left: '-1px',
						zIndex: '99',
						fontSize: '10px',
						fontWeight: 'bold',
						backgroundColor: 'transparent',
						'&:hover': { backgroundColor: '#141414a2' },
						transition: '0.2s linear',
						cursor: 'pointer',
						width: '80px',
						height: '144px',
						borderRadius: '4px',
						opacity: '0',
						display: isMoved ? 'block' : 'none',
					}}
				/>
				<Box
					display='flex'
					justifyContent='start'
				>
					{movies.map((item, index) => (
						<Box
							key={index}
							display='flex'
							justifyContent='start'
						>
							<img
								width='250px'
								src={item.backdrop_path ? `${URL_BASE_IMAGE_MOVIE_ROW}${item.backdrop_path}` : DefaultMovieImage}
								alt='filme_image'
								style={{ borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}
							/>
						</Box>
					))}
				</Box>
				<NavigateNextIcon
					className='arrows'
					onClick={() => handleClick('right')}
					sx={{
						color: '#f5f5f5',
						position: 'absolute',
						top: '27%',
						right: '0',
						zIndex: '99',
						fontSize: '10px',
						fontWeight: 'bold',
						backgroundColor: 'transparent',
						'&:hover': { backgroundColor: '#141414a2' },
						transition: '0.2s linear',
						cursor: 'pointer',
						width: '80px',
						height: '144px',
						borderRadius: '4px',
						opacity: '0'
					}}
				/>
			</Box>
		</Box >
	);
};
