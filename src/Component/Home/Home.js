import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import courseDetails from './Data.json'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(courseDetails);
    },[])
    return (
        <div>
            {
                data.map(course => <Course course={course} key = {course.id}></Course> )
            }
        </div>
    );
};

export default Home;