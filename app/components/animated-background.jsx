'use client';

import { useEffect, useRef, useState } from 'react';

const CODE_SYMBOLS = ['01', '10', '{}', '[]', '()', '//', '&&', '||', '=>', '++'];

// Three.js Wave Mesh Component (Similar to Vanta Waves)
const WaveMesh = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let animationId;
    let mouseX = 0, mouseY = 0;

    const init = async () => {
      // Dynamically import Three.js
      const THREE = await import('three');

      const container = containerRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0e1a);
      scene.fog = new THREE.Fog(0x0a0e1a, 40, 100); // Extended fog range for more visible waves

      // Camera - angled to show wave detail
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 15, 22);
      camera.lookAt(0, 0, -5);

      // Renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Wave Geometry - high detail mesh
      const geometry = new THREE.PlaneGeometry(100, 60, 200, 120);
      geometry.rotateX(-Math.PI / 2.2);

      // Store original positions
      const positions = geometry.attributes.position;
      const originalPositions = new Float32Array(positions.array.length);
      originalPositions.set(positions.array);

      // Material - visible waves with detail
      const material = new THREE.MeshPhongMaterial({
        color: 0x0d3050,        // Ocean blue
        emissive: 0x061828,     // Subtle blue glow
        specular: 0x30b0b0,     // Teal specular highlights
        shininess: 80,          // Reflective for wave detail
        side: THREE.DoubleSide,
        flatShading: false,
        transparent: true,
        opacity: 0.9,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = -3;
      scene.add(mesh);

      // Lighting for wave visibility
      const ambientLight = new THREE.AmbientLight(0x1a3a4a, 0.6);
      scene.add(ambientLight);

      // Main light from above-front - highlights wave peaks
      const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
      mainLight.position.set(5, 30, 20);
      scene.add(mainLight);

      // Side light for depth perception
      const sideLight = new THREE.DirectionalLight(0x60c0c0, 0.5);
      sideLight.position.set(-20, 10, 0);
      scene.add(sideLight);

      // Underwater glow
      const underwaterGlow = new THREE.PointLight(0x00aacc, 1.5, 100);
      underwaterGlow.position.set(0, -10, 5);
      scene.add(underwaterGlow);

      // Rim light from front
      const rimLight = new THREE.DirectionalLight(0x40a0a0, 0.6);
      rimLight.position.set(0, 8, 40);
      scene.add(rimLight);

      // Mouse move handler - map to wave mesh coordinates
      const handleMouseMove = (event) => {
        // Map screen coordinates to mesh world coordinates
        // Mesh is 100x60 units, centered at origin
        mouseX = ((event.clientX / window.innerWidth) - 0.5) * 100;  // -50 to 50
        mouseY = ((event.clientY / window.innerHeight) - 0.5) * 60;  // Maps to Z: -30 to 30
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Touch handler
      const handleTouch = (event) => {
        if (event.touches.length > 0) {
          mouseX = ((event.touches[0].clientX / window.innerWidth) - 0.5) * 100;
          mouseY = ((event.touches[0].clientY / window.innerHeight) - 0.5) * 60;
        }
      };
      window.addEventListener('touchmove', handleTouch);
      window.addEventListener('touchstart', handleTouch);

      // Resize handler
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      // Animation
      let time = 0;
      const animate = () => {
        time += 0.02;

        // Update wave vertices - DETAILED NATURAL FLOWING WAVES
        const pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = originalPositions[i * 3];
          const z = originalPositions[i * 3 + 2];
          
          // === WAVE LAYERS (all flowing toward viewer) ===
          
          // Layer 1: Primary swell - big slow rolling waves
          const wave1 = Math.sin(z * 0.08 - time) * 2.5;
          
          // Layer 2: Secondary swell - slightly angled
          const wave2 = Math.sin(z * 0.12 + x * 0.02 - time * 1.1) * 1.5;
          
          // Layer 3: Tertiary wave
          const wave3 = Math.sin(z * 0.18 - x * 0.03 - time * 0.9) * 0.8;
          
          // Layer 4: Medium chop
          const chop1 = Math.sin(z * 0.28 + x * 0.08 - time * 1.8) * 0.5;
          
          // Layer 5: Surface chop - faster
          const chop2 = Math.sin(z * 0.4 + x * 0.12 - time * 2.5) * 0.35;
          
          // Layer 6: Fine detail waves
          const detail1 = Math.sin(z * 0.55 - x * 0.05 - time * 3.0) * 0.2;
          const detail2 = Math.sin(z * 0.7 + x * 0.15 - time * 3.5) * 0.15;
          
          // Layer 7: Micro ripples for surface texture
          const ripple = Math.sin(z * 0.9 + x * 0.2 - time * 4) * 0.1;
          
          // Combine all layers
          const waveHeight = wave1 + wave2 + wave3 + chop1 + chop2 + detail1 + detail2 + ripple;
          
          // === MOUSE INTERACTION ===
          // Calculate distance from mouse position (now correctly mapped)
          const dx = x - mouseX;
          const dz = z - mouseY;
          const mouseDist = Math.sqrt(dx * dx + dz * dz);
          
          // Create ripple effect around mouse - larger radius and stronger effect
          const rippleRadius = 35;
          const rippleStrength = Math.max(0, (rippleRadius - mouseDist) / rippleRadius);
          const mouseWave = Math.sin(mouseDist * 0.3 - time * 6) * rippleStrength * 2.5;
          
          pos.array[i * 3 + 1] = waveHeight + mouseWave;
        }
        pos.needsUpdate = true;
        geometry.computeVertexNormals();

        // Gentle camera sway based on mouse
        const targetX = (mouseX / 50) * 3;  // Normalize back for camera
        const targetY = 15 - (mouseY / 30) * 2;
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (targetY - camera.position.y) * 0.02;
        camera.lookAt(0, 0, -5);

        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      animate();
      sceneRef.current = { renderer, scene, camera, animationId, handleMouseMove, handleTouch, handleResize, width, height };
    };

    init();

    return () => {
      if (sceneRef.current) {
        const { renderer, animationId, handleMouseMove, handleTouch, handleResize } = sceneRef.current;
        cancelAnimationFrame(animationId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouch);
        window.removeEventListener('touchstart', handleTouch);
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0" />;
};

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Three.js Wave Background */}
      {mounted && <WaveMesh />}
      
      {/* Fallback gradient for SSR */}
      {!mounted && (
        <div 
          className="fixed inset-0 z-0"
          style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1829 50%, #0f1d32 100%)' }}
        />
      )}
      
      {/* Overlay elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Gradient overlay - darker at top for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-transparent to-[#0a0e1a]/40" />
        
        {/* Stars */}
        <div className="stars opacity-30" />
        
        {/* Aurora */}
        <div className="absolute inset-0 opacity-10">
          <div className="aurora aurora-1" />
        </div>
        
        {/* Floating orbs */}
        <div className="floating-orb orb-1 opacity-30" />
        <div className="floating-orb orb-2 opacity-25" />
        
        {/* Animated ship */}
        <div className="ship-container">
          <svg className="ship" viewBox="0 0 100 80" fill="none">
            <path 
              d="M10 50 Q15 65 50 65 Q85 65 90 50 L85 50 Q80 58 50 58 Q20 58 15 50 Z" 
              fill="#2d1810" stroke="#1a0f0a" strokeWidth="1"
            />
            <rect x="20" y="45" width="60" height="8" fill="#3d2415" rx="2" />
            <rect x="48" y="10" width="4" height="40" fill="#4a2c17" />
            <path className="sail" d="M52 12 L52 42 Q70 35 75 27 Q70 20 52 12" fill="#f5f5dc" stroke="#d4d4aa" strokeWidth="1" />
            <path className="flag" d="M50 10 L50 5 L65 7.5 L50 10" fill="#00ff88" />
            <rect x="55" y="38" width="20" height="12" fill="#2d1810" rx="2" />
            <rect x="58" y="41" width="5" height="5" fill="#ffd700" opacity="0.6" />
            <rect x="66" y="41" width="5" height="5" fill="#ffd700" opacity="0.4" />
          </svg>
        </div>
        
        {/* Code rain */}
        {mounted && (
          <div className="code-rain opacity-15">
            {CODE_SYMBOLS.map((symbol, i) => (
              <div
                key={i}
                className="code-drop"
                style={{ '--delay': `${i * 0.3}s`, '--x': `${5 + i * 10}%` }}
              >
                {symbol}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AnimatedBackground;
