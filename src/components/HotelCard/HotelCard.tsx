import style from "./HotelCard.module.css";
import Image from "next/image";
import StarRating from "./StarRating/StarRating";
import { Utensils, BedDouble } from "lucide-react";
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

  const formatPrice = (price: number): string => {
    return price.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
    });
  };
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
            {typeof mealType === "string" ? (
              <BedDouble size={16} />
            ) : (
              <Utensils size={16} />
            )}
            <span>
              {typeof mealType === "string" ? mealType : mealType.text}
            </span>
          </div>
        </div>
        <div className={style.prices__hotel}>
          <span className={style.discount}>{discounts[0]}% Off</span>
          <p className={style.origHighestPrice}>
            Regular price{" "}
            <span className={style.lineThrough}>
            MXN{formatPrice(originalHighestPrice)}
            </span>
          </p>
          <span className={style.pricePerNight}>
            MXN{formatPrice(pricePerNight)} / night
          </span>
          <span>
            MXN{formatPrice(originalLowestPrice)} per stay, taxes and charges
            included.
          </span>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
