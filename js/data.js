/* Uses username and password to locate user in database. */
function login(username, password)
{
    var identityPackage =
    {
        name: username,
        pwd: password
    };

    var result = "false";

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/login.php',
        data: JSON.stringify(identityPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });

    return result;
}
/* Inserts the new income entry into the database */
function incomeEntry(incomePackage)
{
    var result = "false";

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/addIncome.php',
        data: JSON.stringify(incomePackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });

    return result;
}
/* Inserts the new expense entry into the database */
function expenseEntry(expensePackage)
{
    var result = "false";

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/addExpense.php',
        data: JSON.stringify(expensePackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });

    return result;
}
/* Inserts the new borrow entry into the database */
function borrowEntry(borrowPackage)
{
    var result = "false";

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/addBorrow.php',
        data: JSON.stringify(borrowPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });

    return result;
}
/* Collects data from database to fill fill content for income table format */
function reportIncomeTable(reportPackage)
{
    var result = [];
    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/getIncome.php',
        data: JSON.stringify(reportPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData);
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });
    return result;
}
/* Collects data from database to fill fill content for expense table format */
function reportExpenseTable(reportPackage)
{
    var result = [];
    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/getExpense.php',
        data: JSON.stringify(reportPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData);
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });
    return result;
}
/* Collects data from database to fill fill content for borrow table format */
function reportBorrowTable(reportPackage)
{
    var result = [];
    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/getBorrow.php',
        data: JSON.stringify(reportPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            result = JSON.parse(responseData);
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
        }
    });
    return result;
}