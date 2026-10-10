import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HopeOrbit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
    camera.position.z = 5;

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, -0.38);
    heartShape.bezierCurveTo(-0.16, -0.2, -0.68, 0.16, -0.58, 0.52);
    heartShape.bezierCurveTo(-0.47, 0.9, -0.06, 0.86, 0, 0.5);
    heartShape.bezierCurveTo(0.06, 0.86, 0.47, 0.9, 0.58, 0.52);
    heartShape.bezierCurveTo(0.68, 0.16, 0.16, -0.2, 0, -0.38);

    const heartGeometry = new THREE.ExtrudeGeometry(heartShape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    });
    heartGeometry.center();

    const heartMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xef5739,
      roughness: 0.24,
      metalness: 0.12,
      clearcoat: 0.85,
    });
    const heart = new THREE.Mesh(heartGeometry, heartMaterial);
    sculpture.add(heart);

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf2c14e,
      metalness: 0.45,
      roughness: 0.3,
    });
    const pearlMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.15,
      roughness: 0.28,
      transparent: true,
      opacity: 0.9,
    });
    const goldRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.018, 10, 96),
      goldMaterial,
    );
    goldRing.rotation.set(1.05, 0.28, -0.22);
    sculpture.add(goldRing);

    const pearlRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.012, 8, 96),
      pearlMaterial,
    );
    pearlRing.rotation.set(0.38, 1.05, 0.52);
    sculpture.add(pearlRing);

    const orbiterGeometry = new THREE.SphereGeometry(0.055, 16, 16);
    const orbiterGroup = new THREE.Group();
    const goldOrbiter = new THREE.Mesh(orbiterGeometry, goldMaterial);
    goldOrbiter.position.set(1.05, 0, 0);
    const pearlOrbiter = new THREE.Mesh(orbiterGeometry, pearlMaterial);
    pearlOrbiter.position.set(-1.05, 0, 0);
    orbiterGroup.add(goldOrbiter, pearlOrbiter);
    orbiterGroup.rotation.set(1.05, 0.28, -0.22);
    sculpture.add(orbiterGroup);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x9b482c, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(2.5, 3, 4);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xffb16f, 1.6, 8);
    fillLight.position.set(-2, -1.5, 2.5);
    scene.add(fillLight);

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    });
    resizeObserver.observe(canvas);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (event) => {
      if (reduceMotion) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const resetPointer = () => {
      pointer.x = 0;
      pointer.y = 0;
    };
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", resetPointer);

    let animationFrame = 0;
    const animate = (time) => {
      sculpture.rotation.y +=
        ((reduceMotion ? 0 : time * 0.00018 + pointer.x * 0.22) -
          sculpture.rotation.y) *
        0.035;
      sculpture.rotation.x +=
        ((reduceMotion ? 0 : pointer.y * 0.16) - sculpture.rotation.x) * 0.035;
      heart.rotation.z = reduceMotion ? 0 : Math.sin(time * 0.001) * 0.035;
      goldRing.rotation.z += reduceMotion ? 0 : 0.0015;
      pearlRing.rotation.x += reduceMotion ? 0 : 0.001;
      heart.position.y = reduceMotion ? 0 : Math.sin(time * 0.0012) * 0.045;
      renderer.render(scene, camera);
      if (!reduceMotion) animationFrame = window.requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", resetPointer);
      heartGeometry.dispose();
      goldRing.geometry.dispose();
      pearlRing.geometry.dispose();
      orbiterGeometry.dispose();
      heartMaterial.dispose();
      goldMaterial.dispose();
      pearlMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-orbit" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
