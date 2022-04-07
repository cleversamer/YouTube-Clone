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
import RandomAvatar from "./components/RandomAvatar";

export const rowGroups = [
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
    { Icon: RandomAvatar, title: "Samer A. ⚡" },
    { Icon: RandomAvatar, title: "John Doe" },
    { Icon: RandomAvatar, title: "Citlali Fancy" },
    { Icon: RandomAvatar, title: "Braden Sganyodaiyo" },
    { Icon: RandomAvatar, title: "Hollie Tommy" },
    { Icon: RandomAvatar, title: "Barret Petra" },
    { Icon: RandomAvatar, title: "Georgie Sophie" },
    { Icon: RandomAvatar, title: "Jessa Carmen" },
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
  [{ heading: true, title: "© 2022 Google LLC", textTransform: "none" }],
];

export const videos = [];
