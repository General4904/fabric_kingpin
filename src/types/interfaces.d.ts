export type CustomerRole = "Customer";
export type StaffRole = "SalesPerson" | "Manager" | "Kingpin" | "Engineer";

export interface ICustomer {
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password: string;
  phoneNumber: string;
  // dateOfBirth: Date;
  role: CustomerRole;
  readonly dateCreated: Date;
  address: string;
}

export interface IStaff {
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  role: StaffRole;
  address: string;
}

export interface IFabric {
  fabricName: string;
  quantityAvailable: string;
  price: number;
  fabricCategory: string;
  createdBy: IStaff;
  readonly createdAt: Date;
}
