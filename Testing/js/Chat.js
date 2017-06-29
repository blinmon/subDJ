/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns the current visible (non-expired) chat messages.
 * @param   {object} auth  Authenticate Object.
 * @param   {number} since Only return messages newer than this time (in millis since Jan 1 1970).
 * @param {function} callback Returns a <subsonic-response> element with a nested <chatMessages> element on success.
 */
function getChatMessages(auth, since, callback) {
	var parameters = null;
	if (since !== "") {
		parameters += "&since=" + since;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getChatMessages", parameters);
}

/**
 * Adds a message to the chat log.
 * @param   {object} auth    Authenticate Object.
 * @param   {string} message The chat message.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function addChatMessage(auth, message, callback) {
	var parameters = null;
	if (message !== "") {
		parameters += "&message=" + message;
	}
	parameters += "&";
	getResponseNode(auth, callback, "addChatMessage", parameters);
}
