import React, { useState } from 'react';
import RectangleBoxes from './RectangleBoxes';
import Line from './Line';
import Reviews from './Reviews';

const ReviewSection = () => {
  const [selectedProfession, setSelectedProfession] = useState("ALL");

  const handleProfessionFilter = (profession) => {
    setSelectedProfession(profession);
  };

  return (
    <div>
      <div className='flex flex-wrap mx-auto px-2 my-16 w-11/12 justify-around'>
        <div className='basis-3/6'>
          <h1 className='font-extrabold text-4xl'>User reviews</h1>
          <p className='text-wrap mt-4'>Over 5000, 5-star review in the App store and <br/>Play store </p>
        </div>
        <div className='basis-3/6'>
          <img src="Review-img.png" width="800" height="600" alt="stars"/>
        </div>

        {/* 2nd layer */}
        <div className='basis-3/6'>
          <select name="drop" className='my-16 w-48 border-2 border-black rounded-md h-8'>
            <option value="Featured">Featured</option>
            <option value="React-Router">RouterInDom</option>
          </select>
          {/* Style correct krna hai */}
          <div className='basis-3/6 hidden lg:block'> {/* Hide the image on smaller devices */}
          <img src="ReviewLeft.png" width="700" height="500" alt="stars"/>
        </div>
        </div>
        <div className='basis-3/6'>
          {/* button */}
          <div className='flex flex-wrap my-16'>
            <RectangleBoxes content="ALL" isActive={selectedProfession === "ALL"} onClick={() => handleProfessionFilter("ALL")} />
            <RectangleBoxes content="TEACHERS" isActive={selectedProfession === "Teacher"} onClick={() => handleProfessionFilter("Teacher")} />
            <RectangleBoxes content="PROFESSIONALS" isActive={selectedProfession === "Professional"} onClick={() => handleProfessionFilter("Professional")} />
            <RectangleBoxes content="PARENTS" isActive={selectedProfession === "Parents"} onClick={() => handleProfessionFilter("Parents")} />
            <RectangleBoxes content="STUDENTS" isActive={selectedProfession === "Students"} onClick={() => handleProfessionFilter("Students")} />
            <RectangleBoxes content="LIFE-LONG-LEARNERS" isActive={selectedProfession === "Life-Long-Learners"} onClick={() => handleProfessionFilter("Life-Long-Learners")} />
            <div className='pt-8 w-11/12'>
              <Line color="lightGrey"/>
            </div>   
          </div>
          <Reviews selectedProfession={selectedProfession} />
        </div>
        <Line color="black"/>
      </div>
    </div>
  );
}

export default ReviewSection;
