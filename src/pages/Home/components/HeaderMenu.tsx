import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, CardMedia, Divider, Icon, IconButton, Link, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';


import Profile2 from '../../../assets/images/profile2.jpg';
import Profile3 from '../../../assets/images/profile3.png';
import Profile4 from '../../../assets/images/profile4.png';



const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right'
		}}
		{...props}
		sx={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderRadius: '2px',
		minWidth: '180px',
	}
}));

interface IItemsMenuProps {
	description: string;
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
			<IconButton onClick={onClick} disableRipple>
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

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div>
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
				<Divider color='#f5f5f5' />
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
				<Divider color='#f5f5f5' />
				<ItemsMenu
					img={<IconButton><Icon sx={{ color: '#f5f5f5' }} >logout</Icon></IconButton>}
					description='Sair da Netflix'
					onClick={handleClose}
				/>
			</StyledMenu>
		</div>
	);
};
