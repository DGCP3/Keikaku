import { Model, createServer } from "miragejs";
import { MOCK_PROJECT } from "./data";

export default function makeServer() {
  return createServer({
    models: {
      project: Model,
    },
    seeds() {},
    routes() {
      this.namespace = "api";

      this.post("/projects", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create("project", attrs);
      });

      this.get("/projects", () => {
        return {
          movies: MOCK_PROJECT,
        };
      });

      this.get("/projects/:id", (schema, request) => {
        const id = request.params.id;
        const project = MOCK_PROJECT.find((project) => project.href === id);
        return {
          project,
        };
      });
    },
  });
}
