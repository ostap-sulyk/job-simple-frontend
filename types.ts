export interface JobOpening {
  _id: string;
  jobtitle: string;
  url: string;
}

export interface Company {
  _id: string;
  url: string;
  name: string;
  openings: JobOpening[];
  openingsurl: string;
}
