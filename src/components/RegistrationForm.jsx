import { FormProvider } from "react-hook-form";

function RegistrationForm({ form, submitForm }) {
  console.log("form", form, form.formState);
  return (
    <FormProvider {...form}>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "50px" }}
        // onSubmit={form.handleSubmit(submitForm)}
      >
        <div>
          <input
            placeholder="name"
            {...form.register("name")}
            style={{ margin: "10px", width: "50%" }}
          />
          {form.formState.errors.name && <h3>{form.formState.errors.name}</h3>}
        </div>
        <div>
          <input
            placeholder="email"
            {...form.register("email")}
            type="email"
            style={{ margin: "10px", width: "50%" }}
          />
        </div>
        <div>
          <input
            placeholder="password"
            style={{ margin: "10px", width: "50%" }}
            type="password"
            {...form.register("password")}
          />
        </div>
        <div>
          <input
            placeholder="confirm password"
            style={{ margin: "10px", width: "50%" }}
            type="password"
            {...form.register("confirmPassword")}
          />
        </div>
        <div>
          <button type="button" onClick={submitForm} style={{ width: "30%" }}>
            Submit
          </button>
        </div>
      </div>
    </FormProvider>
  );
}

export default RegistrationForm;
