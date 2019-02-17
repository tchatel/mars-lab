
export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: IsoDate;
  rover: Rover;
}

export interface Camera {
  id?: number;
  name: string;
  rover_id?: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: IsoDate;
  launch_date: IsoDate;
  status: string;
  max_sol: number;
  max_date: IsoDate;
  total_photos: number;
  cameras: Camera[];

  img_src?: string;
  description?: string;
}

export type IsoDate = string; // YYYY-MM-DD

export interface NasaPhotosResult {
  photos: Photo[];
}

export interface NasaRoversResult {
  rovers: Rover[];
}
