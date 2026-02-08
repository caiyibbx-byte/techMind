import { MindMapNode } from './types';

const generateStandardSections = (content: any): MindMapNode[] => {
  return Object.keys(content).map(key => ({
    name: key,
    children: content[key].map((item: string) => ({ name: item }))
  }));
};

export const MIND_MAP_DATA: Record<string, MindMapNode> = {
  culture: {
    name: "① 文化宣传类（宣传制品/视频/活动策划）",
    children: [
      { 
        name: "一、项目背景", 
        children: [
          { name: "政策及企业文化建设要求" }, 
          { name: "宣传目标与受众画像分析" }, 
          { name: "当前传播痛点与不足" }, 
          { name: "项目建设必要性与预期效果" }
        ] 
      },
      { 
        name: "二、项目思路", 
        children: [
          { name: "整体传播策略设计" }, 
          { name: "传播路径规划（线上+线下）" }, 
          { name: "品牌定位与核心主线" }, 
          { name: "内容矩阵规划" }
        ] 
      },
      { 
        name: "三、项目研究内容", 
        children: [
          { name: "宣传物料制作" }, 
          { name: "视频拍摄与剪辑" }, 
          { name: "活动策划与执行" }, 
          { name: "媒体投放与推广" }
        ] 
      },
      { 
        name: "四、项目重难点", 
        children: [
          { name: "传播效果量化难" }, 
          { name: "多渠道协同难" }, 
          { name: "创意与受众匹配" }, 
          { name: "应对措施" }
        ] 
      },
      { 
        name: "五、计划安排", 
        children: [
          { name: "策划期" }, 
          { name: "制作期" }, 
          { name: "执行期" }, 
          { name: "评估复盘期" }
        ] 
      },
      { 
        name: "六、质量保障", 
        children: [
          { name: "内容审核机制" }, 
          { name: "制作质量控制" }, 
          { name: "多轮校审" }, 
          { name: "效果评估机制" }
        ] 
      },
      { 
        name: "七、服务承诺", 
        children: [
          { name: "响应时间" }, 
          { name: "修改次数" }, 
          { name: "现场保障" }, 
          { name: "售后优化" }
        ] 
      },
      { 
        name: "八、应急管理", 
        children: [
          { name: "活动突发预案" }, 
          { name: "舆情处置" }, 
          { name: "替代执行方案" }
        ] 
      },
      { 
        name: "九、安全保密", 
        children: [
          { name: "素材管理" }, 
          { name: "信息审批" }, 
          { name: "数据备份" }
        ] 
      },
      { 
        name: "十、附录", 
        children: [
          { name: "宣传流程图" }, 
          { name: "活动清单模板" }, 
          { name: "脚本样例" }
        ] 
      }
    ]
  },
  tech: {
    name: "② 科技辅助类",
    children: [
      { name: "一、项目背景", children: [{ name: "数字化转型及政策要求" }, { name: "现有业务流程信息化现状" }, { name: "人工成本高、效率低痛点" }, { name: "技术升级必要性与预期收益" }] },
      { name: "二、项目思路", children: [{ name: "技术总体架构设计" }, { name: "平台化/模块化建设思路" }, { name: "数据驱动与智能化融合路线" }, { name: "分阶段建设策略" }] },
      { name: "三、项目研究内容", children: [{ name: "系统平台开发/部署" }, { name: "数据治理与接口对接" }, { name: "AI模型/算法集成应用" }, { name: "可视化与业务支撑工具开发" }] },
      { name: "四、项目重难点", children: [{ name: "多系统数据打通" }, { name: "算法效果落地" }, { name: "用户接受度与培训" }, { name: "技术适配与扩展性" }] },
      { name: "五、计划安排", children: [{ name: "需求调研期" }, { name: "设计开发期" }, { name: "测试部署期" }, { name: "优化验收期" }] },
      { name: "六、质量保障", children: [{ name: "代码规范与评审机制" }, { name: "测试用例与验收标准" }, { name: "性能压测" }, { name: "运维监控体系" }] },
      { name: "七、服务承诺", children: [{ name: "技术支持响应时限" }, { name: "运维保障" }, { name: "版本升级维护" }, { name: "培训服务" }] },
      { name: "八、应急管理", children: [{ name: "系统故障应急预案" }, { name: "数据恢复机制" }, { name: "备用环境部署" }, { name: "7×24值守机制" }] },
      { name: "九、安全保密", children: [{ name: "权限分级管理" }, { name: "数据加密" }, { name: "日志审计" }, { name: "网络安全防护" }] },
      { name: "十、附录", children: [{ name: "技术架构图" }, { name: "系统流程图" }, { name: "接口清单" }, { name: "培训方案" }] }
    ]
  },
  emergency: {
    name: "③ 应急管理类",
    children: [
      { name: "一、项目背景", children: [{ name: "行业安全形势分析" }, { name: "突发事件风险评估" }, { name: "历史案例教训" }, { name: "建设必要性" }] },
      { name: "二、项目思路", children: [{ name: "预防为主、防救结合" }, { name: "预案体系化建设" }, { name: "分级响应机制" }, { name: "常态化演练机制" }] },
      { name: "三、项目研究内容", children: [{ name: "应急预案编制" }, { name: "应急物资配置" }, { name: "演练组织实施" }, { name: "应急平台建设" }] },
      { name: "四、项目重难点", children: [{ name: "多部门协同" }, { name: "快速响应能力" }, { name: "信息传递时效" }, { name: "资源调度优化" }] },
      { name: "五、计划安排", children: [{ name: "风险评估" }, { name: "预案编制" }, { name: "培训演练" }, { name: "优化完善" }] },
      { name: "六、质量保障", children: [{ name: "预案评审机制" }, { name: "专家论证" }, { name: "演练复盘" }, { name: "持续改进" }] },
      { name: "七、服务承诺", children: [{ name: "现场保障" }, { name: "24小时响应" }, { name: "专家支持" }, { name: "定期巡检" }] },
      { name: "八、应急管理", children: [{ name: "现场指挥体系" }, { name: "通讯保障" }, { name: "替代资源" }, { name: "舆情管控" }] },
      { name: "九、安全保密", children: [{ name: "应急信息权限控制" }, { name: "现场资料管理" }, { name: "内部信息保密" }] },
      { name: "十、附录", children: [{ name: "组织架构图" }, { name: "预案模板" }, { name: "物资清单" }, { name: "演练记录表" }] }
    ]
  },
  om: {
    name: "④ 运维服务类",
    children: [
      { name: "一、项目背景", children: [{ name: "系统/设备建设现状及规模" }, { name: "业务连续性要求" }, { name: "既有运维痛点" }, { name: "政策行业规范要求" }, { name: "建设目标" }] },
      { name: "二、项目思路", children: [{ name: "运维总体策略" }, { name: "一体化服务模式" }, { name: "驻场与远程结合" }, { name: "标准化管理体系" }, { name: "SLA考核机制" }] },
      { name: "三、项目研究内容", children: [{ name: "日常值守监控" }, { name: "系统/设备巡检" }, { name: "故障诊断维修" }, { name: "系统升级优化" }, { name: "数据安全管理" }, { name: "资产台账管理" }] },
      { name: "四、项目重难点", children: [{ name: "管理复杂度" }, { name: "故障突发性" }, { name: "高可用压力" }, { name: "兼容性问题" }, { name: "应对措施", children:[{name:"智能监控"},{name:"自动告警"},{name:"分级响应"}] }] },
      { name: "五、计划安排", children: [{ name: "进场准备期" }, { name: "运维接管期" }, { name: "常态运维期" }, { name: "优化提升期" }] },
      { name: "六、质量保障", children: [{ name: "标准化流程" }, { name: "清单化管理" }, { name: "工单闭环" }, { name: "SLA考核指标" }] },
      { name: "七、服务承诺", children: [{ name: "响应时间承诺" }, { name: "恢复时限承诺" }, { name: "重点保障支持" }] },
      { name: "八、应急管理", children: [{ name: "故障处理预案" }, { name: "容灾机制" }, { name: "备品备件保障" }] },
      { name: "九、安全保密", children: [{ name: "账号分级授权" }, { name: "审计留痕" }, { name: "协议与培训" }] },
      { name: "十、附录", children: [{ name: "组织架构图" }, { name: "服务流程图" }, { name: "SLA指标表" }] }
    ]
  },
  consultancy: {
    name: "⑤ 咨询评估类",
    children: [
      { name: "一、项目背景", children: [{ name: "政策监管环境分析" }, { name: "电网战略规划要求" }, { name: "项目现状及短板" }, { name: "咨询目标预期价值" }] },
      { name: "二、项目思路", children: [{ name: "总体技术路线" }, { name: "定性定量方法体系" }, { name: "对标论证支撑" }, { name: "设计原则" }] },
      { name: "三、项目研究内容", children: [{ name: "现状调研收集" }, { name: "成熟度测评" }, { name: "指标体系构建" }, { name: "专项专题研究" }, { name: "实施方案设计" }] },
      { name: "四、项目重难点", children: [{ name: "数据完整性不足" }, { name: "利益协调难度" }, { name: "模型构建复杂" }, { name: "应对措施" }] },
      { name: "五、计划安排", children: [{ name: "启动准备期" }, { name: "调研诊断期" }, { name: "分析设计期" }, { name: "评审论证期" }] },
      { name: "六、质量保障", children: [{ name: "里程碑管理" }, { name: "双重复核机制" }, { name: "多层级专家审核" }] },
      { name: "七、服务承诺", children: [{ name: "响应时效" }, { name: "修改次数" }, { name: "落地辅导" }] },
      { name: "八、应急管理", children: [{ name: "数据缺失替代方案" }, { name: "人员变动保障" }] },
      { name: "九、安全保密", children: [{ name: "脱敏处理" }, { name: "加密存储" }, { name: "责任追溯" }] },
      { name: "十、附录", children: [{ name: "技术路线图" }, { name: "问卷提纲模板" }, { name: "指标体系样表" }] }
    ]
  },
  system: {
    name: "⑥ 系统建设类",
    children: [
      { name: "一、项目背景", children: [{ name: "信息化现状与架构" }, { name: "现有系统痛点" }, { name: "数字化转型要求" }, { name: "建设目标与成效" }] },
      { name: "二、项目思路", children: [{ name: "解耦技术路线" }, { name: "敏捷交付模式" }, { name: "信创适配优先" }, { name: "扩展设计" }] },
      { name: "三、项目研究内容", children: [{ name: "需求调研与业务建模" }, { name: "系统总体架构设计" }, { name: "功能模块开发与集成" }, { name: "数据库与数据治理设计" }, { name: "接口对接与系统集成" }, { name: "测试验证" }] },
      { name: "四、项目重难点", children: [{ name: "对接复杂" }, { name: "业务需求频繁变更" }, { name: "数据迁移风险高" }, { name: "高并发及稳定性保障难" }, { name: "信创适配及兼容性问题" }] },
      { name: "五、计划安排", children: [{ name: "需求分析期" }, { name: "设计开发期" }, { name: "联调测试期" }, { name: "试运行期" }, { name: "验收与推广期" }] },
      { name: "六、质量保障", children: [{ name: "CMMI规范管理" }, { name: "代码评审" }, { name: "自动化持续集成" }] },
      { name: "七、服务承诺", children: [{ name: "按期交付" }, { name: "缺陷修复时效" }, { name: "维护期支持" }] },
      { name: "八、应急管理", children: [{ name: "上线失败回退" }, { name: "备份恢复" }, { name: "扩容方案" }] },
      { name: "九、安全保密", children: [{ name: "等保合规设计" }, { name: "审计监控" }, { name: "隔离机制" }] },
      { name: "十、附录", children: [{ name: "技术架构图" }, { name: "功能清单" }, { name: "部署拓扑图" }] }
    ]
  },
  training: {
    name: "⑦ 培训推广类",
    children: [
      { name: "一、项目背景", children: [{ name: "推广需求" }, { name: "技能现状分析" }, { name: "能力差距" }, { name: "培训目标" }] },
      { name: "二、项目思路", children: [{ name: "分层分类体系" }, { name: "理论实操考核" }, { name: "融合教学模式" }] },
      { name: "三、项目研究内容", children: [{ name: "需求调研" }, { name: "课件开发" }, { name: "授课实施" }, { name: "考核评估" }] },
      { name: "四、项目重难点", children: [{ name: "协调难度" }, { name: "基础差异" }, { name: "量化评价" }] },
      { name: "五、计划安排", children: [{ name: "调研分析" }, { name: "开发期" }, { name: "实施期" }, { name: "评估期" }] },
      { name: "六、质量保障", children: [{ name: "标准化审核" }, { name: "讲师把控" }, { name: "抽查机制" }] },
      { name: "七、服务承诺", children: [{ name: "定制修改" }, { name: "免费补训" }, { name: "资料提供" }] },
      { name: "八、应急管理", children: [{ name: "变更教学方式" }, { name: "线上替代" }, { name: "备份讲师" }] },
      { name: "九、安全保密", children: [{ name: "资料保密" }, { name: "数据脱敏" }] },
      { name: "十、附录", children: [{ name: "课程大纲" }, { name: "教材样本" }, { name: "考核题库" }] }
    ]
  },
  inspection: {
    name: "⑧ 检测评审类",
    children: [
      { name: "一、项目背景", children: [{ name: "监管要求" }, { name: "验收质量控制" }, { name: "独立评审必要性" }] },
      { name: "二、项目思路", children: [{ name: "独立公正原则" }, { name: "标准化检测" }, { name: "量化指标" }] },
      { name: "三、项目研究内容", children: [{ name: "文件审查" }, { name: "现场检测" }, { name: "抽样测试" }, { name: "形成报告" }] },
      { name: "四、项目重难点", children: [{ name: "标准复杂" }, { name: "数据真实性" }, { name: "多方协调" }] },
      { name: "五、计划安排", children: [{ name: "准备期" }, { name: "检测期" }, { name: "报告期" }] },
      { name: "六、质量保障", children: [{ name: "双人复核" }, { name: "数据留痕" }] },
      { name: "七、服务承诺", children: [{ name: "按时出报告" }, { name: "复测支持" }] },
      { name: "八、应急管理", children: [{ name: "异常指标复核" }, { name: "争议复检" }] },
      { name: "九、安全保密", children: [{ name: "数据保护" }, { name: "独立存储" }] },
      { name: "十、附录", children: [{ name: "检测清单" }, { name: "评价表" }] }
    ]
  },
  supply: {
    name: "⑨ 物资供应类",
    children: [
      { name: "一、项目背景", children: [{ name: "建设规模物资需求" }, { name: "交付要求" }, { name: "供应保障" }] },
      { name: "二、项目思路", children: [{ name: "精准供应" }, { name: "全程管控" }, { name: "源头把控" }] },
      { name: "三、项目研究内容", children: [{ name: "生产组织" }, { name: "采购检验" }, { name: "物流安装" }] },
      { name: "四、项目重难点", children: [{ name: "周期紧" }, { name: "一致性" }, { name: "安全库存机制" }] },
      { name: "五、计划安排", children: [{ name: "生产期" }, { name: "检验期" }, { name: "配送安装" }] },
      { name: "六、质量保障", children: [{ name: "质检体系" }, { name: "抽检复检" }] },
      { name: "七、服务承诺", children: [{ name: "准时交付" }, { name: "快速补货" }] },
      { name: "八、应急管理", children: [{ name: "备货机制" }, { name: "替代产品" }] },
      { name: "九、安全保密", children: [{ name: "供应链信息安全" }] },
      { name: "十、附录", children: [{ name: "产品清单" }, { name: "合格证" }] }
    ]
  },
  support: {
    name: "⑩ 综合支撑类",
    children: [
      { name: "一、项目背景", children: [{ name: "业务支撑需求" }, { name: "外包必要性" }] },
      { name: "二、项目思路", children: [{ name: "一体化保障" }, { name: "专业化标准" }] },
      { name: "三、项目研究内容", children: [{ name: "技术日常保障" }, { name: "事务协调协助" }] },
      { name: "四、项目重难点", children: [{ name: "类型多样" }, { name: "时效要求" }, { name: "统一调度" }] },
      { name: "五、计划安排", children: [{ name: "接管期" }, { name: "常态服务" }, { name: "优化提升" }] },
      { name: "六、质量保障", children: [{ name: "SLA管理" }, { name: "满意度考核" }] },
      { name: "七、服务承诺", children: [{ name: "7×24支持" }, { name: "专人对接" }] },
      { name: "八、应急管理", children: [{ name: "重大活动保障" }, { name: "突发支援" }] },
      { name: "九、安全保密", children: [{ name: "审计审计" }, { name: "分级权限" }] },
      { name: "十、附录", children: [{ name: "岗位职责表" }, { name: "SLA表" }] }
    ]
  }
};