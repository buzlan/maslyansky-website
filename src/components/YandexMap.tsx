"use client";
import React, { useEffect } from "react";

const YandexMap: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      if (window.ymaps) {
        clearInterval(interval);

        window.ymaps.ready(() => {
          // Координаты для адреса: г. Москва, Пресненский вал 16, стр. 3
          const coordinates: [number, number] = [55.765, 37.562];
          
          const map = new window.ymaps.Map("map", {
            center: coordinates,
            zoom: 16,
            controls: ["zoomControl"],
          });

          const placemark = new window.ymaps.Placemark(
            coordinates,
            {
              iconContent: "Клиника 'Варикоза Нет'",
              balloonContent: "г. Москва, Пресненский вал 16, стр. 3<br/>(метро 'улица 1905 года')",
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
