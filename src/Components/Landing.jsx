import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Landing() {
  const navigate = useNavigate();

  return (
    
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex h-[85vh] w-full max-w-[320px] flex-col justify-end rounded-xl bg-white p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
        
        <div className="mb-auto flex justify-center w-full pt-10">
           <img 
             src={logo} 
             alt="Educase Logo" 
             className=" object-contain w-full " 
           />
        </div>
        <h2 className="font-['Bricolage_Grotesque'] text-[22px] font-bold mb-1">
          Welcome to Educase
        </h2>
        
        <p className="font-['Lato'] text-[17px] text-[#7a7a7a] leading-tight mb-5">
          Best school management software in India for facilitating a seamless app experience
        </p>

        <div className="flex flex-col gap-3">
          <Button
            variant="contained"
            onClick={() => navigate("/signup")}
            className="w-full normal-case py-3 rounded-lg !bg-[#6C2EFF] text-sm"
          >
            Create Account
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            className="w-full normal-case py-3 rounded-lg !bg-[#D6C6FF] !text-[#4A2AAD] text-sm shadow-none"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
}
