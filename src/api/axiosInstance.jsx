import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  // mark start time for simple timing logs
  // eslint-disable-next-line no-param-reassign
  config.metadata = { startTime: Date.now() };
  return config;
});

API.interceptors.response.use(
  (response) => {
    if (response.config?.metadata?.startTime) {
      const durationMs = Date.now() - response.config.metadata.startTime;
      // basic timing log to help diagnose slowness
      // eslint-disable-next-line no-console
      console.debug(`[API] ${response.config.method?.toUpperCase()} ${response.config.url} ${response.status} in ${durationMs}ms`);
    }
    return response;
  },
  (error) => {
    const cfg = error.config;
    if (cfg?.metadata?.startTime) {
      const durationMs = Date.now() - cfg.metadata.startTime;
      // eslint-disable-next-line no-console
      console.debug(`[API] ${cfg.method?.toUpperCase()} ${cfg.url} FAILED in ${durationMs}ms`, error?.message);
    }
    return Promise.reject(error);
  }
);

export default API;
