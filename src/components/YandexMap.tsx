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
            center: [55.67899, 37.27252],
            zoom: 16,
            controls: ["zoomControl"],
          });

          const placemark = new window.ymaps.Placemark(
            [55.67899, 37.27252],
            {
              balloonContent: "г. Одинцово, Московская область",
            },
            {
              preset: "islands#redIcon",
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
