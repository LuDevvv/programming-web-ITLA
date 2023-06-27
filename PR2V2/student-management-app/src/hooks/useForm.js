import { useState } from 'react';
import { useStorage } from './useStorage';
import { getImages } from '../services/getImages';

export const useForm = () => {
  const [student, setStudent] = useState(null);
  const [militaryStudents, setMilitaryStudents] = useState(null);
  const { students, studentsMilitary } = useStorage({
    student,
    militaryStudents,
  });

  const handleForm = async (e, formType) => {
    e.preventDefault();
    const { name, lastName, gender, age } = Object.fromEntries(
      new window.FormData(e.target)
    );
    const paramSearch = `${
      gender === 'Masculino' ? `Man model` : `Woman model`
    }`;
    const { imageUrl } = await getImages({ paramSearch });

    if (formType === 'alumno') {
      setStudent({
        name,
        lastName,
        gender,
        age: Number(age),
        imageUrl: imageUrl,
      });
    } else if (formType === 'militar') {
      let destination = '';
      let uniformColor = '';

      if (gender === 'Femenino' && age > 14) {
        destination = 'Fuerza Aérea';
        uniformColor = 'ROJO';
      } else if (gender === 'Masculino' && age > 14) {
        destination = 'Marina de Guerra';
        uniformColor = 'VERDE';
      } else {
        destination = 'Ejército Nacional';
        uniformColor = 'MARRÓN';
      }

      setMilitaryStudents({
        name,
        lastName,
        gender,
        age: Number(age),
        imageUrl: imageUrl,
        destiny: {
          name: destination,
          color: uniformColor,
        },
      });
    }
  };

  return { handleForm, students, studentsMilitary };
};
