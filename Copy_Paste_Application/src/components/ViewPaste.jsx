import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes} from '../redux/pasteSlice';

const ViewPaste = () => {
  const {id} = useParams();
  
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id == id);

  return (
    <div>
      <div className='flex flex-row gap-7 mt-8 place-content-between'>
        <input 
          className='p-1 rounded-2xl bg-gray-800 w-[50%] pl-4'
          type="text" 
          placeholder='Enter title here' 
          value={paste[0].title} 
          onChange={(e) => setTitle(e.target.value)} 
          disabled
        />
      </div>

      <div className='mt-4'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4 bg-gray-800'
          value={paste[0].content}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20} 
          disabled
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
