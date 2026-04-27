import { useState } from "react";

export default function SecurityPage() {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const getStrength = () => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Security Settings</h1>

      {/* Password Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Password Strength</h2>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <p className="mt-2">
          Strength:{" "}
          <span
            className={
              getStrength() === "Weak"
                ? "text-red-600"
                : getStrength() === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }
          >
            {getStrength()}
          </span>
        </p>
      </div>

      {/* OTP Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Two-Factor Authentication</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Verify OTP
        </button>
      </div>

      {/* Role Display */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">User Role</h2>

        <p className="text-gray-600">
          Current Role: <strong>Entrepreneur / Investor</strong>
        </p>
      </div>
    </div>
  );
}