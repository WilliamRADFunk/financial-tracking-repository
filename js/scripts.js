function processLogin(e) {
	killDefaultEvent(e);
	var name = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	return login(name, pwd);
}
function processIncomeEntry(e) {
	killDefaultEvent(e);
	var client = document.getElementById("client").value.replace(/[^\w\s\/-]/gi, '');
	var invoice = document.getElementById("invoice-number").value.replace(/[^\w\s]/gi, '');
	var country = document.getElementById("income_country").value.replace(/[^\w\s]/gi, '');
	var subDate = document.getElementById("date-submitted").value.replace(/[^\w\s]/gi, '');
	var recDate = document.getElementById("date-received").value.replace(/[^\w\s]/gi, '');
	var depDate = document.getElementById("date-deposited").value.replace(/[^\w\s]/gi, '');
	var income = document.getElementById("amount").value.replace(/[^\w\s]/gi, '');
	var taxes = document.getElementById("taxes").value.replace(/[^\w\s]/gi, '');
	var payee = document.getElementById("payee").value.replace(/[^\w\s]/gi, '');
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
function processExpenseEntry(e) {
	killDefaultEvent(e);
	var company = document.getElementById("company-name").value.replace(/[^\w\s\/-]/gi, '');
	var paidDate = document.getElementById("date-paid").value.replace(/[^\w\s]/gi, '');
	var category = document.getElementById("category").value.replace(/[^\w\s\/-]/gi, '');
	var taxLocal = document.getElementById("taxes-local").value.replace(/[^\w\s]/gi, '');
	var taxFed = document.getElementById("taxes-fed").value.replace(/[^\w\s]/gi, '');
	var country = document.getElementById("expense_country").value.replace(/[^\w\s]/gi, '');
	var amount = document.getElementById("amount").value.replace(/[^\w\s]/gi, '');
	var expensePackage = {
		company: company,
		paidDate: paidDate,
		category: category,
		taxLocal: taxLocal,
		taxFed: taxFed,
		country: country,
		amount: amount
	};
	document.getElementById("form_expense").reset();
	return expenseEntry(expensePackage);
}
function processBorrowEntry(e) {
	killDefaultEvent(e);
	var purpose = document.getElementById("purpose").value.replace(/[^\w\s\/-]/gi, '');
	var person = document.getElementById("borrow_person").value.replace(/[^\w\s]/gi, '');
	var country = document.getElementById("borrow_country").value.replace(/[^\w\s]/gi, '');
	var transDate = document.getElementById("date-trans").value.replace(/[^\w\s]/gi, '');
	var subtract = document.getElementById("subtracted").value.replace(/[^\w\s]/gi, '');
	var add = document.getElementById("added").value.replace(/[^\w\s]/gi, '');
	var borrow = document.getElementById("borrowed").value.replace(/[^\w\s]/gi, '');
	var borrowPackage = {
		purpose: purpose,
		person: person,
		country: country,
		transDate: transDate,
		subtracted: subtract,
		added: add,
		borrowed: borrow
	};
	document.getElementById("form_borrow").reset();
	return borrowEntry(borrowPackage);
}
function processReportTable(e) {
	killDefaultEvent(e);
	var category = document.getElementById("report_category").value.replace(/[^\w\s\/-]/gi, '');
	var country = document.getElementById("report_country").value.replace(/[^\w\s]/gi, '');
	var reportPackage = {
		category: category,
		country: country
	};

	return reportTable(reportPackage);
}
function populateTable(data, category) {
	tableData = data;
	document.getElementById("header_table").innerHTML = category;
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