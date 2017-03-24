export class Dataset {
  _id: string;
  name: string;
  date: Date;
  about: string;
  tags: [string];
  downloadUrl: string;
  dynamicMapLayer: string;
  lat: number;
  lon: number;
  zoom: number;
}
