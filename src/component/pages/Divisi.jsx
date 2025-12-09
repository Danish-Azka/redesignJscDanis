import React from 'react'
import Card from '../reusable/Card'
import tek from '../../asset/tek.JPG'
const Divisi = () => {
  return (
<div class="Gradasi h-full py-10 bg-gradient-to-b from-[#003835] via-[#007471] to-[#c1e1de] flex justify-center items-center">
    <div className='w-10/12 h-full flex justify-center flex-col gap-4'>
      <div className='teks diatas card h-fit w-full text-center text-white py-5 text-3xl font-semibold'>
        <p className='text-6xl'> Jaya Stock Club</p>
        <p className='bg-gradient-to-r from-[#003835] to-[#007471] bg-clip-text text-transparent'> Periode 2025/2026</p>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <div className="bg-yellow- w-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />            
            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />            
            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />            
            <Card
                type='hijau'
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />                      
            <Card
                type='hijau'
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />                      
            <Card
                type='hijau'
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />                      
        
            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />            
            <Card
                label="TECH AND DEVELOPER"
                image={<img src={tek} className="h-full object-cover" />}
                text="tech and developer adalah tulang punggung teknologi perusahaan yang memungkinkan operasional berjalan efisien, memastikan keamanan data, dan mendorong inovasi"
            />            
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Divisi