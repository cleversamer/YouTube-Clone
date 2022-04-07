import { Avatar } from "@mui/material";

const RandomAvatar = (props) => {
  const size = Math.floor(Math.random() * 300) + 100;

  return (
    <Avatar
      className="clickable"
      {...props}
      src={`https://i.pravatar.cc/${size}`}
    />
  );
};

export default RandomAvatar;
