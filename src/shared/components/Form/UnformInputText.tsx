import { Box, TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';
import { useState, useEffect } from 'react';

type IUnformInputTextProps = TextFieldProps & {
	name: string;
}

export const UnformInputText = ({ name, ...rest }: IUnformInputTextProps) => {
	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);

	const [value, setValue] = useState(defaultValue || '');
	const [focus, setFocus] = useState(false);


	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			clearValue: () => setValue(''),
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [value, registerField, fieldName]);


	return (
		<Box
			marginY={4}
		>
			<TextField
				{...rest}

				value={value}
				onChange={event => setValue(event.target.value)}
				error={!!error}
				helperText={error}
				onKeyDown={() => clearError()}
				focused={focus}
				variant='filled'
				color='warning'
				fullWidth
				onBlur={() => setFocus(false)}
				onClick={() => setFocus(true)}
				InputLabelProps={{ color: 'warning', shrink: true }}
				InputProps={{ color: 'warning' }}
				sx={{ backgroundColor: focus ? '#484848' : '#333', borderRadius: '4px', fontSize: '16px' }}
			/>
		</Box>
	);
};
