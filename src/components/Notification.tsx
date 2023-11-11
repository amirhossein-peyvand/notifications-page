import "../sass/Notification.scss";

interface Props {
  clubName?: string;
  commentText?: string;
  followText?: string;
  fullName: string;
  joinText?: string;
  leaveText?: string;
  pic?: string;
  postName?: string;
  privateMessage?: string;
  profilePhoto?: string;
  reactionText?: string;
  requestText?: string;
  time: string;
}

const Notification = ({
  clubName,
  commentText,
  followText,
  fullName,
  joinText,
  leaveText,
  pic,
  postName,
  privateMessage,
  profilePhoto,
  reactionText,
  requestText,
  time,
}: Props) => {
  return <article className="notification"></article>;
};

export default Notification;
