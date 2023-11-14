import "../sass/ReactNotification.scss";

interface Props {
  fullName: string;
  newNotification?: boolean;
  post: string;
  profilePhoto: string;
  text: string;
  time: string;
}

const ReactNotification = ({
  fullName,
  newNotification,
  post,
  profilePhoto,
  text,
  time,
}: Props) => {
  return (
    <article className={`reaction ${newNotification && "new"}`}>
      <picture>
        <img src={profilePhoto} alt="profilePhoto" />
      </picture>
      <div className="profInfo">
        <p>
          <strong className="fullName">{fullName}</strong>
          <span className="text">{text}</span>
          <strong className="post">{post}</strong>
        </p>
        <span className="time">{time}</span>
      </div>
    </article>
  );
};

export default ReactNotification;
