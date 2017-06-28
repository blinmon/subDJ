/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Chat {

	/**
	 * Returns the current visible (non-expired) chat messages.
	 * @param   {object} auth  Authenticate Object.
	 * @param   {number} since Only return messages newer than this time (in millis since Jan 1 1970).
	 * @returns {object} Returns a <subsonic-response> element with a nested <chatMessages> element on success.
	 */
	getChatMessages(auth, since) {
		var result;
		return result;
	}

	/**
	 * Adds a message to the chat log.
	 * @param   {object} auth    Authenticate Object.
	 * @param   {string} message The chat message.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	addChatMessage(auth, message) {
		var result;
		return result;
	}
}
