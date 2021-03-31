const resBody = pm.response.json();
const reqBody = pm.request.body[pm.request.body.mode];

// 1. basic test
pm.test("Get 200", function () {
    pm.response.to.have.status(200);
});

pm.environment.set("jesse_pinkman_id", resBody.id);
pm.environment.set("jesse_pinkman_body", reqBody);