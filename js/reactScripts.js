/**********Root Element starts here ***************************************************************/
var Project = React.createClass({
	displayName: "Project",

	getInitialState: function () {
		return { phase: "Login" };
	},
	handleClick: function (e) {
		if (e.currentTarget.id === "btn_entry") this.setState({ phase: "Input" });else if (e.currentTarget.id === "btn_reports") this.setState({ phase: "Report" });else this.setState({ phase: "Login" });
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
		} else if (this.state.phase === "Input") {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(Entries, { onPhaseChange: this.onPhaseChange }),
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
var Entries = React.createClass({
	displayName: "Entries",

	getInitialState: function () {
		return {
			phase: "Initial",
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
		if (e.currentTarget.id === "btn_income") this.setState({ phase: "Income" });else if (e.currentTarget.id === "btn_expense") this.setState({ phase: "Expense" });else if (e.currentTarget.id === "btn_borrow") this.setState({ phase: "Borrow" });else if (e.currentTarget.innerHTML === "Entry type") {
			this.setState({ phase: "Initial" });
			this.props.onPhaseChange("Input");
		} else if (e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");else if (e.currentTarget.value === "SUBMIT") {
			if (e.currentTarget.id === "btn_subinc") {
				this.handleSubmissionResponse(processIncomeEntry(e));
			} else if (e.currentTarget.id === "btn_subexp") {
				this.handleSubmissionResponse(processExpenseEntry(e));
			} else {
				console.log("Neither Income nor expense.");
			}
		} else {
			console.log("Unexpected outcome.");
		}
	},
	render: function () {
		if (this.state.phase == "Initial") {
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
				)
			);
		} else if (this.state.phase == "Income") {
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
									{ id: "usa", value: "usa" },
									"USA"
								),
								React.createElement(
									"option",
									{ id: "canada", value: "canada" },
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
		} else if (this.state.phase == "Expense") {
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
									{ id: "expense_hoa", value: "hoa" },
									"HOA"
								),
								React.createElement(
									"option",
									{ id: "expense_hoa", value: "hoa" },
									"HOA"
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
									{ id: "usa", value: "usa" },
									"USA"
								),
								React.createElement(
									"option",
									{ id: "canada", value: "canada" },
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
		} else if (this.state.phase == "Borrow") {
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
				React.createElement(
					"p",
					null,
					"Borrow Entry"
				)
			);
		} else {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"Try again"
				)
			);
		}
	}
});
/**********Entry Elements end here ***************************************************************/
/**********Phase3 Elements start here *************************************************************/

/**********Phase3 Elements end here ***************************************************************/
/**********Phase4 Elements start here *************************************************************/

/**********Phase4 Elements end here ***************************************************************/
/**********Phase5 Elements start here *************************************************************/

/**********Phase5 Elements end here ***************************************************************/
/**********Loadup JavaScript starts here **********************************************************/
function run() {
	ReactDOM.render(React.createElement(Project, null), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) run();else window.addEventListener('DOMContentLoaded', run, false);
/**********Loadup JavaScript ends here ************************************************************/