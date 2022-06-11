interface UserList {
  key: number;
  name: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  img: string;
  phone: string;
  days: string;
}

interface IUserListProps {
  loading?: boolean;
  users: UserList[] | undefined;
}
