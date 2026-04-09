import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      gender: "",
      agency: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/profile");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex h-[85vh] w-full max-w-[320px] flex-col overflow-y-auto rounded-xl bg-white p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
        
        <h2 className="font-['Bricolage_Grotesque'] text-xl font-bold leading-tight mb-6">
          Create your <br /> Educase account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "Full name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span>Full Name <span className="text-red-600">*</span></span>}
                error={!!errors.fullName}
                helperText={errors.fullName?.message || " "}
                size="small"
                fullWidth
              />
            )}
          />

         
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
              minLength: { value: 10, message: "Must be 10 digits" },
              maxLength: { value: 10, message: "Must be 10 digits" },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span>Phone number <span className="text-red-600">*</span></span>}
                error={!!errors.phone}
                helperText={errors.phone?.message || " "}
                size="small"
                fullWidth
              />
            )}
          />

        
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
                label={<span>Email address <span className="text-red-600">*</span></span>}
                error={!!errors.email}
                helperText={errors.email?.message || " "}
                size="small"
                fullWidth
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
                label={<span>Password <span className="text-red-600">*</span></span>}
                error={!!errors.password}
                helperText={errors.password?.message || " "}
                size="small"
                fullWidth
              />
            )}
          />

     
          <Controller
            name="company"
            control={control}
            rules={{ required: "Company name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label={<span>Company name <span className="text-red-600">*</span></span>}
                error={!!errors.company}
                helperText={errors.company?.message || " "}
                size="small"
                fullWidth
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            rules={{ required: "Please select gender" }}
            render={({ field }) => (
              <FormControl error={!!errors.gender} component="fieldset">
                <FormLabel className="!text-[13px] !font-semibold !text-black mb-1">
                  Gender<span className="text-red-600">*</span>
                </FormLabel>
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" sx={{ '&.Mui-checked': { color: '#6C2EFF' } }} />}
                    label={<span className="text-sm">Male</span>}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" sx={{ '&.Mui-checked': { color: '#6C2EFF' } }} />}
                    label={<span className="text-sm">Female</span>}
                  />
                </RadioGroup>
                {errors.gender && <p className="text-xs text-[#d32f2f]">{errors.gender.message}</p>}
              </FormControl>
            )}
          />

         
          <Controller
            name="agency"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <FormControl error={!!errors.agency} component="fieldset">
                <FormLabel className="!text-[13px] !font-semibold !text-black mb-1">
                  Are you an Agency?<span className="text-red-600">*</span>
                </FormLabel>
                <RadioGroup row {...field}>
                  <FormControlLabel 
                    value="yes" 
                    control={<Radio size="small" sx={{ '&.Mui-checked': { color: '#6C2EFF' } }} />} 
                    label={<span className="text-sm">Yes</span>} 
                  />
                  <FormControlLabel 
                    value="no" 
                    control={<Radio size="small" sx={{ '&.Mui-checked': { color: '#6C2EFF' } }} />} 
                    label={<span className="text-sm">No</span>} 
                  />
                </RadioGroup>
                {errors.agency && <p className="text-xs text-[#d32f2f]">{errors.agency.message}</p>}
              </FormControl>
            )}
          />

          
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid}
            className={`mt-4 w-full normal-case py-3 rounded-lg text-sm transition-all ${
              isValid ? "!bg-[#6C2EFF] opacity-100" : "!bg-[#CBCBCB] opacity-100"
            }`}
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}
