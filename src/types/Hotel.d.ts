
type mealType = string | { code: number; text: string };
export interface Hotel {
  hotelId: number;
  name: string;
  regionName: string;
  stars: number;
  photos: string[];
  pricePerNight: number;
  originalHighestPrice: number;
  originalLowestPrice: number;
  discounts: number[];
  mealType: mealType;
}