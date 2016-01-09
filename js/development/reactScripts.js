/**********Root Element starts here ***************************************************************/
var Project = React.createClass
({
	getInitialState: function()
	{
		return ({phase: "Input"});
	},
	handleClick: function(e)
	{
		if(e.currentTarget.id === "btn_entry") this.setState({phase: "Input"});
		else if(e.currentTarget.id === "btn_reports") this.setState({phase: "Report"});
		else this.setState({phase: "Login"});
	},
	onPhaseChange: function(phase)
	{
		console.log("Phase changed");
		this.setState({phase: phase});
	},
	render: function()
	{

		if(this.state.phase === "Login")
		{
			return (<div>
						<Header/>
						<Login onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "Navigate")
		{
			return (<div>
						<Header/>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span></li>
						</ul>
						<div id="nav_box">
							<button id="btn_entry" onClick={this.handleClick}>MAKE AN ENTRY</button>
							<button id="btn_reports" onClick={this.handleClick}>VIEW REPORTS</button>
						</div>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "Input")
		{
			return (<div>
						<Header/>
						<Entries onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else
		{
			return (<div>
						<Header/>
						<p>Try again</p>
						<Footer/>
					</div>);
		}
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Header & Footer Elements start here ****************************************************/
var Header = React.createClass
({
	render: function()
	{
		return (<header>
					<h1>
						Financial Tracking Repository
					</h1>
				</header>);
	}
});
var Footer = React.createClass
({
	render: function()
	{
		return (<footer>
					<div id="external_links">
						<h2>External Links</h2>
						<ul>
							<li><a href="http://williamrobertfunk.com">Portfolio Site</a></li>
							<li><a href="https://github.com/WilliamRADFunk">Github Repository</a></li>
							<li><a href="http://www.williamrobertfunk.com/assets/Resume.pdf">Download Resume</a></li>
							<li><a href="mailto:contact@williamradfunk.com?Subject=Programming%20Related:">Send Mail</a></li>
						</ul>
					</div>
				</footer>);
	}
});
/**********Header & Footer Elements end here ******************************************************/
/**********Login Elements start here **************************************************************/
var Login = React.createClass
({
	handleClick: function(e)
	{
		if(validateLogin(e) == "true") this.props.onPhaseChange("Navigate");
		else console.log("Not a valid login");
	},
	render: function()
	{
		return (<form id="login" method="post">
					<h2>Login</h2>
					<div className="content">
						<p><label htmlFor="username">Username:</label></p>
						<input id="username" type="text"/>
						<p><label htmlFor="password">Password:</label></p>
						<input id="password" type="password"/>
						<hr/>
						<input id="btn_login" type="submit" onClick={this.handleClick} value="SUBMIT"/>
					</div>
				</form>);
	}
});
/**********Login Elements end here ****************************************************************/
/**********Entry Elements start here *************************************************************/
var Entries = React.createClass
({
	getInitialState: function()
	{
		return ({phase: "Initial"});
	},
	handleClick: function(e)
	{
		if(e.currentTarget.id === "btn_income")
		{
			this.setState({phase: "Income"});
		}
		else if(e.currentTarget.id === "btn_expense")
		{
			this.setState({phase: "Expense"});
		}
		else if(e.currentTarget.innerHTML === "Entry type")
		{
			this.setState({phase: "Initial"});
		}
		else if(e.currentTarget.innerHTML === "Homepage")
		{
			this.props.onPhaseChange("Navigate");
		}
	},
	render: function()
	{
		if(this.state.phase == "Initial")
		{
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span></li>
						</ul>
						<div id="nav_box-entry-type">
							<button id="btn_income" onClick={this.handleClick}>INCOME</button>
							<button id="btn_expense" onClick={this.handleClick}>EXPENSE</button>
						</div>
					</div>);
		}
		else if(this.state.phase == "Income")
		{
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Income</span></li>
						</ul>
						<p>Income Entry</p>
					</div>);
		}
		else if(this.state.phase == "Expense")
		{
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Expense</span></li>
						</ul>
						<p>Expense Entry</p>
					</div>);
		}
		else
		{
			return (<div>
						<p>Try again</p>
					</div>);
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
function run()
{
	ReactDOM.render(<Project />, document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) run();
else window.addEventListener('DOMContentLoaded', run, false);
/**********Loadup JavaScript ends here ************************************************************/