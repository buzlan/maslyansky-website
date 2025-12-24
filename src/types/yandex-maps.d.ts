interface Window {
  ymaps: {
    ready: (callback: () => void) => void;
    Map: new (element: string | HTMLElement, state: {
      center: [number, number];
      zoom: number;
      controls?: string[];
    }) => {
      geoObjects: {
        add: (object: any) => void;
      };
    };
    Placemark: new (
      coordinates: [number, number],
      properties?: any,
      options?: any
    ) => any;
  };
}

