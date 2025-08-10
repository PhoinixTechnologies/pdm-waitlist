import React from 'react';

const Topbar = () => {
    return (
        <header>
            {/* Search bar */}
            <div className='flex items-center border rounded px-3 py-1 w-1/3'>
            <span className='text-gray-400 mr-2'>
                🔍
            </span>
            <input type='text' placeholder='Search here' className='outline-none flex-1' />
            </div>

            {/* The right side of the panel */}
            <div className='flex items-center gap-4'>
                <button>🔔</button>
                <button>📥</button>
                <div className='flex items-center gap-2'>
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw3WqSBcJZloWrRuSuqh7fAH&ust=1754848658765000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC8xPem_o4DFQAAAAAdAAAAABAE'
                    alt='Profile' className='w-8 h-8 rounded-full' />
                    <span className='text-sm text-gray-700'>111.0 🪙</span>
                </div>
            </div>
        </header>
    )
}

export default Topbar;