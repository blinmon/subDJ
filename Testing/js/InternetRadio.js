/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns all internet radio stations. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <internetRadioStations> element on success.
 */
function getInternetRadioStations(auth, callback) {
	getResponseNode(auth, callback, "getInternetRadioStations", "");
}
