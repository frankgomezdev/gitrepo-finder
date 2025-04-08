import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
});

export async function GET(request, { params }) {
    try {
      const response = await octokit.request(`GET /users/${params.username}`);
      return NextResponse.json(response.data);
    } catch (error) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
  }
