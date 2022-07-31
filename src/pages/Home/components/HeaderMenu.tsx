import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Button, CardMedia, Divider, Icon, IconButton, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';


import Profile2 from '../../../assets/images/profile2.jpg';
import Profile3 from '../../../assets/images/profile3.png';
import Profile4 from '../../../assets/images/profile4.png';
import { useAuthContext } from '../../../shared/contexts';


const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={2}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right'
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderRadius: '2px',
		border: '1px solid #272727',
		minWidth: '180px',
		marginTop: theme.spacing(3),
		marginRight: '10px',
	}
}));

interface IItemsMenuProps {
	description: string | React.ReactNode;
	img: React.ReactNode;
	onClick: () => void;
}

const ItemsMenu = ({ description, img, onClick }: IItemsMenuProps) => {

	return (
		<Box
			display='flex'
			justifyContent='start'
			alignItems='center'
			width='100%'
			height='100%'
		>
			<IconButton onClick={onClick} sx={{ py: '5px' }} >
				<Box
					width='100%'
					maxWidth='32px'
					marginRight='.5rem'
					sx={{
						borderRadius: '4px'
					}}>
					{img}
				</Box>
				<Box>
					<Typography>
						<Link
							href='#'
							sx={{
								textDecoration: 'none',
								'&:hover': { textDecoration: 'underline' },
								color: '#f5f5f5',
								fontSize: '12px',
							}}
						>
							{description}
						</Link>
					</Typography>
				</Box>
			</IconButton >
		</Box >
	);
};

interface IHeaderMenuProps {
	children: React.ReactNode;
}

export const HeaderMenu = ({ children }: IHeaderMenuProps) => {

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const { logout } = useAuthContext();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<Box>
			<IconButton onClick={handleClick}>
				{children}
				<ArrowDropDownIcon sx={{ color: '#f5f5f5' }} />
			</IconButton>
			<StyledMenu

				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
			>
				<ItemsMenu
					img={<CardMedia component='img' src={Profile2} />}
					description='Kal L'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<CardMedia component='img' src={Profile3} />}
					description='Bruce Wayne'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<CardMedia component='img' src={Profile4} />}
					description='Black Adam'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<IconButton><Icon sx={{ color: '#f5f5f5' }} >edit</Icon></IconButton>}
					description='Gerenciar perfis'
					onClick={handleClose}
				/>
				<Divider color='#272727' />
				<ItemsMenu
					img={<IconButton><Icon sx={{ color: '#f5f5f5' }} >person_outline</Icon></IconButton>}
					description='Conta'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<IconButton><Icon sx={{ color: '#f5f5f5' }} >help_outline</Icon></IconButton>}
					description='Central de ajuda'
					onClick={handleClose}
				/>
				<Divider color='#272727' />
				<ItemsMenu
					img={<IconButton><Icon sx={{ color: '#f5f5f5' }} >logout</Icon></IconButton>}
					description='Sair da Netflix'
					onClick={logout}
				/>
			</StyledMenu>
		</Box>
	);
};
