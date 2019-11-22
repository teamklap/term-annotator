const gifFrames = require('gif-frames')

module.exports = function (gif, id) {
    gifFrames({ url: gif, frames: 0, outputType: 'canvas' },
        function (err, frameData) {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(id,document.getElementById(id) )
            console.log(document.getElementById(id).childNodes)
            if(document.getElementById(id).childNodes[0]){
                document.getElementById(id).removeChild(document.getElementById(id).childNodes[0]);
            }

            document.getElementById(id).appendChild(frameData[0].getImage());
        }
    );
}