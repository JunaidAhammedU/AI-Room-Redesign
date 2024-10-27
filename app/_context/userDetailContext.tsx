// _context/userDetailContext.ts
import { createContext, Dispatch, SetStateAction } from "react";

interface UserDetailContextType {
  userDetails: any;
  setUserDetails: Dispatch<SetStateAction<any>>;
}

export const UserDetailContext = createContext<UserDetailContextType | null>(null);
