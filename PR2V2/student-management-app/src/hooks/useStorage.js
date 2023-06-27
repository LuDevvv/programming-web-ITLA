import { useMemo } from 'react';
import { useEffect, useState } from 'react';

const initialStudents = [
  {
    name: 'Anders',
    lastName: 'Hejlsberg',
    gender: 'Masculino',
    age: 55,
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexandra',
    lastName: 'Marlmol Rodriguez',
    gender: 'Femenino',
    age: 22,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    lastName: 'Grandom Farsh',
    gender: 'Masculino',
    age: 24,
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    lastName: 'Razier Valt',
    gender: 'Masculino',
    age: 27,
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: 'Lindsay Walton',
    lastName: 'Razier Valt',
    gender: 'Femenino',
    age: 18,
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: 'Angela Maria',
    lastName: 'Valdez Puello',
    gender: 'Femenino',
    age: 20,
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: 'Tom Cook',
    lastName: 'Lamp Bold',
    gender: 'Masculino',
    age: 27,
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const initialStudentsMilitary = [
  {
    name: 'John',
    lastName: 'Smith',
    gender: 'Masculino',
    age: 16,
    imageUrl:
      'https://images.unsplash.com/photo-1591527466640-2fb3d9a20dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',

    destiny: {
      name: 'Marina de Guerra',
      color: 'VERDE',
    },
  },
  {
    name: 'Emily',
    lastName: 'Johnson',
    gender: 'Femenino',
    age: 15,
    imageUrl:
      'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    destiny: {
      name: 'Fuerza Aérea',
      color: 'ROJO',
    },
  },
  {
    name: 'David',
    lastName: 'Brown',
    gender: 'Masculino',
    age: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1605783313291-1b996e9e7376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    destiny: {
      name: 'Ejército Nacional',
      color: 'MARRON',
    },
  },
  {
    name: 'Sophia',
    lastName: 'Davis',
    gender: 'Femenino',
    age: 13,
    imageUrl:
      'https://images.unsplash.com/photo-1491234909075-13ce70f047b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    destiny: {
      name: 'Ejército Nacional',
      color: 'MARRON',
    },
  },
  {
    name: 'Daniel',
    lastName: 'Wilson',
    gender: 'Masculino',
    age: 14,
    imageUrl:
      'https://images.unsplash.com/photo-1667127752176-dacb991260ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    destiny: {
      name: 'Marina de Guerra',
      color: 'VERDE',
    },
  },
  {
    name: 'Olivia',
    lastName: 'Taylor',
    gender: 'Femenino',
    age: 16,
    imageUrl:
      'https://images.unsplash.com/photo-1474888505161-1ace11ae3d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    destiny: {
      name: 'Fuerza Aérea',
      color: 'ROJO',
    },
  },
  {
    name: 'Matthew',
    lastName: 'Anderson',
    gender: 'Masculino',
    age: 13,
    imageUrl:
      'https://images.unsplash.com/photo-1615868167768-6fe2e8eaacd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
    destiny: {
      name: 'Ejército Nacional',
      color: 'MARRON',
    },
  },
];

export const useStorage = ({ student, militaryStudent, filters }) => {
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
    if (militaryStudent) {
      const updatedStudents = [...studentsMilitary, militaryStudent];
      setStudentsMilitary(updatedStudents);
      window.localStorage.setItem(
        'studentsMilitary',
        JSON.stringify(initialStudentsMilitary)
      );
    }
  }, [militaryStudent]);

  const oldestStudent = useMemo(() => {
    return students.reduce((oldest, current) => {
      return current.age > oldest.age ? current : oldest;
    }, students[0]);
  }, [students]);

  return { students, studentsMilitary };
};
