import { APIError } from "./error";

export async function request({ endpoint, data, token = null, ticket = null }) {
  console.debug(
    `JX3API请求中: endpoint=${endpoint}, data=${JSON.stringify(data)}`
  );

  const response = await fetch(import.meta.env.VITE_JX3API_BASEURL + endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  if (json.code !== 200) {
    throw new APIError(json.code, json.msg);
  }

  console.debug(
    `JX3API已响应: endpoint=${endpoint}, data=${JSON.stringify(json.data)}`
  );

  return json.data;
}
