import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export interface State extends SnackbarOrigin {
	open: boolean;
}

export const ToastAlert = () => {
	const [state, setState] = React.useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal, open } = state;

	const handleClick = (newState: SnackbarOrigin) => () => {
		setState({ open: true, ...newState });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	const buttons = (
		<React.Fragment>

			<Button
				variant='text'
				onClick={handleClick({
					vertical: 'top',
					horizontal: 'right',
				})}
				sx={{ textTransform: 'initial', color: '#b3b3b3' }}

			>
				Precisa de ajuda?
			</Button>
		</React.Fragment>
	);

	return (
		<Box>
			{buttons}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message={'This is a clone. For more information, visit the site: www.netflix.com'}
				key={vertical + horizontal}
			/>
		</Box>
	);
};
