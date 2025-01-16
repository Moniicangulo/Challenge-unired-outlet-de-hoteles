"use client";

import { useEffect, useState } from "react";
import { getHotels } from "@/lib/api";
import HotelCard from "@/components/HotelCard/HotelCard";
import { Header } from "@/components/Header.tesx/Header";
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
      <Header/>
      <div className={style.cards__container}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
