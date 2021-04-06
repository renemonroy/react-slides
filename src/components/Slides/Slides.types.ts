export interface ISlidesActions {
  next: () => void;
  prev: () => void;
}

export interface ISlides {
  active: number;
  children: (item: Object, actions: ISlidesActions, index: number) => any;
  disableDots: boolean;
  dotsColor: string;
  friction: number;
  items: object[];
  itemsGap: number;
  mass: number;
  onSlideChange: (item: Object, i: number) => void;
  style: React.CSSProperties;
  tension: number;
  width: number;
}
