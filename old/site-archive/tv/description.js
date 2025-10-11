/* variables */
var selected_show = undefined;

function showdescription(show) {
	
	/* make description box visible */
	elem_show_description.style.width = '100%';
	
	/* get description of show */
	var desc = show_descriptions[show];
	var name = show_proper_names[show];
	
	/* fail */	
	if (desc === undefined || name === undefined) {

		return;
	}
	
	/* set elements */
	elem_show_name.innerHTML = name;
	elem_show_description_text.innerHTML = desc;
	elem_show_image.setAttribute('src', 'thumbs/' + channel + '/' + show + '.png');
	
	/* get season and episode lengths */
	var n_seasons = show_lengths[show][0];
	var n_episodes = show_lengths[show][1];
	
	/* create option lists */
	var opt_seasons = '';
	var opt_episodes = '';
	
	for (let i = 1; i < n_seasons + 1; i++) {

		opt_seasons += '<option>' + i + '</option>';
	}
	for (let i = 1; i < n_episodes + 1; i++) {

		opt_episodes += '<option>' + i + '</option>';
	}
	
	/* set season and episodes */
	elem_show_seasons.innerHTML = opt_seasons;
	elem_show_episodes.innerHTML = opt_episodes;
	
	/* set selected show */
	selected_show = show;
}

function hidedescription() {

	/* make description box invisible */
	elem_show_description.style.width = '0';
}

function watchshow() {

	/* get season and episode */
	var season = elem_show_seasons.options[elem_show_seasons.selectedIndex].value;
	var episode = elem_show_episodes.options[elem_show_episodes.selectedIndex].value;
	var show = selected_show;
	
	/* go to watch page */
	window.location = 'watch.html?sh=' + show + '&se=' + season + '&ep=' + episode;
}

/* get elements */
const elem_channel_name = document.getElementById('channel-name');
const elem_current_program = document.getElementById('current-program');
const elem_current_program_name = document.getElementById('current-program-name');
const elem_channel_on_demand_shows = document.getElementById('channel-on-demand-shows');
const elem_show_description = document.getElementById('show-description');
const elem_show_image = document.getElementById('show-image');
const elem_show_name = document.getElementById('show-name');
const elem_show_description_text = document.getElementById('show-description-text');
const elem_show_seasons = document.getElementById('show-seasons');
const elem_show_episodes = document.getElementById('show-episodes');

/* parse the url */
var url = new URL(window.location.href);

var channel = url.searchParams.get('ch');

/* helpful channel things */
var channel_proper_name = channel_proper_names[channel];
var channel_show = channel_shows[channel];

/* bad channel name */
if (channel_proper_name === undefined) {

	alert('Enter a valid channel name.');
	window.location = 'main.html';
}

const current_show = channel_shows[channel][Math.floor(Math.random() * channel_shows[channel].length)];

/* log stuff */
console.log(channel_proper_name);

/* set html */
elem_channel_name.innerHTML = channel_proper_name;
if (current_show !== undefined) {

	elem_current_program.setAttribute('src', 'thumbs/' + channel + '/' + current_show + '.png');
	elem_current_program_name.innerHTML = show_proper_names[current_show];
}

/* span text */
var span_text = '';

for (show_index in channel_shows[channel]) {

	var show = channel_shows[channel][show_index];
	console.log(show);
	
	/* add show thumbnail */
	span_text += '<div class="image" onclick="showdescription(\'' + show + '\')"><img src="thumbs/' + channel + '/' + show + '.png"/><h4>' + show_proper_names[show] + '</h4></div>';
}

/* display shows */
elem_channel_on_demand_shows.innerHTML = span_text;
