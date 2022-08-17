// https://qiita.com/1pp0/items/a3f0ea14910e25f49878
function openCamera(){
    var video = document.querySelector('video');
    navigator.mediaDevices = navigator.mediaDevices
    || ((navigator.mozGueUserMedia
    || navigator.webkitGetUserMedia) ? {
        getUserMedia: function(c){
            return new Promise(function(y, n){
                (navigator.mozGueUserMedia || navigator.webkitGetUserMedia).call(navigator, c, y, n);
            });
        }
    } : null);
    var constraints = {video: { facingMode: 'environment', width: 960, height: 640}};
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream){
        video.srcObject = stream;
        video.onloadeddata = function(e){
            video.play();
        };
    })
    .catch(function(err){
        console.log(err);
    });
}