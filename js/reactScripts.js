/**********Root Element starts here ***************************************************************/
var Project = React.createClass({
	displayName: "Project",

	getInitialState: function () {
		return { phase: "Navigate" };
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

	handleClick: function (e) {
		if (validateLogin(e) == "true") this.props.onPhaseChange("Navigate");else console.log("Not a valid login");
	},
	render: function () {
		return React.createElement(
			"form",
			{ id: "login", method: "post" },
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
				React.createElement("input", { id: "username", type: "text" }),
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
				React.createElement("input", { id: "btn_login", type: "submit", onClick: this.handleClick, value: "SUBMIT" })
			)
		);
	}
});
/**********Login Elements end here ****************************************************************/
/**********Phase2 Elements start here *************************************************************/

/**********Phase2 Elements end here ***************************************************************/
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