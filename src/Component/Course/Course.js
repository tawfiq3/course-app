import React from 'react';
import { Card,Button,CardGroup } from 'react-bootstrap';

const Course = (props) => {
    const {instructor_name,course_name,picture,price} = props.course;
    return (
        <div style={{width:'40%',alignItems: 'center'}}>
             <CardGroup >
             <Card style={{margin:'30px',padding: '20px',backgroundColor: 'lightGreen',}}>
                 <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <h2>{course_name}</h2>
                        <Card.Text>Instructor: {instructor_name}</Card.Text>
                        <h3>Price: ${price}</h3>
                        <Button variant="primary" onClick={()=>{props.handleAddButton(props.course)}}>Enroll Now</Button>
                    </Card.Body>
                </Card>
                
             </CardGroup>
        </div>
    );
};

export default Course;