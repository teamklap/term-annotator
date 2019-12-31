const gifFrames = require('gif-frames');

/**
 * @param {String} gif - path to a gif file
 * @param {String} id - id of a cell in the ui table
 */
module.exports = function (gif, id) {
	gifFrames({url: gif, frames: 0, outputType: 'canvas'},
		(err, frameData) => {
			if (err) {
				console.log(err);
				throw err;
			}

			if (document.querySelector('#' + id).childNodes[0]) {
				document.querySelector('#' + id).removeChild(document.querySelector('#' + id).childNodes[0]);
			}

			document.querySelector('#' + id).append(frameData[0].getImage());
		}
	);
};
