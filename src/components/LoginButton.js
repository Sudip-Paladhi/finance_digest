import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    alert("Login functionality coming soon!");
  };

  return (
    <div className="p-4 md:p-16 text-center">
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
