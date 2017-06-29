/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/**
 * Returns all Podcast channels the server subscribes to, and (optionally) their episodes. This method can also be used to return details for only one channel - refer to the id parameter. A typical use case for this method would be to first retrieve all channels without episodes, and then retrieve all episodes for the single channel the user selects.
 * @param   {object}  auth            Authenticate Object.
 * @param   {boolean} includeEpisodes = true 	(Since 1.9.0) Whether to include Podcast episodes in the returned result.
 * @param   {number}  id              (Since 1.9.0) If specified, only return the Podcast channel with this ID.
 * @param {function} callback  Returns a <subsonic-response> element with a nested <podcasts> element on success.
 */
function getPodcasts(auth, includeEpisodes = true, id, callback) {
	var parameters = null;
	if (includeEpisodes !== "") {
		parameters += "&includeEpisodes=" + includeEpisodes;
	}
	if (id !== "") {
		parameters += "&id=" + id;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getPodcasts", parameters);
}

/**
 * Returns the most recently published Podcast episodes.
 * @param   {object} auth  Authenticate Object.
 * @param   {number} count = 20 	The maximum number of episodes to return.
 * @param {function} callback Returns a <subsonic-response> element with a nested <newestPodcasts> element on success. 
 */
function getNewestPodcasts(auth, count = 20, callback) {
	var parameters = null;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getNewestPodcasts", parameters);
}

/**
 * Requests the server to check for new Podcast episodes. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function refreshPodcasts(auth, callback) {
	getResponseNode(auth, callback, "refreshPodcasts", "");
}

/**
 * Adds a new Podcast channel. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
 * @param   {object} auth Authenticate Object.
 * @param   {string} url  The URL of the Podcast to add.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function createPodcastChannel(auth, url, callback) {
	var parameters = "&url=" + id + "&";
	getResponseNode(auth, callback, "createPodcastChannel", parameters);
}

/**
 * Deletes a Podcast channel. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   The ID of the Podcast channel to delete.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deletePodcastChannel(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deletePodcastChannel", parameters);
}

/**
 * Deletes a Podcast episode. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   The ID of the Podcast episode to delete.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deletePodcastEpisode(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deletePodcastEpisode", parameters);
}

/**
 * Request the server to start downloading a given Podcast episode. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   The ID of the Podcast episode to download.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function downloadPodcastEpisode(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "downloadPodcastEpisode", parameters);
}
