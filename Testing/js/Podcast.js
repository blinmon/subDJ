/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Podcast {

	/**
	 * Returns all Podcast channels the server subscribes to, and (optionally) their episodes. This method can also be used to return details for only one channel - refer to the id parameter. A typical use case for this method would be to first retrieve all channels without episodes, and then retrieve all episodes for the single channel the user selects.
	 * @param   {object}  auth            Authenticate Object.
	 * @param   {boolean} includeEpisodes = true 	(Since 1.9.0) Whether to include Podcast episodes in the returned result.
	 * @param   {number}  id              (Since 1.9.0) If specified, only return the Podcast channel with this ID.
	 * @returns {object}  Returns a <subsonic-response> element with a nested <podcasts> element on success.
	 */
	getPodcasts(auth, includeEpisodes = true, id) {
		var result;
		return result;
	}

	/**
	 * Returns the most recently published Podcast episodes.
	 * @param   {object} auth  Authenticate Object.
	 * @param   {number} count = 20 	The maximum number of episodes to return.
	 * @returns {object} Returns a <subsonic-response> element with a nested <newestPodcasts> element on success. 
	 */
	getNewestPodcasts(auth, count = 20) {
		var result;
		return result;
	}

	/**
	 * Requests the server to check for new Podcast episodes. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	refreshPodcasts(auth) {
		var result;
		return result;
	}

	/**
	 * Adds a new Podcast channel. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
	 * @param   {object} auth Authenticate Object.
	 * @param   {string} url  The URL of the Podcast to add.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	createPodcastChannel(auth, url) {
		var result;
		return result;
	}

	/**
	 * Deletes a Podcast channel. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The ID of the Podcast channel to delete.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	deletePodcastChannel(auth, id) {
		var result;
		return result;
	}

	/**
	 * Deletes a Podcast episode. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The ID of the Podcast episode to delete.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	deletePodcastEpisode(auth, id) {
		var result;
		return result;
	}

	/**
	 * Request the server to start downloading a given Podcast episode. Note: The user must be authorized for Podcast administration (see Settings > Users > User is allowed to administrate Podcasts).
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The ID of the Podcast episode to download.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	downloadPodcastEpisode(auth, id) {
		var result;
		return result;
	}
}
