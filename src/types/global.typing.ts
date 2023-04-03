export interface ILoginData {
  email: string;
  password: string;
}
export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUsersResponse {
  page: string;
  per_page: string;
  total: string;
  total_pages: string;
  data: IUser[];
  support: any;
}

export interface IUserDetailsResponse {
  data: IUser;
  support: any;
}
