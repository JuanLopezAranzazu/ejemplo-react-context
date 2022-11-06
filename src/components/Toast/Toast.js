import React, { useState, useContext } from "react";
import { useEffect } from "react";
import ToastContext from "../../context/ToastContext";
import "./Toast.css";

const Toast = () => {
  const toastContext = useContext(ToastContext);
  const [loading, setLoading] = useState(false);

  const { content, color, duration } = toastContext.toastData;

  useEffect(() => {
    console.log(toastContext);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, duration);
  }, []);

  return (
    <>
      {loading && (
        <div className="containerToast">
          <div className="toast" style={{ backgroundColor: color }}>
            <p>Message: {content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
