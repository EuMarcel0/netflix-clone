import { Box, useTheme, useMediaQuery, Typography, Button, Icon } from '@mui/material';
import { useModalMovieInfoContext } from '../../../shared/contexts';
import { ModalMovieInfo } from '../../../shared/components';

const URL_BASE_IMAGE_BANNER = 'https://image.tmdb.org/t/p/original';

const buttonStyle = {
	borderRadius: '5px',
	height: '60px',
	fontWeight: 'bold',
	textTransform: 'capitalize',
	paddingX: '10px',
};

export const MovieBanner = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint = useMediaQuery(theme.breakpoints.down(400));
	const { movie, isOpenedMovieInfo, toggleMovieInfo } = useModalMovieInfoContext();

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
				<Box marginTop='20px' gap='10px' paddingRight={2} sx={{ display: 'flex', flexDirection: personalBreakpoint ? 'column' : 'row' }}>
					<Button
						variant='contained'
						startIcon={<Icon fontSize='large' sx={{ color: '#333' }}>play_arrow</Icon>}
						sx={{
							...buttonStyle,
							width: personalBreakpoint ? '170px' : '190px',
							backgroundColor: '#f5f5f5',
							'&:hover': {
								backgroundColor: '#ccc',
							},
							fontSize: smDown ? '1rem' : '1.4rem',
							color: '#333',
						}}
					>
						Assistir
					</Button>
					<Button
						onClick={toggleMovieInfo}
						variant='contained'
						startIcon={<Icon fontSize='large' sx={{ color: '#f5f5f5' }}>info</Icon>}
						sx={{
							...buttonStyle,
							width: personalBreakpoint ? '170px' : '260px',
							backgroundColor: 'rgba(109,109,110,0.7)',
							'&:hover': {
								backgroundColor: 'rgba(109,109,110,0.5)',
							},
							fontSize: smDown ? '1rem' : '1.4rem',
							color: '#f5f5f5',
						}}
					>
						Mais informações
					</Button>
					{(isOpenedMovieInfo && <ModalMovieInfo />)}
				</Box>
			</Box>

		</Box>

	);
};
