window.PHASE2_WORLD6 = [
{
 id:'AP-001',cat:'Ayat Aktif dan Pasif',skill:'Aktif kepada pasif dengan pelaku kata nama',difficulty:'Sederhana Tinggi',
 q:'Pihak sekolah akan memperketat kawalan keselamatan di semua pintu masuk.',
 i:'Pilih ayat pasif yang gramatis.',
 a:['Kawalan keselamatan di semua pintu masuk akan diperketat oleh pihak sekolah.','Di semua pintu masuk akan diperketat kawalan keselamatan oleh pihak sekolah.','Pihak sekolah akan diperketat kawalan keselamatan di semua pintu masuk.','Kawalan keselamatan akan pihak sekolah perketat di semua pintu masuk.'],c:0,
 e:'Objek “kawalan keselamatan” dipindahkan ke hadapan, kata kerja “memperketat” berubah kepada “diperketat”, dan pelaku hadir selepas “oleh”.',
 cn:'把承受动作的“安全管制”放到前面，memperketat 改成 diperketat，做动作的人放在 oleh 后面。',
 formula:'Aktif: Pelaku + meN- + Objek → Pasif: Objek + di- + oleh + Pelaku.',
 mnemonic:'主动看谁做；被动把“被做的东西”搬到前面。',
 trap:'Mengekalkan pelaku di hadapan atau tidak menukar kata kerja kepada bentuk di-.',keywords:['memperketat','diperketat','oleh pihak sekolah']
},
{
 id:'AP-002',cat:'Ayat Aktif dan Pasif',skill:'Pasif kepada aktif',difficulty:'Sederhana Tinggi',
 q:'Pelajar itu telah ditegur oleh guru disiplin kerana datang lewat.',
 i:'Pilih ayat aktif yang tepat.',
 a:['Guru disiplin telah menegur pelajar itu kerana datang lewat.','Pelajar itu telah menegur guru disiplin kerana datang lewat.','Guru disiplin telah ditegur pelajar itu kerana datang lewat.','Telah guru disiplin menegur oleh pelajar itu kerana datang lewat.'],c:0,
 e:'Pelaku “guru disiplin” dipindahkan ke hadapan dan kata kerja pasif “ditegur” ditukar kepada kata kerja aktif “menegur”.',
 cn:'把做动作的“纪律老师”放到前面，ditegur 改成 menegur。',
 formula:'Pasif: Objek + di- + oleh Pelaku → Aktif: Pelaku + meN- + Objek.',
 mnemonic:'看到 oleh 后面的人，就是主动句要放前面的做事者。',
 trap:'Tertukar pelaku dengan penerima tindakan.',keywords:['ditegur','oleh guru disiplin','menegur']
},
{
 id:'AP-003',cat:'Ayat Aktif dan Pasif',skill:'Ayat pasif diri pertama',difficulty:'Sukar',
 q:'Saya telah menyerahkan laporan terperinci itu kepada pengetua semalam.',
 i:'Pilih bentuk pasif yang gramatis.',
 a:['Laporan terperinci itu telah diserahkan oleh saya kepada pengetua semalam.','Laporan terperinci itu telah saya serahkan kepada pengetua semalam.','Saya telah laporan terperinci itu serahkan kepada pengetua semalam.','Telah saya diserahkan laporan terperinci itu kepada pengetua semalam.'],c:1,
 e:'Ayat pasif diri pertama menggunakan susunan objek + kata ganti diri pertama + kata kerja tanpa awalan di-.',
 cn:'第一人称被动句用“宾语 + saya + 原形动词”，不能写 oleh saya，也通常不用 di-。',
 formula:'Pasif diri 1/2: Objek + saya/kamu + kata kerja dasar.',
 mnemonic:'我和你不用 di-：东西先，saya/kamu 后，动词原形跟着走。',
 trap:'Menggunakan “oleh saya” atau awalan di- untuk pasif diri pertama.',keywords:['saya serahkan','objek di hadapan','tanpa di-']
},
{
 id:'AP-004',cat:'Ayat Aktif dan Pasif',skill:'Ayat pasif diri kedua',difficulty:'Sukar',
 q:'Kamu mesti menyusun semua fail ini mengikut nombor rujukan.',
 i:'Pilih ayat pasif yang tepat.',
 a:['Semua fail ini mesti disusun oleh kamu mengikut nombor rujukan.','Semua fail ini mesti kamu susun mengikut nombor rujukan.','Kamu mesti semua fail ini susun mengikut nombor rujukan.','Semua fail ini kamu mesti disusun mengikut nombor rujukan.'],c:1,
 e:'Untuk kata ganti diri kedua, objek didahulukan, diikuti “kamu” dan kata kerja dasar “susun”.',
 cn:'第二人称被动句：先放“所有文件”，再放 kamu，动词用 susun，不用 disusun。',
 formula:'Objek + kata bantu + kamu + kata kerja dasar.',
 mnemonic:'东西先，kamu 后，动词不加 di-。',
 trap:'Menggunakan “oleh kamu” atau kata kerja berawalan di-.',keywords:['kamu susun','mesti','kata kerja dasar']
},
{
 id:'AP-005',cat:'Ayat Aktif dan Pasif',skill:'Ayat pasif diri ketiga',difficulty:'Sederhana Tinggi',
 q:'Mereka sedang membersihkan kawasan rekreasi itu sejak pagi.',
 i:'Pilih ayat pasif yang gramatis.',
 a:['Kawasan rekreasi itu sedang mereka bersihkan sejak pagi.','Kawasan rekreasi itu sedang dibersihkan oleh mereka sejak pagi.','Mereka sedang dibersihkan kawasan rekreasi itu sejak pagi.','Sedang kawasan rekreasi itu dibersihkan mereka sejak pagi.'],c:1,
 e:'Kata ganti diri ketiga lazimnya menggunakan bentuk pasif berawalan di- dan boleh diikuti “oleh mereka”.',
 cn:'第三人称被动句通常使用 di-：kawasan... sedang dibersihkan oleh mereka。',
 formula:'Pasif diri 3: Objek + di- + oleh + dia/mereka.',
 mnemonic:'他／他们用 di-，我／你不用 di-。',
 trap:'Menyamakan pola pasif diri ketiga dengan pasif diri pertama atau kedua.',keywords:['dibersihkan','oleh mereka','diri ketiga']
},
{
 id:'AP-006',cat:'Ayat Aktif dan Pasif',skill:'Mengenal pasti ayat aktif transitif',difficulty:'Sederhana Tinggi',
 q:'Pasukan penyelamat menemui dua orang pendaki yang hilang di kawasan hutan itu.',
 i:'Pilih analisis yang tepat.',
 a:['Ayat aktif transitif kerana mempunyai pelaku, kata kerja dan objek.','Ayat aktif tak transitif kerana tiada objek.','Ayat pasif kerana objek berada di hadapan.','Ayat seruan kerana terdapat keterangan tempat.'],c:0,
 e:'Kata kerja “menemui” menerima objek “dua orang pendaki yang hilang”, maka ayat ini ialah ayat aktif transitif.',
 cn:'menemui 后面有宾语“失踪的两名登山者”，所以这是及物主动句。',
 formula:'Aktif transitif = Pelaku + kata kerja transitif + Objek.',
 mnemonic:'动作后面能问“什么／谁”，而且有答案，就是 transitif。',
 trap:'Menganggap semua ayat aktif sebagai tak transitif.',keywords:['menemui','dua orang pendaki','objek']
},
{
 id:'AP-007',cat:'Ayat Aktif dan Pasif',skill:'Mengenal pasti ayat aktif tak transitif',difficulty:'Sukar',
 q:'Para peserta sedang berlari di sekeliling padang sekolah.',
 i:'Pilih pernyataan yang betul.',
 a:['Ayat aktif transitif kerana mempunyai kata kerja.','Ayat aktif tak transitif kerana “berlari” tidak memerlukan objek.','Ayat pasif kerana terdapat kata sendi “di”.','Ayat perintah kerana pelaku melakukan tindakan.'],c:1,
 e:'Kata kerja “berlari” tidak menerima objek. Frasa “di sekeliling padang sekolah” hanyalah keterangan tempat.',
 cn:'berlari 不需要宾语；“在操场周围”只是地点说明，所以是非及物主动句。',
 formula:'Aktif tak transitif = Pelaku + kata kerja tanpa objek.',
 mnemonic:'动作后面没有“被做的东西”，就是 tak transitif。',
 trap:'Menganggap frasa tempat selepas kata kerja sebagai objek.',keywords:['berlari','tanpa objek','keterangan tempat']
},
{
 id:'AP-008',cat:'Ayat Aktif dan Pasif',skill:'Membezakan objek dan keterangan',difficulty:'Sukar',
 q:'Pekerja itu mengangkat kotak berat ke atas lori dengan berhati-hati.',
 i:'Apakah objek dalam ayat ini?',
 a:['Pekerja itu','kotak berat','ke atas lori','dengan berhati-hati'],c:1,
 e:'Objek ialah unsur yang menerima perbuatan “mengangkat”, iaitu “kotak berat”. Frasa lain ialah subjek dan keterangan.',
 cn:'“重箱子”承受“抬”的动作，所以它是宾语；其他部分是主语、地点和方式说明。',
 formula:'Cari jawapan kepada soalan “mengangkat apa?”.',
 mnemonic:'问“动词 + 什么？”答案就是宾语。',
 trap:'Memilih frasa tempat atau cara sebagai objek.',keywords:['mengangkat apa','kotak berat','keterangan']
},
{
 id:'AP-009',cat:'Ayat Aktif dan Pasif',skill:'Pasif dengan kata bantu aspek',difficulty:'Sukar',
 q:'Jawatankuasa itu telah menyelesaikan semua persiapan sebelum tengah hari.',
 i:'Pilih ayat pasif yang mengekalkan makna asal.',
 a:['Semua persiapan telah diselesaikan oleh jawatankuasa itu sebelum tengah hari.','Semua persiapan diselesaikan telah oleh jawatankuasa itu sebelum tengah hari.','Jawatankuasa itu telah diselesaikan semua persiapan sebelum tengah hari.','Sebelum tengah hari telah jawatankuasa itu semua persiapan selesaikan.'],c:0,
 e:'Kata bantu aspek “telah” mesti dikekalkan sebelum kata kerja pasif “diselesaikan”.',
 cn:'转换成被动句时，telah 不能消失，要放在 diselesaikan 前面。',
 formula:'Kekalkan kata bantu: telah/akan/sedang + kata kerja pasif.',
 mnemonic:'换主动被动，时间状态词不能丢。',
 trap:'Mengubah atau membuang kata bantu aspek.',keywords:['telah','diselesaikan','kekalkan makna']
},
{
 id:'AP-010',cat:'Ayat Aktif dan Pasif',skill:'Pasif dengan kata bantu ragam',difficulty:'Sukar',
 q:'Semua calon mesti mematuhi arahan pengawas peperiksaan.',
 i:'Pilih bentuk pasif yang tepat.',
 a:['Arahan pengawas peperiksaan mesti dipatuhi oleh semua calon.','Arahan pengawas peperiksaan dipatuhi mesti oleh semua calon.','Semua calon mesti dipatuhi arahan pengawas peperiksaan.','Mesti oleh semua calon arahan pengawas peperiksaan dipatuhi.'],c:0,
 e:'Kata bantu ragam “mesti” dikekalkan dan diletakkan sebelum kata kerja pasif “dipatuhi”.',
 cn:'mesti 是情态助动词，转换后仍要保留，并放在 dipatuhi 前面。',
 formula:'Objek + mesti/boleh/perlu + di- + oleh Pelaku.',
 mnemonic:'mesti、boleh、perlu 要跟着句子一起搬。',
 trap:'Meletakkan kata bantu selepas kata kerja pasif.',keywords:['mesti','dipatuhi','kata bantu ragam']
},
{
 id:'AP-011',cat:'Ayat Aktif dan Pasif',skill:'Pasif tanpa oleh',difficulty:'Sederhana Tinggi',
 q:'Surat rasmi itu telah dihantar ke pejabat daerah pagi tadi.',
 i:'Pilih analisis yang paling tepat.',
 a:['Ayat aktif kerana tiada kata “oleh”.','Ayat pasif walaupun pelaku tidak dinyatakan.','Ayat songsang kerana tempat didahulukan.','Ayat perintah kerana menggunakan kata kerja.'],c:1,
 e:'Kata kerja “dihantar” menunjukkan bentuk pasif. Pelaku boleh digugurkan jika tidak penting atau tidak diketahui.',
 cn:'虽然没有 oleh，但 dihantar 已经表明是被动句；执行者可以省略。',
 formula:'Kata kerja di- boleh menandakan pasif walaupun tanpa “oleh”.',
 mnemonic:'没有 oleh 不等于不是被动；先看动词有没有 di-。',
 trap:'Menganggap kata “oleh” wajib hadir dalam semua ayat pasif.',keywords:['dihantar','pelaku digugurkan','tanpa oleh']
},
{
 id:'AP-012',cat:'Ayat Aktif dan Pasif',skill:'Pasif dengan dua objek atau pelengkap',difficulty:'Sukar',
 q:'Guru itu menghadiahkan sebuah kamus kepada pemenang pertandingan.',
 i:'Pilih ayat pasif yang gramatis.',
 a:['Sebuah kamus dihadiahkan oleh guru itu kepada pemenang pertandingan.','Pemenang pertandingan dihadiahkan sebuah kamus oleh guru itu.','Guru itu dihadiahkan sebuah kamus kepada pemenang pertandingan.','Kepada pemenang pertandingan sebuah kamus menghadiahkan guru itu.'],c:0,
 e:'Objek langsung “sebuah kamus” dipindahkan ke hadapan, manakala frasa “kepada pemenang pertandingan” dikekalkan sebagai penerima.',
 cn:'直接宾语“字典”移到前面；“给比赛优胜者”保留为接受者说明。',
 formula:'Kenal pasti objek langsung dahulu sebelum menukar kepada pasif.',
 mnemonic:'先问“老师送什么？”答案才是要搬到前面的宾语。',
 trap:'Memindahkan penerima selepas “kepada” sebagai objek utama.',keywords:['menghadiahkan apa','sebuah kamus','kepada pemenang']
},
{
 id:'AP-013',cat:'Ayat Aktif dan Pasif',skill:'Ayat pasif dengan imbuhan diper-',difficulty:'Sukar',
 q:'Pihak penganjur memperluas kawasan pameran untuk menampung lebih ramai pengunjung.',
 i:'Pilih bentuk pasif yang tepat.',
 a:['Kawasan pameran diperluas oleh pihak penganjur untuk menampung lebih ramai pengunjung.','Kawasan pameran diluaskan memper oleh pihak penganjur.','Pihak penganjur diperluas kawasan pameran untuk menampung lebih ramai pengunjung.','Untuk menampung pengunjung kawasan pameran memperluas oleh pihak penganjur.'],c:0,
 e:'Kata kerja aktif “memperluas” berubah kepada bentuk pasif “diperluas”, bukan “diluaskan memper”.',
 cn:'memperluas 的被动形式是 diperluas，不能随意拆开词缀。',
 formula:'memper- → diper-.',
 mnemonic:'memper 换成 diper，词根保持。',
 trap:'Membentuk kata kerja pasif dengan imbuhan yang salah.',keywords:['memperluas','diperluas','imbuhan']
},
{
 id:'AP-014',cat:'Ayat Aktif dan Pasif',skill:'Ayat pasif dengan kata ganti diri pertama jamak',difficulty:'Sukar',
 q:'Kami akan membentangkan hasil kajian itu dalam seminar minggu hadapan.',
 i:'Pilih ayat pasif yang gramatis.',
 a:['Hasil kajian itu akan dibentangkan oleh kami dalam seminar minggu hadapan.','Hasil kajian itu akan kami bentangkan dalam seminar minggu hadapan.','Kami akan hasil kajian itu bentangkan dalam seminar minggu hadapan.','Hasil kajian itu kami akan dibentangkan dalam seminar minggu hadapan.'],c:1,
 e:'Kata ganti diri pertama “kami” menggunakan pola pasif objek + kata bantu + kami + kata kerja dasar.',
 cn:'kami 属于第一人称复数，使用“宾语 + akan + kami + 原形动词”。',
 formula:'Objek + kata bantu + kami/kita + kata kerja dasar.',
 mnemonic:'kami/kita 跟 saya 一样，不用 di-。',
 trap:'Menggunakan “oleh kami” atau kata kerja berawalan di-.',keywords:['akan kami bentangkan','diri pertama jamak','tanpa di-']
},
{
 id:'AP-015',cat:'Ayat Aktif dan Pasif',skill:'Analisis campuran aktif dan pasif',difficulty:'Sangat Sukar',
 q:'Semua bukti yang dikumpulkan oleh pasukan penyiasat itu akan diteliti semula sebelum keputusan dibuat.',
 i:'Pilih analisis yang paling tepat.',
 a:['Ayat ini aktif kerana terdapat pelaku “pasukan penyiasat”.','Ayat ini pasif; “semua bukti...” menjadi subjek dan “akan diteliti semula...” ialah predikat.','Ayat ini songsang kerana kata kerja berada di tengah.','Ayat ini perintah kerana mengandungi tindakan.'],c:1,
 e:'Ayat utama menggunakan kata kerja pasif “akan diteliti”. Frasa “yang dikumpulkan oleh pasukan penyiasat itu” hanya menerangkan “semua bukti”.',
 cn:'主句的动词是“akan diteliti”，所以是被动句；“由调查队收集的”只是修饰“所有证据”。',
 formula:'Cari kata kerja utama, bukan kata kerja dalam frasa penerang.',
 mnemonic:'先找主句动词；修饰语里的动词不要抢答案。',
 trap:'Tersalah menganggap pelaku dalam frasa “oleh...” sebagai subjek ayat utama.',keywords:['akan diteliti','yang dikumpulkan','kata kerja utama']
}
];
