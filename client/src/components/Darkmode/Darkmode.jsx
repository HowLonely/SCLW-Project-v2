import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
  //Verifica si el valor almacenado en el localstorage es "dark" => retorna booleano

  const handleDarkmodeChange = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [isDarkMode]);

  return (
    <Form className="d-flex gap-2">
      {isDarkMode ? (
        <label htmlFor="darkmode-switch" className="pe-2">
          🌑
        </label>
      ) : (
        <label htmlFor="darkmode-switch" className="pe-2">
          🔆
        </label>
      )}
      <Form.Check
        type="switch"
        id="darkmode-switch"
        label=""
        checked={isDarkMode}
        onChange={handleDarkmodeChange}
      />
    </Form>
  );
};
