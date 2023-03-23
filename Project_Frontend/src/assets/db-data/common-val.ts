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
			"Visit OpenAI’s official site via your preferred browser. <a href='https://platform.openai.com/account/api-keys'  target='_blank'>https://platform.openai.com/account/api-keys</a>",
			"You'll will be asked to log in order to proceed",
			'Click on the API Keys” section in the left-panel area of the site',
			'Select the “Create an API Key” icon to set your API Key',
			'After this, your API Key will be generated.',
			'To use it just paste it in the dialog.',
		],
	},
	footer: {
		section1: '',
		section2: '© Taalmaster 2023. All rights reserved.',
		section3: 'Developed by Bhavitha, Nidhi, Teja & Swapnil',
	},
	apiKeyDialog: {
		key: '',
		title: 'Openai API key not found!',
		content:
			'Please enter your API key to continue.<br>Don\'t have a key generate one <a href="https://platform.openai.com/account/api-keys" target="_blank">here</a>',
	},
};
