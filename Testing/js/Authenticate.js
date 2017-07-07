/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement functions */
class Authenticate {

	/**
	 * Default constructor for the Authenticate object.
	 * @param {string} address  URL for the subsonic server.
	 * @param {string} user     Username for login.
	 * @param {string} password Password for login.
	 * @param {string} version  REST API Version.
	 * @param {string} client   Name of client/app.
	 */
	constructor(address, user, password, version, client) {
		this.address = address;
		this.user = user;
		this.password = password;
		this.version = version;
		this.client = client;
	}

	/**
	 * Generates a random 6 character salt.
	 * @returns {string} The 6 character salt.
	 */
	generateSalt() {
		return Math.random().toString(32).substring(2, 8);
	}

	/**
	 * Generates a token by MD5'ing the users password with the generated salt.
	 * @param   {string} salt The 6 character salt.
	 * @returns {string} The generated token.
	 */
	generateToken(salt) {
		return md5(this.password + salt);
	}

	/**
	 * Generates the API call as a string with all the parameters for the given input function.
	 * @param   {string} apiFunctionName   The name of the subsonic API function.
	 * @param   {string} apiFunctionParams The parameters for the API call(...option=value&option2=value2)
	 * @returns {string} The full URL to be called.
	 */
	generateApiCall(apiFunctionName, apiFunctionParams) {
		var salt = this.generateSalt();
		var token = this.generateToken(salt);
		var serverAddress = this.address + "/rest/" + apiFunctionName + ".view?";
		var authParams = "u=" + this.user + "&t=" + token + "&s=" + salt + "&v=" + this.version + "&c=" + this.client;
		console.log(serverAddress + apiFunctionParams + authParams);
		return serverAddress + apiFunctionParams + authParams;
	}

	/**
	 * Gets the respeonce status for the xml response.
	 * @param   {object}  xml The xml response.
	 * @returns {boolean} Returns true if we find a subsonic-response node.
	 */
	getResponseStatus(xml) {
		var xmlDoc = xml.responseXML;
		var status = xmlDoc.getElementsByTagName("subsonic-response")[0].attributes[1].nodeValue;
		if (status === "ok") {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Get the error code for the xml response.
	 * @param   {object} xml The xml response.
	 * @returns {string} Returns the error if there is one.
	 */
	getErrorCode(xml) {
		var xmlDoc = xml.responseXML;
		var errorNode = xmlDoc.getElementsByTagName("error")[0];
		if (errorNode !== null) {
			return errorNode.attributes[0].nodeValue + ": " + errorNode.attributes[1].nodeValue;
		}
	}


}

/**
 * Used to grab the response XML node.
 * @param {object}   auth               Authenticate Object.
 * @param {function} callback           The callback function that will be used in the async state.
 * @param {string}   functionName       The name of the subsonic function.
 * @param {string}   functionParameters The parameters for the subsonic function.
 */
function getResponseNode(auth, callback, functionName, functionParameters) {
	var call = auth.generateApiCall(functionName, functionParameters),
		xhr = new XMLHttpRequest();
	xhr.open("GET", call, true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			callback.apply(xhr.responseXML.getElementsByTagName("subsonic-response")[0].outerHTML);
		}
	};
}

function getDownload(auth, callback, functionName, functionParameters) {
	var call = auth.generateApiCall(functionName, functionParameters),
		xhr = new XMLHttpRequest();
	xhr.open("GET", call, true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			callback.apply(call);
		}
	};
}
