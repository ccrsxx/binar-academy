export type Details = Partial<Record<'title' | 'description', string>>;

export type Assignment = Details & {
  url: string;
  slug: string;
};

export type Chapter = Details & {
  assignments: Assignment[];
};
