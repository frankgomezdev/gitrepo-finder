import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
});

export async function getUser(username) {
try {
    const response = await octokit.request(`GET /users/${username}`);
    return response.data;
} catch (error) {
    throw new Error(error.message)
}
}
