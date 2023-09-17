import { access, readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import type { Assignment, Details } from './types/common';

const ASSIGNMENT_PATH = join('public', 'assignments');
const REPO_URL = 'https://github.com/ccrsxx/binar-academy';

export async function extractMetaData(
  directory: string,
  slug: string
): Promise<Assignment> {
  const assignmentRoot = join(ASSIGNMENT_PATH, directory, slug);

  const isNodeAssignment = await access(join(assignmentRoot, 'index.js')).then(
    () => true,
    () => false
  );

  const url = isNodeAssignment
    ? join(REPO_URL, 'tree/main', assignmentRoot)
    : join('assignments', directory, slug, 'index.html');

  const metadataFile = await readFile(
    join(assignmentRoot, 'README.md'),
    'utf-8'
  ).catch(() => null);

  if (!metadataFile)
    return {
      url,
      slug,
      title: slug,
      description: 'No description provided.'
    };

  const markdownData = matter(metadataFile).data as Details;

  return {
    ...markdownData,
    url,
    slug
  };
}

export async function getChapters(): Promise<Assignment[][]> {
  const directories = await readdir(ASSIGNMENT_PATH);

  const chapters = await Promise.all(
    directories.map(async (directory) => {
      const subDirectories = await readdir(join(ASSIGNMENT_PATH, directory), {
        withFileTypes: true
      });

      const filteredSubDirectories = subDirectories
        .filter((subDirectory) => !subDirectory.isFile())
        .map((subDirectory) => subDirectory.name);

      const assignments = await Promise.all(
        filteredSubDirectories.map((slug) => extractMetaData(directory, slug))
      );

      return assignments;
    })
  );

  return chapters;
}
