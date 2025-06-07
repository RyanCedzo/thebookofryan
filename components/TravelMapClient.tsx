'use client'

import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '@/css/leaflet.extra-markers.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import L from 'leaflet'
import 'leaflet-extra-markers'
import travelData from '@/data/travelData'

export default function TravelMapClient() {
  const [visibleTypes, setVisibleTypes] = useState<string[]>([
    'City',
    'National Park',
    'Other',
    'State Park',
  ])

  const icons = useMemo(() => ({
    City: L.ExtraMarkers.icon({
      icon: 'fa fa-city',
      markerColor: 'black',
      shape: 'circle',
      prefix: 'fa',
    }),
    'National Park': L.ExtraMarkers.icon({
      icon: 'fa fa-tree',
      markerColor: 'green',
      shape: 'circle',
      prefix: 'fa',
    }),
    Other: L.ExtraMarkers.icon({
      icon: 'fa fa-map-pin',
      markerColor: 'red',
      shape: 'circle',
      prefix: 'fa',
    }),
    'State Park': L.ExtraMarkers.icon({
      icon: 'fa fa-seedling',
      markerColor: 'cyan',
      shape: 'circle',
      prefix: 'fa',
    }),
    Default: L.ExtraMarkers.icon({
      icon: 'fa fa-map-marker',
      markerColor: 'white',
      shape: 'circle',
      prefix: 'fa',
    }),
  }), [])

  const toggleType = (type: string) => {
    setVisibleTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    )
  }

  const legendItems = [
    { label: 'City', icon: 'fa-city', color: 'text-black' },
    { label: 'National Park', icon: 'fa-tree', color: 'text-green-500' },
    { label: 'Other', icon: 'fa-map-pin', color: 'text-red-500' },
    { label: 'State Park', icon: 'fa-seedling', color: 'text-cyan-500' },
  ]

  return (
    <div className="relative h-[80vh] w-full">
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {travelData
          .filter((location) => visibleTypes.includes(location.type))
          .map((location) => (
            <Marker
              key={location.slug}
              position={[location.lat, location.lng]}
              icon={icons[location.type] || icons.Default}
            >
              <Popup>
                <div className="max-w-[200px]">
                  <a
                    href={`/travel/${location.slug}`}
                    className="font-semibold text-blue-600 hover:underline block mb-1"
                  >
                    {location.title}
                  </a>
                  {location.imgSrc && (
                    <img
                      src={location.imgSrc}
                      alt={location.title}
                      className="rounded mb-1 max-h-32 w-full object-cover"
                    />
                  )}
                  <p className="text-sm font-medium mb-0.5">
                    {location.date.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="text-sm">{location.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Floating legend */}
      <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-3 text-sm z-[1000] w-auto max-w-[220px]">
        <h3 className="font-semibold mb-2">Legend (Filter)</h3>
        {legendItems.map(({ label, icon, color }) => (
          <button
            key={label}
            onClick={() => toggleType(label)}
            className={`flex items-center gap-2 mb-1 w-full text-left ${
              visibleTypes.includes(label) ? 'opacity-100' : 'opacity-40'
            } hover:opacity-100 transition-opacity`}
          >
            <i className={`fa ${icon} ${color}`} /> <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}