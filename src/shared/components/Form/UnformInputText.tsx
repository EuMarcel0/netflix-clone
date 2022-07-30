import { Box, TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';
import { useState, useEffect } from 'react';

type IUnformInputTextProps = TextFieldProps & {
	name: string;
	newValue?: string;
}

export const UnformInputText = ({ name, newValue, ...rest }: IUnformInputTextProps) => {
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
			marginBottom={2}
		>
			<TextField
				{...rest}

				sx={{ backgroundColor: focus ? '#484848' : '#333', borderRadius: '4px' }}
				InputProps={{ color: 'warning' }}
				value={value}
				error={!!error}
				helperText={error}
				focused={focus}
				variant='filled'
				color='warning'
				fullWidth
				defaultValue={newValue}
				onChange={event => { setValue(event.target.value); rest.onChange?.(event); }}
				onKeyDown={(e) => { error && clearError(); rest.onKeyDown?.(e); }}
				onBlur={() => setFocus(false)}
				onClick={() => setFocus(true)}
			/>
		</Box>
	);
};
