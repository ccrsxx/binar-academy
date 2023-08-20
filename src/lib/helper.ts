import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import type { Details, Chapter } from './types/common';

const ASSIGNMENT_PATH = join('public', 'assignments');

export async function extractMetaDataFromMarkdown(
  path: string
): Promise<Details | null> {
  const file = await readFile(path, 'utf-8').catch(() => null);

  if (!file) return null;

  const { data } = matter(file);

  return data as Details;
}

export async function getChapters(): Promise<Chapter[]> {
  const directories = await readdir(ASSIGNMENT_PATH);

  const chapters = await Promise.all(
    directories.map(async (directory) => {
      const dirData = await extractMetaDataFromMarkdown(
        join(ASSIGNMENT_PATH, directory, 'README.md')
      );

      const subDirectories = await readdir(join(ASSIGNMENT_PATH, directory), {
        withFileTypes: true
      });

      const filteredSubDirectories = subDirectories
        .filter((subDirectory) => !subDirectory.isFile())
        .map((subDirectory) => subDirectory.name);

      const assignments = await Promise.all(
        filteredSubDirectories.map(async (slug) => {
          const subDirData = await extractMetaDataFromMarkdown(
            join(ASSIGNMENT_PATH, directory, slug, 'README.md')
          );

          const url = join('assignments', directory, slug, 'index.html');

          return {
            ...subDirData,
            url,
            slug
          };
        })
      );

      return {
        ...dirData,
        assignments
      };
    })
  );

  return chapters;
}
