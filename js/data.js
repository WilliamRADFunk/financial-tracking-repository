/* Uses username and password to locate user in database. */
function login(username, password)
{
    var identityPackage =
    {
        name: username,
        pwd: password
    };

    var result = false;

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/login.php',
        data: JSON.stringify(identityPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: false,
        success:function(responseData)
        {
            console.log("Login Validates.");
            result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
            alert("Login Failed!");
        }
    });

    return result;
}
/* Inserts the new income entry into the database */
function incomeEntry(incomePackage)
{
    var result = false;

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/addIncome.php',
        data: JSON.stringify(incomePackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: true,
        success:function(responseData)
        {
            console.log("Entry Successfully Entered.");
            //result = JSON.parse(responseData).success;
        },
        error:function(error)
        {
            console.log(error);
            console.log(error.responseText);
            console.log(error.status);
            console.log(error.statusText);
            alert("Entry Failed!");
        }
    });

    return result;
}