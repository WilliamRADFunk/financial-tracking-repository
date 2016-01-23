var tableData = [];
/**********Root Element starts here ***************************************************************/
var Project = React.createClass({
	displayName: "Project",

	getInitialState: function () {
		return { phase: "Login" };
	},
	handleClick: function (e) {
		if (e.currentTarget.id === "btn_entry") this.setState({ phase: "InputType" });else if (e.currentTarget.id === "btn_reports") this.setState({ phase: "ReportType" });else if (e.currentTarget.id === "btn_income") this.setState({ phase: "Income" });else if (e.currentTarget.id === "btn_expense") this.setState({ phase: "Expense" });else if (e.currentTarget.id === "btn_borrow") this.setState({ phase: "Borrow" });else if (e.currentTarget.id === "btn_tableSelection") this.setState({ phase: "TableSelection" });else if (e.currentTarget.id === "btn_GraphSelection") this.setState({ phase: "GraphSelection" });else if (e.currentTarget.innerHTML === "Homepage") this.setState({ phase: "Navigate" });else if (e.currentTarget.innerHTML === "Entry type") this.setState({ phase: "InputType" });else if (e.currentTarget.innerHTML === "Report type") this.setState({ phase: "ReportType" });else this.setState({ phase: "Login" });
	},
	onPhaseChange: function (phase) {
		console.log("Phase changed");
		this.setState({ phase: phase });
	},
	render: function () {

		if (this.state.phase === "Login") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Login, { onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "Navigate") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						)
					)
				),
				React.createElement(
					"div",
					{ id: "nav_box" },
					React.createElement(
						"button",
						{ id: "btn_entry", onClick: this.handleClick },
						"MAKE AN ENTRY"
					),
					React.createElement(
						"button",
						{ id: "btn_reports", onClick: this.handleClick },
						"VIEW REPORTS"
					)
				),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "InputType") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Entry type"
						)
					)
				),
				React.createElement(
					"div",
					{ id: "nav_box-entry-type" },
					React.createElement(
						"button",
						{ id: "btn_income", onClick: this.handleClick },
						"INCOME"
					),
					React.createElement(
						"button",
						{ id: "btn_expense", onClick: this.handleClick },
						"EXPENSE"
					),
					React.createElement(
						"button",
						{ id: "btn_borrow", onClick: this.handleClick },
						"BORROW"
					)
				),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "Income") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Income, { onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "Expense") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Expense, { onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "Borrow") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Borrow, { onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "ReportType") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Report type"
						)
					)
				),
				React.createElement(
					"div",
					{ id: "nav_box-entry-type" },
					React.createElement(
						"button",
						{ id: "btn_tableSelection", onClick: this.handleClick },
						"TABULAR"
					),
					React.createElement(
						"button",
						{ id: "btn_graphSelection", onClick: this.handleClick },
						"GRAPHICAL"
					)
				),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "TableSelection") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Report, { data: "Table", onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else if (this.state.phase === "GraphSelection") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Report, { data: "Graph", onPhaseChange: this.onPhaseChange }),
				React.createElement(Footer, null)
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(
					"p",
					null,
					"Try again"
				),
				React.createElement(Footer, null)
			);
		}
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Modal Elements starts here *************************************************************/
var SuccessModal = React.createClass({
	displayName: "SuccessModal",

	render: function () {
		return React.createElement(
			"div",
			{ id: "dialog-success", title: "Entry Complete" },
			React.createElement(
				"p",
				null,
				"Your entry was successful."
			)
		);
	}
});
var FailedModal = React.createClass({
	displayName: "FailedModal",

	render: function () {
		return React.createElement(
			"div",
			{ id: "dialog-failed-entry", title: "Entry Failed" },
			React.createElement(
				"p",
				null,
				"Your entry failed. Contact your application developer."
			)
		);
	}
});
var FailedLogin = React.createClass({
	displayName: "FailedLogin",

	render: function () {
		return React.createElement(
			"div",
			{ id: "dialog-failed-Login", title: "Invalid Login" },
			React.createElement(
				"p",
				null,
				"The username or password you entered didn't match our records."
			)
		);
	}
});
var NoKeyModal = React.createClass({
	displayName: "NoKeyModal",

	render: function () {
		return React.createElement(
			"div",
			{ id: "dialog-no-key", title: "Not Logged In" },
			React.createElement(
				"p",
				null,
				"You are not logged in. Log back in, and resubmit your entry."
			)
		);
	}
});
/**********Modal Elements ends here ***************************************************************/
/**********Header & Footer Elements start here ****************************************************/
var Header = React.createClass({
	displayName: "Header",

	render: function () {
		return React.createElement(
			"header",
			null,
			React.createElement(
				"h1",
				null,
				"Financial Tracking Repository"
			)
		);
	}
});
var Footer = React.createClass({
	displayName: "Footer",

	render: function () {
		return React.createElement(
			"footer",
			null,
			React.createElement(
				"div",
				{ id: "external_links" },
				React.createElement(
					"h2",
					null,
					"External Links"
				),
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "http://williamrobertfunk.com" },
							"Portfolio Site"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "https://github.com/WilliamRADFunk" },
							"Github Repository"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "http://www.williamrobertfunk.com/assets/Resume.pdf" },
							"Download Resume"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "mailto:contact@williamradfunk.com?Subject=Programming%20Related:" },
							"Send Mail"
						)
					)
				)
			)
		);
	}
});
/**********Header & Footer Elements end here ******************************************************/
/**********Login Elements start here **************************************************************/
var Login = React.createClass({
	displayName: "Login",

	getInitialState: function () {
		return {
			modal: false
		};
	},
	handleClick: function (e) {
		if (processLogin(e) == "true") this.props.onPhaseChange("Navigate");else {
			this.setState({ modal: true });
			callModal("dialog-failed-Login");
		}
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(FailedLogin, { display: this.state.modal }),
			React.createElement(
				"form",
				{ id: "form_login", method: "post" },
				React.createElement(
					"h2",
					null,
					"Login"
				),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"p",
						null,
						React.createElement(
							"label",
							{ htmlFor: "username" },
							"Username:"
						)
					),
					React.createElement("input", { id: "username", type: "text", autofocus: true }),
					React.createElement(
						"p",
						null,
						React.createElement(
							"label",
							{ htmlFor: "password" },
							"Password:"
						)
					),
					React.createElement("input", { id: "password", type: "password" }),
					React.createElement("hr", null),
					React.createElement("input", { className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
				)
			)
		);
	}
});
/**********Login Elements end here ****************************************************************/
/**********Entry Elements start here *************************************************************/
var Income = React.createClass({
	displayName: "Income",

	getInitialState: function () {
		return {
			modalFail: false,
			modalSuccess: false,
			modalNoKey: true
		};
	},
	handleSubmissionResponse: function (result) {
		if (result === "true") {
			this.setState({ modalSuccess: true });
			callModal("dialog-success");
		} else if (result === "No Key") {
			this.setState({ modalNoKey: true });
			callModal("dialog-no-key");
		} else {
			this.setState({ modalFail: true });
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function (e) {
		if (e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");else if (e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");else if (e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processIncomeEntry(e));
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"ul",
				{ className: "breadcrumbs" },
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Homepage"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Entry type"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Income"
					)
				)
			),
			React.createElement(SuccessModal, { display: this.state.modalSuccess }),
			React.createElement(FailedModal, { display: this.state.modalFail }),
			React.createElement(NoKeyModal, { display: this.state.modalNoKey }),
			React.createElement(
				"form",
				{ id: "form_income", method: "post" },
				React.createElement(
					"h2",
					null,
					"Income"
				),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "client" },
								"Client:"
							)
						),
						React.createElement("input", { id: "client", type: "text", autofocus: true })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "invoice-number" },
								"Invoice #:"
							)
						),
						React.createElement("input", { id: "invoice-number", type: "number" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "income_country" },
								"Country:"
							)
						),
						React.createElement(
							"select",
							{ id: "income_country" },
							React.createElement(
								"option",
								{ value: "usa" },
								"USA"
							),
							React.createElement(
								"option",
								{ value: "canada" },
								"Canada"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "date-submitted" },
								"Date Submitted:"
							)
						),
						React.createElement("input", { id: "date-submitted", type: "date" })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "date-received" },
								"Date Received:"
							)
						),
						React.createElement("input", { id: "date-received", type: "date" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "date-deposited" },
								"Date Deposited:"
							)
						),
						React.createElement("input", { id: "date-deposited", type: "date" })
					),
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "amount" },
								"Full Amount $:"
							)
						),
						React.createElement("input", { id: "amount", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "taxes" },
								"Tax %:"
							)
						),
						React.createElement("input", { id: "taxes", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "payee" },
								"Payee:"
							)
						),
						React.createElement(
							"select",
							{ id: "payee" },
							React.createElement(
								"option",
								{ id: "andrea", value: "andrea" },
								"Andrea"
							),
							React.createElement(
								"option",
								{ id: "bill", value: "bill" },
								"Bill"
							),
							React.createElement(
								"option",
								{ id: "donna", value: "donna" },
								"Donna"
							)
						)
					),
					React.createElement("hr", null),
					React.createElement("input", { id: "btn_subinc", className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
				)
			)
		);
	}
});
var Expense = React.createClass({
	displayName: "Expense",

	getInitialState: function () {
		return {
			modalFail: false,
			modalSuccess: false,
			modalNoKey: true
		};
	},
	handleSubmissionResponse: function (result) {
		if (result === "true") {
			this.setState({ modalSuccess: true });
			callModal("dialog-success");
		} else if (result === "No Key") {
			this.setState({ modalNoKey: true });
			callModal("dialog-no-key");
		} else {
			this.setState({ modalFail: true });
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function (e) {
		if (e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");else if (e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");else if (e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processExpenseEntry(e));
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"ul",
				{ className: "breadcrumbs" },
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Homepage"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Entry type"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Expense"
					)
				)
			),
			React.createElement(SuccessModal, { display: this.state.modalSuccess }),
			React.createElement(FailedModal, { display: this.state.modalFail }),
			React.createElement(NoKeyModal, { display: this.state.modalNoKey }),
			React.createElement(
				"form",
				{ id: "form_expense", method: "post" },
				React.createElement(
					"h2",
					null,
					"Expense"
				),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "company-name" },
								"Company Name:"
							)
						),
						React.createElement("input", { id: "company-name", type: "text", autofocus: true })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "date-paid" },
								"Date Paid:"
							)
						),
						React.createElement("input", { id: "date-paid", type: "date" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "category" },
								"Category:"
							)
						),
						React.createElement(
							"select",
							{ id: "category" },
							React.createElement(
								"option",
								{ id: "expense_mortgage", value: "mortage" },
								"Mortgage"
							),
							React.createElement(
								"option",
								{ id: "expense_hoa", value: "hoa" },
								"HOA"
							),
							React.createElement(
								"option",
								{ id: "expense_phone", value: "phone" },
								"Phone"
							),
							React.createElement(
								"option",
								{ id: "expense_internet", value: "internet" },
								"Internet"
							),
							React.createElement(
								"option",
								{ id: "expense_water", value: "water" },
								"Water"
							),
							React.createElement(
								"option",
								{ id: "expense_electricity", value: "electricity" },
								"Electricity"
							),
							React.createElement(
								"option",
								{ id: "expense_home-warranty", value: "homeWarranty" },
								"Home Warranty"
							),
							React.createElement(
								"option",
								{ id: "expense_tuition/books", value: "tuition/books" },
								"Tuition + Books"
							),
							React.createElement(
								"option",
								{ id: "expense_health-insurance", value: "healthInsurance" },
								"Health Insurance"
							),
							React.createElement(
								"option",
								{ id: "expense_car-insurance", value: "carInsurance" },
								"Car Insurance"
							),
							React.createElement(
								"option",
								{ id: "expense_car-repair", value: "carRepair" },
								"Car Repair"
							),
							React.createElement(
								"option",
								{ id: "expense_bank-fees", value: "bankFees" },
								"Bank Fees"
							),
							React.createElement(
								"option",
								{ id: "expense_coffee", value: "coffee" },
								"Coffee"
							),
							React.createElement(
								"option",
								{ id: "expense_medical", value: "medical" },
								"Medical"
							),
							React.createElement(
								"option",
								{ id: "expense_school-materials", value: "schoolMaterials" },
								"School Materials"
							),
							React.createElement(
								"option",
								{ id: "expense_office-supplies", value: "officeSupplies" },
								"Office Supplies"
							),
							React.createElement(
								"option",
								{ id: "expense_restaurants", value: "restaurants" },
								"Restaurants"
							),
							React.createElement(
								"option",
								{ id: "expense_entertainment", value: "entertainment" },
								"Entertainment"
							),
							React.createElement(
								"option",
								{ id: "expense_transport", value: "transport" },
								"Transport"
							),
							React.createElement(
								"option",
								{ id: "expense_groceries", value: "groceries" },
								"Groceries"
							),
							React.createElement(
								"option",
								{ id: "expense_clothing", value: "clothing" },
								"Clothing"
							),
							React.createElement(
								"option",
								{ id: "expense_books/games", value: "books/games" },
								"Books/Games"
							),
							React.createElement(
								"option",
								{ id: "expense_furniture/household", value: "furniture/household" },
								"Furniture/Household"
							),
							React.createElement(
								"option",
								{ id: "expense_writing", value: "writing" },
								"Writing"
							),
							React.createElement(
								"option",
								{ id: "expense_hygiene", value: "hygiene" },
								"Hygiene"
							),
							React.createElement(
								"option",
								{ id: "expense_gifts", value: "gifts" },
								"Gifts"
							),
							React.createElement(
								"option",
								{ id: "expense_accountant", value: "accountant" },
								"Accountant"
							),
							React.createElement(
								"option",
								{ id: "expense_skype", value: "skype" },
								"Skype"
							),
							React.createElement(
								"option",
								{ id: "expense_netflix", value: "netflix" },
								"Netflix"
							),
							React.createElement(
								"option",
								{ id: "expense_scotia-insurance-1", value: "scotiaInsurance1" },
								"Scotia Insurance 1"
							),
							React.createElement(
								"option",
								{ id: "expense_scotia-insurance-1", value: "scotiaInsurance2" },
								"Scotia Insurance 2"
							),
							React.createElement(
								"option",
								{ id: "expense_sunlife-insurance", value: "sunlifeInsurance" },
								"Sunlife Insurance"
							),
							React.createElement(
								"option",
								{ id: "expense_one-and-one-and-related", value: "oneAndOneAndRelated" },
								"1and1 + Related"
							),
							React.createElement(
								"option",
								{ id: "expense_jewelry/art", value: "jewelry/art" },
								"Jewelry/Art"
							),
							React.createElement(
								"option",
								{ id: "expense_other", value: "other" },
								"Other"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "taxes-local" },
								"Local Tax %:"
							)
						),
						React.createElement("input", { id: "taxes-local", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "taxes-fed" },
								"Federal Tax %:"
							)
						),
						React.createElement("input", { id: "taxes-fed", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "expense_country" },
								"Country:"
							)
						),
						React.createElement(
							"select",
							{ id: "expense_country" },
							React.createElement(
								"option",
								{ value: "usa" },
								"USA"
							),
							React.createElement(
								"option",
								{ value: "canada" },
								"Canada"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "amount" },
								"Full Amount $:"
							)
						),
						React.createElement("input", { id: "amount", type: "text" })
					),
					React.createElement("hr", null),
					React.createElement("input", { id: "btn_subexp", className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
				)
			)
		);
	}
});
var Borrow = React.createClass({
	displayName: "Borrow",

	getInitialState: function () {
		return {
			modalFail: false,
			modalSuccess: false,
			modalNoKey: true
		};
	},
	handleSubmissionResponse: function (result) {
		if (result === "true") {
			this.setState({ modalSuccess: true });
			callModal("dialog-success");
		} else if (result === "No Key") {
			this.setState({ modalNoKey: true });
			callModal("dialog-no-key");
		} else {
			this.setState({ modalFail: true });
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function (e) {
		if (e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");else if (e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");else if (e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processBorrowEntry(e));
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"ul",
				{ className: "breadcrumbs" },
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Homepage"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Entry type"
					),
					"  >  "
				),
				React.createElement(
					"li",
					{ className: "breadcrumb" },
					React.createElement(
						"span",
						{ className: "breadcrumb-label", onClick: this.handleClick },
						"Borrow"
					)
				)
			),
			React.createElement(SuccessModal, { display: this.state.modalSuccess }),
			React.createElement(FailedModal, { display: this.state.modalFail }),
			React.createElement(NoKeyModal, { display: this.state.modalNoKey }),
			React.createElement(
				"form",
				{ id: "form_borrow", method: "post" },
				React.createElement(
					"h2",
					null,
					"Expense"
				),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "subtracted" },
								"Subtract:"
							)
						),
						React.createElement("input", { id: "subtracted", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "borrowed" },
								"Borrowed:"
							)
						),
						React.createElement("input", { id: "borrowed", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "added" },
								"Added:"
							)
						),
						React.createElement("input", { id: "added", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "input left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "borrow_country" },
								"Country:"
							)
						),
						React.createElement(
							"select",
							{ id: "borrow_country" },
							React.createElement(
								"option",
								{ value: "usa" },
								"USA"
							),
							React.createElement(
								"option",
								{ value: "canada" },
								"Canada"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "input middle" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "borrow_person" },
								"Person:"
							)
						),
						React.createElement(
							"select",
							{ id: "borrow_person" },
							React.createElement(
								"option",
								{ id: "borrow_local", value: "local" },
								"Local"
							),
							React.createElement(
								"option",
								{ id: "borrow_fam", value: "fam" },
								"Fam"
							),
							React.createElement(
								"option",
								{ id: "borrow_omar", value: "omar" },
								"Omar"
							),
							React.createElement(
								"option",
								{ id: "borrow_taxes", value: "taxes" },
								"Taxes"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "input right" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "date-trans" },
								"Date of Transaction:"
							)
						),
						React.createElement("input", { id: "date-trans", type: "date" })
					),
					React.createElement(
						"div",
						{ className: "input-full left" },
						React.createElement(
							"p",
							null,
							React.createElement(
								"label",
								{ htmlFor: "purpose" },
								"Purpose:"
							)
						),
						React.createElement("input", { id: "purpose", type: "text" })
					),
					React.createElement("hr", null),
					React.createElement("input", { id: "btn_subbor", className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
				)
			)
		);
	}
});
/**********Entry Elements end here ***************************************************************/
/**********Reporting Elements start here *************************************************************/
var Report = React.createClass({
	displayName: "Report",

	getInitialState: function () {
		return {
			modalFail: false,
			modalSuccess: false,
			modalNoKey: true,
			category: "",
			data: [],
			phase: "select"
		};
	},
	handleSubmissionResponse: function (result) {
		if (result === "true") {
			this.setState({ modalSuccess: true });
			callModal("dialog-success");
		} else if (result === "No Key") {
			this.setState({ modalNoKey: true });
			callModal("dialog-no-key");
		} else {
			this.setState({ modalFail: true });
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function (e) {
		if (e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");else if (e.currentTarget.innerHTML === "Report type") this.props.onPhaseChange("ReportType");else if (e.currentTarget.innerHTML === "Tabular") this.setState({ phase: "select" });else if (e.currentTarget.value === "SUBMIT") {
			var category = document.getElementById("report_category").value;
			var cat = "";
			if (category.substring(0, 6) === "income") cat = "Income";else if (category.substring(0, 7) === "expense") cat = "Expense";else if (category.substring(0, 6) === "borrow") cat = "Borrow";

			if (this.props.data === "Table") {
				this.setState({ category: cat, data: processReportTable(e), phase: "Table Report" });
			} else {
				this.setState({ category: cat, data: processReportGraph(e), phase: "Graph Report" });
			}
		}
	},
	render: function () {
		if (this.state.phase === "select") {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Report type"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							this.props.data,
							" Criteria"
						)
					)
				),
				React.createElement(SuccessModal, { display: this.state.modalSuccess }),
				React.createElement(FailedModal, { display: this.state.modalFail }),
				React.createElement(NoKeyModal, { display: this.state.modalNoKey }),
				React.createElement(
					"form",
					{ id: "form_report", method: "post" },
					React.createElement(
						"h2",
						null,
						"Report - ",
						this.props.data,
						" Format"
					),
					React.createElement(
						"div",
						{ className: "content" },
						React.createElement(
							"div",
							{ className: "input left report" },
							React.createElement(
								"p",
								null,
								React.createElement(
									"label",
									{ htmlFor: "report_category" },
									"Category:"
								)
							),
							React.createElement(
								"select",
								{ id: "report_category" },
								React.createElement(
									"option",
									{ value: "income-all" },
									"Income - All"
								),
								React.createElement(
									"option",
									{ value: "income-andrea" },
									"Income - Andrea"
								),
								React.createElement(
									"option",
									{ value: "income-bill" },
									"Income - Bill"
								),
								React.createElement(
									"option",
									{ value: "expense-mortage" },
									"Expense - Mortgage"
								),
								React.createElement(
									"option",
									{ value: "expense-hoa" },
									"Expense - HOA"
								),
								React.createElement(
									"option",
									{ value: "expense-phone" },
									"Expense - Phone"
								),
								React.createElement(
									"option",
									{ value: "expense-internet" },
									"Expense - Internet"
								),
								React.createElement(
									"option",
									{ value: "expense-water" },
									"Expense - Water"
								),
								React.createElement(
									"option",
									{ value: "expense-electricity" },
									"Expense - Electricity"
								),
								React.createElement(
									"option",
									{ value: "expense-homeWarranty" },
									"Expense - Home Warranty"
								),
								React.createElement(
									"option",
									{ value: "expense-tuition/books" },
									"Expense - Tuition + Books"
								),
								React.createElement(
									"option",
									{ value: "expense-healthInsurance" },
									"Expense - Health Insurance"
								),
								React.createElement(
									"option",
									{ value: "expense-carInsurance" },
									"Expense - Car Insurance"
								),
								React.createElement(
									"option",
									{ value: "expense-carRepair" },
									"Expense - Car Repair"
								),
								React.createElement(
									"option",
									{ value: "expense-bankFees" },
									"Expense - Bank Fees"
								),
								React.createElement(
									"option",
									{ value: "expense-coffee" },
									"Expense - Coffee"
								),
								React.createElement(
									"option",
									{ value: "expense-medical" },
									"Expense - Medical"
								),
								React.createElement(
									"option",
									{ value: "expense-schoolMaterials" },
									"Expense - School Materials"
								),
								React.createElement(
									"option",
									{ value: "expense-officeSupplies" },
									"Expense - Office Supplies"
								),
								React.createElement(
									"option",
									{ value: "expense-restaurants" },
									"Expense - Restaurants"
								),
								React.createElement(
									"option",
									{ value: "expense-entertainment" },
									"Expense - Entertainment"
								),
								React.createElement(
									"option",
									{ value: "expense-transport" },
									"Expense - Transport"
								),
								React.createElement(
									"option",
									{ value: "expense-groceries" },
									"Expense - Groceries"
								),
								React.createElement(
									"option",
									{ value: "expense-clothing" },
									"Expense - Clothing"
								),
								React.createElement(
									"option",
									{ value: "expense-books/games" },
									"Expense - Books/Games"
								),
								React.createElement(
									"option",
									{ value: "expense-furniture/household" },
									"Expense - Furniture/Household"
								),
								React.createElement(
									"option",
									{ value: "expense-writing" },
									"Expense - Writing"
								),
								React.createElement(
									"option",
									{ value: "expense-hygiene" },
									"Expense - Hygiene"
								),
								React.createElement(
									"option",
									{ value: "expense-gifts" },
									"Expense - Gifts"
								),
								React.createElement(
									"option",
									{ value: "expense-accountant" },
									"Expense - Accountant"
								),
								React.createElement(
									"option",
									{ value: "expense-skype" },
									"Expense - Skype"
								),
								React.createElement(
									"option",
									{ value: "expense-netflix" },
									"Expense - Netflix"
								),
								React.createElement(
									"option",
									{ value: "expense-scotiaInsurance1" },
									"Expense - Scotia Insurance 1"
								),
								React.createElement(
									"option",
									{ value: "expense-scotiaInsurance2" },
									"Expense - Scotia Insurance 2"
								),
								React.createElement(
									"option",
									{ value: "expense-sunlifeInsurance" },
									"Expense - Sunlife Insurance"
								),
								React.createElement(
									"option",
									{ value: "expense-oneAndOneAndRelated" },
									"Expense - 1and1 & Related"
								),
								React.createElement(
									"option",
									{ value: "expense-jewelry/art" },
									"Expense - Jewelry/Art"
								),
								React.createElement(
									"option",
									{ value: "expense-other" },
									"Expense - Other"
								),
								React.createElement(
									"option",
									{ value: "borrow-local" },
									"Borrow - Local"
								),
								React.createElement(
									"option",
									{ value: "borrow-fam" },
									"Borrow - Fam"
								),
								React.createElement(
									"option",
									{ value: "borrow-omar" },
									"Borrow - Omar"
								),
								React.createElement(
									"option",
									{ value: "borrow-taxes" },
									"Borrow - Taxes"
								)
							)
						),
						React.createElement(
							"div",
							{ className: "input right report" },
							React.createElement(
								"p",
								null,
								React.createElement(
									"label",
									{ htmlFor: "report_country" },
									"Country:"
								)
							),
							React.createElement(
								"select",
								{ id: "report_country" },
								React.createElement(
									"option",
									{ value: "usa" },
									"USA"
								),
								React.createElement(
									"option",
									{ value: "canada" },
									"Canada"
								)
							)
						),
						React.createElement("hr", null),
						React.createElement("input", { id: "btn_subtab", className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
					)
				)
			);
		} else if (this.state.phase === "Table Report") {
			var headers = [];
			if (this.state.category === "Income") {
				var titles = ["Invoice #", "Client", "Income", "Payee", "Country", "SubDate", "RecDate", "DepDate", "Tax %", "DateEntered"];
				var heads = [];
				for (var i = 0; i < 10; i++) {
					heads.push(React.createElement(
						"th",
						null,
						titles[i]
					));
				}
				headers.push(React.createElement(
					"tr",
					null,
					heads
				));
			} else if (this.state.category === "Expense") {
				var titles = ["Company", "Cost", "Category", "Country", "PaidDate", "Tax Local", "Tax Federal", "DateEntered"];
				var heads = [];
				for (var i = 0; i < 10; i++) {
					heads.push(React.createElement(
						"th",
						null,
						titles[i]
					));
				}
				headers.push(React.createElement(
					"tr",
					null,
					heads
				));
			} else if (this.state.category === "Borrow") {
				var titles = ["Person", "Purpose", "Country", "Subtracted", "Added", "Borrowed", "TransDate", "DateEntered"];
				var heads = [];
				for (var i = 0; i < 10; i++) {
					heads.push(React.createElement(
						"th",
						null,
						titles[i]
					));
				}
				headers.push(React.createElement(
					"tr",
					null,
					heads
				));
			}
			var rows = [];
			for (var j = 0; j < this.state.data.length; j++) {
				var cols = [];
				$.each(this.state.data[j], function (key, value) {
					console.log(key, value);
					cols.push(React.createElement(
						"td",
						null,
						value
					));
				});
				rows.push(React.createElement(
					"tr",
					null,
					cols
				));
			}
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Report type"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Tabular"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Table Report"
						)
					)
				),
				React.createElement(
					"h2",
					{ id: "header_table" },
					"Income"
				),
				React.createElement(
					"table",
					{ id: "table_report" },
					React.createElement(
						"thead",
						null,
						headers
					),
					React.createElement(
						"tbody",
						null,
						rows
					)
				)
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ className: "breadcrumbs" },
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Homepage"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Report type"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Graphical"
						),
						"  >  "
					),
					React.createElement(
						"li",
						{ className: "breadcrumb" },
						React.createElement(
							"span",
							{ className: "breadcrumb-label", onClick: this.handleClick },
							"Graph Report"
						)
					)
				),
				React.createElement(
					"h2",
					{ id: "header_table" },
					"Something Else"
				),
				React.createElement(
					"table",
					{ id: "graph_report" },
					React.createElement(
						"tbody",
						null,
						rows
					)
				),
				React.createElement("hr", null)
			);
		}
	}
});
/**********Reporting Elements end here ***************************************************************/
/**********Loadup JavaScript starts here **********************************************************/
function run() {
	ReactDOM.render(React.createElement(Project, null), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) run();else window.addEventListener('DOMContentLoaded', run, false);
/**********Loadup JavaScript ends here ************************************************************/