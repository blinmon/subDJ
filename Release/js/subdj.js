/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns a list of random, newest, highest rated etc. albums. Similar to the album lists on the home page of the Subsonic web interface.
 * @param {object}   auth          Authenticate object
 * @param {string}   type          The list type. Must be one of the following: random, newest, highest, frequent, recent. Since 1.8.0 you can also use alphabeticalByName or alphabeticalByArtist to page through all albums alphabetically, and starred to retrieve starred albums. Since 1.10.1 you can use byYear and byGenre to list albums in a given year range or genre.
 * @param {number}   size          = 10     The number of albums to return. Max 500.
 * @param {number}   offset        = 0    The list offset. Useful if you for example want to page through the list of newest albums.
 * @param {number}   fromYear      The first year in the range. If fromYear > toYear a reverse chronological list is returned.
 * @param {number}   toYear        The last year in the range.
 * @param {string}   genre         The name of the genre, e.g., "Rock".
 * @param {number}   musicFolderId (Since 1.11.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <albumList> element on success.
 */
function getAlbumList(auth, type, size = 10, offset = 0, fromYear, toYear, genre, musicFolderId, callback) {
	var parameters = "&type=" + type;
	if (type === "byYear") {
		parameters += "&fromYear=" + fromYear + "&toYear=" + toYear;
	}
	if (type === "genre") {
		parameters += "&genre=" + genre;
	}
	if (size !== "") {
		parameters += "&size=" + size;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getAlbumList", parameters);
}

/**
 * Similar to getAlbumList, but organizes music according to ID3 tags.
 * @param {object}   auth          Authenticate object
 * @param {string}   type          The list type. Must be one of the following: random, newest, frequent, recent, starred, alphabeticalByName or alphabeticalByArtist. Since 1.10.1 you can use byYear and byGenre to list albums in a given year range or genre.
 * @param {number}   size          = 10     	The number of albums to return. Max 500.
 * @param {number}   offset        = 0    	The list offset. Useful if you for example want to page through the list of newest albums.
 * @param {number}   fromYear      The first year in the range. If fromYear > toYear a reverse chronological list is returned.
 * @param {number}   toYear        The last year in the range.
 * @param {string}   genre         The name of the genre, e.g., "Rock".
 * @param {number}   musicFolderId (Since 1.12.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <albumList2> element on success.
 */
function getAlbumList2(auth, type, size = 10, offset = 0, fromYear, toYear, genre, musicFolderId, callback) {
	var parameters = "&type=" + type;
	if (type === "byYear") {
		parameters += "&fromYear=" + fromYear + "&toYear=" + toYear;
	}
	if (type === "genre") {
		parameters += "&genre=" + genre;
	}
	if (size !== "") {
		parameters += "&size=" + size;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getAlbumList2", parameters);
}

/**
 * Returns random songs matching the given criteria.
 * @param {object}   auth          Authenticate object
 * @param {number}   size          = 10     The maximum number of songs to return. Max 500.
 * @param {string}   genre         Only returns songs belonging to this genre.
 * @param {number}   fromYear      Only return songs published after or in this year.
 * @param {number}   toYear        Only return songs published before or in this year.
 * @param {number}   musicFolderId Only return songs in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <randomSongs> element on success.
 */
function getRandomSongs(auth, size = 10, genre, fromYear, toYear, musicFolderId, callback) {
	var parameters = null;
	if (size !== "") {
		parameters += "&size=" + size;
	}
	if (genre !== "") {
		parameters += "&genre=" + genre;
	}
	if (fromYear !== "") {
		parameters += "&fromYear=" + fromYear;
	}
	if (toYear !== "") {
		parameters += "&toYear=" + toYear;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getRandomSongs", parameters);
}

/**
 * Returns songs in a given genre.
 * @param {object}   auth          Authenticate Object
 * @param {string}   genre         The genre, as returned by getGenres.
 * @param {number}   count         = 10    	The maximum number of songs to return. Max 500.
 * @param {number}   offset        = 0    	The offset. Useful if you want to page through the songs in a genre.
 * @param {number}   musicFolderId (Since 1.12.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <songsByGenre> element on success
 */
function getSongsByGenre(auth, genre, count = 10, offset = 0, musicFolderId, callback) {
	var parameters = null;
	if (genre !== "") {
		parameters += "&genre=" + genre;
	}
	if (count !== "") {
		parameters += "&count=" + count;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getSongsByGenre", parameters);
}

/**
 * Returns what is currently being played by all users. Takes no extra parameters.
 * @param {object}   auth     Authenticate Object
 * @param {function} callback Returns a <subsonic-response> element with a nested <nowPlaying> element on success.
 */
function getNowPlaying(auth, callback) {
	getResponseNode(auth, callback, "getNowPlaying", "");
}

/**
 * Returns starred songs, albums and artists.
 * @param {object}   auth          Authenticate Object
 * @param {number}   musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <starred> element on success.
 */
function getStarred(auth, musicFolderId, callback) {
	var parameters = null;
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getStarred", parameters);
}

/**
 * Similar to getStarred, but organizes music according to ID3 tags.
 * @param {object}   auth          Authenticate Object
 * @param {number}   musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <starred2> element on success.
 */
function getStarred2(auth, musicFolderId, callback) {
	var parameters = null;
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getStarred2", parameters);
}

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

/**
 * Used to grab the binary data.
 * @param {object}   auth               Authenticate Object.
 * @param {function} callback           The callback function that will be used in the async state.
 * @param {string}   functionName       the name of the subsonic function.
 * @param {string}   functionParameters The parameters for the subsonic function.
 */
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


/**
 * Used to grab the m3u8 from the server.
 * @param   {object}   auth               Authenticate Object
 * @param   {function} callback           The callback function that will be used in the async state.
 * @param   {[[Type]]} functionName       The name of the subsonic function.
 * @param   {string}   functionParameters The parameters for the subsonic function.
 */
function getM3U8(auth, callback, functionName, functionParameters) {
	var call = function () {
			var salt = this.generateSalt();
			var token = this.generateToken(salt);
			var serverAddress = this.address + "/rest/" + functionName + ".m3u8?";
			var authParams = "u=" + this.user + "&t=" + token + "&s=" + salt + "&v=" + this.version + "&c=" + this.client;
			console.log(serverAddress + functionParameters + authParams);
			return serverAddress + functionParameters + authParams;
		},
		xhr = new XMLHttpRequest();
	xhr.open("GET", call, true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			callback.apply(call);
		}
	};
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/**
 * Returns all bookmarks for this user. A bookmark is a position within a certain media file.
 * @param   {object} auth    Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <bookmarks> element on success.
 */
function getBookmarks(auth, callback) {
	getResponseNode(auth, callback, "getBookmarks", "");
}

/**
 * Creates or updates a bookmark (a position within a media file). Bookmarks are personal and not visible to other users.
 * @param   {object} auth     Authenticate Object
 * @param   {number} id       ID of the media file to bookmark. If a bookmark already exists for this file it will be overwritten.
 * @param   {number} position The position (in milliseconds) within the media file.
 * @param   {string} comment  A user-defined comment.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function createBookmark(auth, id, position, comment, callback) {
	var parameters = "&id=" + id + "&position=" + position;
	if (comment !== "") {
		parameters += "&comment=" + comment;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createBookmark", parameters);
}

/**
 * Deletes the bookmark for a given file.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the media file for which to delete the bookmark. Other users' bookmarks are not affected.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deleteBookmark(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deleteBookmark", parameters);
}

/**
 * Returns the state of the play queue for this user (as set by savePlayQueue). This includes the tracks in the play queue, the currently playing track, and the position within this track. Typically used to allow a user to move between different clients/apps while retaining the same play queue (for instance when listening to an audio book).
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <playQueue> element on success, or an empty <subsonic-response> if no play queue has been saved.
 */
function getPlayQueue(auth, callback) {
	getResponseNode(auth, callback, "getPlayQueue", "");
}

/**
 * Saves the state of the play queue for this user. This includes the tracks in the play queue, the currently playing track, and the position within this track. Typically used to allow a user to move between different clients/apps while retaining the same play queue (for instance when listening to an audio book).
 * @param   {object} auth     Authenticate Object
 * @param   {number} id       ID of a song in the play queue. Use one id parameter for each song in the play queue.
 * @param   {number} current  The ID of the current playing song.
 * @param   {number} position The position in milliseconds within the currently playing song.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function savePlayQueue(auth, id, current, position, callback) {
	var parameters = "&id=" + id;
	if (current !== "") {
		parameters += "&current=" + current;
	}
	if (position !== "") {
		parameters += "&position=" + position;
	}
	parameters += "&";
	getResponseNode(auth, callback, "savePlayQueue", parameters);
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns all configured top-level music folders. Takes no extra parameters.
 * @param {object}   auth     Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <musicFolders> element on success.
 */
function getMusicFolders(auth, callback) {
	getResponseNode(auth, callback, "getMusicFolders", "");
}

/**
 * Returns an indexed structure of all artists.
 * @param {object}   auth            Authenticate Object.
 * @param {number}   musicFolderId   If specified, only return artists in the music folder with the given ID. See getMusicFolders
 * @param {number}   ifModifiedSince o	If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).
 * @param {function} callback        Returns a <subsonic-response> element with a nested <indexes> element on success.
 */
function getIndexes(auth, musicFolderId, ifModifiedSince, callback) {
	var parameters = null;
	if (ifModifiedSince !== "") {
		parameters += "&ifModifiedSince=" + ifModifiedSince;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getIndexes", parameters);
}

/**
 * Returns a listing of all files in a music directory. Typically used to get list of albums for an artist, or list of songs for an album.
 * @param {object}   auth     Authenticate Object.
 * @param {string}   id       A string which uniquely identifies the music folder. Obtained by calls to getIndexes or getMusicDirectory.
 * @param {function} callback Returns a <subsonic-response> element with a nested <directory> element on success.
 */
function getMusicDirectory(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getMusicDirectory", parameters);
}

/**
 * Returns all genres.
 * @param {object}   auth     Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <genres> element on success.
 */
function getGenres(auth, callback) {
	getResponseNode(auth, callback, "getGenres", "");
}

/**
 * Similar to getIndexes, but organizes music according to ID3 tags.
 * @param {object}   auth          Authenticate Object.
 * @param {number}   musicFolderId If specified, only return artists in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <artists> element on success.
 */
function getArtists(auth, musicFolderId, callback) {
	var parameters = null;
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getArtists", parameters);
}

/**
 * Returns details for an artist, including a list of albums. This method organizes music according to ID3 tags.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The artist ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <artist> element on success.
 */
function getArtist(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getArtist", parameters);
}

/**
 * Returns details for an album, including a list of songs. This method organizes music according to ID3 tags.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The album ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <album> element on success.
 */
function getAlbum(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getAlbum", parameters);
}

/**
 * Returns details for a song.
 * @param {object}   auth     Auhtenticate Object.
 * @param {number}   id       The song ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <song> element on success.
 */
function getSong(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getSong", parameters);
}

/**
 * Returns all video files.
 * @param {object}   auth     Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <videos> element on success.
 */
function getVideos(auth, callback) {
	getResponseNode(auth, callback, "getVideos", "");
}

/**
 * Returns details for a video, including information about available audio tracks, subtitles (captions) and conversions.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The video ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <videoInfo> element on success.
 */
function getVideoInfo(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getVideoInfo", parameters);
}

/**
 * Returns artist info with biography, image URLs and similar artists, using data from last.fm.
 * @param {object}   auth              Authenticate Object.
 * @param {number}   id                The artist, album or song ID.
 * @param {number}   count             = 20                Max number of similar artists to return.
 * @param {boolean}  includeNotPresent = false Whether to return artists that are not present in the media library.
 * @param {function} callback          Returns a <subsonic-response> element with a nested <artistInfo> element on success.
 */
function getArtistInfo(auth, id, count = 20, includeNotPresent = false, callback) {
	var parameters = "&id=" + id;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	if (includeNotPresent !== "") {
		parameters += "&includeNotPresent=" + includeNotPresent;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getArtistInfo", parameters);
}

/**
 * Similar to getArtistInfo, but organizes music according to ID3 tags.
 * @param {object}   auth              Authenticate Object.
 * @param {number}   id                The artist ID.
 * @param {number}   count             = 20                	Max number of similar artists to return.
 * @param {number}   includeNotPresent = false Whether to return artists that are not present in the media library.
 * @param {function} callback          Returns a <subsonic-response> element with a nested <artistInfo2> element on success
 */
function getArtistInfo2(auth, id, count = 20, includeNotPresent = false, callback) {
	var parameters = "&id=" + id;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	if (includeNotPresent !== "") {
		parameters += "&includeNotPresent=" + includeNotPresent;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getArtistInfo2", parameters);
}

/**
 * Returns album notes, image URLs etc, using data from last.fm.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The album or song ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <albumInfo> element on success.
 */
function getAlbumInfo(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getAlbumInfo", parameters);
}

/**
 * Similar to getAlbumInfo, but organizes music according to ID3 tags.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The album ID.
 * @param {function} callback Returns a <subsonic-response> element with a nested <albumInfo> element on success.
 */
function getAlbumInfo2(auth, id, callback) {
	var paramters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getAlbumInfo2", paramters);
}

/**
 * Returns a random collection of songs from the given artist and similar artists, using data from last.fm. Typically used for artist radio features.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The artist, album or song ID.
 * @param {number}   count    = 20 	Max number of songs to return.
 * @param {function} callback Returns a <subsonic-response> element with a nested <similarSongs> element on success.
 */
function getSimilarSongs(auth, id, count = 20, callback) {
	var parameters = "&id=" + id;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getSimilarSongs", parameters);
}

/**
 * Similar to getSimilarSongs, but organizes music according to ID3 tags.
 * @param {object}   auth     Authenticate Object.
 * @param {number}   id       The artist ID.
 * @param {number}   count    = 20 Max number of songs to return.
 * @param {function} callback Returns a <subsonic-response> element with a nested <similarSongs2> element on success.
 */
function getSimilarSongs2(auth, id, count = 20, callback) {
	var parameters = "&id=" + id;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getSimilarSongs2", parameters);
}

/**
 * Returns top songs for the given artist, using data from last.fm.
 * @param {object}   auth     Authenticate Object.
 * @param {string}   artist   The artist name.
 * @param {number}   count    = 50 Max number of songs to return.
 * @param {function} callback Returns a <subsonic-response> element with a nested <topSongs> element on success.
 */
function getTopSongs(auth, artist, count = 50, callback) {
	var parameters = "&artist=" + artist;
	if (count !== "") {
		parameters += "&count=" + count;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getTopSongs", parameters);
}

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

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/**
 * Controls the jukebox, i.e., playback directly on the server's audio hardware. Note: The user must be authorized to control the jukebox (see Settings > Users > User is allowed to play files in jukebox mode).
 * @param   {object} auth   Authenticate Object.
 * @param   {string} action The operation to perform. Must be one of: get, status (since 1.7.0), set (since 1.7.0), start, stop, skip, add, clear, remove, shuffle, setGain
 * @param   {number} index  Used by skip and remove. Zero-based index of the song to skip to or remove.
 * @param   {number} offset (Since 1.7.0) Used by skip. Start playing this many seconds into the track.
 * @param   {number} id     Used by add and set. ID of song to add to the jukebox playlist. Use multiple id parameters to add many songs in the same request. (set is similar to a clear followed by a add, but will not change the currently playing track.)
 * @param   {number} gain   Used by setGain to control the playback volume. A float value between 0.0 and 1.0.
 * @param {function} callback Returns a <jukeboxStatus> element on success, unless the get action is used, in which case a nested <jukeboxPlaylist> element is returned. 
 */
function jukeboxControl(auth, action, index, offset, id, gain, callback) {
	var parameters = "&action=" + action;
	if (index !== "") {
		parameters += "&action=" + action;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (id !== "") {
		parameters += "&id=" + id;
	}
	if (gain !== "") {
		parameters += "&gain=" + gain;
	}
	parameters += "&";
	getResponseNode(auth, callback, "jukeboxControl", parameters);
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Attaches a star to a song, album or artist.
 * @param   {object} auth     Authenticate Object.
 * @param   {number} id       The ID of the file (song) or folder (album/artist) to star. Multiple parameters allowed.
 * @param   {number} albumId  The ID of an album to star. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
 * @param   {number} artistId The ID of an artist to star. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function star(auth, id, albumId, artistId, callback) {
	var parameters = null;
	if (id !== "") {
		parameters += "&id=" + id;
	}
	if (albumId !== "") {
		parameters += "&albumId=" + albumId;
	}
	if (artistId !== "") {
		parameters += "&artistId=" + artistId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "star", parameters);
}

/**
 * Removes the star from a song, album or artist.
 * @param   {object} auth     Authenticate Object.
 * @param   {number} id       The ID of the file (song) or folder (album/artist) to unstar. Multiple parameters allowed.
 * @param   {number} albumId  The ID of an album to unstar. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
 * @param   {number} artistId The ID of an artist to unstar. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function unstar(auth, id, albumId, artistId, callback) {
	var parameters = null;
	if (id !== "") {
		parameters += "&id=" + id;
	}
	if (albumId !== "") {
		parameters += "&albumId=" + albumId;
	}
	if (artistId !== "") {
		parameters += "&artistId=" + artistId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "unstar", parameters);
}

/**
 * Sets the rating for a music file.
 * @param   {object} auth   Authenticate Object.
 * @param   {number} id     A string which uniquely identifies the file (song) or folder (album/artist) to rate.
 * @param   {number} rating The rating between 1 and 5 (inclusive), or 0 to remove the rating.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function setRating(auth, id, rating, callback) {
	var parameters = "&id=" + id + "&rating=" + rating + "&";
	getResponseNode(auth, callback, "setRating", parameters);
}

/**
 * Registers the local playback of one or more media files. Typically used when playing media that is cached on the client. This operation includes the following: 
 * -"Scrobbles" the media files on last.fm if the user has configured his/her last.fm credentials on the Subsonic server (Settings > Personal).
 * -Updates the play count and last played timestamp for the media files. (Since 1.11.0)
 * -Makes the media files appear in the "Now playing" page in the web app, and appear in the list of songs returned by getNowPlaying (Since 1.11.0)-
 * Since 1.8.0 you may specify multiple id (and optionally time) parameters to scrobble multiple files.
 * @param   {object}  auth       Authenticate Object.
 * @param   {number}  id         A string which uniquely identifies the file to scrobble.
 * @param   {number}  time       (Since 1.8.0) The time (in milliseconds since 1 Jan 1970) at which the song was listened to.
 * @param   {boolean} submission Whether this is a "submission" or a "now playing" notification.
 * @param {function} callback  Returns an empty <subsonic-response> element on success.
 */
function scrobble(auth, id, time, submission, callback) {
	var parameters = "&id=" + id;
	if (time !== "") {
		parameters += "&time=" + time;
	}
	if (submission !== "") {
		parameters += "&submission=" + submission;
	}
	parameters += "&";
	getResponseNode(auth, callback, "scrobble", parameters);
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/* FIXME Return proper streams instead of xml response. */

/**
 * Streams a given media file.
 * @param   {object}  auth                  Authenticate Object.
 * @param   {string}  id                    A string which uniquely identifies the file to stream. Obtained by calls to getMusicDirectory.
 * @param   {number}  maxBitRate            (Since 1.2.0) If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If set to zero, no limit is imposed.
 * @param   {string}  format                (Since 1.6.0) Specifies the preferred target format (e.g., "mp3" or "flv") in case there are multiple applicable transcodings. Starting with 1.9.0 you can use the special value "raw" to disable transcoding.
 * @param   {number}  timeOffset            Only applicable to video streaming. If specified, start streaming at the given offset (in seconds) into the video. Typically used to implement video skipping.
 * @param   {string}  size                  (Since 1.6.0) Only applicable to video streaming. Requested video size specified as WxH, for instance "640x480".
 * @param   {boolean} estimateContentLength = false (Since 1.8.0). If set to "true", the Content-Length HTTP header will be set to an estimated value for transcoded or downsampled media.
 * @param   {boolean} converted             = false             (Since 1.14.0) Only applicable to video streaming. Subsonic can optimize videos for streaming by converting them to MP4. If a conversion exists for the video in question, then setting this parameter to "true" will cause the converted video to be returned instead of the original.
 * @param {function} callback  Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function stream(auth, id, maxBitRate, format, timeOffset, size, estimateContentLength = false, converted = false, callback) {
	var parameters = "&id=" + id;
	if (maxBitRate !== "") {
		parameters += "&maxBitRate=" + maxBitRate;
	}
	if (format !== "") {
		parameters += "&format=" + format;
	}
	if (timeOffset !== "") {
		parameters += "&timeOffset=" + timeOffset;
	}
	if (size !== "") {
		parameters += "&size=" + size;
	}
	if (estimateContentLength !== "") {
		parameters += "&estimateContentLength=" + estimateContentLength;
	}
	if (converted !== "") {
		parameters += "&converted=" + converted;
	}
	parameters += "&";
	//getResponseNode(auth, callback, "stream", parameters);
	getDownload(auth, callback, "stream", parameters);
}

/**
 * Downloads a given media file. Similar to stream, but this method returns the original media data without transcoding or downsampling.
 * @param   {object} auth Authenticate Object.
 * @param   {string} id   A string which uniquely identifies the file to download. Obtained by calls to getMusicDirectory.
 * @param {function} callback Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function download(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getDownload(auth, callback, "download", parameters);
}

/**
 * Creates an HLS (HTTP Live Streaming) playlist used for streaming video or audio. HLS is a streaming protocol implemented by Apple and works by breaking the overall stream into a sequence of small HTTP-based file downloads. It's supported by iOS and newer versions of Android. This method also supports adaptive bitrate streaming, see the bitRate parameter.
 * @param   {object} auth       Authenticate Object.
 * @param   {string} id         A string which uniquely identifies the media file to stream.
 * @param   {string} bitRate    If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If this parameter is specified more than once, the server will create a variant playlist, suitable for adaptive bitrate streaming. The playlist will support streaming at all the specified bitrates. The server will automatically choose video dimensions that are suitable for the given bitrates. Since 1.9.0 you may explicitly request a certain width (480) and height (360) like so: bitRate=1000@480x360
 * @param   {string} audioTrack The ID of the audio track to use. See getVideoInfo for how to get the list of available audio tracks for a video.
 * @param {function} callback Returns an M3U8 playlist on success (content type "application/vnd.apple.mpegurl"), or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function hls(auth, id, bitRate, audioTrack, callback) {
	var parameters = "&id=" + id;
	if (bitRate !== "") {
		parameters += "&bitRate=" + bitRate;
	}
	if (audioTrack !== "") {
		parameters += "&audioTrack=" + audioTrack;
	}
	parameters += "&";
	getResponseNode(auth, callback, "hls", parameters);
}

/**
 * Returns captions (subtitles) for a video. Use getVideoInfo to get a list of available captions.
 * @param   {object} auth   Authenticate Object.
 * @param   {number} id     The ID of the video.
 * @param   {string} format Preferred captions format ("srt" or "vtt").
 * @param {function} callback Returns the raw video captions.
 */
function getCaptions(auth, id, format, callback) {
	var parameters = "&id=" + id;
	if (format !== "") {
		parameters += "&format=" + format;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getCaptions", parameters);
}

/**
 * Returns a cover art image.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   The ID of a song, album or artist.
 * @param   {string} size If specified, scale image to this size.
 * @param {function} callback Returns the cover art image in binary form.
 */
function getCoverArt(auth, id, size, callback) {
	var parameters = "&id=" + id;
	if (size !== "") {
		parameters += "&size=" + size;
	}
	parameters += "&";
	getDownload(auth, callback, "getCoverArt", parameters);
}

/**
 * Searches for and returns lyrics for a given song.
 * @param   {object} auth   Authenticate Object.
 * @param   {string} artist The artist name.
 * @param   {string} title  The song title.
 * @param {function} callback Returns a <subsonic-response> element with a nested <lyrics> element on success. The <lyrics> element is empty if no matching lyrics was found.
 */
function getLyrics(auth, artist, title, callback) {
	var parameters = null;
	if (artist !== "") {
		parameters += "&artist=" + artist;
	}
	if (title !== "") {
		parameters += "&title=" + title;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getLyrics", parameters);
}

/**
 * Returns the avatar (personal image) for a user.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username The user in question.
 * @param {function} callback Returns the avatar image in binary form.
 */
function getAvatar(auth, username, callback) {
	var parameters = "&username=" + username + "&";
	getDownload(auth, callback, "getAvatar", parameters);
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns the current status for media library scanning. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <scanStatus> element on success.
 */
function getScanStatus(auth, callback) {
	getResponseNode(auth, callback, "getScanStatus", "");
}

/**
 * Initiates a rescan of the media libraries. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <scanStatus> element on success.
 */
function startScan(auth, callback) {
	getResponseNode(auth, callback, "startScan", "");
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns all playlists a user is allowed to play.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username (Since 1.8.0) If specified, return playlists for this user rather than for the authenticated user. The authenticated user must have admin role if this parameter is used.
 * @param {function} callback Returns a <subsonic-response> element with a nested <playlists> element on success.
 */
function getPlaylists(auth, username, callback) {
	var parameters = null;
	if (username !== "") {
		parameters += "&username=" + username;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getPlaylists", parameters);
}

/**
 * Returns a listing of files in a saved playlist.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the playlist to return, as obtained by getPlaylists.
 * @param {function} callback Returns a <subsonic-response> element with a nested <playlist> element on success.
 */
function getPlaylist(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getPlaylist", parameters);
}

/**
 * Creates (or updates) a playlist.
 * @param   {object} auth       Authenticate Object.
 * @param   {number} playlistId The playlist ID.
 * @param   {string} name       The human-readable name of the playlist.
 * @param   {number} songId     ID of a song in the playlist. Use one songId parameter for each song in the playlist.
 * @param {function} callback Since 1.14.0 the newly created/updated playlist is returned. In earlier versions an empty <subsonic-response> element is returned.
 */
function createPlaylist(auth, playlistId, name, songId, callback) {
	var parameters = "&name=" + name;
	if (playlistId !== "") {
		parameters += "&playlistId=" + playlistId;
	}
	if (songId !== "") {
		parameters += "&songId=" + songId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createPlaylist", parameters);
}

/**
 * Updates a playlist. Only the owner of a playlist is allowed to update it.
 * @param   {object}  auth              Authenticate Object.
 * @param   {number}  playlistId        The playlist ID.
 * @param   {string}  name              The human-readable name of the playlist.
 * @param   {string}  comment           The playlist comment.
 * @param   {boolean} publicPlaylist    true if the playlist should be visible to all users, false otherwise.
 * @param   {number}  songIdToAdd       Add this song with this ID to the playlist. Multiple parameters allowed.
 * @param   {number}  songIndexToRemove Remove the song at this position in the playlist. Multiple parameters allowed.
 * @param {function} callback  Returns an empty <subsonic-response> element on success.
 */
function updatePlaylist(auth, playlistId, name, comment, publicPlaylist, songIdToAdd, songIndexToRemove, callback) {
	var parameters = "&playlistId=" + playlistId;
	if (name !== "") {
		parameters += "&name=" + name;
	}
	if (comment !== "") {
		parameters += "&comment=" + comment;
	}
	if (publicPlaylist !== "") {
		parameters += "&publicPlaylist=" + publicPlaylist;
	}
	if (songIdToAdd !== "") {
		parameters += "&songIdToAdd=" + songIdToAdd;
	}
	if (songIndexToRemove !== "") {
		parameters += "&songIndexToRemove=" + songIndexToRemove;
	}
	parameters += "&";
	getResponseNode(auth, callback, "updatePlaylist", parameters);
}

/**
 * Deletes a saved playlist.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the playlist to delete, as obtained by getPlaylists.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deletePlaylist(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deletePlaylist", parameters);
}

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

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Searching.js */

/**
 * Deprecated since 1.4.0, use search2 instead.
 * Returns a listing of files matching the given search criteria. Supports paging through the result.
 * @param {object}   auth      Authenticate Object.
 * @param {string}   artist    Artist to search for.
 * @param {string}   album     Album to searh for.
 * @param {string}   title     Song title to search for.
 * @param {boolean}  any       Searches all fields.
 * @param {number}   count     = 20 Maximum number of results to return.
 * @param {number}   offset    = 0 Search result offset. Used for paging.
 * @param {number}   newerThan Only return matches that are newer than this. Given as milliseconds since 1970.
 * @param {function} callback  Returns a <subsonic-response> element with a nested <searchResult> element on success.
 */
function search(auth, artist, album, title, any, count = 20, offset = 0, newerThan, callback) {
	var parameters = null;
	if (artist !== "") {
		parameters += "&artist=" + artist;
	}
	if (album !== "") {
		parameters += "&album=" + album;
	}
	if (title !== "") {
		parameters += "&title=" + title;
	}
	if (any !== "") {
		parameters += "&any=" + any;
	}
	if (count !== "") {
		parameters += "&count=" + count;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (newerThan !== "") {
		parameters += "&newerThan=" + newerThan;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search", parameters);
}

/**
 * Returns albums, artists and songs matching the given search criteria. Supports paging through the result.
 * @param   {object}   auth          Authenticate Object.
 * @param   {string}   query         Search query.
 * @param   {number}   artistCount   = 20 	Maximum number of artists to return.
 * @param   {number}   artistOffset  = 0 Search result offset for artists. Used for paging.
 * @param   {number}   albumCount    = 20  	Maximum number of albums to return.
 * @param   {number}   albumOffset   = 0  Search result offset for albums. Used for paging.
 * @param   {number}   songCount     = 20   Maximum number of songs to return.
 * @param   {number}   songOffset    = 0   	Search result offset for songs. Used for paging.
 * @param   {number}   musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @param {function} callback	      Returns a <subsonic-response> element with a nested <searchResult2> element on success. 
 */
function search2(auth, query, artistCount = 20, artistOffset = 0, albumCount = 20, albumOffset = 0, songCount = 20, songOffset = 0, musicFolderId, callback) {
	var parameters = "&query=" + query;
	if (artistCount !== "") {
		parameters += "&artistCount=" + artistCount;
	}
	if (artistOffset !== "") {
		parameters += "&artistOffset=" + artistOffset;
	}
	if (albumCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (albumOffset !== "") {
		parameters += "&albumOffset=" + albumOffset;
	}
	if (songCount !== "") {
		parameters += "&songCount=" + songCount;
	}
	if (songOffset !== "") {
		parameters += "&songOffset=" + songOffset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search2", parameters);
}

/**
 * Similar to search2, but organizes music according to ID3 tags.
 * @param   {object} auth          Authenticate Object.
 * @param   {string} query         Search query.
 * @param   {number} artistCount   = 20 	Maximum number of artists to return.
 * @param   {number} artistOffset  = 0 Search result offset for artists. Used for paging.
 * @param   {number} albumCount    = 20  	Maximum number of albums to return.
 * @param   {number} albumOffset   = 0  Search result offset for albums. Used for paging.
 * @param   {number} songCount     = 20   	Maximum number of songs to return.
 * @param   {number} songOffset    = 0   	Search result offset for songs. Used for paging.
 * @param   {number} musicFolderId (Since 1.12.0) Only return results from music folder with the given ID. See getMusicFolders.
 * @param {function} callback Returns a <subsonic-response> element with a nested <searchResult3> element on success. 
 */
function search3(auth, query, artistCount = 20, artistOffset = 0, albumCount = 20, albumOffset = 0, songCount = 20, songOffset = 0, musicFolderId, callback) {
	var parameters = "&query=" + query;
	if (artistCount !== "") {
		parameters += "&artistCount=" + artistCount;
	}
	if (artistOffset !== "") {
		parameters += "&artistOffset=" + artistOffset;
	}
	if (albumCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (albumOffset !== "") {
		parameters += "&albumOffset=" + albumOffset;
	}
	if (songCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (songOffset !== "") {
		parameters += "&songOffset=" + songOffset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search3", parameters);
}

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

/* jshint -W138 */
/* globals console, XMLHttpRequest */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Used to test connectivity with the server. Takes no extra parameters.
 * @param {object}   auth     The authenticate object.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function ping(auth, callback) {
	getResponseNode(auth, callback, "ping", "");
}

/**
 * Get details about the software license. Takes no extra parameters. Please note that access to the REST API requires that the server has a valid license (after a 30-day trial period). To get a license key you must upgrade to Subsonic Premium.
 * @param {object}   auth     The authenticate object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <license> element on success.
 */
function getLicense(auth, callback) {
	getResponseNode(auth, callback, "getLicense", "");
}

/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.
 * @param   {object}   auth     Authenticate Object.
 * @param   {string}   username The name of the user to retrieve. You can only retrieve your own user unless you have admin privileges.
 * @param   {function} callback Returns a <subsonic-response> element with a nested <user> element on success.
 */
function getUser(auth, username, callback) {
	var parameters = "&username=" + username + "&";
	getResponseNode(auth, callback, "getUser", parameters);
}

/**
 * Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <users> element on success.
 */
function getUsers(auth, callback) {
	getResponseNode(auth, callback, "getUsers", "");
}

/**
 * Creates a new Subsonic user, using the following parameters:
 * @param   {object}   auth                Authenticate Object.
 * @param   {string}   username            The name of the new user.
 * @param   {string}   password            The password of the new user, either in clear text of hex-encoded (see above).
 * @param   {string}   email               The email address of the new user.
 * @param   {boolean}  ldapAuthenticated   = false   Whether the user is authenicated in LDAP.
 * @param   {boolean}  adminRole           = false           Whether the user is administrator.
 * @param   {boolean}  settingsRole        = true         Whether the user is allowed to change personal settings and password.
 * @param   {boolean}  streamRole          = true           Whether the user is allowed to play files.
 * @param   {boolean}  jukeboxRole         = false         Whether the user is allowed to play files in jukebox mode.
 * @param   {boolean}  downloadRole        = false        	Whether the user is allowed to download files.
 * @param   {boolean}  uploadRole          = false          	Whether the user is allowed to upload files.
 * @param   {boolean}  playlistRole        = false        Whether the user is allowed to create and delete playlists. Since 1.8.0, changing this role has no effect.
 * @param   {boolean}  coverArtRole        = false        	Whether the user is allowed to change cover art and tags.
 * @param   {boolean}  commentRole         = false         Whether the user is allowed to create and edit comments and ratings.
 * @param   {boolean}  podcastRole         = false         Whether the user is allowed to administrate Podcasts.
 * @param   {boolean}  shareRole           = false           	(Since 1.8.0) Whether the user is allowed to share files with anyone.
 * @param   {boolean}  videoConversionRole = false (Since 1.15.0) Whether the user is allowed to start video conversions.
 * @param   {number}   musicFolderId       (Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.
 * @param   {function} callback            Returns an empty <subsonic-response> element on success.
 */
function createUser(auth, username, password, email, ldapAuthenticated = false, adminRole = false, settingsRole = true, streamRole = true, jukeboxRole = false, downloadRole = false, uploadRole = false, playlistRole = false, coverArtRole = false, commentRole = false, podcastRole = false, shareRole = false, videoConversionRole = false, musicFolderId, callback) {
	var parameters = "&username=" + username + "&password=" + password + "&email=" + email;
	if (ldapAuthenticated !== "") {
		parameters += "&ldapAuthenticated=" + ldapAuthenticated;
	}
	if (adminRole !== "") {
		parameters += "&adminRole=" + adminRole;
	}
	if (settingsRole !== "") {
		parameters += "&settingsRole=" + settingsRole;
	}
	if (streamRole !== "") {
		parameters += "&streamRole=" + streamRole;
	}
	if (jukeboxRole !== "") {
		parameters += "&jukeboxRole=" + jukeboxRole;
	}
	if (downloadRole !== "") {
		parameters += "&downloadRole=" + downloadRole;
	}
	if (uploadRole !== "") {
		parameters += "&uploadRole=" + uploadRole;
	}
	if (playlistRole !== "") {
		parameters += "&playlistRole=" + playlistRole;
	}
	if (coverArtRole !== "") {
		parameters += "&coverArtRole=" + coverArtRole;
	}
	if (commentRole !== "") {
		parameters += "&commentRole=" + commentRole;
	}
	if (podcastRole !== "") {
		parameters += "&podcastRole=" + podcastRole;
	}
	if (shareRole !== "") {
		parameters += "&shareRole=" + shareRole;
	}
	if (videoConversionRole !== "") {
		parameters += "&videoConversionRole=" + videoConversionRole;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createUser", parameters);
}

/**
 * Modifies an existing Subsonic user, using the following parameters:
 * @param   {object}   auth                Authenticate Object.
 * @param   {string}   username            The name of the user.
 * @param   {string}   password            The password of the user, either in clear text of hex-encoded (see above).
 * @param   {string}   email               The email address of the user.
 * @param   {boolean}  ldapAuthenticate    Whether the user is authenicated in LDAP.
 * @param   {boolean}  adminRole           Whether the user is administrator.
 * @param   {boolean}  settingsRole        Whether the user is allowed to change personal settings and password.
 * @param   {boolean}  streamRole          Whether the user is allowed to play files.
 * @param   {boolean}  jukeboxRole         Whether the user is allowed to play files in jukebox mode.
 * @param   {boolean}  downloadRole        Whether the user is allowed to download files.
 * @param   {boolean}  uploadRole          Whether the user is allowed to upload files.
 * @param   {boolean}  coverArtRole        Whether the user is allowed to change cover art and tags.
 * @param   {boolean}  commentRole         Whether the user is allowed to create and edit comments and ratings.
 * @param   {boolean}  podcastRole         Whether the user is allowed to administrate Podcasts.
 * @param   {boolean}  shareRole           Whether the user is allowed to share files with anyone.
 * @param   {boolean}  videoConversionRole (Since 1.15.0) Whether the user is allowed to start video conversions.
 * @param   {number}   musicFolderId       (Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.
 * @param   {number}   maxBitRate          (Since 1.13.0) The maximum bit rate (in Kbps) for the user. Audio streams of higher bit rates are automatically downsampled to this bit rate. Legal values: 0 (no limit), 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320.
 * @param   {function} callback            Returns an empty <subsonic-response> element on success.
 */
function updateUser(auth, username, password, email, ldapAuthenticate, adminRole, settingsRole, streamRole, jukeboxRole, downloadRole, uploadRole, coverArtRole, commentRole, podcastRole, shareRole, videoConversionRole, musicFolderId, maxBitRate, callback) {
	var parameters = "&username=" + username + "&password=" + password + "&email=" + email;
	if (ldapAuthenticated !== "") {
		parameters += "&ldapAuthenticated=" + ldapAuthenticated;
	}
	if (adminRole !== "") {
		parameters += "&adminRole=" + adminRole;
	}
	if (settingsRole !== "") {
		parameters += "&settingsRole=" + settingsRole;
	}
	if (streamRole !== "") {
		parameters += "&streamRole=" + streamRole;
	}
	if (jukeboxRole !== "") {
		parameters += "&jukeboxRole=" + jukeboxRole;
	}
	if (downloadRole !== "") {
		parameters += "&downloadRole=" + downloadRole;
	}
	if (uploadRole !== "") {
		parameters += "&uploadRole=" + uploadRole;
	}
	if (playlistRole !== "") {
		parameters += "&playlistRole=" + playlistRole;
	}
	if (coverArtRole !== "") {
		parameters += "&coverArtRole=" + coverArtRole;
	}
	if (commentRole !== "") {
		parameters += "&commentRole=" + commentRole;
	}
	if (podcastRole !== "") {
		parameters += "&podcastRole=" + podcastRole;
	}
	if (shareRole !== "") {
		parameters += "&shareRole=" + shareRole;
	}
	if (videoConversionRole !== "") {
		parameters += "&videoConversionRole=" + videoConversionRole;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	if (maxBitRate !== "") {
		parameters += "&maxBitRate=" + maxBitRate;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createUser", parameters);
}

/**
 * Deletes an existing Subsonic user, using the following parameters:
 * @param   {object}   auth     Authenticate Object.
 * @param   {string}   username The name of the user to delete.
 * @param   {function} callback Returns an empty <subsonic-response> element on success.
 */
function deleteUser(auth, username, callback) {
	var parameters = "&username=" + username + "&";
	getResponseNode(auth, callback, "deleteUser", parameters);
}

/**
 * Changes the password of an existing Subsonic user, using the following parameters. You can only change your own password unless you have admin privileges.
 * @param   {object}   auth     Authenticate Object.
 * @param   {string}   username The name of the user which should change its password.
 * @param   {string}   password The new password of the new user, either in clear text of hex-encoded (see above).
 * @param   {function} callback Returns an empty <subsonic-response> element on success.
 */
function changePassword(auth, username, password, callback) {
	var parameters = "&username=" + username + "&password=" + password;
	getResponseNode(auth, callback, "changePassword", "");
}

function md5cycle(x, k) {
	var a = x[0],
		b = x[1],
		c = x[2],
		d = x[3];

	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17, 606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12, 1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7, 1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7, 1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22, 1236535329);

	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14, 643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9, 38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5, 568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20, 1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14, 1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);

	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16, 1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11, 1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4, 681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23, 76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16, 530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);

	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10, 1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6, 1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6, 1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21, 1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15, 718787259);
	b = ii(b, c, d, a, k[9], 21, -343485551);

	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
	txt = '';
	var n = s.length,
		state = [1732584193, -271733879, -1732584194, 271733878],
		i;
	for (i = 64; i <= s.length; i += 64) {
		md5cycle(state, md5blk(s.substring(i - 64, i)));
	}
	s = s.substring(i - 64);
	var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (i = 0; i < s.length; i++)
		tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	if (i > 55) {
		md5cycle(state, tail);
		for (i = 0; i < 16; i++)
			tail[i] = 0;
	}
	tail[14] = n * 8;
	md5cycle(state, tail);
	return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) {
	/* I figured global was faster.   */
	var md5blks = [],
		i;
	/* Andy King said do it this way. */
	for (i = 0; i < 64; i += 4) {
		md5blks[i >> 2] = s.charCodeAt(i) +
			(s.charCodeAt(i + 1) << 8) +
			(s.charCodeAt(i + 2) << 16) +
			(s.charCodeAt(i + 3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
	var s = '',
		j = 0;
	for (; j < 4; j++)
		s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
		hex_chr[(n >> (j * 8)) & 0x0F];
	return s;
}

function hex(x) {
	for (var i = 0; i < x.length; i++)
		x[i] = rhex(x[i]);
	return x.join('');
}

function md5(s) {
	return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
	return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	function add32(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF),
			msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
}
