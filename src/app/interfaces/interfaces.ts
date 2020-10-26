export interface RespuestaMDB {
  page: number;
  total_results: number;
  total_pages: number;
  results: Pelicula[];
}

export interface Pelicula {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;

}

interface RootObject {
  page: number;
  total_results: number;
  total_pages: number;
  // results: Result[];
}

export interface PeliculaDetalle {
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  poster_path?: string;
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  // genres: Genre[];
  title?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
}

export interface Genre{
  id: number;
  name: string;
}


export interface RespuestaCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path?: string;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path?: string;
}