import type { EmailApiResponse } from "~/models/email";

import axios from "axios";

const baseUrl: string = "https://randomuser.me";

export const getEmail = async (): Promise<EmailApiResponse> => {
  const response = await axios.get(`${baseUrl}/api`);

  return response.data;
};
