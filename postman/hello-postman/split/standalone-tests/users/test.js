const body = pm.response.json();

// 1. basic test
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});

// 2. test actual values
pm.test("Status test", function () {
    pm.expect(body[0].name).to.equal('Lennart Johansson');
});

// 3. validate json schema (can also be put in the environment!)
const userSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string" },
        city: { type: "string" }
    }
};
const schema = {
    type: "array",
    "items": [userSchema]
}
pm.test("Validate body schema", () => {
    pm.response.to.have.jsonSchema(schema);
});
pm.test("Validate user schema", () => {
    body.forEach(function (user) {
        pm.expect(user).to.have.jsonSchema(userSchema);
    });
});