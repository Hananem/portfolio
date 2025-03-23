"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x065446, 0.4)
    scene.add(ambientLight)

    // Add point lights with different colors
    const pointLight1 = new THREE.PointLight(0x10b981, 1, 15)
    pointLight1.position.set(2, 3, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x34d399, 1, 15)
    pointLight2.position.set(-2, -1, 4)
    scene.add(pointLight2)

    const pointLight3 = new THREE.PointLight(0x059669, 0.8, 15)
    pointLight3.position.set(0, -3, 2)
    scene.add(pointLight3)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000

    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a sphere distribution
      const radius = 5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i + 2] = radius * Math.cos(phi)

      // Random scale for each particle
      scaleArray[i / 3] = Math.random() * 2 + 0.5

      // Vary the color slightly for each particle
      const green = 0.6 + Math.random() * 0.4 // Varying shades of green
      colorArray[i] = 0.05 // R
      colorArray[i + 1] = green // G
      colorArray[i + 2] = 0.4 + Math.random() * 0.2 // B
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    // Material with custom shader for glow effect
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointTexture: { value: new THREE.TextureLoader().load("/glow.png") },
      },
      vertexShader: `
        attribute float scale;
        attribute vec3 color;
        uniform float time;
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          vColor = color;
          vScale = scale;
          vec3 pos = position;
          
          // Add subtle movement
          pos.x += sin(time * 0.2 + position.z * 0.5) * 0.1;
          pos.y += cos(time * 0.2 + position.x * 0.5) * 0.1;
          pos.z += sin(time * 0.2 + position.y * 0.5) * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = scale * (30.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          // Create a circular particle with glow
          vec2 uv = gl_PointCoord.xy;
          float dist = length(uv - vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist);
          
          // Add glow effect
          vec3 glow = vColor * alpha * 1.5;
          gl_FragColor = vec4(glow, alpha * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create a light orb in the center
    const orbGeometry = new THREE.SphereGeometry(0.5, 32, 32)
    const orbMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          // Create a pulsing glow effect
          float pulse = 0.5 + 0.5 * sin(time * 0.5);
          vec3 color = mix(vec3(0.05, 0.6, 0.4), vec3(0.1, 0.8, 0.5), pulse);
          
          // Add rim lighting
          float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
          rim = smoothstep(0.0, 1.0, rim);
          
          vec3 finalColor = mix(color, vec3(0.1, 0.9, 0.6), rim * pulse);
          gl_FragColor = vec4(finalColor, 0.7);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    const orb = new THREE.Mesh(orbGeometry, orbMaterial)
    scene.add(orb)

    // Add light rays
    const rayGeometry = new THREE.CylinderGeometry(0.02, 0.02, 10, 8, 1, true)
    const rayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          float alpha = (1.0 - vUv.y) * 0.5 * (0.5 + 0.5 * sin(time * 0.3 + vUv.y * 5.0));
          vec3 color = mix(vec3(0.05, 0.6, 0.4), vec3(0.1, 0.8, 0.5), vUv.y);
          gl_FragColor = vec4(color, alpha * 0.3);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    })

    // Create multiple light rays
    const rays = new THREE.Group()
    const rayCount = 8
    for (let i = 0; i < rayCount; i++) {
      const ray = new THREE.Mesh(rayGeometry, rayMaterial)
      const angle = (i / rayCount) * Math.PI * 2
      ray.position.set(Math.cos(angle) * 0.1, Math.sin(angle) * 0.1, 0)
      ray.rotation.z = angle
      ray.rotation.y = Math.PI / 2
      rays.add(ray)
    }
    scene.add(rays)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update time uniform for shader animation
      const time = performance.now() * 0.001
      particlesMaterial.uniforms.time.value = time
      orbMaterial.uniforms.time.value = time
      rayMaterial.uniforms.time.value = time

      // Rotate particles
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      // Respond to mouse movement
      particlesMesh.rotation.x += mouseY * 0.0003
      particlesMesh.rotation.y += mouseX * 0.0003

      // Animate light positions
      pointLight1.position.x = Math.sin(time * 0.3) * 3
      pointLight1.position.y = Math.cos(time * 0.2) * 3

      pointLight2.position.x = Math.sin(time * 0.4 + 2) * 3
      pointLight2.position.y = Math.cos(time * 0.3 + 1) * 3

      // Animate orb
      orb.scale.set(1 + Math.sin(time * 0.5) * 0.1, 1 + Math.sin(time * 0.5) * 0.1, 1 + Math.sin(time * 0.5) * 0.1)

      // Animate rays
      rays.rotation.z = time * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Create a glow.png texture for particles
    const createGlowTexture = () => {
      const canvas = document.createElement("canvas")
      canvas.width = 32
      canvas.height = 32
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 32, 32)

      const texture = new THREE.Texture(canvas)
      texture.needsUpdate = true
      return texture
    }

    particlesMaterial.uniforms.pointTexture.value = createGlowTexture()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose of geometries and materials
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      orbGeometry.dispose()
      orbMaterial.dispose()
      rayGeometry.dispose()
      rayMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

