import { useContext } from "react";
import { NotificationContext } from "./Components/NotificationProvider";

export function useNotification() {
  return useContext(NotificationContext);
}
