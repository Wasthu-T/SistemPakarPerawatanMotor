import { Symptom, Problem, Rule, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'C1',
    name: 'Pengecekan Oli',
    description: 'Diagnosis masalah pada sistem pelumasan motor matic.'
  },
  {
    id: 'C2',
    name: 'Pengecekan Mesin',
    description: 'Diagnosis masalah pada komponen mesin motor matic.'
  },
  {
    id: 'C3',
    name: 'Pengecekan Ban',
    description: 'Diagnosis masalah pada ban dan sistem suspensi motor matic.'
  },
  {
    id: 'C4',
    name: 'Pengecekan Bahan Bakar',
    description: 'Diagnosis masalah pada sistem bahan bakar motor matic.'
  }
];

// Pengecekan Oli
export const symptomsOli: Symptom[] = [
  { id: 'SO1', text: 'Rembesan oli di mesin', categoryId: 'C1' },
  { id: 'SO2', text: 'Asap knalpot berwarna biru', categoryId: 'C1' },
  { id: 'SO3', text: 'Konsumsi oli meningkat', categoryId: 'C1' },
  { id: 'SO4', text: 'Volume oli berkurang drastic', categoryId: 'C1' },
  { id: 'SO5', text: 'Warna oli hitam pekat', categoryId: 'C1' },
  { id: 'SO6', text: 'Oli belum diganti sesuai jadwal', categoryId: 'C1' },
  { id: 'SO7', text: 'Level oli rendah', categoryId: 'C1' },
  { id: 'SO8', text: 'O-ring aus atau rusak', categoryId: 'C1' },
  { id: 'SO9', text: 'Filter oli kotor', categoryId: 'C1' },
];

// Pengecekan Mesin
export const symptomsMesin: Symptom[] = [
  { id: 'SM1', text: 'Motor tidak mau bergerak', categoryId: 'C2' },
  { id: 'SM2', text: 'Mesin menyala', categoryId: 'C2' },
  { id: 'SM3', text: 'Timbul bunyi berdecit', categoryId: 'C2' },
  { id: 'SM4', text: 'Lebar drive belt <= 18,9mm', categoryId: 'C2' },
  { id: 'SM5', text: 'Bentuk ramp plate tidak sempurna', categoryId: 'C2' },
  { id: 'SM6', text: 'Driven face tidak menekan drive belt', categoryId: 'C2' },
  { id: 'SM7', text: 'Drive belt terlepas dari pully', categoryId: 'C2' },
  { id: 'SM8', text: 'Tenaga motor kurang', categoryId: 'C2' },
  { id: 'SM9', text: 'Timbul bau karet terbakar', categoryId: 'C2' },
  { id: 'SM10', text: 'Permukaan pully berminyak', categoryId: 'C2' },
  { id: 'SM11', text: 'Saat digas tinggi kemudian dilepas, muncul suara benturan dari CVT', categoryId: 'C2' },
  { id: 'SM12', text: 'Driven face lemah saat ditekan', categoryId: 'C2' },
  { id: 'SM13', text: 'Panjang pegas driven face < 99,8mm', categoryId: 'C2' },
  { id: 'SM14', text: 'Moveable driven face seret saat digerakkan', categoryId: 'C2' },
  { id: 'SM15', text: 'Weight roller tidak silinder lagi', categoryId: 'C2' },
  { id: 'SM16', text: 'Tarikan montor menghentak-hentak', categoryId: 'C2' },
  { id: 'SM17', text: 'Permukaan driven face tidak rata', categoryId: 'C2' },
  { id: 'SM18', text: 'Warna clutch outter biru gelap', categoryId: 'C2' },
  { id: 'SM19', text: 'Diameter dalam clucth outer <= 125,5mm', categoryId: 'C2' },
  { id: 'SM20', text: 'Motor habis terkena banjir', categoryId: 'C2' },
  { id: 'SM21', text: 'Terdapat air pada ruang CVT', categoryId: 'C2' },
  { id: 'SM22', text: 'Ketebalan cluch shoe <= 2,5mm', categoryId: 'C2' },
  { id: 'SM23', text: 'Timbul bunyi ngorok dari CVT', categoryId: 'C2' },
  { id: 'SM24', text: 'Filter udara CVT kotor', categoryId: 'C2' },
  { id: 'SM25', text: 'Ruang CVT dipenuhi debu / kotoran', categoryId: 'C2' },
  { id: 'SM26', text: 'Mesin mati saat langsam', categoryId: 'C2' },
  { id: 'SM27', text: 'Motor berjalan sendiri walaupun tidak digas', categoryId: 'C2' },
  { id: 'SM28', text: 'Tenaga motor kurang ditanjakan', categoryId: 'C2' },
  { id: 'SM29', text: 'Alur torque cam menjadi lebih landai', categoryId: 'C2' },
];

// Pengecekan Ban
export const symptomsBan: Symptom[] = [
  { id: 'ST1', text: 'Motor terasa bergoyang pada bagian belakang', categoryId: 'C3' },
  { id: 'ST2', text: 'Ban terasa licin meskipun jalan kering', categoryId: 'C3' },
  { id: 'ST3', text: 'Kehilangan keseimbangan saat mengerem', categoryId: 'C3' },
  { id: 'ST4', text: 'Motor terasa berat ketika di dorong', categoryId: 'C3' },
  { id: 'ST5', text: 'Ada retakan kecil dipermukaan ban', categoryId: 'C3' },
  { id: 'ST6', text: 'Ban sudah digunakan lebih dari 5 tahun', categoryId: 'C3' },
  { id: 'ST7', text: 'Ban sering kempis meskipun dipompa', categoryId: 'C3' },
  { id: 'ST8', text: 'Ban luar tipis/botak', categoryId: 'C3' },
];

// Pengecekan Bahan Bakar
export const symptomsBahanBakar: Symptom[] = [
  { id: 'SF1', text: 'Mesin tidak lancar ketika diputar tuas gas atau brebet', categoryId: 'C4' },
  { id: 'SF2', text: 'Stater motor sulit tidak terdorong tenaga atau tidak terangkat', categoryId: 'C4' },
  { id: 'SF3', text: 'Ketika dikick stater motor sulit hidup', categoryId: 'C4' },
  { id: 'SF4', text: 'Jalan tidak lancar atau tersendat-sendat', categoryId: 'C4' },
  { id: 'SF5', text: 'Mesin mati total', categoryId: 'C4' },
  { id: 'SF6', text: 'Konsumsi bahan bakar sangat boros', categoryId: 'C4' },
  { id: 'SF7', text: 'Saat jalan motor tiba-tiba mogok atau mati', categoryId: 'C4' },
  { id: 'SF8', text: 'Jalan mengalami gangguan atau tersendat ketika diatas 50km/jam', categoryId: 'C4' },
  { id: 'SF9', text: 'Mesin susah hidup', categoryId: 'C4' },
  { id: 'SF10', text: 'Tarikan motor kurang maksimal', categoryId: 'C4' },
  { id: 'SF11', text: 'Saat handle gas dibuka terjadi hentakan kasar dan motor loncat-loncat', categoryId: 'C4' },
  { id: 'SF12', text: 'Mesin mengalami penurunan performa', categoryId: 'C4' },
  { id: 'SF13', text: 'Akselerasi pada putaran atas seperti tertahan', categoryId: 'C4' },
  { id: 'SF14', text: 'Saat idle mesin menyala tidak stabil', categoryId: 'C4' },
  { id: 'SF15', text: 'Keluar asap putih pekat dari knalpot', categoryId: 'C4' },
];

// Combine all symptoms
export const symptoms: Symptom[] = [
  ...symptomsOli,
  ...symptomsMesin,
  ...symptomsBan,
  ...symptomsBahanBakar
];

// Problems for Pengecekan Oli
export const problemsOli: Problem[] = [
  {
    id: 'PO1',
    name: 'Seal Oli Rusak / Bocor',
    description: 'Seal oli mengalami kerusakan atau kebocoran.',
    solution: 'Ganti seal oli yang aus / rusak. Lakukan pemeriksaan visual rutin pada area seal, hindari penggunaan oli yang tidak sesuai spesifikasi, segera bawa ke bengkel jika ada rembesan oli',
    categoryId: 'C1'
  },
  {
    id: 'PO2',
    name: 'O-Ring Rusak',
    description: 'O-ring mengalami keausan atau kerusakan.',
    solution: 'Ganti O-ring yang aus atau pecah. Ganti O-ring secara berkala sesuai rekomendasi servis, hindari tekanan berlebih atau suhu ekstrem yang bisa merusak O-ring',
    categoryId: 'C1'
  },
  {
    id: 'PO3',
    name: 'Oli Mesin Habis',
    description: 'Level oli mesin berada di bawah batas minimum.',
    solution: 'Tambah atau ganti oli mesin sesuai Spesifikasi. Cek level oli minimal setiap 500 km, ganti oli sesuai interval pabrikan (biasanya tiap 2000-3000 km), jangan menunda penggantian',
    categoryId: 'C1'
  },
  {
    id: 'PO4',
    name: 'Oli Mesin Kotor',
    description: 'Oli mesin sudah kotor dan perlu diganti.',
    solution: 'Ganti oli mesin dan bersihkan filter oli. Ganti oli dan filter oli secara bersamaan, gunakan oli dengan kualitas yang direkomendasikan pabrikan, hindari penggunaan oli campuran atau bekas',
    categoryId: 'C1'
  },
  {
    id: 'PO5',
    name: 'Kebocoran Oli Mesin',
    description: 'Terdapat kebocoran pada sistem pelumasan mesin.',
    solution: 'Periksa dan ganti seal, gasket, atau baut tap oli. Jika ditemukan rembesan oli, segera bawa ke bengkel untuk pengecekan dan perbaikan, hindari mengendarai motor dengan oli bocor yang berlebihan',
    categoryId: 'C1'
  },
  {
    id: 'PO6',
    name: 'Ring Piston Aus',
    description: 'Ring piston mengalami keausan.',
    solution: 'Lakukan overhaul mesin dan ganti ring piston. Gunakan oli dengan standar API yang sesuai, hindari mengendarai motor dengan beban berlebih, lakukan servis berkala sesuai jadwal pabrikan',
    categoryId: 'C1'
  },
  {
    id: 'PO7',
    name: 'Filter Oli Kotor',
    description: 'Filter oli mengalami penyumbatan atau kotor.',
    solution: 'Bersihkan atau ganti filter oli. Periksa dan bersihkan filter oli minimal setiap servis rutin, ganti filter jika sudah aus atau tersumbat agar oli dapat mengalir optimal',
    categoryId: 'C1'
  },
];

// Problems for Pengecekan Mesin
export const problemsMesin: Problem[] = [
  {
    id: 'PM1',
    name: 'Drive Belt Aus',
    description: 'Drive belt mengalami keausan yang menyebabkan performa motor menurun.',
    solution: 'Ganti drive belt dengan yang baru sesuai spesifikasi. Hindari akselerasi mendadak saat stop & go, jaga beban motor agar tidak berlebih',
    categoryId: 'C2'
  },
  {
    id: 'PM2',
    name: 'Ramp Plate Rusak',
    description: 'Ramp plate mengalami kerusakan yang mempengaruhi performa CVT.',
    solution: 'Ganti ramp plate yang aus atau pecah. Hindari membuka gas secara mendadak, gunakan kecepatan bertahap',
    categoryId: 'C2'
  },
  {
    id: 'PM3',
    name: 'Pegas Driven Face Patah Ringan',
    description: 'Pegas driven face mengalami kerusakan ringan.',
    solution: 'Ganti pegas driven face. Hindari sering mengerem mendadak saat kecepatan tinggi',
    categoryId: 'C2'
  },
  {
    id: 'PM4',
    name: 'Drive Belt Putus',
    description: 'Drive belt mengalami kerusakan total.',
    solution: 'Ganti drive belt dan periksa komponen CVT lainnya. Dengarkan suara CVT dan respon motor, segera ke bengkel jika terasa aneh',
    categoryId: 'C2'
  },
  {
    id: 'PM5',
    name: 'Drive Belt Terkontaminasi Minyak',
    description: 'Drive belt terkena minyak yang menyebabkan slip.',
    solution: 'Bongkar dan bersihkan CVT. Hindari membawa motor menembus genangan air dalam',
    categoryId: 'C2'
  },
  {
    id: 'PM6',
    name: 'Pegas Driven Face Lemah',
    description: 'Pegas driven face mengalami kelemahan.',
    solution: 'Ganti pegas driven face. Hindari membawa barang berat secara terus-menerus',
    categoryId: 'C2'
  },
  {
    id: 'PM7',
    name: 'Poros Moveable Driven Face Kurang Pelumas',
    description: 'Poros moveable driven face kekurangan pelumas.',
    solution: 'Bersihkan dan beri pelumas khusus. Gunakan motor secara teratur agar pelumas tidak mengering',
    categoryId: 'C2'
  },
  {
    id: 'PM8',
    name: 'Weight Roller Rusak',
    description: 'Weight roller mengalami kerusakan.',
    solution: 'Ganti roller CVT. Hindari kebiasaan membuka gas penuh saat kondisi motor masih dingin',
    categoryId: 'C2'
  },
  {
    id: 'PM9',
    name: 'Drive Face Rusak',
    description: 'Drive face mengalami kerusakan.',
    solution: 'Ganti drive face. Dengarkan suara kasar saat akselerasi, jangan abaikan gejala ini',
    categoryId: 'C2'
  },
  {
    id: 'PM10',
    name: 'Clutch Outer Rusak',
    description: 'Clutch outer mengalami kerusakan.',
    solution: 'Ganti clutch outer. Hindari akselerasi kasar saat membawa penumpang atau tanjakan',
    categoryId: 'C2'
  },
  {
    id: 'PM11',
    name: 'CVT Kemasukan Air',
    description: 'CVT terkena air yang menyebabkan kerusakan.',
    solution: 'Bongkar CVT, bersihkan dan keringkan. Jangan menerobos banjir atau genangan saat hujan',
    categoryId: 'C2'
  },
  {
    id: 'PM12',
    name: 'Clutch Shoe Aus',
    description: 'Clutch shoe mengalami keausan.',
    solution: 'Ganti kampas kopling CVT. Hindari menahan gas saat motor berhenti lama (misalnya saat lampu merah)',
    categoryId: 'C2'
  },
  {
    id: 'PM13',
    name: 'CVT Terkontaminasi Kotoran',
    description: 'CVT terkena kotoran yang menyebabkan kerusakan.',
    solution: 'Bersihkan CVT. Gunakan penutup CVT (CVT cover) yang rapat, terutama saat berkendara di jalan berdebu',
    categoryId: 'C2'
  },
  {
    id: 'PM14',
    name: 'Pegas Clutch Weight Patah',
    description: 'Pegas clutch weight mengalami kerusakan.',
    solution: 'Ganti pegas clutch. Dengarkan suara aneh atau hentakan saat awal jalan, segera periksa',
    categoryId: 'C2'
  },
  {
    id: 'PM15',
    name: 'Torque Cam Rusak',
    description: 'Torque cam mengalami kerusakan.',
    solution: 'Ganti torque cam. Hindari kebiasaan membuka gas dan rem berulang cepat di tanjakan',
    categoryId: 'C2'
  },
];

// Problems for Pengecekan Ban
export const problemsBan: Problem[] = [
  {
    id: 'PT1',
    name: 'Keausan ban (TWI menipis)',
    description: 'Ban mengalami keausan yang mencapai indikator TWI.',
    solution: 'Ganti ban jika tanda keausan tampak sudah sejajar dengan indikator TWI. Periksa keausan ban setiap bulan, ganti ban setelah mencapai batas keausan',
    categoryId: 'C3'
  },
  {
    id: 'PT2',
    name: 'Retakan pada ban',
    description: 'Terdapat retakan pada permukaan ban.',
    solution: 'Ganti ban yang sudah retak. Hindari mengendarai motor dengan kecepatan tinggi di jalan bergelombang',
    categoryId: 'C3'
  },
  {
    id: 'PT3',
    name: 'Tekanan ban tidak sesuai',
    description: 'Tekanan angin pada ban tidak sesuai dengan rekomendasi.',
    solution: 'Periksa dan sesuaikan tekanan ban sesuai dengan rekomendasi pabrikan. Periksa tekanan ban setiap dua minggu atau sebelum perjalanan jauh',
    categoryId: 'C3'
  },
  {
    id: 'PT4',
    name: 'Usia ban terlalu lama',
    description: 'Ban sudah digunakan lebih dari 5 tahun.',
    solution: 'Ganti ban meskipun kondisinya masih tampak baik. Jangan gunakan ban lebih dari 5 tahun, bahkan jika masih tampak bagus',
    categoryId: 'C3'
  },
  {
    id: 'PT5',
    name: 'Ban bocor atau kebocoran lambat',
    description: 'Ban mengalami kebocoran yang menyebabkan sering kempis.',
    solution: 'Periksa dan perbaiki kebocoran ban, atau ganti jika perlu. Gunakan ban tubeless jika memungkinkan untuk kemudahan perbaikan',
    categoryId: 'C3'
  },
  {
    id: 'PT6',
    name: 'Keausan tidak merata pada ban',
    description: 'Ban mengalami keausan yang tidak merata pada permukaannya.',
    solution: 'Periksa dan perbaiki suspensi atau alignment motor. Lakukan rotasi ban secara rutin setiap 6 bulan atau setelah menempuh 5.000 km',
    categoryId: 'C3'
  },
];

// Problems for Pengecekan Bahan Bakar
export const problemsBahanBakar: Problem[] = [
  {
    id: 'PF1',
    name: 'Injektor kotor atau tersumbat',
    description: 'Endapan kotoran menyumbat injektor.',
    solution: 'Membersihkan injector dengan cairan pembersih khusus atau alat ultra sonic cleaner.',
    categoryId: 'C4'
  },
  {
    id: 'PF2',
    name: 'Fuel pump lemah atau rusak',
    description: 'Tekanan bahan bakar tidak stabil karena fuel pump lemah/rusak.',
    solution: 'Memeriksa tekanan bahan bakar atau mengganti fuel pump jika tekanan tidak sesuai standar.',
    categoryId: 'C4'
  },
];

// Combine all problems
export const problems: Problem[] = [
  ...problemsOli,
  ...problemsMesin,
  ...problemsBan,
  ...problemsBahanBakar
];

// Rules for Pengecekan Oli
export const rulesOli: Rule[] = [
  { id: 'RO1', symptoms: ['SO1'], problemId: 'PO1', categoryId: 'C1' },
  { id: 'RO2', symptoms: ['SO2', 'SO3'], problemId: 'PO6', categoryId: 'C1' },
  { id: 'RO3', symptoms: ['SO4', 'SO1'], problemId: 'PO5', categoryId: 'C1' },
  { id: 'RO4', symptoms: ['SO5', 'SO6'], problemId: 'PO4', categoryId: 'C1' },
  { id: 'RO5', symptoms: ['SO7'], problemId: 'PO3', categoryId: 'C1' },
  { id: 'RO6', symptoms: ['SO8'], problemId: 'PO2', categoryId: 'C1' },
  { id: 'RO7', symptoms: ['SO9'], problemId: 'PO7', categoryId: 'C1' },
  { id: 'RO8', symptoms: ['SO1', 'SO7'], problemId: 'PO5', categoryId: 'C1' },
  { id: 'RO9', symptoms: ['SO2'], problemId: 'PO6', categoryId: 'C1' },
  { id: 'RO10', symptoms: ['SO5'], problemId: 'PO4', categoryId: 'C1' },
  { id: 'RO11', symptoms: ['SO1', 'SO5'], problemId: 'PO1', categoryId: 'C1' },
  { id: 'RO12', symptoms: ['SO4'], problemId: 'PO3', categoryId: 'C1' },
  { id: 'RO13', symptoms: ['SO9', 'SO5'], problemId: 'PO7', categoryId: 'C1' },
  { id: 'RO14', symptoms: ['SO8', 'SO1'], problemId: 'PO2', categoryId: 'C1' },
  { id: 'RO15', symptoms: ['SO7', 'SO6'], problemId: 'PO3', categoryId: 'C1' },
  { id: 'RO16', symptoms: ['SO7', 'SO6', 'SO3'], problemId: 'PO3', categoryId: 'C1' },
  { id: 'RO17', symptoms: ['SO1', 'SO5', 'SO9'], problemId: 'PO5', categoryId: 'C1' },
  { id: 'RO18', symptoms: ['SO2', 'SO3', 'SO4'], problemId: 'PO6', categoryId: 'C1' },
  { id: 'RO19', symptoms: ['SO8', 'SO1', 'SO7'], problemId: 'PO2', categoryId: 'C1' },
  { id: 'RO20', symptoms: ['SO4', 'SO7', 'SO3'], problemId: 'PO3', categoryId: 'C1' },
];

// Rules for Pengecekan Mesin
export const rulesMesin: Rule[] = [
  { id: 'RM1', symptoms: ['SM2', 'SM3', 'SM4'], problemId: 'PM1', categoryId: 'C2' },
  { id: 'RM2', symptoms: ['SM2', 'SM5'], problemId: 'PM2', categoryId: 'C2' },
  { id: 'RM3', symptoms: ['SM2', 'SM6'], problemId: 'PM3', categoryId: 'C2' },
  { id: 'RM4', symptoms: ['SM2', 'SM7'], problemId: 'PM4', categoryId: 'C2' },
  { id: 'RM5', symptoms: ['SM26', 'SM27'], problemId: 'PM14', categoryId: 'C2' },
  { id: 'RM6', symptoms: ['SM8', 'SM9', 'SM10'], problemId: 'PM5', categoryId: 'C2' },
  { id: 'RM7', symptoms: ['SM8', 'SM11', 'SM12', 'SM13'], problemId: 'PM6', categoryId: 'C2' },
  { id: 'RM8', symptoms: ['SM8', 'SM11', 'SM14'], problemId: 'PM7', categoryId: 'C2' },
  { id: 'RM9', symptoms: ['SM8', 'SM15'], problemId: 'PM8', categoryId: 'C2' },
  { id: 'RM10', symptoms: ['SM8', 'SM16'], problemId: 'PM9', categoryId: 'C2' },
  { id: 'RM11', symptoms: ['SM8', 'SM16', 'SM18', 'SM19'], problemId: 'PM10', categoryId: 'C2' },
  { id: 'RM12', symptoms: ['SM8', 'SM16', 'SM22'], problemId: 'PM12', categoryId: 'C2' },
  { id: 'RM13', symptoms: ['SM8', 'SM20', 'SM21'], problemId: 'PM11', categoryId: 'C2' },
  { id: 'RM14', symptoms: ['SM8', 'SM23', 'SM24', 'SM25'], problemId: 'PM13', categoryId: 'C2' },
  { id: 'RM15', symptoms: ['SM8', 'SM28', 'SM29'], problemId: 'PM15', categoryId: 'C2' },
];

// Rules for Pengecekan Ban
export const rulesBan: Rule[] = [
  { id: 'RT1', symptoms: ['ST1'], problemId: 'PT6', categoryId: 'C3' },
  { id: 'RT2', symptoms: ['ST2', 'ST3'], problemId: 'PT1', categoryId: 'C3' },
  { id: 'RT3', symptoms: ['ST2', 'ST8'], problemId: 'PT1', categoryId: 'C3' },
  { id: 'RT4', symptoms: ['ST1', 'ST3'], problemId: 'PT6', categoryId: 'C3' },
  { id: 'RT5', symptoms: ['ST3', 'ST4'], problemId: 'PT3', categoryId: 'C3' },
  { id: 'RT6', symptoms: ['ST5'], problemId: 'PT2', categoryId: 'C3' },
  { id: 'RT7', symptoms: ['ST6'], problemId: 'PT4', categoryId: 'C3' },
  { id: 'RT8', symptoms: ['ST7'], problemId: 'PT5', categoryId: 'C3' },
  { id: 'RT9', symptoms: ['ST6', 'ST8'], problemId: 'PT4', categoryId: 'C3' },
  { id: 'RT10', symptoms: ['ST4', 'ST7'], problemId: 'PT3', categoryId: 'C3' },
  { id: 'RT11', symptoms: ['ST2', 'ST3', 'ST8'], problemId: 'PT1', categoryId: 'C3' },
  { id: 'RT12', symptoms: ['ST5', 'ST2', 'ST7'], problemId: 'PT2', categoryId: 'C3' },
  { id: 'RT13', symptoms: ['ST3', 'ST4', 'ST7'], problemId: 'PT3', categoryId: 'C3' },
  { id: 'RT14', symptoms: ['ST6', 'ST8', 'ST3'], problemId: 'PT4', categoryId: 'C3' },
  { id: 'RT15', symptoms: ['ST7', 'ST4', 'ST1'], problemId: 'PT5', categoryId: 'C3' },
  { id: 'RT16', symptoms: ['ST1', 'ST3', 'ST2'], problemId: 'PT6', categoryId: 'C3' },
  { id: 'RT17', symptoms: ['ST2', 'ST3', 'ST6'], problemId: 'PT1', categoryId: 'C3' },
];

// Rules for Pengecekan Bahan Bakar
export const rulesBahanBakar: Rule[] = [
  { id: 'RF1', symptoms: ['SF4', 'SF6', 'SF7', 'SF9', 'SF14'], problemId: 'PF1', categoryId: 'C4' },
  { id: 'RF2', symptoms: ['SF1', 'SF4', 'SF6', 'SF10', 'SF12'], problemId: 'PF1', categoryId: 'C4' },
  { id: 'RF2', symptoms: ['SF11', 'SF13'], problemId: 'PF1', categoryId: 'C4' },
  { id: 'RF2', symptoms: ['SF14', 'SF15'], problemId: 'PF1', categoryId: 'C4' },
  { id: 'RF3', symptoms: ['SF1', 'SF2', 'SF3', 'SF4', 'SF6', 'SF7'], problemId: 'PF2', categoryId: 'C4' },
  { id: 'RF3', symptoms: ['SF2', 'SF5', 'SF7', 'SF9'], problemId: 'PF2', categoryId: 'C4' },
  { id: 'RF3', symptoms: ['SF8', 'SF12', 'SF13'], problemId: 'PF2', categoryId: 'C4' },
  { id: 'RF3', symptoms: ['SF6', 'SF10'], problemId: 'PF2', categoryId: 'C4' },
];

// Combine all rules
export const rules: Rule[] = [
  ...rulesOli,
  ...rulesMesin,
  ...rulesBan,
  ...rulesBahanBakar
]; 