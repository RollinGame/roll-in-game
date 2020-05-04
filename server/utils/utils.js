const getParsedDate = (strDate) => {
    let date = new Date(strDate)
    let dd = date.getDate()
    let m = date.getMonth() + 1
    let yyyy = date.getFullYear()
    let hh = date.getHours()
    let mm = date.getMinutes()

    if (dd < 10) {
        dd = `0${dd}`
    }
    if (mm < 10) {
        mm = `0${m}`
    }
    date = `${dd}.${m}.${yyyy} ${hh}:${mm}`
    return date.toString()
}

module.exports = getParsedDate;