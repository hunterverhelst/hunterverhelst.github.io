import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IIcon {
  color?: string;
}
export interface ICard {
  i: number;
  title: string;
  subtitle: string;
  link: string;
  cover: string | IconDefinition;
}
