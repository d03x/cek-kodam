
const Kodam = [
    {
        "nama": "Khodam Ngambek",
        "asal": "Jawa Tengah",
        "deskripsi": "Khodam ini dikenal sangat sensitif. Jika tidak diberi sesajen kesukaannya, dia bisa ngambek dan mogok kerja selama seminggu.",
        "kesukaan": "Jajan pasar, terutama klepon."
    },
    {
        "nama": "Khodam Garing",
        "asal": "Sunda",
        "deskripsi": "Khodam ini sangat suka membuat lelucon. Kadang leluconnya begitu garing sampai orang-orang di sekitarnya hanya bisa menggelengkan kepala.",
        "kesukaan": "Membuat pantun dan lelucon receh."
    },
    {
        "nama": "Khodam Malu-malu",
        "asal": "Bali",
        "deskripsi": "Khodam ini sering muncul di tempat-tempat sunyi dan gelap. Namun, dia sangat pemalu dan langsung kabur jika ada yang menyapanya.",
        "kesukaan": "Bermain petak umpet di tengah malam."
    },
    {
        "nama": "Khodam Tukang Ngopi",
        "asal": "Aceh",
        "deskripsi": "Khodam ini tidak bisa bekerja tanpa secangkir kopi Gayo di pagi hari. Jika kopinya habis, dia akan langsung hilang ke dimensi lain untuk mencari kopi lagi.",
        "kesukaan": "Kopi Gayo dengan sedikit gula."
    },
    {
        "nama": "Khodam Baper",
        "asal": "Sumatera Barat",
        "deskripsi": "Khodam ini sangat perasa. Jika ada yang berbicara sedikit saja tentangnya, dia bisa tersinggung dan merajuk.",
        "kesukaan": "Mendengarkan cerita-cerita melankolis."
    },
    {
        "nama": "Khodam Galau",
        "asal": "Jakarta",
        "deskripsi": "Khodam ini sering muncul di tempat-tempat ramai namun selalu terlihat murung dan galau. Tidak ada yang tahu pasti penyebabnya.",
        "kesukaan": "Berjalan-jalan sendirian di mall."
    },
    {
        "nama": "Khodam Nyi Blorong",
        "asal": "Jawa Barat",
        "deskripsi": "Khodam ini dikenal sangat cantik dan sering muncul di sekitar sungai. Dia suka menolong orang, tetapi juga bisa membuat mereka bingung dengan teka-teki yang rumit.",
        "kesukaan": "Mandi di sungai dan merangkai bunga teratai."
    },
    {
        "nama": "Macan Albino",
        "asal": "Kalimantan",
        "deskripsi": "Khodam berbentuk macan putih ini dianggap langka. Dia sangat protektif terhadap hutan dan penghuninya.",
        "kesukaan": "Mengawasi hutan dan menjaga keseimbangan alam."
    },
    {
        "nama": "Bencong Cibaduyut",
        "asal": "Bandung",
        "deskripsi": "Khodam ini terkenal dengan gaya nyentriknya. Suka muncul di toko-toko sepatu dan memberikan saran fashion yang unik.",
        "kesukaan": "Sepatu kulit dan berdandan nyentrik."
    },
    {
        "nama": "Kepala Buntung",
        "asal": "Jawa Timur",
        "deskripsi": "Khodam ini sering muncul tanpa kepala, membuat orang kaget setengah mati. Namun, dia sebenarnya sangat ramah dan suka membantu orang tersesat.",
        "kesukaan": "Memberi petunjuk arah kepada orang tersesat."
    },
    {
        "nama": "Kuyang",
        "asal": "Kalimantan",
        "deskripsi": "Khodam ini adalah makhluk misterius yang sering terbang tanpa tubuh di malam hari. Dia suka mencari bayi untuk diambil darahnya, tapi juga sering tertangkap kamera warga.",
        "kesukaan": "Terbang di malam hari dan menakut-nakuti orang."
    },
    {
        "nama": "Nyi Eyang Endah",
        "asal": "Jawa Barat",
        "deskripsi": "Khodam ini adalah sosok nenek bijaksana yang sering muncul memberikan nasihat. Dia sangat dihormati oleh penduduk setempat.",
        "kesukaan": "Memberi nasihat bijak dan mendengarkan masalah orang."
    },
    {
        "nama": "Khodam Tobrut",
        "asal": "Sumatera Utara",
        "deskripsi": "Khodam ini sangat kuat dan tangguh. Dia sering membantu penduduk dalam pekerjaan berat dan melindungi dari gangguan jahat.",
        "kesukaan": "Membantu pekerjaan berat dan menjaga ketertiban."
    },
    {
        "nama": "Gajah Albino",
        "asal": "Aceh",
        "deskripsi": "Khodam berbentuk gajah putih ini dianggap sangat suci dan membawa keberuntungan. Dia sering muncul di hutan-hutan Aceh.",
        "kesukaan": "Menjaga hutan dan membawa keberuntungan."
    }
]

const cekRandom = ()=>{
    return Math.floor(Math.random() * (Kodam.length+2 - 0+1)) + 0;

}

const checkKhodam = (index: number) => {
    return Kodam[index] ?? null;
    
};

export { cekRandom, checkKhodam };