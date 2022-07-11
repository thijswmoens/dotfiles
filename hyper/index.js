// Standard Colors
const red = '#FF3B30';
const green = '#4CD964';
const yellow = '#FFCC00';
const blue = '#0095FF';
const magenta = '#FF2D55';
const cyan = '#5AC8FA';

// Custom colors
const gold = '#a08f68';
const darkGold = '#73684b';
const darkestGold = '#675d43';
const black = '#2d2d2d';
const grey = '#3d3d3d';
const lightgrey = '#b1b1b1';
const lightestgrey = '#f1f1f1';
const white = '#ffffff';

// Variables
const foregroundColor = white;
const backgroundColor = grey;
const selectionColor = gold;
const cursorColor = gold;
const overlap = grey;

// Font
const font =
	'"JetBrains Mono","SF Mono", Monaco, Inconsolata, "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace';

// Config theme
const defaultConfig = {
	fontFamily: font,
	fontSize: 14,
	foregroundColor,
	backgroundColor,
	borderColor: overlap,
	selectionColor: selectionColor,
	cursorColor: cursorColor,
	minimal: false,
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	vibrancy: 'ultra-dark'
};

// Check if Drops of Gold configuration exists in ~/.hyper.js. If not, fall back to default configuration.
const checkConfig = (config, setting) =>
	config.hasOwnProperty('dropsOfGold') &&
	config.dropsOfGold[setting] !== undefined
		? config.dropsOfGold[setting]
		: defaultConfig[setting];

const checkConfigColor = (config, colorName) =>
	(config.hasOwnProperty('dropsOfGold') &&
		config.dropsOfGold.colors &&
		config.dropsOfGold.colors[colorName]) ||
	defaultConfig.colors[colorName];

// Setup configs
exports.decorateConfig = config => {
	// Setup vibrancy
	exports.onWindow = browserWindow =>
		browserWindow.setVibrancy(checkConfig(config, 'vibrancy'));

	return Object.assign({}, config, {
		fontFamily: checkConfig(config, 'fontFamily'),
		fontSize: checkConfig(config, 'fontSize'),
		fontWeight: checkConfig(config, 'fontWeight'),
		fontWeightBold: checkConfig(config, 'fontWeightBold'),
		backgroundColor: checkConfig(config, 'backgroundColor'),
		foregroundColor: checkConfig(config, 'foregroundColor'),
		borderColor: checkConfig(config, 'borderColor'),
		cursorColor: checkConfig(config, 'cursorColor'),
		minimal: checkConfig(config, 'minimal'),
		colors: {
			black: checkConfigColor(config, 'black'),
			red: checkConfigColor(config, 'red'),
			green: checkConfigColor(config, 'green'),
			yellow: checkConfigColor(config, 'yellow'),
			blue: checkConfigColor(config, 'blue'),
			magenta: checkConfigColor(config, 'magenta'),
			cyan: checkConfigColor(config, 'cyan'),
			white: checkConfigColor(config, 'white'),
			lightBlack: checkConfigColor(config, 'lightBlack'),
			lightRed: checkConfigColor(config, 'lightRed'),
			lightGreen: checkConfigColor(config, 'lightGreen'),
			lightYellow: checkConfigColor(config, 'lightYellow'),
			lightBlue: checkConfigColor(config, 'lightBlue'),
			lightMagenta: checkConfigColor(config, 'lightMagenta'),
			lightCyan: checkConfigColor(config, 'lightCyan'),
			lightWhite: checkConfigColor(config, 'lightWhite')
		},
		css: `
		.hyper_main {
		  border: none !important;
		}
		#hyper .header_header,
		.header_header {
		  background-color: ${backgroundColor} !important;
		}
		.header_header {
			background-color: ${
				config && config.dropsOfGold && config.dropsOfGold.minimal
					? 'transparent'
					: overlap
			} !important;
		  }
		  .terms_termGroupActive.jsx-3986690196 {
			background-color: ${backgroundColor} !important;
		  }
		.tabs_borderShim {
		  border-color: transparent !important;
		}
		.tab_tab {
		  border: 0;
		}
		.tab_textActive {
		  background: rgba(255, 255, 255, .05);
		}
		.jsx-1210228322 {
			background-color: #505050 !important;
			border-radius: 0 0 5px 5px;
			right: 0px;
		}
		.search-box.jsx-1210228322 {
			font-family: ${font};
			color: #fff;
			font-size: 15px;
		}
		.jsx-1210228322.search-button {
			fill: ${white} !important;
			color: ${white} !important;
		}
		.hyper-search-wrapper {
			border: 0 !important;
			padding: 0 !important;
			background-color: transparent !important;
			display: flex;
			opacity: 0.8 !important;
		  }
		.hyper-search-wrapper button {
		  top: 0 !important;
		  opacity: 0.8 !important;
		  padding: 0 6px;
		  cursor: pointer;
		}
		.hyper-search-wrapper button:hover {
		  opacity: 1.0 !important;
		}
		.hyper-search-wrapper button:nth-of-type(1) {
		  border-radius: 4px 0 0 4px !important;
		  border-right: 1px solid #ddd !important;
		}
		.hyper-search-wrapper button:nth-of-type(2) {
		  border-radius: 0 4px 4px 0 !important;
		}
		.hyper-search-wrapper:before {
		  width: 20px;
		  color: #fff;
		  position: absolute;
		  font-size: 10px;
		  margin: 7px;
		  z-index: 999;
		}
		#hyper-search-input {
		  background-color: #505050 !important;
		  border-radius: 5px;
		  box-shadow: 0;
		  padding: 3px 6px 3px 24px !important;
		  color: #fff !important;
		  opacity: 0.9 !important;
		  margin-right: 2px;
		}
		#hyper-search-input:focus {
		  opacity: 1.0 !important;
		  box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
		}
	
		${config.css}
	  `
	});
};