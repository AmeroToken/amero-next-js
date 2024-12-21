'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(5, 32, 32)
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x003366,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create 4 nodes with target positions
    const nodeGeometry = new THREE.SphereGeometry(0.15, 16, 16)
    const nodeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.5,
    })
    
    const nodes = Array(4).fill(null).map(() => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      )
      node.userData.target = new THREE.Vector3(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      )
      node.userData.speed = 0.02 + Math.random() * 0.02
      scene.add(node)
      return node
    })

    // Create connections
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.3 
    })
    const connections: THREE.Line[] = []

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          nodes[j].position
        ])
        const line = new THREE.Line(geometry, lineMaterial)
        scene.add(line)
        connections.push(line)
      }
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 10

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      globe.rotation.y += 0.001

      // Move nodes
      nodes.forEach((node) => {
        const target = node.userData.target
        const speed = node.userData.speed
        
        // Move towards target
        node.position.lerp(target, speed)
        
        // If close to target, set new target
        if (node.position.distanceTo(target) < 0.1) {
          target.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
          )
        }
      })

      // Update connections
      connections.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array as Float32Array
        const startNode = nodes[Math.floor(index / 3)]
        const endNode = nodes[(Math.floor(index / 3) + 1) % nodes.length]
        positions[0] = startNode.position.x
        positions[1] = startNode.position.y
        positions[2] = startNode.position.z
        positions[3] = endNode.position.x
        positions[4] = endNode.position.y
        positions[5] = endNode.position.z
        line.geometry.attributes.position.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
}

export default Background3D

