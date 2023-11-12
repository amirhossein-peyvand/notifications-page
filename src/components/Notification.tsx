import "../sass/Notification.scss";

interface Props {
  groupName?: string;
  commentText?: string;
  followText?: string;
  fullName: string;
  joinText?: string;
  leaveText?: string;
  pic?: string;
  postName?: string;
  privateMessage?: string;
  profilePhoto: string;
  reactionText?: string;
  requestText?: string;
  time: string;
}

const Notification = ({
  groupName,
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
  const reaction = (
    <>
      {reactionText}
      <strong className="postName" id="postName">
        {postName}
      </strong>
    </>
  );

  const follow = <>{followText}</>;
  const join = (
    <>
      {joinText} <strong className="group">{groupName}</strong>
    </>
  );
  const request = <>{requestText}</>;
  const comment = <>{commentText}</>;
  const leave = <>{leaveText}</>;

  return (
    <article className="notification">
      <section>
        <picture className="profilePhotoContainer">
          <img src={profilePhoto} alt={profilePhoto} />
        </picture>
        <div className="infoContainer">
          <p>
            <strong className="fullName">{fullName}</strong>
            {reactionText
              ? reaction
              : followText
              ? follow
              : joinText
              ? join
              : requestText
              ? request
              : commentText
              ? comment
              : leave}
          </p>
          <span>{time}</span>
          {privateMessage && <p className="privateMessage">{privateMessage}</p>}
        </div>
      </section>
      {pic && <img src={pic} alt="pic" />}
    </article>
  );
};

export default Notification;
