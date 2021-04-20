let req = {}
let query = ""
let netid = "llr39877"
let pw = "snow806772"
let results = []

customerStates.onshow = function() {
  drpCustStates.clear()
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=llr39877&pass=snow806772&database=llr39877&query=SELECT state FROM customer");
  results = JSON.parse(req1.responseText)
  if (results.length == 0) {
    console.log = "There are no states in the database."
  } else {
    for (i = 0; i < results.length; i++)
      drpCustStates.addItem(results[i])
  }
}

drpCustStates.onclick = function(s) {
  if (typeof(s) == 'object') {
    return
  } else {
    lstgCustomers.addItem(s)
  }
}