"use client";

import { useState, useMemo } from "react";
import photosData from "@/data/photosData";
import Image from "next/image";
import Link from "next/link";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Photos" });

// Helpers
const getStateFromLocation = (loc: string) => {
  const parts = loc.split(",");
  return parts.length > 1 ? parts[parts.length - 1].trim() : "";
};
const getDateObj = (dateStr: string) => new Date(dateStr);

export default function PhotosPage() {
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Dropdown options
  const cameras = [...new Set(photosData.map((p) => p.camera).filter(Boolean))];

  // Type-safe state options
  const states = [
    ...new Set(
      photosData
        .map((p) => getStateFromLocation(p.location))
        .filter((s): s is string => Boolean(s))
    ),
  ];

  const years = [
    ...new Set(
      photosData.map((p) => getDateObj(p.date).getFullYear()).filter(Boolean)
    ),
  ].sort((a, b) => b - a); // descending: most recent first

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  // Apply filters
  const filteredPhotos = useMemo(() => {
    return photosData
      .filter((photo) => {
        const photoState = getStateFromLocation(photo.location);
        const photoDate = getDateObj(photo.date);

        const matchesCamera = selectedCamera ? photo.camera === selectedCamera : true;
        const matchesState = selectedState ? photoState === selectedState : true;
        const matchesYear = selectedYear ? photoDate.getFullYear() === Number(selectedYear) : true;
        const matchesMonth = selectedMonth
          ? photoDate.toLocaleString("default", { month: "long" }) === selectedMonth
          : true;

        return matchesCamera && matchesState && matchesYear && matchesMonth;
      })
      // Sort by most recent date first
      .sort((a, b) => getDateObj(b.date).getTime() - getDateObj(a.date).getTime());
  }, [selectedCamera, selectedState, selectedYear, selectedMonth]);

  // Render a single dropdown with custom arrow
  const renderDropdown = (
    value: string,
    setter: (v: string) => void,
    options: string[] | number[],
    placeholder: string
  ) => (
    <div className="relative inline-block w-48">
      <select
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="custom-select block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
          Photos
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          A collection of visual moments. Use the filters below to view by camera, location, or date.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 py-6">
        {renderDropdown(selectedCamera, setSelectedCamera, cameras, "All Cameras")}
        {renderDropdown(selectedState, setSelectedState, states, "All States")}
        {renderDropdown(selectedYear, setSelectedYear, years, "All Years")}
        {renderDropdown(selectedMonth, setSelectedMonth, months, "All Months")}
      </div>

      {/* Photos Grid */}
      <div className="py-12">
        <div className="grid auto-rows-[250px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo) => (
            <Link
              key={photo.title}
              href={`/photos/${photo.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`group relative overflow-hidden rounded-lg shadow-lg ${
                photo.isVertical ? "row-span-2" : ""
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={photo.imgSrc}
                  alt={photo.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ objectPosition: "top" }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <h2 className="text-lg font-semibold">{photo.title}</h2>
              </div>
            </Link>
          ))}

          {filteredPhotos.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No photos match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}