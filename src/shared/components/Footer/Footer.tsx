import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';

export const Footer = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			display='flex'
			flexDirection='column'
			maxWidth='1024px'
			marginX='auto'
			paddingBottom={theme.spacing(5)}
			paddingTop={theme.spacing(2)}
			paddingX={theme.spacing(1)}
		>
			<Box marginBottom='10px' paddingX={theme.spacing(2)}>
				<Typography variant='caption' sx={{ color: '#737373', fontSize: smDown ? '13px' : '16px' }}>Perguntas? Ligue 7777 777 7777</Typography>
			</Box>
			<Box
				display='flex'
				flexDirection={smDown ? 'column' : 'row'}
			>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
					paddingX={theme.spacing(2)}
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Perguntas frequentes</Link>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Preferências de cookies</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
					paddingX={theme.spacing(2)}
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Centro de ajuda</Link>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Informação corporativa</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
					paddingX={theme.spacing(2)}
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Termos de uso</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
					paddingX={theme.spacing(2)}
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacidade</Link>
				</Box>

			</Box>
		</Box>
	);
};
