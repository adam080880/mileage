function separate_time(_param) {
    let time = _param.split(':')

    return {
        hour: parseInt(time[0]),
        minute: parseInt(time[1]),
        second: parseInt(time[2])
    }
}

function toSecond(separated_time) {
    return separated_time.hour * 3600 + separated_time.minute * 60 + separated_time.second
}

function toMinute(from_second) {
    return from_second / 60
}

function mileage(_start, _end) {
    let start = separate_time(_start)
    let end = separate_time(_end)
    let speed = 6
    let total_distance = 0
    
    let start_after_five_minute = 5 * 60
    total_distance += speed*5*60
    speed += 2        

    let count_on_second = toSecond(end) - toSecond(start)
    console.log(count_on_second)
    if(count_on_second < 0) return false    

    for(let a = start_after_five_minute; a < count_on_second; a++) {
        if(toMinute(a) % 10 == 0) speed++

        total_distance += speed //counter distance
    }    

    return total_distance / 1000
}

module.exports = mileage