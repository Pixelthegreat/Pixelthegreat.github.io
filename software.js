const elem_project_info_text = document.getElementById('project-info-text');
const elem_terminal = document.getElementById('terminal');

const projects = [
	'bakey',
	'eclair-os',
	'emerald',
];
const project_descriptions = {
	'bakey': 'A simple and portable terminal emulator written in C.',
	'eclair-os': 'A hobby operating system written in C for the X86 platform. It is at this point more of an artistic project.',
	'emerald': 'A simple python-like scripting language designed around speed, efficiency and versatility.',
};
const project_pages = {
	'bakey': 'https://github.com/Pixelthegreat/bakey',
	'eclair-os': 'https://github.com/Pixelthegreat/eclair-os',
	'emerald': 'https://github.com/Pixelthegreat/emerald',
};

function display_project(name) {

	elem_project_info_text.innerHTML = '<a href="' + project_pages[name] + '">(Main page)</a><br><br>' + project_descriptions[name];
}

/* open terminal */
var terminal = new Terminal();
terminal.resize(48, 6);

terminal.options = {
	fontSize: 12,
	fontFamily: 'monospace',
	theme: {
		background: '#16161a',
		foreground: '#d7e0fe',

		black: '#202126',
		brightBlack: '#383a42',

		red: '#bd608f',
		brightRed: '#eeaacc',

		green: '#8fbd60',
		brightGreen: '#cceeaa',

		yellow: '#bd8f60',
		brightYellow: '#eeccaa',

		blue: '#608fbd',
		brightBlue: '#aaccee',

		magenta: '#8f60bd',
		brightMagenta: '#ccaaee',

		cyan: '#60bd8f',
		brightCyan: '#aaeecc',

		white: '#aeb5cd',
		brightWhite: '#d7e0fe',

		cursor: '#d7e0fe',
		cursorAccent: '#16161a',
	},
};

terminal.open(elem_terminal);

terminal.write('\n        ');
for (let i = 0; i < 16; i++) {

	if (i < 8) terminal.write('\x1b[4' + i + 'm  ');
	else terminal.write('\x1b[10' + (i - 8) + 'm  ');
}
terminal.write('\x1b[0m\r\n\nType \'help\' for help!\r\n $ ');

/* this generally follows the same strategy as the xtermjs.org demo */
var input_string = '';

terminal.onData(e => {
	switch (e) {

		/* enter pressed */
		case '\r':
			processInput();
			input_string = '';
			break;

		/* backspace pressed */
		case '\u007f':
			if (input_string.length > 0) {

				terminal.write('\b \b');
				input_string = input_string.slice(0, input_string.length - 1);
			}
			break;

		/* anything else */
		default:
			if ((e >= '\u0020' && e <= '\u007e') || e >= '\00a0') {

				input_string += e;
				terminal.write(e);
			}
			break;
	}
});

/* process terminal input */
function processInput() {

	let args = input_string.split(' ');
	if (args.length > 0) {

		let command = args[0];

		/* help */
		if (command == 'help')
			terminal.write('\r\n  help - Display this help message\r\n  project - Display list of projects\r\n  project <name of project> - Display project information');

		/* project info */
		else if (command == 'project') {

			if (args.length >= 2) {

				let name = args[1];

				let description = project_descriptions[name];
				if (description !== undefined)
					terminal.write('\r\n' + description);
				else terminal.write('\r\nUnrecognized project \'' + name + '\'');
			}
			else {
				for (let i in projects)
					terminal.write('\r\n' + projects[i]);
			}
		}

		/* otherwise */
		else terminal.write('\r\nUnrecognized command \'' + command + '\'');
	}

	terminal.write('\r\n $ ');
}
