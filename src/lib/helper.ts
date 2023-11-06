import { access, readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import type { Assignment, Details } from './types/common';

const ASSIGNMENT_PATH = join('public', 'assignments');

export async function extractMetaData(
  directory: string,
  slug: string
): Promise<Assignment> {
  const assignmentRoot = join(ASSIGNMENT_PATH, directory, slug);

  const metadataFile = await readFile(
    join(assignmentRoot, 'README.md'),
    'utf-8'
  ).catch(() => null);

  const hasTopLevelScript = await access(join(assignmentRoot, 'index.js')).then(
    () => true,
    () => false
  );

  const markdownData = metadataFile
    ? (matter(metadataFile).data as Details)
    : null;

  const isNodeProject = hasTopLevelScript || markdownData?.nodeProject;

  const url = isNodeProject
    ? `https://github.com/ccrsxx/binar-academy/tree/main/public/assignments/${directory}/${slug}`
    : join('assignments', directory, slug, 'index.html');

  if (!markdownData)
    return {
      url,
      slug,
      title: slug,
      description: 'No description provided.'
    };

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
