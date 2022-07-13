export type ImageObj = {
  src: string;
  alt?: string;
};

export type Project = {
  title: string;
  slug: string;
  subheading: string;
  link: string;
  sourcecode: string;
  images: ImageObj[];
};
