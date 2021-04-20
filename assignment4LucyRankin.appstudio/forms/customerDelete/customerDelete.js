btnDisplayNames.onclick = function() {
  selName.clear()
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=llr39877&pass=snow806772&database=llr39877&query=SELECT name FROM customer");
  if (req1.status == 200) {
    results = JSON.parse(req1.responseText)
    if (results.length == 0) {
      console.log = "There are no names in the database."
    } else {
      for (i = 0; i < results.length; i++)
        selName.addItem(results[i])
    }
  }
}

selName.onchange = function() {
  let customerNameDelete = selName.value
  let found = true
  console.log(customerNameDelete)
  for (i = 0; i < results.length; i++) {
    if (customerNameDelete == results[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblMessage.textContent = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = '" + customerNameDelete + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=llr39877&pass=snow806772!&database=llr39877&query=" + query)
    if (req.status == 200) //transit worked.
      if (req.responseText == 500)
        lblMessage.textContent = `You have successfully deleted the customer named ${customerNameDelete}. Please refresh the page.`
    else
      lblMessage.textContent = `There was a problem deleting ${customerNameDelete} from the database.`
    else
      lblMessage.textContent = `Error: ${req.status}`
  }
}