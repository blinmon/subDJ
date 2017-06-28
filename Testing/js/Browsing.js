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
