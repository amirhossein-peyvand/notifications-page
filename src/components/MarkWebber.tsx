import markWebber from "../assets/avatar-mark-webber.webp";
import "../sass/MarkWebber.scss";

const MarkWebber = () => {
  return (
    <article className="markWebber">
      <picture>
        <img src={markWebber} alt="Mark Webber" />
      </picture>
      <div>
        <p>
          <strong className="fullName">Mark Webber</strong> reacted to your
          recent post <strong>My first tournament today!</strong>
        </p>
        <span>1m ago</span>
      </div>
    </article>
  );
};

export default MarkWebber;
