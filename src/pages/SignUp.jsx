import React from "react";

const SignUp = () => {
  return (
    <div>{/* SignUp Page Content -name -email -password -contact number */}
        <form action="post">
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <input type="tel" placeholder="Contact Number" name="contactNumber" required />
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default SignUp;
