function processLogin(e) {
	killDefaultEvent(e);
	var name = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	return login(name, pwd);
}
function processIncomeEntry(e) {
	killDefaultEvent(e);
	var client = document.getElementById("client").value;
	var invoice = document.getElementById("invoice-number").value;
	var country = document.getElementById("country").value;
	var subDate = document.getElementById("date-submitted").value;
	var recDate = document.getElementById("date-received").value;
	var depDate = document.getElementById("date-deposited").value;
	var income = document.getElementById("amount").value;
	var taxes = document.getElementById("taxes").value;
	var payee = document.getElementById("payee").value;
	var incomePackage = {
		client: client,
		invoice: invoice,
		country: country,
		subDate: subDate,
		recDate: recDate,
		depDate: depDate,
		income: income,
		taxes: taxes,
		payee: payee
	};
	document.getElementById("form_income").reset();
	return incomeEntry(incomePackage);
}
function killDefaultEvent(e) {
	e.preventDefault();
	e.stopPropagation();
}
function callModal(modalName) {
	$(function () {
		$("#" + modalName).dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
	});
}