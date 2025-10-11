/* elements */
const elem_channel_listing = document.getElementById('channel-listing');

/* set channel buttons */
var channel_buttons = '';

for (index in channel_proper_names) {

	/* add button tag */
	channel_buttons += '<a href="description.html?ch=' + index + '"><div class="button">' + channel_proper_names[index] + '</div></a><br>';
}

elem_channel_listing.innerHTML = channel_buttons;
