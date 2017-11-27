import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3004';

const responseBody = res => res.body;

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const serializeParams = (departureAt, arrivalAt, airlines) => {
  return ``
}
const Flights = {
  all: () =>
    requests.get("/flights"),
  filter: (departureAt, arrivalAt, airlines) =>
    requests.get(`/flights?${serializeParams(departureAt, arrivalAt, airlines)}`),
  airlines: () =>
    requests.get("/airlines"),
};

export default { Flights };
