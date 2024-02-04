"use client";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const profileImages = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

const CardContainer = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      {profileImages.map((image, index) => (
        <UserCard
          key={index}
          image={image}
          name={
            index == 0 && currentUser
              ? currentUser?.displayName
              : `Guest-${index + 1}`
          }
        />
      ))}
      {/* <UserCard
        image={images[0]}
        name={currentUser?.displayName || `Guest-1`}
      />
      <UserCard image={images[1]} name="Guest-2" />
      <UserCard image={images[2]} name="Guest-3" />
      <UserCard image={images[3]} name="Guest-4" /> */}
    </div>
  );
};

export default CardContainer;
