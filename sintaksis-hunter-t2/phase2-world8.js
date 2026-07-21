window.PHASE2_WORLD8 = [
{
 id:'MS-001',cat:'Analisis Sintaksis',skill:'Subjek lengkap dan pola ayat',difficulty:'Sukar',
 q:'Para peserta dari sekolah pedalaman itu kelihatan amat bersemangat sejak awal pagi.',
 i:'Pilih analisis yang paling tepat.',
 a:['Subjek: Para peserta | Pola: FN + FS','Subjek: Para peserta dari sekolah pedalaman itu | Pola: FN + FA','Subjek: Para peserta dari sekolah | Pola: FN + FK','Subjek: Para peserta dari sekolah pedalaman itu kelihatan | Pola: FN + FN'],c:1,
 e:'Frasa “dari sekolah pedalaman itu” menerangkan peserta dan masih termasuk dalam subjek. Predikat “kelihatan amat bersemangat” berinti kata adjektif.',
 cn:'“来自内陆学校的参赛者”是完整主语；谓语核心是“bersemangat（有精神）”，属于形容词短语，所以是 FN + FA。',
 formula:'Pisahkan S/P dahulu, kemudian lihat inti predikat.',mnemonic:'先分主谓，再看谓语核心。',
 trap:'Melihat kata sendi “dari” lalu terus memilih FN + FS.',keywords:['dari sekolah pedalaman','kelihatan amat bersemangat']
},
{
 id:'MS-002',cat:'Analisis Sintaksis',skill:'Jenis ayat dan ragam',difficulty:'Sukar',
 q:'Jangan kamu sebarkan berita yang belum dipastikan kesahihannya.',
 i:'Tentukan jenis dan ragam ayat.',
 a:['Ayat penyata aktif','Ayat perintah aktif','Ayat perintah pasif','Ayat seruan aktif'],c:1,
 e:'Kata “jangan” menandakan larangan, maka ayat ini ialah ayat perintah. Pelaku “kamu” melakukan perbuatan “sebarkan”, maka ragamnya aktif.',
 cn:'“jangan”表示禁止，所以是祈使句；“kamu”是做动作的人，放在前面，因此是主动句。',
 formula:'Tujuan ayat dahulu, kemudian lihat pelaku dan objek.',mnemonic:'先看用途，再看谁做动作。',
 trap:'Menganggap semua ayat perintah sebagai ayat pasif.',keywords:['jangan','kamu sebarkan']
},
{
 id:'MS-003',cat:'Analisis Sintaksis',skill:'Susunan songsang dan pola',difficulty:'Sukar',
 q:'Di hujung lorong sempit itu berdiri sebuah rumah agam yang telah lama ditinggalkan.',
 i:'Pilih analisis yang tepat.',
 a:['Susunan biasa; FN + FS','Susunan songsang; FN + FK','Susunan songsang; FN + FA','Ayat pasif; FN + FK'],c:1,
 e:'Predikat “di hujung lorong sempit itu berdiri” didahulukan sebelum subjek “sebuah rumah agam...”. Inti predikat ialah kata kerja “berdiri”.',
 cn:'地点和动作放在主语前面，所以是倒装句；谓语核心是“berdiri（矗立）”，因此属于 FK。',
 formula:'P di depan = songsang; inti kerja = FK.',mnemonic:'谓语在前是倒装，核心是动作选 FK。',
 trap:'Melihat “di” lalu memilih FS tanpa mencari inti predikat.',keywords:['di hujung lorong','berdiri','sebuah rumah agam']
},
{
 id:'MS-004',cat:'Analisis Sintaksis',skill:'Ayat pasif diri pertama',difficulty:'Sukar',
 q:'Laporan terperinci itu telah saya serahkan kepada pengetua semalam.',
 i:'Pilih pernyataan yang betul.',
 a:['Ayat aktif diri pertama','Ayat pasif diri pertama','Ayat pasif diri ketiga','Ayat songsang frasa adjektif'],c:1,
 e:'Objek “laporan terperinci itu” berada di hadapan, diikuti kata ganti diri pertama “saya” dan kata kerja tanpa awalan di-.',
 cn:'“报告”放在前面，接着是第一人称“saya”和原形动词“serahkan”，这是第一人称被动句。',
 formula:'Pasif diri 1/2 = Objek + saya/kamu + kata kerja.',mnemonic:'我你被动：东西在前，人称在中，动词不加 di-。',
 trap:'Menambah awalan di- selepas kata ganti diri pertama.',keywords:['laporan terperinci itu','saya serahkan']
},
{
 id:'MS-005',cat:'Analisis Sintaksis',skill:'Pola FN + FN dan jenis ayat',difficulty:'Sederhana Tinggi',
 q:'Lelaki yang sedang berbual dengan pegawai itu abang kepada rakan sekelas saya.',
 i:'Pilih analisis yang paling tepat.',
 a:['Ayat penyata; FN + FN','Ayat penyata; FN + FK','Ayat seruan; FN + FN','Ayat tanya; FN + FA'],c:0,
 e:'Ayat ini memberi maklumat, maka jenisnya penyata. Predikat “abang kepada rakan sekelas saya” ialah frasa nama.',
 cn:'这句话在陈述事实，所以是陈述句；谓语说明“他是谁”，属于名词短语 FN。',
 formula:'Jika predikat menjawab “siapa/apakah dia?”, pilih FN.',mnemonic:'谓语说明身份关系，选 FN。',
 trap:'Tertarik oleh kata kerja “sedang berbual” yang sebenarnya berada dalam subjek.',keywords:['yang sedang berbual','abang kepada']
},
{
 id:'MS-006',cat:'Analisis Sintaksis',skill:'Ayat seruan dan pola adjektif',difficulty:'Sederhana Tinggi',
 q:'Wah, sungguh indah pemandangan dari puncak bukit itu!',
 i:'Tentukan jenis dan pola ayat.',
 a:['Ayat seruan; FN + FA','Ayat penyata; FN + FS','Ayat seruan; FN + FK','Ayat perintah; FN + FA'],c:0,
 e:'Kata seru “wah” dan tanda seru menunjukkan ayat seruan. Predikat “sungguh indah” berinti kata adjektif.',
 cn:'“wah”加感叹号表示感叹句；“sungguh indah”核心是形容词“indah”，所以是 FA。',
 formula:'Wah/aduh/amboi = seruan; sifat = FA.',mnemonic:'感叹词判 Seruan，性质词判 FA。',
 trap:'Menganggap frasa “dari puncak bukit” sebagai predikat FS.',keywords:['wah','sungguh indah']
},
{
 id:'MS-007',cat:'Analisis Sintaksis',skill:'Transformasi aktif kepada pasif',difficulty:'Sukar',
 q:'Pihak berkuasa akan memperketat kawalan keselamatan di semua pintu masuk.',
 i:'Pilih ayat pasif yang gramatis dan mengekalkan maksud.',
 a:['Kawalan keselamatan di semua pintu masuk akan diperketat oleh pihak berkuasa.','Kawalan keselamatan akan pihak berkuasa memperketat di semua pintu masuk.','Di semua pintu masuk akan diperketat pihak berkuasa kawalan keselamatan.','Pihak berkuasa akan diperketat oleh kawalan keselamatan.'],c:0,
 e:'Objek “kawalan keselamatan” dipindahkan ke hadapan, “memperketat” berubah menjadi “diperketat”, dan pelaku kekal selepas “oleh”.',
 cn:'把宾语“安全管制”移到前面，把“memperketat”改成“diperketat”，执行者放在“oleh”后面。',
 formula:'Aktif P+KK+O → Pasif O+di-KK+oleh+P.',mnemonic:'宾语前移，动词加 di-，执行者放后。',
 trap:'Mengekalkan kata kerja aktif selepas objek dipindahkan.',keywords:['memperketat','kawalan keselamatan','diperketat']
},
{
 id:'MS-008',cat:'Analisis Sintaksis',skill:'Susunan biasa daripada songsang',difficulty:'Sukar',
 q:'Amat sukar untuk ditembusi benteng pertahanan pasukan lawan itu.',
 i:'Pilih susunan biasa yang tepat.',
 a:['Benteng pertahanan pasukan lawan itu amat sukar untuk ditembusi.','Pasukan lawan itu amat sukar benteng pertahanannya ditembusi.','Untuk ditembusi benteng pertahanan itu amat sukar.','Benteng itu untuk ditembusi amat pasukan lawan sukar.'],c:0,
 e:'Dalam susunan biasa, subjek lengkap “benteng pertahanan pasukan lawan itu” diletakkan di hadapan predikat.',
 cn:'正常语序必须把完整主语“对方队伍的防线”放在前面，再接谓语“很难攻破”。',
 formula:'Songsang P+S → Biasa S+P.',mnemonic:'倒装还原：把谁或什么搬回最前面。',
 trap:'Memindahkan hanya sebahagian subjek atau mengubah maksud.',keywords:['amat sukar','benteng pertahanan']
},
{
 id:'MS-009',cat:'Analisis Sintaksis',skill:'Jenis ayat tanya tanpa kata tanya',difficulty:'Sederhana Tinggi',
 q:'Semua ahli kumpulan telah memahami arahan tersebut?',
 i:'Nyatakan jenis ayat berdasarkan tujuan.',
 a:['Ayat penyata','Ayat tanya','Ayat perintah','Ayat seruan'],c:1,
 e:'Walaupun tiada kata tanya, tanda soal dan intonasi meminta pengesahan, maka ayat ini ialah ayat tanya.',
 cn:'虽然没有疑问词，但问号和语气是在要求确认，所以仍是疑问句。',
 formula:'Lihat tujuan dan tanda baca, bukan kata tanya sahaja.',mnemonic:'没有疑问词也能问；看用途和问号。',
 trap:'Menganggap ayat itu penyata kerana bentuk katanya seperti ayat biasa.',keywords:['telah memahami','?']
},
{
 id:'MS-010',cat:'Analisis Sintaksis',skill:'Predikat frasa sendi dalam ayat penyata',difficulty:'Sederhana Tinggi',
 q:'Hadiah utama pertandingan inovasi itu untuk pemenang kategori terbuka.',
 i:'Pilih pola dan jenis ayat.',
 a:['FN + FN; penyata','FN + FK; penyata','FN + FS; penyata','FN + FA; seruan'],c:2,
 e:'Predikat bermula dengan kata sendi “untuk”, maka polanya FN + FS. Ayat itu hanya memberi maklumat.',
 cn:'谓语以介词“untuk”开头，所以是 FS；整句只是说明奖品给谁，因此是陈述句。',
 formula:'Predikat bermula kata sendi = FS.',mnemonic:'谓语一开始就是介词，选 FS。',
 trap:'Menganggap “pemenang” sebagai inti predikat FN dan mengabaikan “untuk”.',keywords:['untuk','pemenang kategori terbuka']
},
{
 id:'MS-011',cat:'Analisis Sintaksis',skill:'Ayat aktif tak transitif',difficulty:'Sukar',
 q:'Para peserta sedang berehat di bawah khemah utama selepas latihan.',
 i:'Pilih analisis ragam yang tepat.',
 a:['Ayat aktif transitif kerana ada “khemah”','Ayat aktif tak transitif kerana “berehat” tidak menerima objek','Ayat pasif kerana keterangan tempat di belakang','Ayat songsang kerana kata kerja berada selepas subjek'],c:1,
 e:'Kata kerja “berehat” tidak memerlukan objek. “Di bawah khemah utama” ialah keterangan tempat, bukan objek.',
 cn:'“berehat（休息）”不需要宾语；“在主帐篷下”只是地点说明，因此是不及物主动句。',
 formula:'Jika selepas kata kerja hanya keterangan, bukan objek, ayat aktif tak transitif.',mnemonic:'动作后面只是哪里／何时，不一定有宾语。',
 trap:'Menganggap semua kata nama selepas kata kerja sebagai objek.',keywords:['berehat','di bawah khemah']
},
{
 id:'MS-012',cat:'Analisis Sintaksis',skill:'Kesalahan transformasi pasif',difficulty:'Sukar',
 q:'Pelajar itu telah ditegur oleh guru disiplin semalam.',
 i:'Pilih ayat aktif yang tepat.',
 a:['Guru disiplin telah menegur pelajar itu semalam.','Pelajar itu telah menegur guru disiplin semalam.','Guru disiplin telah ditegur pelajar itu semalam.','Semalam pelajar itu menegur oleh guru disiplin.'],c:0,
 e:'Pelaku selepas “oleh” menjadi subjek ayat aktif, manakala subjek pasif “pelajar itu” kembali menjadi objek.',
 cn:'“oleh”后面的执行者“纪律老师”在主动句中成为主语；“那名学生”恢复为宾语。',
 formula:'Pasif O+di-KK+oleh+P → Aktif P+meN-KK+O.',mnemonic:'找 oleh 后面的人，把他搬到前面做主语。',
 trap:'Menukar peranan pelaku dan penerima tindakan.',keywords:['ditegur','oleh guru disiplin']
},
{
 id:'MS-013',cat:'Analisis Sintaksis',skill:'Ayat perintah sopan',difficulty:'Sederhana Tinggi',
 q:'Sila letakkan semua beg di bahagian belakang dewan.',
 i:'Pilih analisis yang betul.',
 a:['Ayat penyata aktif','Ayat tanya','Ayat perintah aktif','Ayat seruan pasif'],c:2,
 e:'Kata “sila” menunjukkan arahan yang sopan. Pelaku tersirat ialah orang yang menerima arahan, maka bentuknya aktif.',
 cn:'“sila”表示礼貌命令，所以是祈使句；动作由被命令的人执行，因此属于主动形式。',
 formula:'Sila/tolong/harap = perintah sopan.',mnemonic:'看到 sila、tolong、harap，先判 Perintah。',
 trap:'Menganggap ayat sopan sebagai ayat penyata.',keywords:['sila','letakkan']
},
{
 id:'MS-014',cat:'Analisis Sintaksis',skill:'Pola ayat dengan kata menjadi',difficulty:'Sukar',
 q:'Pemuda dari kampung seberang itu menjadi jurulatih pasukan sekolah kami.',
 i:'Tentukan pola ayat berdasarkan binaan predikat.',
 a:['FN + FN','FN + FK','FN + FA','FN + FS'],c:1,
 e:'Predikat bermula dengan kata kerja “menjadi”. Walaupun diikuti frasa nama, keseluruhan predikat ialah frasa kerja.',
 cn:'谓语以动词“menjadi（成为）”开头，即使后面接名词，整体仍是动词短语 FK。',
 formula:'Jika inti pertama predikat ialah kata kerja, pilih FK.',mnemonic:'先看谓语开头核心；menjadi 是动作词，选 FK。',
 trap:'Melihat “jurulatih” lalu terus memilih FN + FN.',keywords:['menjadi','jurulatih']
},
{
 id:'MS-015',cat:'Final Boss',skill:'Analisis lima lapis',difficulty:'Sangat Sukar',
 q:'Betapa membanggakan kejayaan pasukan robotik sekolah kami yang telah dipuji oleh juri antarabangsa itu!',
 i:'Pilih analisis paling lengkap.',
 a:['Seruan; songsang; FN + FA; mengandungi unsur pasif dalam penerang','Penyata; biasa; FN + FK; ayat aktif','Seruan; biasa; FN + FN; ayat pasif utama','Perintah; songsang; FN + FS; ayat aktif'],c:0,
 e:'“Betapa” menandakan seruan. Predikat adjektif “membanggakan” didahulukan, maka susunannya songsang. Frasa “yang telah dipuji...” ialah penerang pasif dalam subjek, bukan ragam utama ayat.',
 cn:'“Betapa”表示感叹；形容词谓语“membanggakan”放在前面，所以是倒装；“yang telah dipuji...”只是主语内部的被动修饰，不是整句的主要语态。',
 formula:'Jenis → susunan → pola → bezakan ayat utama dengan penerang.',mnemonic:'先用途，再语序，再句型，最后分清主句和修饰句。',
 trap:'Melihat “telah dipuji” lalu menganggap seluruh ayat ialah ayat pasif utama.',keywords:['betapa','membanggakan','yang telah dipuji']
}
];