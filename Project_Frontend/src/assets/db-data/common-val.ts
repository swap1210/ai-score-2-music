import { CommDataModel } from '../../app/model/comm.data.model';

export const COMM_DATA: CommDataModel = {
	header: {
		appName: 'Taalmaster',
		appDesc: 'Tool to generate music powered by chatGPT',
		appIconLink: './assets/logo-ico.png',
	},
	home: {
		title: 'How to create API Key:',
		instruction: [
			'Visit OpenAI’s official site via your preferred browser',
			'Tap on “Log-In” and add your email',
			'Click on the “View API Keys” icon in the top-right area of your screen',
			'Select the “Create an API Key” icon to set your API Key',
			'After this, your API Key will be generated. To use your Key you can simply copy the code and paste it on the spot that says enter API Key on OpenAI API.',
		],
	},
	footer: {
		section1: '',
		section2: '© Taalmaster 2023. All rights reserved.',
		section3: 'Developed by Bhavitha, Nidhi, Teja & Swapnil',
	},
};
