import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Course from '../Course/Course';
import courseDetails from './Data.json'

const Home = () => {
    const [data, setData] = useState([])
    const [item,setItem] = useState([])

    useEffect(() => {
        setData(courseDetails);
    },[])

    const handleAddButton = (course) => {
        const newItem = [...item,course]
        setItem(newItem)
        
    }
    return (
        <div style={{display: 'flex'}}>
           <div style={{display: 'float'}}>
                {
                data.map(course => <Course course={course} handleAddButton={handleAddButton} key = {course.id}></Course> )
                }
           </div>
            <div className="position-flexible">
                 <Count count={item}></Count>
            </div>
        </div>
    );
};

export default Home;