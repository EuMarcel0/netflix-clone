import { Box, Link, Typography, useTheme } from '@mui/material';

export const FooterLogin = () => {
	const theme = useTheme();
	return (
		<Box
			display='flex'
			flexDirection='column'
			maxWidth='1024px'
			marginX='auto'
			paddingY={theme.spacing(5)}
			paddingX={theme.spacing(1)}
		>
			<Box marginBottom='10px'>
				<Typography variant='caption' sx={{ color: '#737373', fontSize: '16px' }}>Perguntas? Ligue 7777 777 7777</Typography>
			</Box>
			<Box
				display='flex'
			>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Perguntas frequentes</Link>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Preferências de cookies</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Centro de ajuda</Link>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Informação corporativa</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Termos de uso</Link>
				</Box>
				<Box
					flex='1'
					display='flex'
					flexDirection='column'
				>
					<Link href='#' sx={{ color: '#737373', fontSize: '13px', marginTop: '15px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacidade</Link>
				</Box>

			</Box>
		</Box>
	);
};
