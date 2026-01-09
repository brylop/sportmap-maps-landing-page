import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Line } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
  id: string;
  name: string;
  type: 'school' | 'coach' | 'athlete' | 'center';
  position: [number, number, number];
  color: string;
}

function NetworkNode({ node, isHovered, onHover }: { node: Node; isHovered: boolean; onHover: (id: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered || isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={node.position}>
      <Sphere
        ref={meshRef}
        args={[node.type === 'center' ? 0.3 : 0.15, 32, 32]}
        onPointerOver={() => {
          setHovered(true);
          onHover(node.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isHovered ? 0.8 : 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      {(hovered || isHovered) && (
        <Text
          position={[0, 0.4, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {node.name}
        </Text>
      )}
    </group>
  );
}

function ConnectionLines({ nodes }: { nodes: Node[] }) {
  const centerNode = nodes.find(n => n.type === 'center');
  if (!centerNode) return null;

  return (
    <>
      {nodes
        .filter(n => n.type !== 'center')
        .map((node) => (
          <Line
            key={node.id}
            points={[centerNode.position, node.position]}
            color="#3b82f6"
            lineWidth={1}
            opacity={0.3}
            transparent
          />
        ))}
    </>
  );
}

function Scene() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  const nodes: Node[] = useMemo(() => [
    { id: 'center', name: 'SportMaps', type: 'center', position: [0, 0, 0], color: '#3b82f6' },
    { id: 'school1', name: 'Academia Real Madrid', type: 'school', position: [2, 1, 1], color: '#10b981' },
    { id: 'school2', name: 'FC Barcelona Academy', type: 'school', position: [-2, 1.5, -1], color: '#10b981' },
    { id: 'school3', name: 'Atlético de Madrid', type: 'school', position: [1.5, -1, 2], color: '#10b981' },
    { id: 'school4', name: 'Valencia CF Academy', type: 'school', position: [-1.5, -1.5, 1.5], color: '#10b981' },
    { id: 'coach1', name: 'Carlos Pérez', type: 'coach', position: [2.5, 0, -1], color: '#f59e0b' },
    { id: 'coach2', name: 'Ana García', type: 'coach', position: [-2, -1, -2], color: '#f59e0b' },
    { id: 'coach3', name: 'Miguel Torres', type: 'coach', position: [1, 2, -1.5], color: '#f59e0b' },
    { id: 'coach4', name: 'Laura Martínez', type: 'coach', position: [-1, 1, 2], color: '#f59e0b' },
    { id: 'athlete1', name: 'David Silva', type: 'athlete', position: [0, 2, 2], color: '#ec4899' },
    { id: 'athlete2', name: 'María López', type: 'athlete', position: [2, -2, 0], color: '#ec4899' },
    { id: 'athlete3', name: 'Juan Rodríguez', type: 'athlete', position: [-2, 0, 2], color: '#ec4899' },
  ], []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <group ref={groupRef}>
        <ConnectionLines nodes={nodes} />
        {nodes.map((node) => (
          <NetworkNode
            key={node.id}
            node={node}
            isHovered={hoveredNode === node.id}
            onHover={setHoveredNode}
          />
        ))}
      </group>
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export function ThreeScene() {
  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-sport-background/90 to-sport-surface/90 backdrop-blur-sm border border-sport-border/30 shadow-elegant">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <div className="inline-flex gap-4 bg-sport-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-sport-border/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
            <span className="text-xs text-sport-text-secondary">Centro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
            <span className="text-xs text-sport-text-secondary">Escuelas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
            <span className="text-xs text-sport-text-secondary">Entrenadores</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ec4899]"></div>
            <span className="text-xs text-sport-text-secondary">Deportistas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
