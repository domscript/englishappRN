import TasksList from '../components/WordsList/TasksList';
import {CATEGORIES} from '../data/dummy-data';

// import {RouteProp} from '@react-navigation/native';

function LessonOverview({route}) {
  const displayedLessons = CATEGORIES.filter(el => {
    return el.id === route.params?.categoryId;
  });

  return <TasksList items={displayedLessons} />;
}

export default LessonOverview;
