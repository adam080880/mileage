module.exports = function(start, end) {
    let speed = 6
    let distance = 0
    start = new Date(`2020-05-06T${start}`)
    end = new Date(`2020-05-06T${end}`)    

    let current_ = end.getTime() - start.getTime()      

    const toMinute = (second) => second / 60

    for(let a = 0; a < (current_/1000); a++) {
        
        if(toMinute(a) == 5) speed+=2

        if((toMinute(a)-5) % 10 == 0) {
            if(toMinute(a) != 5) speed++
        }

        distance += speed

    }

    return distance / 1000
}