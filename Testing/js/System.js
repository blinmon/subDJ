/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class System {

	/**
	 * Used to test connectivity with the server. Takes no extra parameters.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns an empty <subsonic-response> element on success
	 */
	static ping(auth) {
		var result;
		var call = auth.generateApiCall("ping", "");
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				if (!auth.getResponseStatus(xhr)) {
					auth.getErrorCode(xhr);
					console.log("[API] ping: Ping Failed!!!");
					result = false;
					console.log(result);
				} else {
					console.log("[API] ping: Ping Sucessful!!!");
					result = true;
					console.log(result);
				}
			}
		};
		xhr.open("GET", call, true);
		xhr.send();
		return result;
	}

	//https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call?rq=1

	/**
	 * Get details about the software license. Takes no extra parameters. Please note that access to the REST API requires that the server has a valid license (after a 30-day trial period). To get a license key you must upgrade to Subsonic Premium.
	 * @param {object} auth Authenticate Object.
	 */
	static getLicense(auth) {
		var license = {
			valid: false,
			email: "",
			licenseExpires: "",
			trialExpires: ""
		};
		var call = auth.generateApiCall("getLicense", "");
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				if (!auth.getResponseStatus(xhr)) {
					auth.getErrorCode(xhr);
					console.log("[API] getLicense: License Failed to Retreive!");
				} else {
					console.log("[API] getLicense: License Retreived!");
					var xmlDoc = xhr.responseXML;
					var node = xmlDoc.getElementsByTagName("license")[0];
					if (node !== null) {
						license.valid = node.attributes[0].nodeValue;
						license.email = node.attributes[1].nodeValue;
						license.licenseExpires = node.attributes[2].nodeValue;
						license.trialExpires = node.attributes[3].nodeValue;
					}
					//console.log(license);
					//return license;
				}
			}
		};
		xhr.open("GET", call, true);
		xhr.send();
	}
}
