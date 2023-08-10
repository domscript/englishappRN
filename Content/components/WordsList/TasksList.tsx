import {View, FlatList, StyleSheet, ListRenderItem} from 'react-native';

import Lesson from '../../screens/LessonScreen';

interface Task {
  id: string;
  title: string;
}

interface TasksListProps {
  items: Task[];
}

function TasksList({items}: TasksListProps) {
  const renderLessonItem: ListRenderItem<Task> = ({item}) => {
    const lessonItemProps = {
      id: item.id,
      title: item.title,
    };
    return <Lesson {...lessonItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderLessonItem}
      />
    </View>
  );
}

export default TasksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
