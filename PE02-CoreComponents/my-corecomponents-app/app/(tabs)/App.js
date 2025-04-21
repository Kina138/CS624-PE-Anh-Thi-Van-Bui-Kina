import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  const capstoneCourses = [
    'CS 687 Computer Science Capstone',
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Image */}
      <Image source={require('../../assets/images/icon.png')} style={styles.icon} />

      {/* Input label + TextInput */}
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {/* Core courses */}
      <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      {/* Depth of Study */}
      <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      {/* Capstone Course */}
      <Text style={styles.sectionTitle}>Capstone Course (3 Credits)</Text>
      {capstoneCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  icon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    fontSize: 18,
    padding: 8,
    marginTop: 16,
  },
  courseItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default App;
