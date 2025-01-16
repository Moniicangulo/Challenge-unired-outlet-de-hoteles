import { Star } from "lucide-react";

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          fill={index < stars ? "#FFD700" : "none"}
          stroke={index < stars ? "#FFD700" : "#6E6E6E"}
        />
      ))}
    </div>
  );
};

export default StarRating;
