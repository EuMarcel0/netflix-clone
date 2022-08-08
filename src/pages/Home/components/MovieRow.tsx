import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import DefaultMovieImage from '../../../assets/images/image_default_movie.jpg';
import { IPopularMovies } from '../../../shared/services/MoviesService/Types';
import { useRef, useState } from 'react';

interface IMovieRowProps {
	title: string;
	original_title?: string;
	movies: IPopularMovies[];
}

const URL_BASE_IMAGE_THUMBNAIL = 'https://image.tmdb.org/t/p/w300';

export const MovieRow = ({ title, movies }: IMovieRowProps) => {
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));



	const handleClick = (direction: string) => {
		setIsMoved(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<Box position='relative' marginTop={mdDown ? '-170px' : '-300px'} marginBottom={mdDown ? '200px' : '300px'} height='100%'>
			<Box paddingY='10px' paddingLeft={mdDown ? '10px' : '60px'}>
				<Typography variant='h5' fontWeight={'bold'} color='#f5f5f5'>
					{title}
				</Typography>
			</Box>
			<Box
				className='groupHover'
				width='100%'
				height='auto'
				display='inline-flex'
				marginBottom='40px'
				paddingLeft={mdDown ? '10px' : '60px'}
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
						top: '21%',
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
				<Box display='flex' justifyContent='start' >
					{movies.map((item, index) => (
						<Box key={index} display='flex' justifyContent='start' >
							<img
								width='250px'
								src={item.backdrop_path ? `${URL_BASE_IMAGE_THUMBNAIL}${item.backdrop_path}` : DefaultMovieImage}
								alt='filme_image'
								style={{ borderRadius: '4px', marginRight: '8px', cursor: 'pointer' }}
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
						top: '21%',
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
