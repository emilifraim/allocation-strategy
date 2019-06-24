import React from 'react';

const InputTextField = ({ type, name, placeholder, onChange, min, max, disabled, value, className, pattern }) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			disabled={disabled}
			value={value}
			min={min}
			max={max}
			className={className}
			pattern={pattern}
		/>
	);
};

export default InputTextField;
