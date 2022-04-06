import React from "react";
import {
  Home,
  ExploreOutlined,
  Whatshot,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  History,
  OndemandVideoOutlined,
  WatchLaterOutlined,
  ThumbUpOutlined,
  KeyboardArrowDown,
  SportsEsportsOutlined,
  OnlinePredictionOutlined,
  CheckroomOutlined,
  LightbulbOutlined,
  EmojiEventsOutlined,
  FeedbackOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SidebarRowGroup from "./SidebarRowGroup";
import "../css/sidebar.css";

const Sidebar = () => {
  const rowGroups = [
    [
      { Icon: Home, title: "Home", selected: true },
      { Icon: ExploreOutlined, title: "Explore" },
      { Icon: Whatshot, title: "Trending" },
      { Icon: SubscriptionsOutlined, title: "Subscriptions" },
    ],
    [
      { Icon: VideoLibraryOutlined, title: "Library" },
      { Icon: History, title: "History" },
      { Icon: OndemandVideoOutlined, title: "Your videos" },
      { Icon: WatchLaterOutlined, title: "Watch later" },
      { Icon: ThumbUpOutlined, title: "Liked videos" },
      { Icon: KeyboardArrowDown, title: "Show more" },
    ],
    [
      { heading: true, title: "Subscriptions" },
      { Icon: Avatar, title: "Samer A." },
      { Icon: Avatar, title: "John Doe" },
      { Icon: Avatar, title: "Citlali Fancy" },
      { Icon: Avatar, title: "Braden Sganyodaiyo" },
      { Icon: Avatar, title: "Hollie Tommy" },
      { Icon: Avatar, title: "Barret Petra" },
      { Icon: Avatar, title: "Georgie Sophie" },
      { Icon: Avatar, title: "Jessa Carmen" },
      { Icon: KeyboardArrowDown, title: "Show 40 more" },
    ],
    [
      { heading: true, title: "More From YouTube" },
      { Icon: SportsEsportsOutlined, title: "Gaming" },
      { Icon: OnlinePredictionOutlined, title: "Live" },
      { Icon: CheckroomOutlined, title: "Fashion & Clothes" },
      { Icon: LightbulbOutlined, title: "Learning" },
      { Icon: EmojiEventsOutlined, title: "Sports" },
      { Icon: FeedbackOutlined, title: "Feedback" },
    ],
    [{ heading: true, title: "© 2022 Google LLC" }],
  ];

  const generateId = (title) => {
    return title + Math.floor(Math.random() * 10000);
  };

  return (
    <aside className="sidebar clickable">
      {rowGroups.map((group) => (
        <SidebarRowGroup key={generateId(group[0].title)} rows={group} />
      ))}
    </aside>
  );
};

export default Sidebar;
