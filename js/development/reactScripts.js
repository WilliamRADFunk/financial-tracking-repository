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
/**********Modal Elements starts here *************************************************************/
var SuccessModal = React.createClass
({
	render: function()
	{
		return (<div id="dialog-success" title="Entry Complete">
					<p>
						Your entry was successful.
					</p>
				</div>);
	}
});
var FailedModal = React.createClass
({
	render: function()
	{
		return (<div id="dialog-failed-entry" title="Entry Failed">
					<p>
						Your entry failed. Contact your application developer.
					</p>
				</div>);
	}
});
var FailedLogin = React.createClass
({
	render: function()
	{
		return (<div id="dialog-failed-Login" title="Invalid Login">
					<p>
						The username or password you entered didn&#39;t match our records.
					</p>
				</div>);
	}
});
/**********Modal Elements ends here ***************************************************************/
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
	getInitialState: function()
	{
		return ({
					modal: false
				});
	},
	handleClick: function(e)
	{
		if(processLogin(e) == "true") this.props.onPhaseChange("Navigate");
		else
		{
			this.setState({modal:true});
			callModal("dialog-failed-Login");
		}
	},
	render: function()
	{
		return (<div>
					<FailedLogin display={this.state.modal}/>
					<form id="form_login" method="post">
						<h2>Login</h2>
						<div className="content">
							<p><label htmlFor="username">Username:</label></p>
							<input id="username" type="text" autofocus/>
							<p><label htmlFor="password">Password:</label></p>
							<input id="password" type="password"/>
							<hr/>
							<input className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
						</div>
					</form>
				</div>);
	}
});
/**********Login Elements end here ****************************************************************/
/**********Entry Elements start here *************************************************************/
var Entries = React.createClass
({
	getInitialState: function()
	{
		return ({
					phase: "Income",
					modalFail: false,
					modalSuccess: false
				});
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
		else if(e.currentTarget.id === "btn_borrow")
		{
			this.setState({phase: "Borrow"});
		}
		else if(e.currentTarget.innerHTML === "Entry type")
		{
			this.setState({phase: "Initial"});
		}
		else if(e.currentTarget.innerHTML === "Homepage")
		{
			this.props.onPhaseChange("Navigate");
		}
		else if(e.currentTarget.value === "SUBMIT")
		{
			var result = processIncomeEntry(e);
			if(result === "true")
			{
				this.setState({modalSuccess:true});
				callModal("dialog-success");
			}
			else
			{
				this.setState({modalFail:true});
				callModal("dialog-failed-entry");
			}
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
							<button id="btn_borrow" onClick={this.handleClick}>BORROW</button>
						</div>
					</div>);
		}
		else if(this.state.phase == "Income")
		{
			return (<div id="wrapper_income">
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Income</span></li>
						</ul>
						<SuccessModal display={this.state.modalSuccess}/>
						<FailedModal display={this.state.modalFail}/>
						<form id="form_income" method="post">
							<h2>Income</h2>
							<div className="content">
								<div className="input left">
									<p><label htmlFor="client">Client:</label></p>
									<input id="client" type="text" autofocus/>
								</div>
								<div className="input middle">
									<p><label htmlFor="invoice-number">Invoice #:</label></p>
									<input id="invoice-number" type="number"/>
								</div>
								<div className="input right">
									<p><label htmlFor="income_country">Country:</label></p>
									<select id="income_country">
										<option id="usa" value="usa">USA</option>
										<option id="canada" value="canada">Canada</option>
									</select>
								</div>
								<div className="input left">
									<p><label htmlFor="date-submitted">Date Submitted:</label></p>
									<input id="date-submitted" type="date"/>
								</div>
								<div className="input middle">
									<p><label htmlFor="date-received">Date Received:</label></p>
									<input id="date-received" type="date"/>
								</div>
								<div className="input right">
									<p><label htmlFor="date-deposited">Date Deposited:</label></p>
									<input id="date-deposited" type="date"/>
								</div>
								<div className="input left">
									<p><label htmlFor="amount">Full Amount $:</label></p>
									<input id="amount" type="text"/>
								</div>
								<div className="input middle">
									<p><label htmlFor="taxes">Tax %:</label></p>
									<input id="taxes" type="text"/>
								</div>
								<div className="input right">
									<p><label htmlFor="payee">Payee:</label></p>
									<select id="payee">
										<option id="andrea" value="andrea">Andrea</option>
										<option id="bill" value="bill">Bill</option>
										<option id="donna" value="donna">Donna</option>
									</select>
								</div>
								<hr/>
								<input className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
							</div>
						</form>
					</div>);
		}
		else if(this.state.phase == "Expense")
		{
			return (<div id="wrapper_expense">
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Expense</span></li>
						</ul>
						<SuccessModal display={this.state.modalSuccess}/>
						<FailedModal display={this.state.modalFail}/>
						<form id="form_expense" method="post">
							<h2>Expense</h2>
							<div className="content">
								<div className="input left">
									<p><label htmlFor="company-name">Company Name:</label></p>
									<input id="company-name" type="text" autofocus/>
								</div>
								<div className="input middle">
									<p><label htmlFor="date-paid">Date Paid:</label></p>
									<input id="date-paid" type="date"/>
								</div>
								<div className="input right">
									<p><label htmlFor="category">Category:</label></p>
									<select id="category">
										<option id="expense_mortgage" value="mortage">Mortgage</option>
										<option id="expense_hoa" value="hoa">HOA</option>
										<option id="expense_phone" value="phone">Phone</option>
										<option id="expense_internet" value="internet">Internet</option>
										<option id="expense_water" value="water">Water</option>
										<option id="expense_electricity" value="electricity">Electricity</option>
										<option id="expense_home-warranty" value="homeWarranty">Home Warranty</option>
										<option id="expense_tuition/books" value="tuition/books">Tuition + Books</option>
										<option id="expense_health-insurance" value="healthInsurance">Health Insurance</option>
										<option id="expense_car-insurance" value="carInsurance">Car Insurance</option>
										<option id="expense_car-repair" value="carRepair">Car Repair</option>
										<option id="expense_bank-fees" value="bankFees">Bank Fees</option>
										<option id="expense_coffee" value="coffee">Coffee</option>
										<option id="expense_medical" value="medical">Medical</option>
										<option id="expense_school-materials" value="schoolMaterials">School Materials</option>
										<option id="expense_office-supplies" value="officeSupplies">Office Supplies</option>
										<option id="expense_restaurants" value="restaurants">Restaurants</option>
										<option id="expense_entertainment" value="entertainment">Entertainment</option>
										<option id="expense_transport" value="transport">Transport</option>
										<option id="expense_groceries" value="groceries">Groceries</option>
										<option id="expense_clothing" value="clothing">Clothing</option>
										<option id="expense_books/games" value="books/games">Books/Games</option>
										<option id="expense_furniture/household" value="furniture/household">Furniture/Household</option>
										<option id="expense_writing" value="writing">Writing</option>
										<option id="expense_hygiene" value="hygiene">Hygiene</option>
										<option id="expense_gifts" value="gifts">Gifts</option>
										<option id="expense_accountant" value="accountant">Accountant</option>
										<option id="expense_skype" value="skype">Skype</option>
										<option id="expense_netflix" value="netflix">Netflix</option>
										<option id="expense_scotia-insurance-1" value="scotiaInsurance1">Scotia Insurance 1</option>
										<option id="expense_scotia-insurance-1" value="scotiaInsurance2">Scotia Insurance 2</option>
										<option id="expense_sunlife-insurance" value="sunlifeInsurance">Sunlife Insurance</option>
										<option id="expense_one-and-one-and-related" value="oneAndOneAndRelated">1and1 + Related</option>
										<option id="expense_jewelry/art" value="jewelry/art">Jewelry/Art</option>
										<option id="expense_hoa" value="hoa">HOA</option>
										<option id="expense_hoa" value="hoa">HOA</option>
										<option id="expense_other" value="other">Other</option>
									</select>
								</div>
								<div className="input left">
									<p><label htmlFor="taxes-local">Local Tax %:</label></p>
									<input id="taxes-local" type="text"/>
								</div>
								<div className="input middle">
									<p><label htmlFor="taxes-fed">Federal Tax %:</label></p>
									<input id="taxes-fed" type="text"/>
								</div>
								<div className="input right">
									<p><label htmlFor="expense_country">Country:</label></p>
									<select id="expense_country">
										<option id="usa" value="usa">USA</option>
										<option id="canada" value="canada">Canada</option>
									</select>
								</div>
								<div className="input left">
									<p><label htmlFor="amount">Full Amount $:</label></p>
									<input id="amount" type="text"/>
								</div>
								<hr/>
								<input className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
							</div>
						</form>
					</div>);
		}
		else if(this.state.phase == "Borrow")
		{
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Borrow</span></li>
						</ul>
						<p>Borrow Entry</p>
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