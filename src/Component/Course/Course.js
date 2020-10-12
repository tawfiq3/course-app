import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Course = (props) => {
    const {instructor_name,course_name,picture,price,} = props.course
    return (
        <div>
             <Card>
                 <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{course_name}</Card.Title>
                        <Card.Text>{instructor_name}</Card.Text>
                        <h3>Price: ${price}</h3>
                        <Button variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Course;