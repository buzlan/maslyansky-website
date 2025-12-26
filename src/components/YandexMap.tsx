"use client";
import React, { useEffect } from "react";

const YandexMap: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      if (window.ymaps) {
        clearInterval(interval);

        window.ymaps.ready(() => {
          const map = new window.ymaps.Map("map", {
            center: [55.761, 37.580],
            zoom: 16,
            controls: ["zoomControl"],
          });

          const placemark = new window.ymaps.Placemark(
            [55.761, 37.580],
            {
              iconContent: "Доктор Дотер Маслянский",
              balloonContent: "ул. Пресненский Вал, 16 строение 3",
            },
            {
              preset: "islands#blackStretchyIcon",
            }
          );

          map.geoObjects.add(placemark);
        });
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "350px", borderRadius: "20px" }}
    ></div>
  );
};

export default YandexMap;
