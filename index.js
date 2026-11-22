const elem_ascii_area = document.getElementById('ascii-area');

const elem_link_names = [
	'link-music',
	'link-photos',
	'link-writing',
	'link-software',
	'link-fun',
	'link-misc',
];
const elem_link_colors = [
	'accent-red',
	'accent-yellow',
	'accent-summer-green',
	'accent-winter-green',
	'accent-blue',
	'accent-violet',
];
const elem_links = [];

for (let i = 0; i < elem_link_names.length; i++)
	elem_links.push(document.getElementById(elem_link_names[i]));

/* ascii art */
const ascii_art = [
	`             <br>
             <br>
             <br>
             <br>
             <br>
    . . .    <br>
             <br>
             <br>
             <br>
             <br>
             <br>`,
	`             <br>
      |\\     <br>
      | \\    <br>
      |\\ |   <br>
      | \\\`|  <br>
      |  |   <br>
      |  \`|  <br>
  .-^-|      <br>
  |===|      <br>
  \\===/      <br>
   ^-^       <br>`,
	`             <br>
       __    <br>
  /^^^^-o^\\  <br>
  |    (_)|  <br>
  \\_______/  <br>
     [ ]     <br>
     [ ]     <br>
    // \\\\    <br>
   //   \\\\   <br>
             <br>
             <br>`,
	`             <br>
     _/\\     <br>
   _/ ==     <br>
  /_=====_   <br>
  |       |  <br>
  |       |  <br>
  | =---= |  <br>
  |  ---  |  <br>
  |       |  <br>
  |_______|  <br>
             <br>`,
	`             <br>
             <br>
  +=======+  <br>
  |  __   |  <br>
  |    \\  |  <br>
  |     | |  <br>
  |  __/  |  <br>
  |       |  <br>
  +=======+  <br>
             <br>
             <br>`,
	`             <br>
 \`   ___     <br>
    /   \\ \`  <br>
   |  == |   <br>
   | ==  |   <br>
    \\___/    <br>
  \`   |      <br>
       \\  \`  <br>
       |     <br>
 \`    /      <br>
           \` <br>`,
	`             <br>
     ___     <br>
    /   \\    <br>
    |   |    <br>
       _/    <br>
      |      <br>
      |      <br>
             <br>
      .      <br>
             <br>
             <br>`
];

/* set text for ascii area */
for (let i = 0; i < ascii_art.length; i++) {

	let text = ascii_art[i];
	let output = '';

	for (let j = 0; j < text.length; j++) {

		if (text[j] == ' ')
			output += '&nbsp;';
		else
			output += text[j];
	}
	ascii_art[i] = output;
}
function setText(text, color) {

	elem_ascii_area.innerHTML = text;
	elem_ascii_area.style.color = `var(--${color})`;
}
setText(ascii_art[0], 'light-0');

for (let i = 0; i < elem_links.length; i++) {

	const elem_link = elem_links[i];

	elem_link.addEventListener('mouseenter', () => {
		setText(ascii_art[i+1], elem_link_colors[i]);
	});
	elem_link.addEventListener('mouseleave', () => {
		setText(ascii_art[0], 'light-0');
	});
}
