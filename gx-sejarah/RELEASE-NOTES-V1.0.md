# GX Sejarah V1.0 — World 1 Release

## 内容范围

World 1：Warisan Negara Bangsa，覆盖 Tingkatan 4 Sejarah Bab 1.1–1.4。

题库总数：105题。

- Bab 1.1：20题
- Bab 1.2：25题
- Bab 1.3：30题
- Bab 1.4：20题
- 综合 Final Boss：10题

## 学习与考试功能

- Quick、Standard、Exam 三种游戏模式
- 每次游戏随机抽题
- 选择题选项自动洗牌
- Objective、Struktur、Huraian、KBAT、Esei 与 Final Boss
- Paper 2 得分点分析
- 自动组合完整参考答案
- 华语解释、马来文关键词、Hint 与订正提醒
- 错题必须重新完成后才算订正
- 学习进度自动保存与继续
- 分数完整性保护，避免重复增加满分

## 教师与课堂功能

- 学生在线班级入口
- 教师成绩 Dashboard
- CSV 成绩导出
- Live Battle 课堂排行榜
- 本机模式与 Supabase 在线模式

## 质量控制

- 105题自动检测页面
- 重复题号检查
- 答案索引与答案卡检查
- 分数及得分点数量检查
- Slots、关键词、Hint、华语解释与订正字段检查
- 系统健康检查页面

## 主要入口

- `portal.html`：统一启动主页
- `index.html`：World 1 主游戏
- `play-online.html`：学生在线入口
- `teacher-dashboard.html`：教师成绩后台
- `live-battle.html`：课堂排行榜
- `question-validator.html`：题库检测
- `health-check.html`：系统健康检查

## 在线后台配置

跨设备成绩功能需要在 Supabase 执行 `supabase-schema.sql`，并在 `config.js` 填入 Project URL 与 anon public key。未配置时，游戏和本机记录仍可正常使用。

## 下一阶段

V1.1 计划：答题过程实时进度上传、教师查看学生当前题目、错题主题统计与 World 2 内容规划。
