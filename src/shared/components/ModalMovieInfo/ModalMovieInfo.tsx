import { useState } from 'react';

import { Box, Button, CardMedia, Icon, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useModalMovieInfoContext } from '../../contexts';

const URL_BASE_IMAGE_BANNER = 'https://image.tmdb.org/t/p/original';

export const buttonStyle = {
	borderRadius: '5px',
	height: '60px',
	fontWeight: 'bold',
	textTransform: 'capitalize',
	paddingX: '10px',
};

export const modalAreaStyles = {
	backgroundColor: '#000',
	height: 'auto',
	mx: 'auto',
	borderRadius: '7px',
	position: 'relative',
};

export const modalButtonCloseStyles = {
	backgroundColor: '#252525',
	height: '30px',
	width: '30px',
	position: 'absolute',
	right: '20px',
	top: '20px',
	zIndex: '99',
};

export const containerModal = {
	px: '60px',
};
const buttonPlayStyle = {
	borderRadius: '5px',
	height: '30%',
	fontWeight: 'bold',
	textTransform: 'capitalize',
	paddingX: '10px',
};

export const ModalMovieInfo = () => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint = useMediaQuery(theme.breakpoints.down(400));
	const personalBreakpoint500px = useMediaQuery(theme.breakpoints.down(500));
	const { movie } = useModalMovieInfoContext();
	const [isLoading, setIsLoading] = useState(false);

	const dateMovie = movie?.first_air_date ? movie?.first_air_date : movie?.release_date;
	if (dateMovie === undefined) return;
	const dateYear = new Date(dateMovie).getFullYear();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box>
			<Button
				onClick={handleOpen}
				startIcon={<Icon fontSize='large' sx={{ color: '#acacac' }}>info</Icon>}
				sx={{
					...buttonStyle,
					width: personalBreakpoint ? '170px' : '260px',
					backgroundColor: 'rgba(109,109,110,0.7)',
					'&:hover': {
						backgroundColor: 'rgba(109,109,110,0.5)',
					},
					fontSize: smDown ? '.8rem' : '1.4rem',
					color: '#f5f5f5',
				}}
			>
				Mais informações
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					marginX: 'auto',
					overflowY: 'scroll',
					paddingY: '3rem',
					paddingX: '1rem',
				}}
			>
				<Box
					sx={{
						...modalAreaStyles,
						width: mdDown ? '100%' : '50%',
					}}
				>
					<IconButton
						onClick={handleClose}
						disableRipple
						sx={{
							...modalButtonCloseStyles,
						}}
					>
						<Icon fontSize='medium' sx={{ color: '#F5F5F5' }}>close</Icon>
					</IconButton>
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
					<Box
						display={'flex'}
						flexDirection={mdDown ? 'column' : 'column'}
						gap={1}
						bgcolor='#141414'
						height='auto'
						paddingY={4}
						sx={{
							...containerModal,
							borderBottomLeftRadius: '7px',
							borderBottomRightRadius: '7px',
						}}
					>

						<Box display='flex' alignItems='center' gap={2}>
							<Typography sx={{ color: '#46d639', fontWeight: 'bold' }}>{movie?.vote_average ? Math.floor(movie!.vote_average * 10) : '0'}% relevante</Typography>
							<Typography sx={{ color: '#f5f5f5', fontWeight: 'bold' }}>{dateYear}</Typography>
						</Box>
						<Box marginBottom={1}>
							<Typography sx={{ color: '#f5f5f5' }}>{movie?.overview ? movie?.overview : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'}</Typography>
						</Box>
						<Box display='flex' flexDirection={personalBreakpoint500px ? 'column' : 'row'} justifyContent={mdDown ? 'space-between' : 'start'} gap={mdDown ? 0 : 4}>
							<Box>
								<Box>
									<Typography sx={{ color: '#999' }}>
										Gêneros: <span style={{ color: '#f5f5f5' }}>{movie?.genres.map((genres) => genres.name).join(', ')}</span>
									</Typography>
								</Box>
								<Box>
									<Typography sx={{ color: '#999' }}>
										Elenco:
									</Typography>
								</Box>
								<Box>
									<Typography sx={{ color: '#999' }}>
										Total de votos: <span style={{ color: '#f5f5f5' }}>{movie?.vote_count ? movie?.vote_count : '0'}</span>
									</Typography>
								</Box>
							</Box>
							<Box>
								<Box>
									<Typography sx={{ color: '#999' }}>
										Temporadas: <span style={{ color: '#f5f5f5' }}>{movie?.number_of_seasons}</span>
									</Typography>
								</Box>
								<Box>
									<Typography sx={{ color: '#999' }}>
										Episodios: <span style={{ color: '#f5f5f5' }}>{movie?.number_of_episodes}</span>
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};
