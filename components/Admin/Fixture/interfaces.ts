import { Gender, Category, Condition } from "../../../utils/api";

export interface InputProps {
  placeholder: string;
  value: any;
  setter: (value: any) => void;
  options?: { label: string; value: any }[];
  type?: string;
  src?: string;
}

export interface AddMatchDto {
  gender: Gender;
  category: Category;
  tournament: string;
  rival_name: string;
  time: string;
  condition: Condition;
  played: boolean;
  rival_icon: any;
  field: string;
  stats_link?: string;
  transmission_link?: string;
  our_score?: number;
  rival_score?: number;
}

export interface EditMatchDto {
  field?: string;
  time?: Date;
  our_score?: number;
  rival_score?: number;
  stats_link?: string;
  transmission_link: string;
  tournament?: string;
}

export interface AddNewDto {
  time: string;
  title: string;
  subtitle: string;
  body: string;
  image: any;
  imageName: string;
  imageDesc: string;
}
