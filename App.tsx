
import React, { useState, useEffect, useMemo } from 'react';
import { MIND_MAP_DATA } from './data';
import MindMap from './components/MindMap';
import { MindMapNode } from './types';

const CATEGORIES = [
  { id: 'culture', name: '文化宣传类', icon: '🎨' },
  { id: 'tech', name: '科技辅助类', icon: '💻' },
  { id: 'emergency', name: '应急管理类', icon: '🚨' },
  { id: 'om', name: '运维服务类', icon: '🛠️' },
  { id: 'consultancy', name: '咨询评估类', icon: '📋' },
  { id: 'system', name: '系统建设类', icon: '🏗️' },
  { id: 'training', name: '培训推广类', icon: '🎓' },
  { id: 'inspection', name: '检测评审类', icon: '🔍' },
  { id: 'supply', name: '物资供应类', icon: '📦' },
  { id: 'support', name: '综合支撑类', icon: '🤝' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('culture');
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth - 280, 
    height: window.innerHeight - 64 
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth - 280,
        height: window.innerHeight - 64
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fix: Added useMemo to the React imports to resolve the reference error
  const activeData = useMemo(() => {
    // Add a root node to satisfy the 4-level requirement:
    // Root -> Category -> Section -> Point
    const categoryData = MIND_MAP_DATA[activeTab];
    return {
      name: "投标项目技术文档标准体系",
      children: [categoryData]
    } as MindMapNode;
  }, [activeTab]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">P</div>
          <h1 className="text-xl font-bold text-slate-800">项目方案全景思维导图</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">专业文档结构可视化系统 v1.0</span>
          <button 
            className="rounded-full bg-slate-100 p-2 hover:bg-slate-200 transition-colors"
            title="查看帮助"
          >
            ❓
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[280px] border-r bg-white overflow-y-auto p-4 flex flex-col gap-2 shadow-[2px_0_8px_rgba(0,0,0,0.02)]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
            项目类别列表
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                activeTab === cat.id
                  ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="font-medium text-sm">{cat.name}</span>
            </button>
          ))}
          
          <div className="mt-auto pt-6 border-t text-center text-[10px] text-slate-400">
            <p>© 2024 智能项目文档体系</p>
          </div>
        </aside>

        {/* Main View */}
        <main className="relative flex-1 bg-slate-50">
           <MindMap 
              data={activeData} 
              width={dimensions.width} 
              height={dimensions.height} 
           />
        </main>
      </div>
    </div>
  );
};

export default App;
