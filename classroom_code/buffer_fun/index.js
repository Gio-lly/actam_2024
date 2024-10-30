
const c = new AudioContext();
//sus is boolean(true = sine, false  = noise)
function createABuffer(sus,freq){
     return function() {
        //create by default a buffer
        const b = c.createBuffer(1, c.sampleRate * 2, 
        c.sampleRate);
        alpha = Math.PI*2*f/c.sampleRate;
        const audioData = b.getChannelData(0);
         //if !sus, fill it with nois and return
        if(!sus){
            for(var i=0; i<audioData.length; i++) {
            audioData[i] = Math.random();   
            }
         return b;
        }
        //else fill it with sine
        for(var i=0; i<audioData.length; i++) {
            audioData[i] = Math.sin(alpha*i);   
        }
        return b;
    }
}
function playBuffer(bufferCreator) {

    b = bufferCreator();
 
    const bs = c.createBufferSource();
    bs.buffer = b;
    bs.connect(c.destination);
    bs.start();

}

function stop() {
    c.suspend();
}
