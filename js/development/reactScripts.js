var tableData = [];
/**********Root Element starts here ***************************************************************/
var Project = React.createClass
({
	getInitialState: function()
	{
		return ({phase: "Login"});
	},
	handleClick: function(e)
	{
		if(e.currentTarget.id === "btn_entry") this.setState({phase: "InputType"});
		else if(e.currentTarget.id === "btn_reports") this.setState({phase: "ReportType"});
		else if(e.currentTarget.id === "btn_income") this.setState({phase: "Income"});
		else if(e.currentTarget.id === "btn_expense") this.setState({phase: "Expense"});
		else if(e.currentTarget.id === "btn_borrow") this.setState({phase: "Borrow"});
		else if(e.currentTarget.id === "btn_tableSelection") this.setState({phase: "TableSelection"});
		else if(e.currentTarget.id === "btn_graphSelection") this.setState({phase: "GraphSelection"});
		else if(e.currentTarget.innerHTML === "Homepage") this.setState({phase: "Navigate"});
		else if(e.currentTarget.innerHTML === "Entry type") this.setState({phase: "InputType"});
		else if(e.currentTarget.innerHTML === "Report type") this.setState({phase: "ReportType"});
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
		else if(this.state.phase === "InputType")
		{
			return (<div>
						<Header/>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span></li>
						</ul>
						<div id="nav_box-entry-type">
							<button id="btn_income" onClick={this.handleClick}>INCOME</button>
							<button id="btn_expense" onClick={this.handleClick}>EXPENSE</button>
							<button id="btn_borrow" onClick={this.handleClick}>BORROW</button>
						</div>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "Income")
		{
			return (<div>
						<Header/>
						<Income onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "Expense")
		{
			return (<div>
						<Header/>
						<Expense onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "Borrow")
		{
			return (<div>
						<Header/>
						<Borrow onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "ReportType")
		{
			return (<div>
						<Header/>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Report type</span></li>
						</ul>
						<div id="nav_box-entry-type">
							<button id="btn_tableSelection" onClick={this.handleClick}>TABULAR</button>
							<button id="btn_graphSelection" onClick={this.handleClick}>GRAPHICAL</button>
						</div>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "TableSelection")
		{
			return (<div>
						<Header/>
						<Report data="Table" onPhaseChange={this.onPhaseChange}/>
						<Footer/>
					</div>);
		}
		else if(this.state.phase === "GraphSelection")
		{
			return (<div>
						<Header/>
						<Report data="Graph" onPhaseChange={this.onPhaseChange}/>
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
		return (<div id="dialog-success" title="Attempt Complete">
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
		return (<div id="dialog-failed-entry" title="Attempt Failed">
					<p>
						Your attempt failed. Contact your application developer.
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
var NoKeyModal = React.createClass
({
	render: function()
	{
		return (<div id="dialog-no-key" title="Not Logged In">
					<p>
						You are not logged in. Log back in, and resubmit your entry.
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
var Income = React.createClass
({
	getInitialState: function()
	{
		return ({
					modalFail: false,
					modalSuccess: false,
					modalNoKey: true
				});
	},
	handleSubmissionResponse: function(result)
	{
		if(result === "true")
		{
			this.setState({modalSuccess:true});
			callModal("dialog-success");
		}
		else if(result === "No Key")
		{
			this.setState({modalNoKey:true});
			callModal("dialog-no-key");
		}
		else
		{
			this.setState({modalFail:true});
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function(e)
	{
		if(e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");
		else if(e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");
		else if(e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processIncomeEntry(e));
	},
	render: function()
	{
		return (<div>
					<ul className="breadcrumbs">
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Income</span></li>
					</ul>
					<SuccessModal display={this.state.modalSuccess}/>
					<FailedModal display={this.state.modalFail}/>
					<NoKeyModal display={this.state.modalNoKey}/>
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
									<option value="usa">USA</option>
									<option value="canada">Canada</option>
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
							<input id="btn_subinc" className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
						</div>
					</form>
				</div>);
	}
});
var Expense = React.createClass
({
	getInitialState: function()
	{
		return ({
					modalFail: false,
					modalSuccess: false,
					modalNoKey: true
				});
	},
	handleSubmissionResponse: function(result)
	{
		if(result === "true")
		{
			this.setState({modalSuccess:true});
			callModal("dialog-success");
		}
		else if(result === "No Key")
		{
			this.setState({modalNoKey:true});
			callModal("dialog-no-key");
		}
		else
		{
			this.setState({modalFail:true});
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function(e)
	{
		if(e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");
		else if(e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");
		else if(e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processExpenseEntry(e));
	},
	render: function()
	{
		return (<div>
					<ul className="breadcrumbs">
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Expense</span></li>
					</ul>
					<SuccessModal display={this.state.modalSuccess}/>
					<FailedModal display={this.state.modalFail}/>
					<NoKeyModal display={this.state.modalNoKey}/>
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
									<option value="usa">USA</option>
									<option value="canada">Canada</option>
								</select>
							</div>
							<div className="input left">
								<p><label htmlFor="amount">Full Amount $:</label></p>
								<input id="amount" type="text"/>
							</div>
							<hr/>
							<input id="btn_subexp" className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
						</div>
					</form>
				</div>);
	}
});
var Borrow = React.createClass
({
	getInitialState: function()
	{
		return ({
					modalFail: false,
					modalSuccess: false,
					modalNoKey: true
				});
	},
	handleSubmissionResponse: function(result)
	{
		if(result === "true")
		{
			this.setState({modalSuccess:true});
			callModal("dialog-success");
		}
		else if(result === "No Key")
		{
			this.setState({modalNoKey:true});
			callModal("dialog-no-key");
		}
		else
		{
			this.setState({modalFail:true});
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function(e)
	{
		if(e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");
		else if(e.currentTarget.innerHTML === "Entry type") this.props.onPhaseChange("InputType");
		else if(e.currentTarget.value === "SUBMIT") this.handleSubmissionResponse(processBorrowEntry(e));
	},
	render: function()
	{
		return (<div>
					<ul className="breadcrumbs">
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Entry type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
						<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Borrow</span></li>
					</ul>
					<SuccessModal display={this.state.modalSuccess}/>
					<FailedModal display={this.state.modalFail}/>
					<NoKeyModal display={this.state.modalNoKey}/>
					<form id="form_borrow" method="post">
						<h2>Expense</h2>
						<div className="content">
							<div className="input left">
								<p><label htmlFor="subtracted">Subtract:</label></p>
								<input id="subtracted" type="text"/>
							</div>
							<div className="input middle">
								<p><label htmlFor="borrowed">Borrowed:</label></p>
								<input id="borrowed" type="text"/>
							</div>
							<div className="input right">
								<p><label htmlFor="added">Added:</label></p>
								<input id="added" type="text"/>
							</div>
							<div className="input left">
								<p><label htmlFor="borrow_country">Country:</label></p>
								<select id="borrow_country">
									<option value="usa">USA</option>
									<option value="canada">Canada</option>
								</select>
							</div>
							<div className="input middle">
								<p><label htmlFor="borrow_person">Person:</label></p>
								<select id="borrow_person">
									<option id="borrow_local" value="local">Local</option>
									<option id="borrow_fam" value="fam">Fam</option>
									<option id="borrow_omar" value="omar">Omar</option>
									<option id="borrow_taxes" value="taxes">Taxes</option>
								</select>
							</div>
							<div className="input right">
								<p><label htmlFor="date-trans">Date of Transaction:</label></p>
								<input id="date-trans" type="date"/>
							</div>
							<div className="input-full left">
								<p><label htmlFor="purpose">Purpose:</label></p>
								<input id="purpose" type="text"/>
							</div>
							<hr/>
							<input id="btn_subbor" className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
						</div>
					</form>
				</div>);
	}
});
/**********Entry Elements end here ***************************************************************/
/**********Reporting Elements start here *************************************************************/
var Report = React.createClass
({
	getInitialState: function()
	{
		return ({
					modalFail: false,
					modalSuccess: false,
					modalNoKey: true,
					category: "",
					data: [],
					phase: "select"
				});
	},
	handleSubmissionResponse: function(result)
	{
		if(result === "true")
		{
			this.setState({modalSuccess:true});
			callModal("dialog-success");
		}
		else if(result === "No Key")
		{
			this.setState({modalNoKey:true});
			callModal("dialog-no-key");
		}
		else
		{
			this.setState({modalFail:true});
			callModal("dialog-failed-entry");
		}
	},
	handleClick: function(e)
	{
		if(e.currentTarget.innerHTML === "Homepage") this.props.onPhaseChange("Navigate");
		else if(e.currentTarget.innerHTML === "Report type") this.props.onPhaseChange("ReportType");
		else if(e.currentTarget.innerHTML === "Tabular") this.setState({phase: "select"});
		else if(e.currentTarget.innerHTML === "Graphical") this.setState({phase: "select"});
		else if(e.currentTarget.value === "SUBMIT")
		{
			var category = document.getElementById("report_category").value;
			if(category.substring(0, 6) === "income") category = "Income";
			else if(category.substring(0, 7) === "expense") category = "Expense";
			else if(category.substring(0, 6) === "borrow") category = "Borrow";

			if(this.props.data === "Table")
			{
				var data = processReportTable(e);
				if(data === null) this.handleSubmissionResponse("false");
				else if(data.success !== undefined &&
						data.success !== null &&
						data.success !== "No Key")
					this.handleSubmissionResponse("No Key");
				else
					this.setState({	category: category,
									data: data.rows,
									total: data.total,
									phase: "Table Report"});
			}
			else
			{
				this.setState({	category: category,
								data: processReportTable(e),
								phase: "Graph Report"});
			}
		}
	},
	render: function()
	{
		if(this.state.phase === "select")
		{
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Report type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>{this.props.data} Criteria</span></li>
						</ul>
						<SuccessModal display={this.state.modalSuccess}/>
						<FailedModal display={this.state.modalFail}/>
						<NoKeyModal display={this.state.modalNoKey}/>
						<form id="form_report" method="post">
							<h2>Report - {this.props.data} Format</h2>
							<div className="content">
								<div className="input left report">
									<p><label htmlFor="report_category">Category:</label></p>
									<select id="report_category">
										<option value="income-all">Income - All</option>
										<option value="income-andrea">Income - Andrea</option>
										<option value="income-bill">Income - Bill</option>
										<option value="expense-mortage">Expense - Mortgage</option>
										<option value="expense-hoa">Expense - HOA</option>
										<option value="expense-phone">Expense - Phone</option>
										<option value="expense-internet">Expense - Internet</option>
										<option value="expense-water">Expense - Water</option>
										<option value="expense-electricity">Expense - Electricity</option>
										<option value="expense-homeWarranty">Expense - Home Warranty</option>
										<option value="expense-tuition/books">Expense - Tuition + Books</option>
										<option value="expense-healthInsurance">Expense - Health Insurance</option>
										<option value="expense-carInsurance">Expense - Car Insurance</option>
										<option value="expense-carRepair">Expense - Car Repair</option>
										<option value="expense-bankFees">Expense - Bank Fees</option>
										<option value="expense-coffee">Expense - Coffee</option>
										<option value="expense-medical">Expense - Medical</option>
										<option value="expense-schoolMaterials">Expense - School Materials</option>
										<option value="expense-officeSupplies">Expense - Office Supplies</option>
										<option value="expense-restaurants">Expense - Restaurants</option>
										<option value="expense-entertainment">Expense - Entertainment</option>
										<option value="expense-transport">Expense - Transport</option>
										<option value="expense-groceries">Expense - Groceries</option>
										<option value="expense-clothing">Expense - Clothing</option>
										<option value="expense-books/games">Expense - Books/Games</option>
										<option value="expense-furniture/household">Expense - Furniture/Household</option>
										<option value="expense-writing">Expense - Writing</option>
										<option value="expense-hygiene">Expense - Hygiene</option>
										<option value="expense-gifts">Expense - Gifts</option>
										<option value="expense-accountant">Expense - Accountant</option>
										<option value="expense-skype">Expense - Skype</option>
										<option value="expense-netflix">Expense - Netflix</option>
										<option value="expense-scotiaInsurance1">Expense - Scotia Insurance 1</option>
										<option value="expense-scotiaInsurance2">Expense - Scotia Insurance 2</option>
										<option value="expense-sunlifeInsurance">Expense - Sunlife Insurance</option>
										<option value="expense-oneAndOneAndRelated">Expense - 1and1 &amp; Related</option>
										<option value="expense-jewelry/art">Expense - Jewelry/Art</option>
										<option value="expense-other">Expense - Other</option>
										<option value="borrow-local">Borrow - Local</option>
										<option value="borrow-fam">Borrow - Fam</option>
										<option value="borrow-omar">Borrow - Omar</option>
										<option value="borrow-taxes">Borrow - Taxes</option>
									</select>
								</div>
								<div className="input right report">
									<p><label htmlFor="report_country">Country:</label></p>
									<select id="report_country">
										<option value="usa">USA</option>
										<option value="canada">Canada</option>
									</select>
								</div>
								<hr/>
								<input id="btn_subtab" className="btn_submit" type="submit" onClick={this.handleClick} value="SUBMIT"/>
							</div>
						</form>
					</div>);
		}
		else if(this.state.phase === "Table Report")
		{
			var headers = [];
			var footers = [];
			if(this.state.category === "Income")
			{
				var titles = [
					"Invoice #",
					"Client",
					"Income",
					"Payee",
					"Country",
					"Submission Date",
					"Received Date",
					"Deposit Date",
					"Tax %",
					"Date Entered"
				];
				var heads = [];
				for(var i = 0; i < titles.length; i++)
				{
					heads.push(<th>{titles[i].toString().toUpperCase()}</th>);
				}
				headers.push(<tr>{heads}</tr>);
				footers.push(<tr>
								<td>TOTAL</td><td>INCOME:</td><td>{this.state.total[0]}</td>
								<td>-</td><td>-</td><td>-</td><td>TOTAL</td><td>TAXES:</td>
								<td>{this.state.total[1]}</td><td>-</td>
							</tr>);
			}
			else if(this.state.category === "Expense")
			{
				var titles = [
					"Paid Date",
					"Company",
					"Cost",
					"Tax Local",
					"Tax Federal",
					"Country",
					"Category",
					"Date Entered"
				];
				var heads = [];
				for(var i = 0; i < titles.length; i++)
				{
					heads.push(<th>{titles[i].toString().toUpperCase()}</th>);
				}
				headers.push(<tr>{heads}</tr>);
				var feet = [];
				for(var j = 0; j < titles.length; j++)
				{
					if(j === 0 || j === 1) feet.push(<td>-</td>);
					else if(j < 5)
					{
						feet.push(<td>{this.state.total[j-2]}</td>);
					}
					else feet.push(<td>-</td>);
				}
				footers.push(<tr>{feet}</tr>);
			}
			else if(this.state.category === "Borrow")
			{
				var titles = [
					"Trans Date",
					"Person",
					"Purpose",
					"Subtracted",
					"Borrowed",
					"Added",
					"Country",
					"Date Entered"
				];
				var heads = [];
				for(var i = 0; i < titles.length; i++)
				{
					heads.push(<th>{titles[i].toString().toUpperCase()}</th>);
				}
				headers.push(<tr>{heads}</tr>);
				var feet = [];
				for(var j = 0; j < titles.length; j++)
				{
					if(j === 0 || j === 1 || j === 2) feet.push(<td>-</td>);
					else if(j <= 5)
					{
						feet.push(<td>{this.state.total[j-2]}</td>);
					}
					else feet.push(<td>-</td>);
				}
				footers.push(<tr>{feet}</tr>);
				footers.push(<tr>
								<td>ACCOUNT</td><td>BALANCE:</td><td>{this.state.total[0]}</td>
								<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>
							</tr>);
			}
			var rows = [];
			for(var k = 0; k < this.state.data.length; k++)
			{
				var cols = [];
				$.each(this.state.data[k], function(key, value) {
					cols.push(<td>{value.toString().toUpperCase()}</td>);
				});
				rows.push(<tr>{cols}</tr>);
			}
			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Report type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Tabular</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Table Report</span></li>
						</ul>
						<h2 id="header_table">{this.state.category}</h2>
						<table id="table_report">
							<thead>
								{headers}
							</thead>
							<tbody>
								{rows}
							</tbody>
							<tfoot>
								{footers}
							</tfoot>
						</table>
					</div>);
		}
		else
		{
			google.charts.load('current', {packages: ['corechart']});
			google.charts.setOnLoadCallback(drawChart);
			if(this.state.category === "Income")
			{
				function drawChart()
				{
					var data = google.visualization.arrayToDataTable([
						['Month', 'Bill', 'Andrea'],
						['Jan',  1000,      400],
						['Feb',  1170,      460],
						['Mar',  660,       1120],
						['Apr',  1030,      540],
						['May',  660,       1120],
						['Jun',  860,       970],
						['Jul',  120,       720],
						['Aug',  430,       1090],
						['Sep',  660,       1120],
						['Oct',  220,       870],
						['Nov',  1180,      560],
						['Dec',  660,       1120]
					]);

					var options =
					{
						curveType: 'function',
						hAxis: {textStyle:{color: '#FFFFFF'}},
						vAxis: {textStyle:{color: '#FFFFFF'}},
						legendTextStyle: {color:'#FFFFFF'},
						backgroundColor: 'none',
						legend: { position: 'bottom' },
						series: {
							0: { color: '#00ffff' },
							1: { color: '#e7711b' },
							2: { color: '#f1ca3a' },
							3: { color: '#6f9654' },
							4: { color: '#1c91c0' },
							5: { color: '#43459d' },
						}
					};			
					var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
					chart.draw(data, options);
				}
			}

			return (<div>
						<ul className="breadcrumbs">
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Homepage</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Report type</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Graphical</span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
							<li className="breadcrumb"><span className="breadcrumb-label" onClick={this.handleClick}>Graph Report</span></li>
						</ul>
						<h2 id="header_graph">{this.state.category}</h2>
						<div id="curve_chart"></div>
					</div>);
		}
	}
});
/**********Reporting Elements end here ***************************************************************/
/**********Loadup JavaScript starts here **********************************************************/
function run()
{
	ReactDOM.render(<Project />, document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) run();
else window.addEventListener('DOMContentLoaded', run, false);
/**********Loadup JavaScript ends here ************************************************************/