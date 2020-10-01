export const getIssues = async ({ authToken }) => {
  const response = await fetch(`${API_URL}/issues?token=${authToken}&language=en-gb`, {
    method: "GET",
  });
  return response.json();
};
