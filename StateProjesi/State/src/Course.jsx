import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './course.css';
const courseMap ={
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
}


function Course({courseName},{key}) {
    // console.log(Angular);
    // console.log(courseName);
    console.log(courseMap[courseName]);

    return <div className='courseDiv'>
        <img className='course' src={courseMap[courseName]} alt="course" />
    </div>;
}
export default Course;