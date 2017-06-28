/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Bookmarks {

	/**
	 * Returns all bookmarks for this user. A bookmark is a position within a certain media file.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <bookmarks> element on success.
	 */
	getBookmarks(auth) {
		var result;
		return result;
	}

	/**
	 * Creates or updates a bookmark (a position within a media file). Bookmarks are personal and not visible to other users.
	 * @param   {object} auth     Authenticate Object
	 * @param   {number} id       ID of the media file to bookmark. If a bookmark already exists for this file it will be overwritten.
	 * @param   {number} position The position (in milliseconds) within the media file.
	 * @param   {string} comment  A user-defined comment.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	createBookmark(auth, id, position, comment) {
		var result;
		return result;
	}

	/**
	 * Deletes the bookmark for a given file.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   ID of the media file for which to delete the bookmark. Other users' bookmarks are not affected.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	deleteBookmark(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns the state of the play queue for this user (as set by savePlayQueue). This includes the tracks in the play queue, the currently playing track, and the position within this track. Typically used to allow a user to move between different clients/apps while retaining the same play queue (for instance when listening to an audio book).
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <playQueue> element on success, or an empty <subsonic-response> if no play queue has been saved.
	 */
	getPlayQueue(auth) {
		var result;
		return result;
	}

	/**
	 * Saves the state of the play queue for this user. This includes the tracks in the play queue, the currently playing track, and the position within this track. Typically used to allow a user to move between different clients/apps while retaining the same play queue (for instance when listening to an audio book).
	 * @param   {object} auth     Authenticate Object
	 * @param   {number} id       ID of a song in the play queue. Use one id parameter for each song in the play queue.
	 * @param   {number} current  The ID of the current playing song.
	 * @param   {number} position The position in milliseconds within the currently playing song.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	savePlayQueue(auth, id, current, position) {
		var result;
		return result;
	}
}
