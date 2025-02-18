import React, { createContext, useState, useContext } from "react";
import Notification from "./notification";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    message: "",
    show: false,
    color: "",
    type: "",
  });

  const notify = (message, type = "success") => {
    const colors = {
      success: "#22c55e", // Green
      warning: "#facc15", // Yellow
      error: "#ef4444", // Red
    };

    setNotification({ message, show: true, color: colors[type], type });

    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      <Notification
        message={notification.message}
        show={notification.show}
        closeNotification={() => setNotification({ ...notification, show: false })}
        color={notification.color}
        type={notification.type}
      />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
