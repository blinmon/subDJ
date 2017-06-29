/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/**
 * Returns information about shared media this user is allowed to manage. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <shares> element on success.
 */
function getShares(auth, callback) {
	getResponseNode(auth, callback, "getShares", "");
}

/**
 * Creates a public URL that can be used by anyone to stream music or video from the Subsonic server. The URL is short and suitable for posting on Facebook, Twitter etc. Note: The user must be authorized to share (see Settings > Users > User is allowed to share files with anyone).
 * @param   {object} auth        Authenticate Object.
 * @param   {number} id          ID of a song, album or video to share. Use one id parameter for each entry to share.
 * @param   {string} description A user-defined description that will be displayed to people visiting the shared media.
 * @param   {number} expires     The time at which the share expires. Given as milliseconds since 1970.
 * @param {function} callback Returns a <subsonic-response> element with a nested <shares> element on success, which in turns contains a single <share> element for the newly created share.
 */
function createShare(auth, id, description, expires, callback) {
	var parameters = "&id=" + id;
	if (description !== "") {
		parameters += "&description=" + description;
	}
	if (expires !== "") {
		parameters += "&expires=" + expires;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createShare", parameters);
}

/**
 * Updates the description and/or expiration date for an existing share.
 * @param   {object} auth        Authenticate Object.
 * @param   {number} id          ID of the share to update.
 * @param   {string} description A user-defined description that will be displayed to people visiting the shared media.
 * @param   {number} expires     The time at which the share expires. Given as milliseconds since 1970, or zero to remove the expiration.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function updateShare(auth, id, description, expires, callback) {
	var parameters = "&id=" + id;
	if (description !== "") {
		parameters += "&description=" + description;
	}
	if (expires !== "") {
		parameters += "&expires=" + expires;
	}
	parameters += "&";
	getResponseNode(auth, callback, "updateShare", parameters);
}

/**
 * Deletes an existing share.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the share to delete.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deleteShare(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deleteShare", parameters);
}
