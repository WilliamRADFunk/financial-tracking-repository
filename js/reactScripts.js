/**********Inline CSS starts here *****************************************************************/
var centerBlack = {
	color: 'black',
	textAlign: 'center'
};
var centerBlue = {
	color: 'blue',
	textAlign: 'center'
};
var leftGreen = {
	color: 'green',
	textAlign: 'left'
};
var rightRed = {
	color: 'red',
	textAlign: 'right'
};
/**********Inline CSS ends here *******************************************************************/
/**********Root Element starts here ***************************************************************/
var Project = React.createClass({
	displayName: 'Project',

	getInitialState: function () {
		return {
			phase: "Login"
		};
	},
	render: function () {
		if (this.state.phase === "Login") {
			return React.createElement(
				'div',
				null,
				React.createElement(Login, null)
			);
		} else {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					'Not in Login anymore'
				)
			);
		}
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Login Elements start here *************************************************************/
var Login = React.createClass({
	displayName: 'Login',

	render: function () {
		return React.createElement(
			'form',
			{ id: 'login', action: 'actions/controllers/login.php', method: 'post' },
			React.createElement(
				'h2',
				null,
				'Login'
			),
			React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'p',
					null,
					React.createElement(
						'label',
						{ htmlFor: 'username' },
						'Username:'
					)
				),
				React.createElement('input', { id: 'username', type: 'text' }),
				React.createElement(
					'p',
					null,
					React.createElement(
						'label',
						{ htmlFor: 'password' },
						'Password:'
					)
				),
				React.createElement('input', { id: 'password', type: 'password' }),
				React.createElement('input', { id: 'btn_login', type: 'submit', value: 'SUBMIT' })
			)
		);
	}
});
/**********Login Elements end here ***************************************************************/
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

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}
/**********Loadup JavaScript ends here ************************************************************/