import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes} from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchparams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id == pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if(pasteId){
      // Update Paste
      dispatch(updateToPastes(paste));
    }else{
      // Create New Paste
      dispatch(addToPastes(paste));
    }
    setTitle('');
    setValue('');
    setSearchparams({});
  };

  return (
    <div>
      <div className='flex flex-row gap-7 mt-8 place-content-between'>
        <input 
          className='p-1 rounded-2xl bg-gray-800 w-[50%] pl-4'
          type="text" 
          placeholder='Enter title here' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />

        <button 
          className='p-2 rounded-2xl'
          onClick={createPaste}
          disabled={title.trim() == '' || value.trim() == '' ? true : false}
        >
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }
        </button>
      </div>

      <div className='mt-4'>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4 bg-gray-800'
          value={value}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20} 
        ></textarea>
      </div>
    </div>
  )
}

export default Home
