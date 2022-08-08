
import { CardMedia, Icon, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';

import ImageProfile from '../../../assets/images/profile.png';
import { NavbarMenuProfiles } from './NavbarMenuProfiles';
import { NavbarInputSearch } from './NavbarInputSearch';
import LogoName from '../../../assets/images/logo.svg';
import { NavbarMenuMobile } from './NavbarMenuMobile';

interface IMenuItemProps {
	title: string;

}
interface INavbarHomeProps {
	bgOption: boolean;
}

const MenuItemLink = ({ title }: IMenuItemProps) => {
	return (
		<Link href='#' sx={{
			textDecoration: 'none',
			color: '#f5f5f5',
			'&:hover': {
				color: '#c0c0c0'
			}
		}}
		>
			{title}
		</Link>
	);
};

export const NavbarHome = ({ bgOption }: INavbarHomeProps) => {
	const theme = useTheme();
	const personalBreakpoint = useMediaQuery(theme.breakpoints.down(990));
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			width='100vw'
			display='flex'
			alignItems='center'
		>

			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					zIndex: '1',
					background: bgOption ? '#141414' : 'linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent)',
					transition: '0.3s linear',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					py: '10px',
					px: smDown ? '10px' : '57px',
				}}
			>
				<Box display='flex' justifyContent='center' alignItems='center' >

					<Box
						width='92px'
						height='31px'
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<CardMedia component='img' src={LogoName} width='100%' />
					</Box>
					{(personalBreakpoint &&
						<NavbarMenuMobile />
					)}
					{(!personalBreakpoint &&
						<Box
							display='flex'
							justifyContent='center'
							alignItems='center'
							gap={3}
							marginLeft='40px'
						>
							<MenuItemLink title='Início' />
							<MenuItemLink title='Séries' />
							<MenuItemLink title='Filmes' />
							<MenuItemLink title='Bombando' />
							<MenuItemLink title='Minha lista' />
						</Box>
					)}
				</Box>
				<Box>
					<Box
						display='flex'
						justifyContent="center"
						alignItems="center"
					>
						{(!smDown &&
							<NavbarInputSearch />
						)}

						{(!smDown &&
							<Box>
								<IconButton><Icon sx={{ color: '#f5f5f5', fontSize: '30px' }}>notifications</Icon></IconButton>
							</Box>
						)}
						<Box
							display='flex'
							justifyContent='start'
							alignItems='center'
							width='60px'
						>
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'
							>
								<NavbarMenuProfiles>
									<CardMedia
										src={ImageProfile}
										component='img'
										sx={{
											width: '32px',
											height: '32px',
											borderRadius: '4px',
										}}
									/>
								</NavbarMenuProfiles>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box>

			</Box>
		</Box>
	);
};
