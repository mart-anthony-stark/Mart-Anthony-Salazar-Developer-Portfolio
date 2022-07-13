export type ImageObj = {
  src: string;
  alt?: string;
};

export type Project = {
  title: string;
  subheading: string;
  link: string;
  sourcecode: string;
  images: ImageObj[];
};
