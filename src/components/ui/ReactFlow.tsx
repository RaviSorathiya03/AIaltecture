"use client"
import { Background, Controls, MiniMap, ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { useCallback, useState } from "react"

const initialNodes = [
    { "id": "node1", "type": "default", "position": { "x": 250, "y": 0 }, "data": { "label": "Web Frontend" } },
    { "id": "node2", "type": "default", "position": { "x": 250, "y": 150 }, "data": { "label": "API Gateway" } },
    { "id": "node3", "type": "default", "position": { "x": 100, "y": 300 }, "data": { "label": "User Service" } },
    { "id": "node4", "type": "default", "position": { "x": 400, "y": 300 }, "data": { "label": "Application Service" } },
    { "id": "node5", "type": "default", "position": { "x": 250, "y": 450 }, "data": { "label": "Database: PostgreSQL" } }
  ];

const initialEdges = [
    { "id": "edge1", "source": "node1", "target": "node2", "type": "smoothstep", "animated": true },
    { "id": "edge2", "source": "node2", "target": "node3", "type": "smoothstep", "animated": true },
    { "id": "edge3", "source": "node2", "target": "node4", "type": "smoothstep", "animated": true },
    { "id": "edge4", "source": "node3", "target": "node5", "type": "smoothstep" },
    { "id": "edge5", "source": "node4", "target": "node5", "type": "smoothstep" }
  ]

export default function ReactFlowCanvas({ node, edge }: { node?: any[]; edge?: any[] }) {
  const [nodes, setNodes] = useState(node?? initialNodes)
  const [edges, setEdges] = useState(node?? initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  )
  const onConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge(
          {
            ...params,
            style: { stroke: "#8b5cf6", strokeWidth: 2 },
            animated: true,
          },
          edgesSnapshot,
        ),
      ),
    [],
  )

  return (
    <div style={{ width: "100%", height: "100%" }} className="bg-transparent">
      <ReactFlow
        nodes={Array.isArray(node) ? node : nodes}
        edges={Array.isArray(edge) ? edge : edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className="bg-transparent"
      >
        <Controls
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
        <MiniMap
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
        <Background variant="dots" gap={20} size={1} color="rgba(255,255,255,0.1)" />
      </ReactFlow>
    </div>
  )
}
