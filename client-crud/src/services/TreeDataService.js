import http from "../http-common";
class TreeDataService {
  getAll() {
    return http.get("/trees");
  }
  get(id) {
    return http.get(`/trees/${id}`);
  }
  create(data) {
    return http.post("/trees", data);
  }
  update(id, data) {
    return http.put(`/trees/${id}`, data);
  }
  delete(id) {
    return http.delete(`/trees/${id}`);
  }
}
export default new TreeDataService();