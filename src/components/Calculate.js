
export default function calculate(h, r, s){
    let arr = [];
    let a = {x:0, y:0, z:parseInt(h)}
    for (var i = 0; i < s; i++){
        var p1 = {x:0, y:0, z:0}
        var p2 = {x:0, y:0, z:0}
        p1.x = r*Math.cos(2*Math.PI*i/s).toFixed(3)
        p1.y = r*Math.sin(2*Math.PI*i/s).toFixed(3)

        if (i == s-1){
            p2.x = r*Math.cos(2*Math.PI*0/s).toFixed(3)
            p2.y = r*Math.sin(2*Math.PI*0/s).toFixed(3)
        } else {
            p2.x = r*Math.cos(2*Math.PI*(i+1)/s).toFixed(3)
            p2.y = r*Math.sin(2*Math.PI*(i+1)/s).toFixed(3)
        }

        arr.push({a, p1, p2})
    }

    return arr
}