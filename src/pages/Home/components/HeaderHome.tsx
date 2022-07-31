

import LogoName from '../../../assets/images/logo.svg';
import { CardMedia, Link, Stack, useTheme } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { HeaderInputSearch } from './HeaderInputSearch';
import { HeaderMenu } from './HeaderMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import ImagemProfile from '../../../assets/images/profile.png';

interface IMenuItemProps {
	title: string;
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


export const HeaderHome = () => {
	const theme = useTheme();

	return (
		<Box
			width='100vw'
			display='flex'
			alignItems='center'
		>

			<AppBar sx={{
				px: '40px',
				py: '10px',
				backgroundColor: '#1414143b',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
			>
				<Box display='flex' justifyContent='center' alignItems='center' >
					<Toolbar >
						<Box component="div" width='92px' height='31px' >
							<CardMedia component='img' src={LogoName} width='100%' />
						</Box>
					</Toolbar>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						gap={3}
						marginLeft='20px'
					>
						<MenuItemLink title='Início' />
						<MenuItemLink title='Séries' />
						<MenuItemLink title='Filmes' />
						<MenuItemLink title='Bombando' />
						<MenuItemLink title='Minha lista' />
					</Box>
				</Box>
				<Box>
					<Box
						display='flex'
						justifyContent="center"
						alignItems="center"
					>
						<HeaderInputSearch />
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
								<HeaderMenu>
									<CardMedia
										src={ImagemProfile}
										component='img'
										sx={{
											width: '32px',
											height: '32px',
											borderRadius: '4px',
										}}
									/>
								</HeaderMenu>
							</Box>
						</Box>
					</Box>
				</Box>
			</AppBar>
			<Toolbar />
			<Box>
				<Box sx={{ my: 2, color: '#FFF' }}>

				</Box>
			</Box>
		</Box>
	);
};
