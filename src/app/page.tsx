"use client";

import { useEffect, useState } from "react";
import { getHotels } from "@/lib/api";
import HotelCard from "@/components/HotelCard/HotelCard"; 
import style from "./page.module.css";
import { Hotel } from "@/types/Hotel";

export default function Home() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getHotels();
        console.log(response);

          const mappedHotels: Hotel[] = response.map((hotel: Hotel) => ({
            hotelId: hotel.hotelId,
            name: hotel.name,
            regionName: hotel.regionName,
            stars: hotel.stars,
            photos: hotel.photos,
            pricePerNight: hotel.pricePerNight,
            originalHighestPrice: hotel.originalHighestPrice,
            originalLowestPrice: hotel.originalLowestPrice,
            discounts: hotel.discounts,
            mealType: hotel.mealType,
          }));
          
          setHotels(mappedHotels);
       
        setLoading(false);
      } catch (error) {
        setError((error as Error).message || "Error desconocido");
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (hotels.length === 0) return <div>No hotels found.</div>;

  return (
    <div className={style.main}>
      <h1>Welcome to the Hotel Booking Application</h1>
      <p>Explore the best hotels for your next trip.</p>
      <div className={style.cards__container}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}