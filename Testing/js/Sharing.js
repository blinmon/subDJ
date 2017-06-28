/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Sharing {

	/**
	 * Returns information about shared media this user is allowed to manage. Takes no extra parameters.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <shares> element on success.
	 */
	getShares(auth) {
		var result;
		return result;
	}

	/**
	 * Creates a public URL that can be used by anyone to stream music or video from the Subsonic server. The URL is short and suitable for posting on Facebook, Twitter etc. Note: The user must be authorized to share (see Settings > Users > User is allowed to share files with anyone).
	 * @param   {object} auth        Authenticate Object.
	 * @param   {number} id          ID of a song, album or video to share. Use one id parameter for each entry to share.
	 * @param   {string} description A user-defined description that will be displayed to people visiting the shared media.
	 * @param   {number} expires     The time at which the share expires. Given as milliseconds since 1970.
	 * @returns {object} Returns a <subsonic-response> element with a nested <shares> element on success, which in turns contains a single <share> element for the newly created share.
	 */
	createShare(auth, id, description, expires) {
		var result;
		return result;
	}

	/**
	 * Updates the description and/or expiration date for an existing share.
	 * @param   {object} auth        Authenticate Object.
	 * @param   {number} id          ID of the share to update.
	 * @param   {string} description A user-defined description that will be displayed to people visiting the shared media.
	 * @param   {number} expires     The time at which the share expires. Given as milliseconds since 1970, or zero to remove the expiration.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	updateShare(auth, id, description, expires) {
		var result;
		return result;
	}

	/**
	 * Deletes an existing share.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   ID of the share to delete.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	deleteShare(auth, id) {
		var result;
		return result;
	}
}
