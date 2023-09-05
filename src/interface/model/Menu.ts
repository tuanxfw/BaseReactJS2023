export interface IMenuItem {
  id: string | number;
  name: string;
  path: string;
  parent: string | number;
  type?: string;
}

export interface IMenuSub {
  id: string | number;
  name: string;
  parent: string | number;
  children?: IMenuSub[] | IMenuItem[];
  type?: string;
}
