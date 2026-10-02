type role = "Admin" | "";

export interface Admin {
  fullname: string;
  email: string;
  password: string;
  role: "Admin";
}
