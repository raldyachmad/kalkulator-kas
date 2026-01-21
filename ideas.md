# Brainstorming Desain: Kalkulator Kas Rupiah

## Analisis Kebutuhan
Aplikasi kalkulator kas adalah alat untuk menghitung total nilai uang dari berbagai denominasi. Berdasarkan gambar referensi, aplikasi memiliki:
- Tabel dengan denominasi uang (100.000, 50.000, 20.000, dst)
- Kolom untuk jumlah lembar/koin
- Perhitungan otomatis total per baris
- Total keseluruhan di baris terakhir

---

## Ide Desain 1: Modern Minimalis dengan Aksen Hijau
**Design Movement:** Neo-Minimalism dengan sentuhan Fintech Modern

**Core Principles:**
- Kesederhanaan ekstrem: hanya elemen yang fungsional
- Fokus pada readability dan akurasi angka
- Spacing yang luas untuk mengurangi cognitive load
- Hierarchy yang jelas melalui ukuran dan warna

**Color Philosophy:**
- Background: Putih bersih (oklch(1 0 0)) untuk kepercayaan dan profesionalisme
- Primary: Hijau emerald (oklch(0.6 0.15 142)) - melambangkan pertumbuhan dan stabilitas finansial
- Accent: Biru soft (oklch(0.65 0.12 250)) untuk secondary actions
- Text: Dark slate (oklch(0.235 0.015 65)) untuk kontras maksimal

**Layout Paradigm:**
- Tabel dengan grid yang sangat terstruktur
- Input fields dengan border subtle
- Total section dengan background highlight yang lembut
- Responsive: full-width di mobile, centered container di desktop

**Signature Elements:**
1. Subtle gradient background (white to very light green)
2. Rounded corners minimal (4-8px) untuk modern feel
3. Icons dari lucide-react untuk denominasi uang

**Interaction Philosophy:**
- Smooth transitions saat input berubah
- Hover states yang jelas pada input fields
- Instant calculation feedback tanpa delay
- Clear visual feedback untuk setiap interaksi

**Animation:**
- Fade-in untuk total amount (200ms ease-out)
- Subtle scale pada hover input (1.02x)
- Number counter animation untuk total (300ms)

**Typography System:**
- Display: Geist Sans Bold untuk header (denominasi)
- Body: Inter Regular untuk input dan values
- Mono: IBM Plex Mono untuk angka besar (total)
- Hierarchy: 12px (label) → 14px (input) → 18px (total)

**Probability:** 0.08

---

## Ide Desain 2: Playful Accounting dengan Warna Cerah
**Design Movement:** Playful Data Visualization meets Accounting Software

**Core Principles:**
- Warna-warna cerah namun harmonis untuk mengurangi kesan "membosankan" dari kalkulator
- Gamification elements (progress bars, badges)
- Friendly typography yang approachable
- Visual storytelling melalui ikon dan ilustrasi

**Color Philosophy:**
- Background: Cream soft (oklch(0.98 0.01 60)) - hangat dan welcoming
- Primary: Oranye vibrant (oklch(0.65 0.18 55)) - energik dan optimis
- Secondary: Ungu pastel (oklch(0.7 0.12 290)) - untuk kontras
- Accent: Teal (oklch(0.6 0.15 180)) - untuk highlights
- Text: Charcoal (oklch(0.2 0.01 65)) - untuk readability

**Layout Paradigm:**
- Card-based design dengan denominasi sebagai individual cards
- Setiap card memiliki icon uang yang berbeda
- Horizontal scroll untuk mobile, grid untuk desktop
- Progress bar menunjukkan kontribusi setiap denominasi terhadap total

**Signature Elements:**
1. Custom SVG icons untuk setiap denominasi uang
2. Gradient cards dengan shadow depth
3. Animated counter untuk setiap row

**Interaction Philosophy:**
- Playful micro-interactions pada setiap input
- Visual feedback yang engaging (particles, bounces)
- Celebration animation ketika total dihitung
- Haptic-like visual feedback

**Animation:**
- Bounce animation saat input diubah (400ms cubic-bezier)
- Particle effects pada total calculation
- Slide-in animation untuk hasil
- Pulse effect pada total amount

**Typography System:**
- Display: Poppins Bold untuk headers
- Body: Quicksand Regular untuk labels
- Mono: JetBrains Mono untuk numbers
- Hierarchy: 11px (label) → 13px (input) → 20px (total)

**Probability:** 0.07

---

## Ide Desain 3: Professional Banking Style dengan Tabel Klasik
**Design Movement:** Enterprise Banking Interface meets Modern Web

**Core Principles:**
- Presisi dan akurasi visual (seperti laporan keuangan bank)
- Tabel yang sangat terstruktur dan mudah dibaca
- Professional color palette
- Confidence melalui typography dan spacing

**Color Philosophy:**
- Background: Light navy (oklch(0.15 0.01 250)) - professional dan trustworthy
- Card/Table: White (oklch(1 0 0)) - untuk kontras
- Primary: Deep blue (oklch(0.45 0.15 250)) - banking standard
- Accent: Gold (oklch(0.75 0.18 70)) - untuk highlights dan totals
- Text: Dark blue (oklch(0.2 0.02 250)) - untuk professional feel

**Layout Paradigm:**
- Classic table layout dengan alternating row colors
- Header dengan background color yang solid
- Total row dengan background gold/accent
- Sidebar dengan currency info dan quick stats

**Signature Elements:**
1. Subtle alternating row backgrounds (white dan very light blue)
2. Gold accent line di bawah header
3. Professional typography dengan serifs untuk headers

**Interaction Philosophy:**
- Minimal animations - fokus pada clarity
- Hover states yang subtle (slight background change)
- Input validation dengan clear error messages
- Undo/Reset functionality

**Animation:**
- Fade-in untuk rows (staggered)
- Smooth number transitions (200ms linear)
- Subtle color shift pada hover
- No excessive motion - professional feel

**Typography System:**
- Display: Playfair Display Bold untuk headers (serif)
- Body: Lato Regular untuk content
- Mono: Courier Prime untuk numbers
- Hierarchy: 12px (label) → 14px (input) → 22px (total)

**Probability:** 0.06

---

## Rekomendasi
Saya merekomendasikan **Ide Desain 1 (Modern Minimalis dengan Aksen Hijau)** karena:
1. Paling sesuai untuk aplikasi finansial (hijau = kepercayaan + pertumbuhan)
2. Fokus pada clarity dan accuracy yang penting untuk kalkulator
3. Mudah diimplementasikan dengan Tailwind CSS
4. Responsive dan accessible untuk semua ukuran layar
5. Tidak overwhelming dengan animasi, tapi tetap modern
