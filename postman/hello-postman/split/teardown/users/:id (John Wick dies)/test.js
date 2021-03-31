const resBody = pm.response.json();
const reqBody = pm.request.body[pm.request.body.mode];

const john_wick_id = Number(pm.environment.get("john_wick_id"));

// 1. basic test
pm.test("Get 200", function () {
    pm.response.to.have.status(200);
});

// 2. validate Pinkman id
pm.test("validate Pinkman id", function () {
    pm.expect(resBody.id).to.not.equal(john_wick_id);
});