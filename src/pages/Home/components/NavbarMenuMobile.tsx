import * as React from 'react';

import { Box, Icon, IconButton, Link, Typography, useMediaQuery } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
		sx={{ paddingTop: '0' }}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		marginTop: theme.spacing(2),
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderTop: '3px solid #f5f5f5',
		borderRadius: '2px',
		minWidth: theme.breakpoints.down(330) ? 220 : 280,
		paddingLeft: '0px',

		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
				padding: '0px !important',
			},
		},
	},
}));

export const NavbarMenuMobile = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				ml: '25px',
				padding: '0px',
			}}
		>
			<IconButton
				onClick={handleClick}
			>
				<Typography sx={{ color: '#f5f5f5', fontSize: '12px' }}>
					Navegar
				</Typography>
				<Icon sx={{ color: '#f5f5f5' }}>
					arrow_drop_down_icon
				</Icon>
			</IconButton>
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<Box onClick={handleClose} >
					<Link
						href='#'
						sx={{
							display: 'block',
							width: '100%',
							color: '#f5f5f5',
							py: '15px',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: 'rgba(65, 65, 65, 0.069)',
							}
						}}
					>
						<Typography
							align='center'
							sx={{
								fontWeight: 'normal',
								transition: 'all 0.3s ease',
								'&:hover': { fontWeight: 'bold', }
							}}
						>
							Início
						</Typography>
					</Link>
				</Box>
				<Box onClick={handleClose} >
					<Link
						href='#'
						sx={{
							display: 'block',
							width: '100%',
							color: '#f5f5f5',
							py: '15px',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: 'rgba(65, 65, 65, 0.069)',
							}
						}}
					>
						<Typography
							align='center'
							sx={{
								fontWeight: 'normal',
								transition: 'all 0.3s ease',
								'&:hover': { fontWeight: 'bold', }
							}}
						>
							Séries
						</Typography>
					</Link>
				</Box>
				<Box onClick={handleClose} >
					<Link
						href='#'
						sx={{
							display: 'block',
							width: '100%',
							color: '#f5f5f5',
							py: '15px',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: 'rgba(65, 65, 65, 0.069)',
							}
						}}
					>
						<Typography
							align='center'
							sx={{
								fontWeight: 'normal',
								transition: 'all 0.3s ease',
								'&:hover': { fontWeight: 'bold', }
							}}
						>
							Filmes
						</Typography>
					</Link>
				</Box>
				<Box onClick={handleClose} >
					<Link
						href='#'
						sx={{
							display: 'block',
							width: '100%',
							color: '#f5f5f5',
							py: '15px',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: 'rgba(65, 65, 65, 0.069)',
							}
						}}
					>
						<Typography
							align='center'
							sx={{
								fontWeight: 'normal',
								transition: 'all 0.3s ease',
								'&:hover': { fontWeight: 'bold', }
							}}
						>
							Bombando
						</Typography>
					</Link>
				</Box>
				<Box onClick={handleClose} >
					<Link
						href='#'
						sx={{
							display: 'block',
							width: '100%',
							color: '#f5f5f5',
							py: '15px',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: 'rgba(65, 65, 65, 0.069)',
							}
						}}
					>
						<Typography
							align='center'
							sx={{
								fontWeight: 'normal',
								transition: 'all 0.3s ease',
								'&:hover': { fontWeight: 'bold', }
							}}
						>
							Minha lista
						</Typography>
					</Link>
				</Box>

			</StyledMenu>
		</Box>
	);
};
