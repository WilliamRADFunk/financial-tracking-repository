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
var Project = React.createClass
({
	getInitialState: function()
	{
		return ({
			phase: "Login"
		});
	},
	render: function()
	{
		if(this.state.phase === "Login")
		{
			return (<div>
						<Login></Login>
					</div>);
		}
		else
		{
			return (<div>
						<p>Not in Login anymore</p>
					</div>);
		}
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Login Elements start here *************************************************************/
var Login = React.createClass
({
	render: function()
	{
		return (<form id="login" action="actions/controllers/login.php" method="post">
					<h2>Login</h2>
					<div className="content">
						<p><label htmlFor="username">Username:</label></p>
						<input id="username" type="text"/>
						<p><label htmlFor="password">Password:</label></p>
						<input id="password" type="password"/>
						<input id="btn_login" type="submit" value="SUBMIT"/>
					</div>
				</form>);
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
function run()
{
	ReactDOM.render(<Project />, document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body)
{
	run();
}
else
{
	window.addEventListener('DOMContentLoaded', run, false);
}
/**********Loadup JavaScript ends here ************************************************************/