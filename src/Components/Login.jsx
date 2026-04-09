import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email === data.email && storedUser?.password === data.password) {
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex h-[85vh] w-full max-w-[320px] flex-col rounded-xl bg-white p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
        
        <div className="mb-5">
          <h2 className="font-['Bricolage_Grotesque'] text-xl font-bold leading-tight mb-4">
            Signin to your <br /> Educase account
          </h2>
          <p className="font-['Lato'] text-[17px] text-[#7a7a7a] leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <form className="flex flex-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email address"
                  error={!!errors.email}
                  helperText={errors.email?.message || " "}
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              )}
            />

            
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  error={!!errors.password}
                  helperText={errors.password?.message || " "}
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </div>

          
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid}
            className={`mt-auto w-full normal-case py-3 rounded-lg text-sm !transition-opacity ${
              isValid ? "!bg-[#6C2EFF] opacity-100" : "!bg-[#CBCBCB] opacity-100"
            }`}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
