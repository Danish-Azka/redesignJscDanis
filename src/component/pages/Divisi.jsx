import React from 'react'
import Card from '../reusable/Card'
import bod from '../../image/bod.JPG'
import rnd from '../../image/rnd.JPG'
import isd from '../../image/isd.JPG'
import mp from '../../image/mp.JPG'
import tek from '../../image/tek.JPG'
const Divisi = () => {
  return (
<div class="Gradasi h-full py-10 bg-gradient-to-b from-[#003835] via-[#007471] to-[#c1e1de] flex justify-center items-center">
    <div className='w-10/12 h-full flex justify-center flex-col gap-4'>
      <div className='teks diatas card h-fit w-full text-center text-white py-5 md:text-3xl text-2xl font-semibold'>
        <p className='md:text-6xl text-5xl'> Jaya Stock Club</p>
        <p className='bg-gradient-to-r from-[#003835] via-[#c1e1de] to-[#007471] bg-clip-text text-transparent'> Periode 2025/2026</p>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <div className="bg-yellow- w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            <Card
                label="BOARD OF DIRECTORS"
                image={<img src={bod} className="h-full object-cover rounded-md" />}
                text="Mengatur arah organisasi, mengambil keputusan strategis, mengoordinasikan seluruh divisi, memastikan program berjalan sesuai visi, serta menjaga stabilitas internal agar JSC terus berkembang dan memberi dampak nyata bagi anggota."
            />            
            <Card
                label="HUMAN RECOURCES"
                image={<img src={tek} className="h-full object-cover rounded-md" />}
                text="Mengelola rekrutmen, pengembangan anggota, evaluasi kinerja, serta menciptakan lingkungan kerja yang sehat. Bertanggung jawab menjaga kualitas SDM dan memastikan setiap anggota berkembang sesuai potensi serta kebutuhan organisasi."
            />            
            <Card
                label="PUBLIC RELATIONS"
                image={<img src={tek} className="h-full object-cover rounded-md" />}
                text="Membangun citra positif organisasi melalui komunikasi eksternal, menjalin relasi dengan pihak kampus maupun instansi, mengelola informasi publik, serta memastikan seluruh kegiatan JSC dikenal luas dan diterima masyarakat."
            />            
            <Card
                type='hijau'
                label="RESEARCH AND DEVELOPMENT"
                image={<img src={rnd} className="h-full object-cover rounded-md" />}
                text="Melakukan riset pasar modal, menyusun analisis ekonomi, mengevaluasi tren terbaru, serta mengembangkan kurikulum internal. Divisi ini memastikan konten edukasi dan strategi organisasi selalu relevan serta berbasis data."
            />                      
            <Card
                type='hijau'
                label="INVESTMENT SKILLS DEVELOPMENT"
                image={<img src={isd} className="h-full object-cover rounded-md" />}
                text="Menyusun pelatihan dan kelas investasi, membimbing anggota memahami saham, analisis fundamental, teknikal, dan manajemen risiko. Divisi ini meningkatkan kemampuan praktis anggota agar siap berinvestasi secara mandiri."
            />                      
            <Card
                type='hijau'
                label="MEDIA PRODUCTION"
                image={<img src={mp} className="h-full object-cover rounded-md" />}
                text="Memproduksi konten visual seperti desain, foto, dan video. Mengelola branding visual, memastikan kualitas estetika, serta mendukung seluruh divisi agar pesan yang disampaikan tampil profesional dan konsisten."
            />                      
        
            <Card
                label="CONTENT WRITER"
                image={<img src={tek} className="h-full object-cover rounded-md" />}
                text="Membuat naskah informatif untuk sosial media, artikel edukasi, caption, serta materi kampanye. Menyederhanakan topik pasar modal menjadi tulisan menarik dan mudah dipahami oleh mahasiswa maupun audiens umum."
            />            
            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover rounded-md" />}
                text="Mengembangkan sistem digital seperti website, database, dan otomatisasi internal. Menyediakan solusi teknologi untuk meningkatkan efisiensi operasi organisasi serta mendukung inovasi berbasis data dan platform digital."
            />            
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Divisi