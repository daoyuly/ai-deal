# AI Agent 定制开发服务 - 静态网站

这是一个专业的 AI Agent 定制开发服务展示网站，采用纯静态 HTML/CSS/JavaScript 构建。

## 🌟 功能特点

- ✅ **纯静态网站** - 无需 Node.js 运行时，可直接部署到任何静态托管服务
- ✅ **响应式设计** - 完美支持桌面、平板、手机等各种设备
- ✅ **现代化 UI** - 使用 Tailwind CSS 构建的专业设计
- ✅ **流畅交互** - 平滑滚动、动画效果、表单验证
- ✅ **SEO 优化** - 完整的 meta 标签和语义化 HTML 结构
- ✅ **高性能** - 优化的 CSS 和 JavaScript，快速加载

## 📁 项目结构

```
ai-deal/
├── index.html          # 主页面文件
├── styles.css          # Tailwind CSS 输入文件
├── output.css          # 编译后的 CSS 文件
├── script.js           # JavaScript 交互逻辑
├── package.json        # 项目配置
├── tailwind.config.js  # Tailwind 配置
└── README.md          # 项目说明
```

## 🚀 快速开始

### 1. 安装依赖（仅用于开发）

```bash
npm install
```

### 2. 生成 CSS 样式

```bash
# 一次性构建
npm run build-css

# 监听模式（开发时使用）
npm run watch-css
```

### 3. 启动本地服务器

```bash
# 使用 Python（推荐）
npm run serve

# 或使用 Node.js http-server
npm run serve-alt
```

### 4. 访问网站

打开浏览器访问：`http://localhost:8000`

## 📱 网站结构

### 导航栏
- 固定顶部导航
- 移动端响应式菜单
- 平滑滚动到各个部分

### 首屏 (Hero)
- 醒目的标题和副标题
- 行动号召按钮
- 视觉化的 AI Agent 展示

### 能力展示 (Capabilities)
- 技术专长
- 定制开发能力
- 成功经验展示

### 案例展示 (Case Studies)
- 儿童故事专家 Agent
- 深度考试 Agent  
- 更多定制案例

### 服务流程 (Service Process)
- 4步骤时间线展示
- 详细的服务说明
- 可视化流程图

### 优势对比 (Why Choose Me)
- 全流程定制 vs 模板化
- 成熟案例 vs 概念演示
- 技术深度 vs 包装展示

### 信任背书 (Trust & Proof)
- 技术文章展示
- 项目成就统计
- 专业认证展示

### 联系我们 (Contact)
- 详细的咨询表单
- 多种联系方式
- 服务承诺展示

### 页脚 (Footer)
- 公司信息
- 快速导航
- 社交媒体链接

## 🎨 设计特点

- **配色方案**：蓝色 + 紫色渐变，体现科技感
- **字体**：系统字体栈，确保兼容性
- **动画**：悬停效果、淡入动画、平滑过渡
- **图标**：Emoji 图标，跨平台兼容
- **布局**：网格布局，响应式设计

## 🛠️ 开发说明

### CSS 构建
项目使用 Tailwind CSS 构建样式：

```bash
# 开发时监听文件变化
npm run watch-css

# 生产环境构建（压缩）
npm run build-css
```

### JavaScript 功能
- 导航栏滚动效果
- 移动端菜单切换
- 平滑滚动导航
- 表单提交处理
- 通知系统
- 动画效果

### 自定义样式
可以在 `styles.css` 中添加自定义样式，然后重新构建 CSS。

## 📋 部署指南

### 静态托管服务
这是一个纯静态网站，可以部署到：

- **GitHub Pages**
- **Netlify** 
- **Vercel**
- **CDN + 对象存储**
- **传统虚拟主机**

### 部署步骤
1. 构建 CSS：`npm run build-css`
2. 上传以下文件到服务器：
   - `index.html`
   - `output.css`  
   - `script.js`

### 性能优化
- CSS 已压缩
- 图片使用 WebP 格式（如需要）
- 启用 gzip 压缩
- 设置缓存头

## 🔧 自定义配置

### 修改内容
直接编辑 `index.html` 文件中的文本内容。

### 调整样式
1. 修改 `styles.css` 文件
2. 运行 `npm run build-css` 重新构建
3. 刷新页面查看效果

### 添加功能
在 `script.js` 中添加新的 JavaScript 功能。

## 📞 联系信息

如需技术支持或定制开发，请通过以下方式联系：

- 📧 邮箱：your-email@example.com
- 💼 LinkedIn：linkedin.com/in/yourprofile  
- 💻 GitHub：github.com/yourusername

---

**项目状态**：✅ 完成 | **最后更新**：2024年 | **版本**：v1.0.0
