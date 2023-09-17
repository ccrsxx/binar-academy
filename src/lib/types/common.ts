export type Details = Record<'title' | 'description', string>;

export type Assignment = Details & {
  url: string;
  slug: string;
};
