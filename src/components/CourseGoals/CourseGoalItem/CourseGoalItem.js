import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    // how this below part works bruh? 
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}  
      {/* //want to read props.children pending bruh!*/}
    </li>
  );
};

export default CourseGoalItem;
