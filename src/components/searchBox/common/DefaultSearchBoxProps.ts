interface IDefaultSearchBoxProps {
	placeholder?: string;
	label?: string;
	value: string;
	onChange: (value: string) => void;
}

export type DefaultSearchBoxProps = IDefaultSearchBoxProps;
