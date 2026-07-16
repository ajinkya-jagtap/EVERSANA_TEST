import React from "react";

const RegistrationForm = React.memo(
  ({ register, handleSubmit, submitForm, errors }) => {
    console.log("err", errors);
    return (
      <form
        style={{ display: "flex", flexDirection: "column", padding: "50px" }}
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <input
            placeholder="name"
            {...register("name")}
            style={{ margin: "10px", width: "50%" }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="email"
            {...register("email")}
            type="email"
            style={{ margin: "10px", width: "50%" }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="password"
            style={{ margin: "10px", width: "50%" }}
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="confirm password"
            style={{ margin: "10px", width: "50%" }}
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div>
          <button type="submit" style={{ width: "30%" }}>
            Submit
          </button>
        </div>
      </form>
    );
  },
);

export default RegistrationForm;
