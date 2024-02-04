import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
  description: "this is profile page",
};

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default ProfilePage;
