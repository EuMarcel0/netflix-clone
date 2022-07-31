import { useEffect, useState } from 'react';

import { CardMedia, Link, Stack, useTheme } from '@mui/material';
import { HeaderInputSearch } from './HeaderInputSearch';
import { HeaderMenu } from './HeaderMenu';
import Box from '@mui/material/Box';

import ImagemProfile from '../../../assets/images/profile.png';
import LogoName from '../../../assets/images/logo.svg';

interface IMenuItemProps {
	title: string;

}
interface IHeaderHomeProps {
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



export const HeaderHome = ({ bgOption }: IHeaderHomeProps) => {
	const theme = useTheme();

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
					zIndex: 999,
					backgroundColor: bgOption ? '#141414' : 'transparent',
					transition: '0.4s ease',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					py: '10px',
					px: '57px',
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
			</Box>
			<Box>

			</Box>
		</Box>
	);
};
