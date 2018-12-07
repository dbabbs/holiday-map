const map = L.map('map', {
   center: [41.680407, -87.668558],
   zoom: 11.4,
   layers: [
      Tangram.leafletLayer({
         scene: 'scene.yaml',
         events: { hover: onMapHover }
      })
   ]
});

function onMapHover(selection) {
   if (selection.feature) {
      const tooltipHtml =
         `<div class="tooltip-title">${selection.feature.properties.Title}</div>
          <div class="tooltip-subtitle">${selection.feature.properties.Type}</div>
          <div class="tooltip-subtitle">${selection.feature.properties.Day} ${selection.feature.properties.Time}</div>
          <div class="tooltip-subtitle">${selection.feature.properties.Address}</div>`;
      const popup = L.popup()
         .setLatLng(selection.leaflet_event.latlng)
         .setContent(tooltipHtml)
         .openOn(map);
   } else {
      map.closePopup();
   }
}

makeItSnow();
