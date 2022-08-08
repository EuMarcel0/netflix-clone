import { useEffect, useState } from 'react';

import { Box, useTheme, useMediaQuery, Typography, Button, Icon } from '@mui/material';

import { INetflixOriginals } from '../../../shared/services/MoviesService/Types';
import { MoviesService } from '../../../shared/services/MoviesService/MoviesService';


export const MovieBanner = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [movie, setMovie] = useState<INetflixOriginals>();

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
							} else {
								setMovie(response);
							}
						});
				}
			});
	}, []);

	const URL_BASE_IMAGE_BANNER = 'https://image.tmdb.org/t/p/original';

	return (
		<Box position='relative'>
			<Box
				width='100%'
				height={smDown ? '600px' : mdDown ? '800px' : '120vh'}
				sx={{ zIndex: -3 }}
			>
				<img
					src={`${URL_BASE_IMAGE_BANNER}${movie?.poster_path}` || `${URL_BASE_IMAGE_BANNER}${movie?.backdrop_path}`}
					width='100%'
					height='100%'
					style={{ objectFit: 'cover', position: 'relative' }}
				/>
				<Box
					width='100%'
					height='100%'
					position='absolute'
					bottom='0'
					left='0'
					sx={{
						background: 'linear-gradient(1deg, rgb(20, 20, 20,1) 10%, transparent)',
					}}
				></Box>
			</Box>
			<Box
				width='100%'
				height='77%'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				paddingLeft={mdDown ? '10px' : '60px'}
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>
				<Typography
					className='movieTitle'
					variant={mdDown ? 'h2' : 'h1'}
					fontWeight='bold'
					marginBottom={mdDown ? '10px' : '20px'}
					sx={{
						color: '#f5f5f5',
					}}
				>
					{movie?.original_name}
				</Typography>
				<Typography
					className='movieDescription'
					width={mdDown ? '100%' : '30%'}
					sx={{
						color: '#f5f5f5',
						fontSize: '1.2rem',
						textShadow: '1px 1px 1px #00000068',
					}}
				>
					{movie?.overview}
				</Typography>
				<Box marginTop='20px'>
					<Button
						variant='contained'
						startIcon={<Icon fontSize='large' sx={{ color: '#333' }}>play_arrow</Icon>}
						sx={{
							borderRadius: '5px',
							width: smDown ? '40%' : '240px',
							height: '65px',
							backgroundColor: '#f5f5f5',
							'&:hover': {
								backgroundColor: '#ccc',
							},
							color: '#333',
							fontSize: smDown ? '1rem' : '1.4rem',
							fontWeight: 'bold',
							textTransform: 'capitalize',
							marginRight: '10px',
						}}
					>
						Assistir
					</Button>
					<Button
						variant='contained'
						startIcon={<Icon fontSize='large' sx={{ color: '#f5f5f5', }}>info</Icon>}
						sx={{
							borderRadius: '5px',
							width: smDown ? '40%' : '240px',
							height: '65px',
							backgroundColor: 'rgba(109,109,110,0.7)',
							'&:hover': {
								backgroundColor: 'rgba(109,109,110,0.5)',
							},
							color: '#f5f5f5',
							fontSize: smDown ? '1rem' : '1.4rem',
							fontWeight: 'bold',
							textTransform: 'capitalize',
						}}
					>
						Mais informações
					</Button>
				</Box>
			</Box>
		</Box>

	);
};
