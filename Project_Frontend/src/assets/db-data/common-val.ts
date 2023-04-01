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
	reference: {
		title: 'References',
		list: [
			{
				head: 'Music Theory',
				link: 'https://www.musictheory.net/lessons',
			},
			{ head: 'Github dcoumentation', link: 'https://docs.github.com/en' },
			{
				head: 'abc notation baiscs',
				link: 'https://abcnotation.com/',
			},
			{
				head: 'abc.js documentation',
				link: 'https://www.abcjs.net/#which',
			},
			{
				head: 'Angular documentation',
				link: 'https://angular.io/docs',
			},
			{
				head: 'Angular Material documentation',
				link: 'https://material.angular.io/',
			},
			{
				head: 'RxJS documentation',
				link: 'https://rxjs.dev/api',
			},
			{
				head: 'OpenAI documentation',
				link: 'https://platform.openai.com/docs/api-reference/',
			},
			{
				head: 'Tone.js documentation',
				link: 'https://tonejs.github.io/',
			},
			{
				head: 'Flat.io API documentation',
				link: 'https://flat.io/developers/api/reference/',
			},
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
