import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";

function Profile() {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();

    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("No user logged in");
      return;
    }

    try {
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile updated successfully 🎉");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-2xl p-6 mx-auto mt-10 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center">My Profile</h2>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={photo || "https://i.ibb.co/2n0v6Qz/user.png"}
            className="w-24 h-24 border-4 border-green-500 rounded-full"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Email (readonly) */}
          <div>
            <label className="text-sm">Email</label>
            <input
              value={user?.email}
              disabled
              className="w-full p-3 bg-gray-100 border rounded-lg"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm">Photo URL</label>
            <input
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full py-3 text-white bg-green-600 rounded-lg"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
