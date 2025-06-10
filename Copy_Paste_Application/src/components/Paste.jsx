import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().
    includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  }

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const handleShare = (pasteId) => {
    const link = `${window.location.origin}/pastes/${pasteId}`;
    setShareLink(link);
    setIsModalOpen(true);
  };

  return (
    <div>
      <input 
        className='p-2 rounded-2xl min-w-[600px] mt-5 bg-gray-800'
        type="search"
        placeholder='Search Here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div key={paste?._id} className='border'>
                  <div className='mt-4'>
                    {paste.title}
                  </div>
                  <div className='mt-4 mb-4'>
                    {paste.content}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button onClick={() => navigate(`/?pasteId=${paste?._id}`)}>
                      Edit
                    </button>
                    <button onClick={() => navigate(`/pastes/${paste?._id}`)}>
                      View
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast("Copied to clipboard")
                    }}>
                      Copy
                    </button>
                    <button onClick={() => handleShare(paste?._id)}>
                      Share
                    </button>
                  </div>
                  <div className='mt-4 mb-4'>
                    Created On: {new Date(paste.createdAt).getDate() + '/' + (Number(new Date(paste.createdAt).getMonth()) + 1) + '/' + new Date(paste.createdAt).getFullYear()}
                  </div>
                </div>
              )
            }
          ) 
        }
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Share Link</h2>
            <input
              type="text"
              value={shareLink}
              readOnly
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareLink);
                  toast.success("Link copied!");
                }}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Copy
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Paste
