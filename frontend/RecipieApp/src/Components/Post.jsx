import React, { useState } from 'react';
import profilePic from './Pages/Login/background.jpg';

const Post = () => {
  const [like, setLike] = useState(false);
  const [veiw, setView] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="flex bg-transparent w-[500px] flex-col rounded border-[#5b5b5b] border text-[#a0a0a0]">
        <div className="flex p-[10px] items-center gap-[10px] border-[#5b5b5b] border-b">
          <img src={profilePic} alt="profile-pic" className="h-[40px] w-[40px] rounded-full" />
          <div>
            <h2 className="text-[14px]">Karan Srestha</h2>
            <h5 className="text-[10px]">Sharing Recipe of Pizza</h5>
          </div>
        </div>
        <div className="p-[15px]">
          <img src={profilePic} alt="" />
        </div>
        <div className="p-[10px]">
          <p className="flex items-center mb-3 gap-2">
            <i
              className={like ? 'fa-solid fa-heart text-[16px] text-red-600' : 'fa-regular fa-heart text-[16px]'}
              onClick={handleClick}
            ></i>
            2 likes
          </p>
          <p className={veiw?"text-[14px]":"text-[14px] max-h-[50px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer"} onClick={()=> setView(!veiw)}>
            Karan Srestha: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus mollitia explicabo qui expedita? Illum, blanditiis ab! Voluptas aspernatur soluta sed, maxime maiores ut perferendis quas officia reprehenderit ipsa laudantium doloribus!
          </p>
        </div>
        <a href="/" className='text-[12px] text-blue-300 ml-auto p-[5px] block hover:underline mt-[20px]'>...Go to Recipie</a>
      </div>
    </div>
  );
};

export default Post;
