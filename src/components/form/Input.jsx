const Input = ({
	type,
	name = "",
	changeHandler = undefined,
	required = true,
	classes = "",
	placeholder,
}) => {
	return (
		<input
			type={type}
			required={required}
			name={name}
			onChange={(e) => changeHandler(e.target.value)}
			className={`rounded outline-none focus:border-cyan-400 focus:ring-cyan-400 placeholder:text-slate-400 ${classes}`}
			placeholder={placeholder}
		/>
	);
};

export default Input;
