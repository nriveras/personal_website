import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

export default function GlobeBackground({ theme }) {
  const globeEl = useRef();
  const [hoverCity, setHoverCity] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Mesh globe settings
  const N = 300;
  const isDark = theme === 'dark';
  const globeBackground = isDark ? 'rgba(15, 23, 42, 1)' : 'rgba(240, 244, 248, 1)';
  const atmosphereColor = isDark ? '#334155' : '#e2e8f0';
  const globeColor = isDark ? 0x1e293b : 0xedf2f7;
  const globeEmissive = isDark ? 0x334155 : 0xd0dae8;
  const pointColor = isDark ? '#94a3b8' : '#506a82';
  const activePointColor = isDark ? '#f1f5f9' : '#e2e8f0';
  const ringColor = isDark ? 'rgba(148, 163, 184, 0.42)' : 'rgba(148, 163, 184, 0.55)';
  const labelColor = isDark ? 'rgba(203, 213, 225, 1)' : 'rgba(100, 116, 139, 1)';

  const arcsData = useMemo(() =>
    [...Array(N).keys()].map(() => {
      const color = isDark
        ? ['rgba(148, 163, 184, 0.16)', 'rgba(148, 163, 184, 0.3)']
        : ['rgba(100, 116, 139, 0.18)', 'rgba(100, 116, 139, 0.32)'];

      return {
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color
      };
    }),
  [N, isDark]);

  const cities = useMemo(() => [
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, size: 0.15 },
    { name: "New York", lat: 40.7128, lng: -74.0060, size: 0.15 },
    { name: "London", lat: 51.5074, lng: -0.1278, size: 0.15 },
    { name: "Berlin", lat: 52.5200, lng: 13.4050, size: 0.15 },
    { name: "Paris", lat: 48.8566, lng: 2.3522, size: 0.15 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093, size: 0.15 },
    { name: "São Paulo", lat: -23.5505, lng: -46.6333, size: 0.15 },
    { name: "Tübingen", lat: 48.5216, lng: 9.0576, size: 0.15 },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194, size: 0.15 },
    { name: "Beijing", lat: 39.9042, lng: 116.4074, size: 0.15 },
    { name: "Santiago", lat: -33.4489, lng: -70.6693, size: 0.15 }
  ], []);

  const hoverRingData = useMemo(() => {
    if (!hoverCity) return [];
    const city = cities.find((item) => item.name === hoverCity);
    return city ? [city] : [];
  }, [cities, hoverCity]);

  const handlePointHover = (point) => {
    setHoverCity(point?.name ?? null);
    setIsHovered(Boolean(point));
  };

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({ width, height });

      if (!globeEl.current) return;

      globeEl.current.pointOfView({ altitude: 0.5 }, 0);

      // Recalculate scene placement whenever aspect ratio changes.
      const isPortrait = height > width;
      const baseX = isPortrait ? -20 : 0;
      const baseY = isPortrait ? -30 : -40;
      globeEl.current.scene().position.x = baseX;
      globeEl.current.scene().position.y = baseY;
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    // Dynamic auto-rotation speed based on hover state
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = isHovered ? 0.05 : 0.4;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
    }
  }, [isHovered]);

  return (
    <div className="globe-wrapper">
      <Globe
        ref={globeEl}
        width={viewport.width}
        height={viewport.height}
        backgroundColor={globeBackground}
        showAtmosphere={true}
        atmosphereColor={atmosphereColor}
        atmosphereAltitude={0.15}
        
        // Use a wireframe/mesh look for the globe map
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: globeColor,
            emissive: globeEmissive,
            emissiveIntensity: 0.9,
            shininess: 0.9,
            transparent: true,
            opacity: 0.9,
            wireframe: true // creates the requested "mesh of nodes"
          })
        }

        // Add arcs to form mesh connections
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}

        // Cities
        pointsData={cities}
        pointLat="lat"
        pointLng="lng"
        pointColor={d => d.name === hoverCity ? activePointColor : pointColor}
        pointAltitude={d => d.name === hoverCity ? 0.14 : 0.02}
        pointRadius={d => d.name === hoverCity ? d.size * 7 : d.size}
        pointsMerge={false}
        onPointHover={handlePointHover}
        pointLabel="" // Suppress default tooltip to use label instead

        // Hover illumination ripple around the active marker
        ringsData={hoverRingData}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => ringColor}
        ringMaxRadius={3}
        ringPropagationSpeed={2}
        ringRepeatPeriod={700}
        
        // City 3D Labels
        labelsData={cities}
        labelLat="lat"
        labelLng="lng"
        labelText={d => d.name === hoverCity ? d.name : ''}
        labelSize={d => d.name === hoverCity ? 1.5 : 0}
        labelDotRadius={0}
        labelColor={() => labelColor}
        labelResolution={3}
        labelAltitude={0.15}
      />
    </div>
  );
}
