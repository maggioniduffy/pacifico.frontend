import { Gender, Category, Condition } from "../../../utils/api";

export interface InputProps {
  placeholder: string;
  value: any;
  setter: (value: any) => void;
  options?: { label: string; value: any }[];
  type?: string;
}

export interface AddMatchType {
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
