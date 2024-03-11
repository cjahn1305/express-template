const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});

describe("GET /v1/todos/byid", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/byid")
      .expect("Content-Type", /json/)
      .expect(200);

    // Hier sollten spezifische Assertions hinzugefügt werden, um sicherzustellen, dass die erwarteten Daten zurückgegeben werden.
    // Zum Beispiel: Überprüfen, ob die zurückgegebenen Daten die erwarteten Eigenschaften enthalten.
    // expect(response.body).toHaveProperty('propertyName', 'expectedValue');
  });
});
