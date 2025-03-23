import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";

const FormInput = ({ value, onChange, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "fullname") {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Full Name</span>
        </label>
        <div className="relative">
          <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="size-6 text-base-content/40 " />
          </div>
          <input
            type="text"
            className={`input input-bordered w-full pl-10 text-base`}
            placeholder="Tirawat Owen"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

  if (type === "email") {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <div className="relative">
          <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="size-5 text-base-content/40 " />
          </div>
          <input
            type="email"
            className={`input input-bordered w-full pl-10 text-base`}
            placeholder="myemail@mail.com"
            required
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

  if (type === "password") {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Passowrd</span>
        </label>
        <div className="relative">
          <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="size-5 text-base-content/40" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className={`input input-bordered w-full pl-10 text-base`}
            placeholder="********"
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="size-5 text-base-content/40" />
            ) : (
              <Eye className="size-5 text-base-content/40" />
            )}
          </button>
        </div>
      </div>
    );
  }
};

export default FormInput;
