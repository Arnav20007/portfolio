"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let W = mount.clientWidth;
    let H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x060606, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060606, 0.035);

    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 2.5, 9);
    camera.lookAt(0, 1.2, 0);

    // ── 1. GLOWING HORIZON ARC WITH MULTI-LAYER HALO ─────────────
    const arcPoints: THREE.Vector3[] = [];
    const arcRadius = 15.5;
    const segments = 140;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments - 0.5) * (Math.PI * 0.58);
      const x = Math.sin(theta) * arcRadius;
      const y = Math.cos(theta) * arcRadius - 13.2;
      const z = -6.5;
      arcPoints.push(new THREE.Vector3(x, y, z));
    }
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    
    // Core Bright Arc
    const arcMat = new THREE.LineBasicMaterial({
      color: 0xff9a2f,
      transparent: true,
      opacity: 0.90,
    });
    const horizonArc = new THREE.Line(arcGeo, arcMat);
    scene.add(horizonArc);

    // Outer Intense Halo Arc
    const outerArcMat = new THREE.LineBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.45,
    });
    const outerHorizonArc = new THREE.Line(arcGeo, outerArcMat);
    outerHorizonArc.scale.set(1.025, 1.025, 1);
    scene.add(outerHorizonArc);

    // Soft Ambient Horizon Light
    const horizonLight = new THREE.PointLight(0xff8a00, 3, 25);
    horizonLight.position.set(0, 2.2, -6);
    scene.add(horizonLight);

    const blueLight = new THREE.PointLight(0x5b8cff, 2, 20);
    blueLight.position.set(8, 3, -8);
    scene.add(blueLight);

    // ── 2. PERSPECTIVE WIREFRAME GRID FLOOR ──────────────────
    const gridWidth = 60;
    const gridDepth = 45;
    const gridLinesX = 60;
    const gridLinesZ = 45;

    const planeGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, gridLinesX, gridLinesZ);
    planeGeo.rotateX(-Math.PI / 2);
    planeGeo.translate(0, -1.8, -5);

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xff8a00,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const gridMesh = new THREE.Mesh(planeGeo, gridMat);
    scene.add(gridMesh);

    // Glowing Grid Intersection Points
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffc060,
      size: 0.045,
      transparent: true,
      opacity: 0.35,
    });
    const gridPoints = new THREE.Points(planeGeo, pointsMat);
    scene.add(gridPoints);

    // ── 3. FLOATING AMBIENT DUST & STARS ───────────────────────
    // ── 3. FLOATING AMBIENT DUST & STARS (OPTIMIZED) ─────────
    const starCount = 220;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 45;
      starPositions[i * 3 + 1] = Math.random() * 16 - 2;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 35 - 5;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffe2b8,
      size: 0.035,
      transparent: true,
      opacity: 0.35,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── 4. MOUSE PARALLAX INTERACTION ───────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!mount) return;
      W = mount.clientWidth;
      H = mount.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    // ── 5. ANIMATION LOOP ────────────────────────────────────
    let animId: number;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        time += 0.0035;
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        gridMesh.position.z = (time * 1.2) % 1;
        gridPoints.position.z = (time * 1.2) % 1;

        camera.position.x = targetX * 0.6;
        camera.position.y = 2.5 + targetY * 0.3;
        camera.lookAt(0, 1.2, 0);

        stars.rotation.y = time * 0.01;
      }

      horizonLight.intensity = 2.2 + Math.sin(time * 2) * 0.4;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
