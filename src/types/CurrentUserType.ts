type CurrentUserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  phone: string;
  company?: {
    id: number;
    name: string;
    nip: string;
    city: string;
    postal_code: string;
    street: string;
    street_number: string;
    employees: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
    }[];
  },
  employee?: {
    id: number;
    position: string;
    points: number;
  }
  subscription: boolean;
};

export default CurrentUserType;
