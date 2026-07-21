# GX Sejarah V0.5 Online Setup

## 学生正式入口

`https://darkgeneration77-spec.github.io/gx-math-monster/gx-sejarah/play-online.html`

学生必须从这个入口输入：

- Nama pelajar
- Kod kelas

游戏完成后，成绩会自动上传到教师后台。

## 教师后台

`https://darkgeneration77-spec.github.io/gx-math-monster/gx-sejarah/teacher-dashboard.html`

教师输入相同的 Kod kelas，即可查看该班级的排行榜和成绩。

## Supabase 配置步骤

1. 在 Supabase 建立免费项目。
2. 打开 SQL Editor。
3. 复制并运行 `supabase-schema.sql` 的全部内容。
4. 打开 Project Settings > API。
5. 复制 Project URL 与 anon public key。
6. 编辑 `config.js`：

```js
window.GX_SUPABASE = {
  url: "YOUR_PROJECT_URL",
  anonKey: "YOUR_ANON_PUBLIC_KEY"
};
```

7. 保存后等待 GitHub Pages 更新。

## 当前数据字段

- student_name
- class_code
- world
- score
- correct_count
- wrong_count
- hints_used
- progress_percent
- completed_at
- wrong_items

## 离线保护

若 Supabase 尚未配置或临时断线：

- 游戏仍可正常运行。
- 成绩会保存在学生当前浏览器。
- 待连接恢复后，可继续开发自动重试上传。

## 下一阶段

- 上传具体错题 ID 和订正状态
- 教师实时查看在线学生
- Supabase Realtime 排行榜
- 班级房间开始/停止控制
- 防止同一学生重复刷分
