const users = pm.response.json();


// 1. basic test
pm.test("Get 200", function () {
    pm.response.to.have.status(200);
});

// 2. store number of users in the environment
pm.environment.set("no_of_users", JSON.stringify(users.length));