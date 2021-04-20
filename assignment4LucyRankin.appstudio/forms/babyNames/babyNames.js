let names = []
btnEnter.onclick = function() {
  if (names.length == 5)
    lblNames.value = 'You have already picked your 5 favorite baby names. Click the "Click Me" button to go to the next page.'
  else
    names.push(selBabyNames.text)
}

btnFavBabyNames.onclick = function() {
  ChangeForm(favBabyNames)
}