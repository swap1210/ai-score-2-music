export interface CommDataModel {
	header: Header;
	footer: Footer;
	home: Home;
	apiKeyDialog: DialogText;
}

export interface Header {
	appIconLink: string;
	appDesc: string;
	appName: string;
}

export interface Footer {
	section1: string;
	section2: string;
	section3: string;
}

export interface Home {
	title: string;
	instruction: string[];
}

export interface DialogText {
	key: string;
	title: string;
	content: string;
}
