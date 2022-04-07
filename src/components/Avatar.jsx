import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = () => {
  const rnd = Math.floor(Math.random() * 5000);

  return (
    <MuiAvatar
      className="clickable"
      src={`https://avatars.dicebear.com/api/human/${rnd}.svg`}
    />
  );
};

export default Avatar;
