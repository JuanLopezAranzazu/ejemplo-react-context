import React from "react";
import { useState } from "react";

const ToastContext = React.createContext({});

export function ToastContextProvider({ children }) {
  const [toastData, setToastData] = useState({
    content: "Correct data fetching",
    color: "#4caf50",
    duration: 3000,
  });

  function updateToast(typeToast = "correct") {
    if (typeToast === "incorrect") {
      setToastData({
        content: "Incorrect data fetching",
        color: "#d60b0b",
        duration: 5000,
      });
    } else {
      setToastData({
        content: "Correct data fetching",
        color: "#4caf50",
        duration: 3000,
      });
    }
  }

  return (
    <ToastContext.Provider value={{ toastData, setToastData, updateToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;
