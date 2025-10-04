# 翡翠產業招聘網站

## 專案介紹
這是一個專為翡翠產業跨國貿易公司設計的招聘網站，主要招募行政調度與客服支援人員。

## 特色功能
- 📱 完全響應式設計，支援所有裝置
- 🎨 現代化UI設計，使用翡翠綠色主題
- 🖼️ 整合真實翡翠產品圖片展示
- ⚡ 快速載入，優化使用者體驗
- 🎯 模組化設計：全寬banner、卡片並列、左右圖文排版

## 技術規格
- **前端**: HTML5、CSS3、JavaScript (ES6+)
- **字型**: Noto Sans TC (Google Fonts)
- **圖片格式**: JPEG、PNG、AVIF
- **設計模式**: Mobile-First響應式設計
- **瀏覽器支援**: Chrome、Firefox、Safari、Edge

## 檔案結構
```
jade/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript功能
├── images/             # 圖片資源
│   ├── IMG_41AFCF173EBF-*.jpeg  # 產品實拍照片
│   ├── 綠翡翠實業_*.png          # 品牌識別圖片
│   └── photo-*.avif             # 網頁用圖片
└── README.md           # 專案說明
```

## 快速開始

### 本地開發
```bash
# 複製專案
git clone [你的倉庫URL]
cd jade

# 啟動本地伺服器
python3 -m http.server 8080

# 或使用 Node.js
npx serve

# 瀏覽器開啟 http://localhost:8080
```

### GitHub Codespaces
1. 點擊 GitHub 倉庫頁面的 "Code" 按鈕
2. 選擇 "Codespaces" 標籤
3. 點擊 "Create codespace on main"
4. 等待環境建立完成
5. 在 Codespaces 中開啟終端機執行：
   ```bash
   python3 -m http.server 8080
   ```
6. 點擊彈出的通知或使用 Ports 標籤查看網站

## 設計特色

### 頁面結構
1. **頂部Banner** - 公司資訊與信任標示
2. **Hero區塊** - 主要招聘訊息與CTA
3. **工作內容** - 4張卡片展示工作項目
4. **特色介紹** - 左右圖文交替排版
5. **公司介紹** - 建立信任與專業形象
6. **薪資待遇** - 透明化薪資資訊
7. **適合對象** - 4張卡片展示目標族群
8. **Footer** - 聯絡資訊與品牌

### 視覺設計
- **主色調**: 翡翠綠漸層 (#27ae60 → #2ecc71)
- **輔助色**: 深綠 (#2d5016)、淺綠背景 (#f8fdf8)
- **字型**: Noto Sans TC，支援繁體中文
- **圖示**: 內嵌SVG，符合內容語意
- **動畫**: CSS過渡效果與懸停互動

## 瀏覽器支援
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ iOS Safari 13+
- ✅ Android Chrome 80+

## 授權
此專案為商業用途開發，版權歸專案所有者所有。

## 聯絡資訊
如有任何問題或建議，請聯繫開發團隊。

---
*最後更新: 2025年10月4日*