"use server";

export async function fetchGithubStars() {
  const response = await fetch("https://api.github.com/repos/calcom/cal.com", {
    next: {
      revalidate: 300,
    },
  });

  return response.json();
}
