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

export const videos = [
  {
    id: 1,
    verified: true,
    title:
      "2022-04-7-Next 10 Mini-summit - WASM and Security model/policies/etc",
    views: "11.2K",
    channel: "node.js",
    timestamp: "3 days ago",
    posterUrl:
      "https://i.ytimg.com/vi/MqOdY58EW7M/hq720_live.jpg?sqp=CPT_u5IG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY8LccIcL5Ce0VurV3xB6maRaPNA",
    avatarUrl:
      "https://yt3.ggpht.com/ytc/AKedOLROsdJBMU96gMZ0gBWKx9c0X_1gPjvPMoHluvHzqw=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    verified: false,
    title: "React Testing Tutorial with React Testing Library and Jest",
    views: "11.2K",
    channel: "Lama Dev",
    timestamp: "3 hours ago",
    posterUrl:
      "https://i.ytimg.com/vi/Flo268xRpV0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_pKgPdoZ7pPZlN2xh0JGEp8Tfwg",
    avatarUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    verified: true,
    title: "Java for the Haters in 100 Seconds",
    views: "537K",
    channel: "Fireship",
    timestamp: "17 hours ago",
    posterUrl:
      "https://i.ytimg.com/vi/m4-HM_sCvtQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQxtCvGWd0nYzijJ9mws8P3g3DCw",
    avatarUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR5CDv14gL4DQ7I4gxIlBMY6u-CNsq2qfeev48R2g=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    verified: true,
    title: "Java for the Haters in 100 Seconds",
    views: "537K",
    channel: "Fireship",
    timestamp: "17 hours ago",
    posterUrl:
      "https://i.ytimg.com/vi/m4-HM_sCvtQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQxtCvGWd0nYzijJ9mws8P3g3DCw",
    avatarUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR5CDv14gL4DQ7I4gxIlBMY6u-CNsq2qfeev48R2g=s88-c-k-c0x00ffffff-no-rj",
  },
];
