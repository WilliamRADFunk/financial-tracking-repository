/* Inserts the new score, identified by the user's initials (arcade-style) */
function login(username, password)
{
    var identityPackage =
    {
        name: username,
        pwd: password
    };

    $.ajax({
        type:'POST',
        url:'http://www.williamrobertfunk.com/applications/financial-tracking-repository/actions/login.php',
        data: JSON.stringify(identityPackage),
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'text',
        async: true,
        success:function(e)
        {
            console.log("Login Validates.");
            console.log(e);
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
}