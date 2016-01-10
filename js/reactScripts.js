/**********Root Element starts here ***************************************************************/
var Project = React.createClass({
	displayName: "Project",

	getInitialState: function () {
		return { phase: "Input" };
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
			phase: "Income",
			modalFail: false,
			modalSuccess: false
		};
	},
	handleClick: function (e) {
		if (e.currentTarget.id === "btn_income") {
			this.setState({ phase: "Income" });
		} else if (e.currentTarget.id === "btn_expense") {
			this.setState({ phase: "Expense" });
		} else if (e.currentTarget.innerHTML === "Entry type") {
			this.setState({ phase: "Initial" });
		} else if (e.currentTarget.innerHTML === "Homepage") {
			this.props.onPhaseChange("Navigate");
		} else if (e.currentTarget.value === "SUBMIT") {
			var result = processIncomeEntry(e);
			if (result === "true") {
				this.setState({ modalSuccess: true });
				callModal("dialog-success");
			} else {
				this.setState({ modalFail: true });
				callModal("dialog-failed-entry");
			}
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
					)
				)
			);
		} else if (this.state.phase == "Income") {
			return React.createElement(
				"div",
				{ id: "wrapper_income" },
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
							{ className: "input_income left" },
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
							{ className: "input_income middle" },
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
							{ className: "input_income right" },
							React.createElement(
								"p",
								null,
								React.createElement(
									"label",
									{ htmlFor: "country" },
									"Country:"
								)
							),
							React.createElement(
								"select",
								{ id: "country" },
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
							{ className: "input_income left" },
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
							{ className: "input_income middle" },
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
							{ className: "input_income right" },
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
							{ className: "input_income left" },
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
							{ className: "input_income middle" },
							React.createElement(
								"p",
								null,
								React.createElement(
									"label",
									{ htmlFor: "taxes" },
									"Date Tax %:"
								)
							),
							React.createElement("input", { id: "taxes", type: "text" })
						),
						React.createElement(
							"div",
							{ className: "input_income right" },
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
						React.createElement("input", { className: "btn_submit", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
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
				React.createElement(
					"p",
					null,
					"Expense Entry"
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