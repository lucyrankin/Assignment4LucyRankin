favBabyNames.onshow = function() {
imgBaby.hidden = true
    drpBabyNames.clear()
    for (i = 0; i < 5; i++)
        drpBabyNames.addItem(names[i])
}
drpBabyNames.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        drpBabyNames.value = s
        lblMessage2.value = `Your favorite baby name is ${s}.`
       imgBaby.hidden = false
    }
}