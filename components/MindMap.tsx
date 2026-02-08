
import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { MindMapNode } from '../types';

interface MindMapProps {
  data: MindMapNode;
  width: number;
  height: number;
}

const MindMap: React.FC<MindMapProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 120, bottom: 20, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });
    
    svg.call(zoom);

    const root = d3.hierarchy<MindMapNode>(data);
    
    // Initial collapse - keeping first 2 levels expanded
    root.descendants().forEach((d, i) => {
      if (d.depth >= 2) {
        (d as any)._children = d.children;
        (d as any).children = null;
      }
    });

    const treeLayout = d3.tree<MindMapNode>().size([innerHeight, innerWidth]);

    function update(source: any) {
      const treeData = treeLayout(root);
      const nodes = treeData.descendants();
      const links = treeData.links();

      // Normalize for fixed-depth
      nodes.forEach(d => { d.y = d.depth * 250 });

      // Nodes section
      const node = g.selectAll(".node")
        .data(nodes, (d: any) => d.id || (d.id = Math.random().toString()));

      const nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${source.y0 || source.y},${source.x0 || source.x})`)
        .on("click", (event, d: any) => {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        });

      nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", d => d._children ? "#3b82f6" : "#fff")
        .style("stroke", "#3b82f6")
        .style("stroke-width", "2px");

      nodeEnter.append("text")
        .attr("dy", ".35em")
        .attr("x", d => d.children || d._children ? -13 : 13)
        .attr("text-anchor", d => d.children || d._children ? "end" : "start")
        .text((d: any) => d.data.name)
        .style("fill-opacity", 1e-6)
        .style("font-size", d => d.depth === 0 ? "16px" : d.depth === 1 ? "14px" : "12px")
        .style("font-weight", d => d.depth < 2 ? "bold" : "normal");

      const nodeUpdate = nodeEnter.merge(node as any);

      nodeUpdate.transition()
        .duration(500)
        .attr("transform", d => `translate(${d.y},${d.x})`);

      nodeUpdate.select("circle")
        .attr("r", d => d.depth === 0 ? 8 : 5)
        .style("fill", d => d._children ? "#3b82f6" : "#fff");

      nodeUpdate.select("text")
        .style("fill-opacity", 1);

      const nodeExit = node.exit().transition()
        .duration(500)
        .attr("transform", d => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("circle").attr("r", 1e-6);
      nodeExit.select("text").style("fill-opacity", 1e-6);

      // Links section
      const link = g.selectAll(".link")
        .data(links, (d: any) => d.target.id);

      const linkEnter = link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", d => {
          const o = { x: source.x0 || source.x, y: source.y0 || source.y };
          return diagonal(o, o);
        });

      const linkUpdate = linkEnter.merge(link as any);

      linkUpdate.transition()
        .duration(500)
        .attr("d", d => diagonal(d.source, d.target));

      link.exit().transition()
        .duration(500)
        .attr("d", d => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      nodes.forEach((d: any) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function diagonal(s: any, d: any) {
      return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    }

    update(root);

  }, [data, width, height]);

  return (
    <div className="w-full h-full bg-slate-50 relative overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur p-2 rounded-lg border shadow-sm text-xs text-slate-500">
        <p>💡 提示: 点击节点可展开/收起，拖动可移动，滚轮缩放</p>
      </div>
      <svg ref={svgRef} width={width} height={height} className="w-full h-full block" />
    </div>
  );
};

export default MindMap;
