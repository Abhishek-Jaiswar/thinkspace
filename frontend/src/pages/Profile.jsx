import React, { useContext, useState, useEffect } from "react";
import Input from "../components/ui/Input";
import { AuthContext } from "../context/AuthContext";
import { baseUrl } from "../libs/api";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const role = user?.role;

  // Show popup if bio or location missing
  useEffect(() => {
    if (user && (!user.bio || !user.location)) {
      setShowUpgrade(true);
    }
  }, [user]);

  const handleUpgrade = async () => {
    try {
      const { data } = await baseUrl.put(`/api/user/upgrade-profile`, {
        bio,
        location,
        role
      });

      setUser(data.user); // update AuthContext
      setShowUpgrade(false);
      toast.success("Profile upgraded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Manage Your Profile</h1>

      {/* Normal profile info */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <Input readOnly placeholder={user?.firstName || "N/A"} />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <Input readOnly placeholder={user?.lastName || "N/A"} />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <Input readOnly placeholder={user?.email || "N/A"} />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <Input readOnly placeholder={user?.bio || "Update your bio"} />
        </div>
        <div className='mt-10 text-center'>
          {role === 'user' && showUpgrade === false && (
            <div>
              <p className='text-neutral-500 text-sm'>You need to update your profile to begin publish you articles</p>
            </div>
          )}
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Complete Your Profile 🚀</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Intrested categories (lifestyle, tech, news)</label>
                <Input
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about your intrested category"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Location</label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where are you from?"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowUpgrade(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleUpgrade}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Save & Upgrade
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Profile;
