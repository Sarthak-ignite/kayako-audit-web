import path from "node:path";

/**
 * Get the repo root directory.
 * In this standalone frontend repo, data lives at ./data/ relative to repo root.
 */
export function getRepoRoot(): string {
  if (process.env.REPO_ROOT) {
    return path.resolve(process.env.REPO_ROOT);
  }
  return process.cwd();
}

export function repoPath(...parts: string[]): string {
  return path.join(getRepoRoot(), ...parts);
}
