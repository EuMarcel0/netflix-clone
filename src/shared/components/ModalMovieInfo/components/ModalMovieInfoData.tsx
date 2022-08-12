import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useModalMovieInfoContext } from '../../../contexts';

export const ModalMovieInfoData = () => {
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint500px = useMediaQuery(theme.breakpoints.down(500));
	const { movie } = useModalMovieInfoContext();

	const containerModal = {
		px: '60px',
	};

	const yearMovieDate = new Date(movie?.first_air_date ? movie?.first_air_date : '').getFullYear().toString();

	return (
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
				<Typography sx={{ color: '#f5f5f5', fontWeight: 'bold' }}>{yearMovieDate}</Typography>
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
	);
};
