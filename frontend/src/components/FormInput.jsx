import { Mail, User } from "lucide-react";
import React from "react";

const FormInput = ({ value, onChange, type }) => {
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
            className={`input input-bordered w-full pl-10`}
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
            className={`input input-bordered w-full pl-10`}
            placeholder="myemail@mail.com"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
};

export default FormInput;
