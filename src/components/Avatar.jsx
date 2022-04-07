import { Avatar } from "@mui/material";

const RandomAvatar = () => {
  const size = Math.floor(Math.random() * 300) + 100;

  return <Avatar className="clickable" src={`https://i.pravatar.cc/${size}`} />;
};

export default RandomAvatar;
