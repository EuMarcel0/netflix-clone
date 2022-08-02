import * as React from 'react';

import { Icon, IconButton, TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const NavbarInputSearch = () => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<IconButton onClick={handleChange} ><Icon sx={{ color: '#f5f5f5', fontSize: '30px' }}>search</Icon></IconButton>
			<Box
				sx={{
					'& > :not(style)': {
						display: 'flex',
						width: checked ? 215 : 15,
						transition: '0.1s linear',
					}
				}}
			>
				<Box sx={{ width: '100%' }} display="flex" alignItems="center">
					<Collapse orientation="horizontal" in={checked}>
						<Box display="flex" alignItems="center">
							{(checked &&
								<TextField
									size='small'
									sx={{
										borderColor: '#f5f5f5',
										border: '1px solid #f5f5f5',
										backgroundColor: '#000000a2'
									}}
									placeholder='Filmes, Séries, Gêneros'
								>
									<Box component="svg" sx={{ width: 100 }}>
										<Box
											sx={{
												fill: (theme: Theme) => theme.palette.common.white,
												stroke: (theme) => theme.palette.divider,
												strokeWidth: 1
											}}
										/>
									</Box>
								</TextField>
							)}
						</Box>
					</Collapse>
				</Box>
			</Box>
		</Box>
	);
};
