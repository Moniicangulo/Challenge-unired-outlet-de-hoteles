import style from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.titles}>
          <h1>Welcome to the Hotel Booking Application</h1>
          <p>Explore the best hotels for your next trip.</p>
        </div>
        <figure className={style.image__hotel}>
          <Image
            src="/images/hotel-header.png"
            width={800}
            height={400}
            alt="hotel"
          />
        </figure>
      </div>
    </div>
  );
};
