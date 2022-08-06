import React, { useCallback, useMemo, useState } from 'react';

import { ariaHidden, Box, Divider, Icon, IconButton, Link, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu, { MenuProps } from '@mui/material/Menu';
import { styled } from '@mui/material/styles';


import Profile2 from '../../../assets/images/profile2.jpg';
import Profile3 from '../../../assets/images/profile3.png';
import Profile4 from '../../../assets/images/profile4.png';
import { useAuthContext } from '../../../shared/contexts';


const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={2}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right'
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		borderRadius: '2px',
		border: '1px solid #272727',
		minWidth: '180px',
		marginTop: theme.spacing(2),
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
					display='flex'
					justifyContent='center'
					alignItems='center'
					width='32px'
					height='32px'
					marginRight='.5rem'
					sx={{
						borderRadius: '3px'
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

interface INavbarMenuProfilesProps {
	children: React.ReactNode;
}

export const NavbarMenuProfiles = ({ children }: INavbarMenuProfilesProps) => {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { logout } = useAuthContext();

	const handleClose = useMemo(() => {
		return () => setAnchorEl(null);
	}, [anchorEl, open]);

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
			>
				<ItemsMenu
					img={<img src={Profile2} style={{ width: '100%' }} />}
					description='Clark Kent'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<img src={Profile3} style={{ width: '100%' }} />}
					description='Bruce Wayne'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<img src={Profile4} style={{ width: '100%' }} />}
					description='Black Adam'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<Icon sx={{ color: '#f5f5f5', width: '100%' }} >edit</Icon>}
					description='Gerenciar perfis'
					onClick={handleClose}
				/>
				<Divider color='#272727' />
				<ItemsMenu
					img={<Icon sx={{ color: '#f5f5f5', width: '100%' }} >person_outline</Icon>}
					description='Conta'
					onClick={handleClose}
				/>
				<ItemsMenu
					img={<Icon sx={{ color: '#f5f5f5', width: '100%' }} >help_outline</Icon>}
					description='Central de ajuda'
					onClick={handleClose}
				/>
				<Divider color='#272727' />
				<ItemsMenu
					img={<Icon sx={{ color: '#f5f5f5', width: '100%' }} >logout</Icon>}
					description='Sair da Netflix'
					onClick={logout}
				/>
			</StyledMenu>
		</Box>
	);
};
