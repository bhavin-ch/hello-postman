const body = pm.response.json();

// 1. basic test
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});

// 2. test actual values
pm.test("Test response body", function () {
    pm.expect(body).deep.equal({ title: "Express" });
});

// 3. validate json schema (can also be put in the environment!)
const schema = {
    type: "object",
    properties: {
        title: { type: "string" }
    }
};
pm.test("Validate schema", () => {
    console.log(pm.response);
    pm.response.to.have.jsonSchema(schema);
});