export type Details = {
  title: string;
  description: string;
  externalUrl?: string;
  nodeProject?: boolean;
};

export type Assignment = Details & {
  url: string;
  slug: string;
};
