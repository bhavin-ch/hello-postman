const resBody = pm.response.json();
const reqBody = pm.request.body[pm.request.body.mode];

pm.environment.set("john_wick_id", resBody.id);
pm.environment.set("john_wick_body", reqBody);