

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ProfileCard() {
  // Load user from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(user?.bio || "Full Stack Engineer | React | Node.js | Tailwind CSS. Dedicated to building performant, accessible web tools from the ground up. Whether it's crafting responsive frontends or designing robust APIs, I focus on clean code and user-centric design. Currently exploring the intersection of EdTech and scalable system design.");

  const maleAvatar = "https://imgv3.fotor.com/images/homepage-feature-card/fotor-3d-avatar.jpg";
  const femaleAvatar = "https://imgv3.fotor.com/images/homepage-feature-card/fotor-cartoon-avatar.jpg";
  const avatarUrl = user?.gender === "female" ? femaleAvatar : user?.gender === "male" ? maleAvatar : "https://pravatar.cc";

  const handleSave = () => {
    const updatedUser = { ...user, bio };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex min-h-[85vh] w-full max-w-[320px] flex-col overflow-hidden rounded-xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.15)]">
        
        <div className="flex h-12 items-center justify-between bg-white px-4">
          <h4 className="font-['Bricolage_Grotesque'] text-lg font-semibold text-[#1D1D1D]">Account Settings</h4>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-bold text-[#6C2EFF] underline uppercase"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="flex flex-1 flex-col bg-[#F7F8F9] p-4">
         
          <div className="flex items-center gap-4 mb-4">
            <img
              src={avatarUrl}
              alt="Profile"
              onError={(e) => {
                e.currentTarget.src = "https://pravatar.cc";
              }}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-['Lato'] text-[15px] font-bold text-[#1D1D1D]">{user?.fullName || "Guest"}</p>
              <p className="font-['Lato'] text-sm text-[#777]">{user?.email}</p>
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-[#777] uppercase tracking-wider">Bio</label>
            {isEditing ? (
              <div className="flex flex-col gap-3">
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  variant="outlined"
                  size="small"
                  className="bg-white"
                />
                <Button 
                  onClick={handleSave}
                  variant="contained"
                  className="!bg-[#6C2EFF] !text-xs !py-2 self-end normal-case"
                >
                  Save Bio
                </Button>
              </div>
            ) : (
              <p className="font-['Lato'] text-[13px] leading-relaxed text-[#1D1D1D]">
                {bio}
              </p>
            )}
          </div>

          <div className="mt-6 border-t border-dashed border-[#CBCBCB]"></div>
          <div className="flex-1"></div>
          <div className="mb-4 border-t border-dashed border-[#CBCBCB]"></div>
        </div>
      </div>
    </div>
  );
}

