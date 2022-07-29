import { Box, TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';
import { useState, useEffect } from 'react';

type IUnformInputTextProps = TextFieldProps & {
	name: string;
}

export const UnformInputText = ({ name, ...rest }: IUnformInputTextProps) => {
	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			clearValue: () => setValue(''),
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [value, registerField, fieldName]);


	return (
		<Box>
			<TextField
				{...rest}
				value={value}
				onChange={event => setValue(event.target.value)}
				error={!!error}
				helperText={error}
				onKeyDown={() => clearError()}
			/>
		</Box>
	);
};
