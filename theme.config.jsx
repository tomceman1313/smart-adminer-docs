export default {
	logo: <span>SmartAdminer Docs</span>,
	project: {
		link: "https://github.com/tomceman1313/smart-adminer",
	},
	i18n: [
		{ locale: "en", text: "English" },
		{ locale: "cs", text: "Čeština" },
	],
	useNextSeoProps() {
		return {
			titleTemplate: "%s – SmartAdminer",
		};
	},
};
