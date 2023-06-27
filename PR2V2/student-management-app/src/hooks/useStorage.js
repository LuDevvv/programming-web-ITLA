import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { initialStudentsMilitary } from '../constants/initialStudentsMilitary';
import { initialStudents } from '../constants/initialStudents';

export const useStorage = ({ student, militaryStudents, selectedFilter }) => {
  const [students, setStudents] = useState(
    () => JSON.parse(window.localStorage.getItem('students')) || initialStudents
  );

  const [studentsMilitary, setStudentsMilitary] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('studentsMilitary')) ||
      initialStudentsMilitary
  );

  useEffect(() => {
    if (student) {
      const updatedStudents = [...students, student];
      setStudents(updatedStudents);
      window.localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  }, [student]);

  useEffect(() => {
    if (militaryStudents) {
      const updatedStudentsMilitary = [...studentsMilitary, militaryStudents];
      setStudentsMilitary(updatedStudentsMilitary);
      window.localStorage.setItem(
        'studentsMilitary',
        JSON.stringify(updatedStudentsMilitary)
      );
    }
  }, [militaryStudents]);

  const filterStudents = useMemo(() => {
    if (selectedFilter.name === 'Edad') {
      return [...students].sort((a, b) => b.age - a.age);
    } else {
      return students;
    }
  }, [selectedFilter]);

  // const filterMilitaryStudents = useMemo(() => {
  //   if (filter === 'Edad') {
  //     return students.reduce((oldest, current) => {
  //       return current.age > oldest.age ? current : oldest;
  //     }, students[0]);
  //     // return [...movies].sort((a, b) => b.age - a.age)
  //   } else {
  //     return militaryStudents;
  //   }

  //   if (filter === 'Nombre') {
  //     return [...militaryStudents].sort((a, b) =>
  //       a.title.localeCompare(b.title)
  //     );
  //   }

  //   return militaryStudents;
  // });

  // const sortedMovies = useMemo(() => {
  //   return sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies;
  // }, [movies, sort]);

  // const sortedMoviesByYear = useMemo(() => {
  //   return [...movies].sort((a, b) => b.year - a.year);
  // });

  return { students: filterStudents, studentsMilitary };
};
