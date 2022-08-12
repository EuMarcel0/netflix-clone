import { useCallback, useState } from 'react';

import { Box, Button, Icon, IconButton, Modal, useMediaQuery, useTheme } from '@mui/material';
import { ModalMovieInfoImageArea } from './components/ModalMovieInfoImageArea';
import { ModalMovieInfoData } from './components/ModalMovieInfoData';

const buttonStyle = {
	borderRadius: '5px',
	height: '60px',
	fontWeight: 'bold',
	textTransform: 'capitalize',
	paddingX: '10px',
};
const modalAreaStyles = {
	backgroundColor: '#000',
	height: 'auto',
	mx: 'auto',
	borderRadius: '7px',
	position: 'relative' as const,
};
const modalButtonCloseStyles = {
	backgroundColor: '#252525',
	height: '30px',
	width: '30px',
	position: 'absolute',
	right: '20px',
	top: '20px',
	zIndex: '99',
};

export const ModalMovieInfo = () => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint = useMediaQuery(theme.breakpoints.down(400));

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);

	return (
		<>
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
				sx={{
					marginX: 'auto',
					overflowY: 'scroll',
					paddingY: '3rem',
					paddingX: '1rem',
					position: 'fixed' as const,
					zIndex: '99',
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
					<ModalMovieInfoImageArea />
					<ModalMovieInfoData />
				</Box>
			</Modal>
		</>
	);
};
