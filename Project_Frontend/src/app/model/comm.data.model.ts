export interface CommDataModel {
	header: Header;
	footer: Footer;
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
