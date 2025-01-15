import style from "./HotelCard.module.css";
import Image from "next/image";
import StarRating from "./StarRating/StarRating";
import { Utensils } from "lucide-react";
import { Hotel } from "@/types/Hotel";

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const {
    name,
    regionName,
    stars,
    photos,
    pricePerNight,
    originalHighestPrice,
    originalLowestPrice,
    discounts,
    mealType,
  } = hotel;

  return (
    <div className={style.card}>
      <figure className={style.image__container}>
        <Image
          src={`https://media.travelartmedia.com/hotels/${photos[0]}`}
          width={250}
          height={250}
          alt={name}
          className={style.image}
        />
      </figure>
      <div className={style.info__container}>
        <div className={style.info__hotel}>
          <span className={style.name}>{name}</span>
          <StarRating stars={stars} />
          <span className={style.regionName}>{regionName}</span>
          <div className={style.mealType}>
            <Utensils size={12} />
            <span>
              {typeof mealType === "string" ? mealType : mealType.text}
            </span>
          </div>
        </div>
        <div className={style.prices__hotel}>
          <span className={style.discount}>{discounts[0]}% off Delivery</span>
          <p className={style.origHighestPrice}>
            Regular price{" "}
            <span className={style.lineThrough}>
              MXN{originalHighestPrice.toFixed(2)}
            </span>
          </p>
          <span className={style.pricePerNight}>
            MXN{pricePerNight.toFixed(2)} per night
          </span>
          <span>
            MXN{originalLowestPrice.toFixed(2)} per stay, taxes and charges
            included.
          </span>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
