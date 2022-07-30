import React, { useEffect, useState } from 'react';

import LogoName from '../../../assets/images/logo.svg';
import { CardMedia, Link, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


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
						<Link href='#' sx={{
							textDecoration: 'none',
							color: '#f5f5f5', '&:hover': { color: '#c0c0c0' }
						}}
						>
							Início
						</Link>
						<Link href='#' sx={{
							textDecoration: 'none',
							color: '#f5f5f5', '&:hover': { color: '#c0c0c0' }
						}}
						>
							Séries
						</Link>
						<Link href='#' sx={{
							textDecoration: 'none',
							color: '#f5f5f5', '&:hover': { color: '#c0c0c0' }
						}}
						>
							Filmes
						</Link>
						<Link href='#' sx={{
							textDecoration: 'none',
							color: '#f5f5f5', '&:hover': { color: '#c0c0c0' }
						}}
						>
							Bombando
						</Link>
						<Link href='#' sx={{
							textDecoration: 'none',
							color: '#f5f5f5', '&:hover': { color: '#c0c0c0' }
						}}
						>
							Minha lista
						</Link>
					</Box>
				</Box>
				<Box>
					<Box>Icons</Box>
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
