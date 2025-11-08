import { useState } from "react";

export function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [regData, setRegData] = useState({ name: "", email: "", password: "", confirm: "" });

  function handleLoginSubmit(e) {
    e.preventDefault();
    // TODO: call API
    console.log("login", loginData);
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    if (regData.password !== regData.confirm) {
      alert("Passwords do not match");
      return;
    }
    // TODO: call API
    console.log("register", regData);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-4">
            {isRegister ? "Create an Account" : "Member Login"}
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            {isRegister
              ? "Join Educare to access courses, projects, and community support."
              : "Welcome back! Please log in to access your account and continue your learning journey with us."}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setIsRegister(false)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                !isRegister ? "bg-[#C24914] text-white shadow" : "bg-white text-gray-700 border"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsRegister(true)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                isRegister ? "bg-[#C24914] text-white shadow" : "bg-white text-gray-700 border"
              }`}
            >
              Register
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
          {!isRegister ? (
            <>
              <h2 className="text-2xl font-bold text-[#C24914] mb-4">Login to Your Account</h2>
              <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                />
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="/reset-password" className="text-[#C24914] hover:underline">
                    Forgot?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-[#C24914] text-white font-semibold py-2 px-6 rounded hover:bg-[#a63a0b] transition"
                >
                  Login
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Don’t have an account?{" "}
                  <button type="button" onClick={() => setIsRegister(true)} className="text-[#C24914] underline">
                    Register
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#C24914] mb-4">Create Your Account</h2>
              <form className="flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={regData.name}
                  onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                  required
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={regData.email}
                  onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                  required
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={regData.password}
                    onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                    required
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={regData.confirm}
                    onChange={(e) => setRegData({ ...regData, confirm: e.target.value })}
                    required
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" required className="form-checkbox" />
                  <span className="text-gray-600">I agree to the Terms & Privacy</span>
                </label>
                <button
                  type="submit"
                  className="bg-[#C24914] text-white font-semibold py-2 px-6 rounded hover:bg-[#a63a0b] transition"
                >
                  Register
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setIsRegister(false)} className="text-[#C24914] underline">
                    Login
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}