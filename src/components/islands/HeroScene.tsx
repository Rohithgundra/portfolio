import { Component, Suspense, useMemo, useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Swallows WebGL/context failures so the aurora glow underneath remains. */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Outer wireframe shell — slow counter-rotating icosahedron. */
function IcosahedronShell({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.7, 1), []);
  useFrame((state, delta) => {
    if (!ref.current) return;
    if (!reduced) {
      ref.current.rotation.y += delta * 0.16;
      ref.current.rotation.x += delta * 0.06;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.22;
    }
  });
  return (
    <mesh ref={ref} geometry={geometry}>
      <meshBasicMaterial wireframe color="#34d399" transparent opacity={0.45} depthWrite={false} />
    </mesh>
  );
}

/** Inner core — faster octahedron spinning the other way. */
function CoreMesh({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.OctahedronGeometry(0.72, 0), []);
  useFrame((_, delta) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y -= delta * 0.35;
      ref.current.rotation.z += delta * 0.12;
    }
  });
  return (
    <mesh ref={ref} geometry={geometry}>
      <meshBasicMaterial wireframe color="#22d3ee" transparent opacity={0.55} depthWrite={false} />
    </mesh>
  );
}

/** Drifting particle halo around the meshes. */
function ParticleField({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += delta * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#5eead4" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/**
 * Hero 3D scene: aurora-tinted wireframe geometry + particle halo.
 * Hydrated lazily via client:visible; static single frame under reduced motion.
 */
export default function HeroScene() {
  const reduced = prefersReducedMotion();
  return (
    <SceneBoundary>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <IcosahedronShell reduced={reduced} />
          <CoreMesh reduced={reduced} />
          <ParticleField reduced={reduced} />
        </Suspense>
      </Canvas>
    </SceneBoundary>
  );
}
