import { Box, Button, CardMedia, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useModalMovieInfoContext } from '../../../contexts';

const URL_BASE_IMAGE_BANNER = 'https://image.tmdb.org/t/p/original';

export const ModalMovieInfoImageArea = () => {
	const { movie } = useModalMovieInfoContext();
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint500px = useMediaQuery(theme.breakpoints.down(500));

	const containerModal = {
		px: '60px',
	};
	const buttonPlayStyle = {
		borderRadius: '5px',
		height: '30%',
		fontWeight: 'bold',
		textTransform: 'capitalize',
		paddingX: '10px',
	};

	return (
		<Box className='modalMovieBannerTrailer' sx={{ position: 'relative' }}>
			<CardMedia
				sx={{
					width: '100%',
					height: 'auto',
					borderTopLeftRadius: '7px',
					borderTopRightRadius: '7px',
					zIndex: '-99',
				}}
				component='img'
				src={movie?.backdrop_path ? `${URL_BASE_IMAGE_BANNER}${movie?.backdrop_path}` : `${URL_BASE_IMAGE_BANNER}${movie?.poster_path}`}
			/>
			<Box sx={{
				height: '50%',
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				borderTopLeftRadius: '7px',
				borderTopRightRadius: '7px',
				background: mdDown ? 'linear-gradient(180deg, rgb(20, 20, 20,1) 1%, transparent)' : 'linear-gradient(180deg, rgb(20, 20, 20,1) 10%, transparent)'
			}}
			></Box>
			<Box sx={{
				height: '50%',
				position: 'absolute',
				bottom: '0',
				left: '0',
				width: '100%',
				borderTopLeftRadius: '7px',
				borderTopRightRadius: '7px',
				background: mdDown ? 'linear-gradient(1deg, rgb(20, 20, 20,1) 1%, transparent)' : 'linear-gradient(1deg, rgb(20, 20, 20,1) 10%, transparent)'
			}}
			></Box>
			<Box
				className='modalMovieDetailsBannerTrailer'
				sx={{
					...containerModal,
					zIndex: 999,
					position: 'absolute',
					top: '50%',
					left: '0',
					height: '50%',
					width: '100%',
				}}
			>
				<Typography variant={personalBreakpoint500px ? 'h4' : 'h2'} component='h2' sx={{ color: '#f5f5f5', fontWeight: 'bold' }}>
					{movie?.original_name ? movie?.original_name : movie?.original_title}
				</Typography>
				<Box
					display='flex'
					alignItems='center'
					gap={2}
					marginY={2}
				>
					<Button
						variant='contained'
						startIcon={<Icon fontSize='large' sx={{ color: '#333' }}>play_arrow</Icon>}
						sx={{
							...buttonPlayStyle,
							width: mdDown ? '30%' : '20%',
							backgroundColor: '#f5f5f5',
							'&:hover': {
								backgroundColor: '#ccc',
							},
							fontSize: smDown ? '.8rem' : '1.4rem',
							color: '#333',
						}}
					>
						Assistir
					</Button>
					<IconButton
						sx={{
							backgroundColor: 'rgba(20, 20, 20,.7)',
							border: '1px solid #ddd'
						}}
					>
						<Icon fontSize='small' sx={{ color: '#f5f5f5' }}>add</Icon>
					</IconButton>
					<IconButton
						sx={{
							backgroundColor: 'rgba(20, 20, 20,.7)',
							border: '1px solid #ddd'
						}}
					>
						<Icon fontSize='small' sx={{ color: '#f5f5f5' }}>thumb_up_off_alt_icon</Icon>
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};



