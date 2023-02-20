interface OptionModel {
	label: string;
	value: string;
}

export interface FilterModel {
	label: string;
	controlName: string;
	option: OptionModel[];
}
