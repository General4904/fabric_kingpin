export type Role =
  | "Customer"
  | "SalesPerson"
  | "Manager"
  | "Kingpin"
  | "Engineer";

export interface Customer {
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  role: Role;
  Cart: Array<string>;
  readonly dateCreated: Date;
  address: string;
}

export interface Staff {
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  role: Role;
  address: string;
}

export interface Fabric {
  fabricName: string;
  quantityAvailable: string;
  price: number;
  fabricCategory: string;
  createdBy: IStaff;
  readonly createdAt: Date;
}
