import './App.css'
import { Form } from './components/Form'
import { Hero } from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import { StudentList } from './components/StudentList'
import { Nav } from './components/Nav'
import { useForm } from './hooks/useForm'

export const App = () => {
  const { handleForm, students, studentsMilitary } = useForm()
  return (
    <div className='app'>
      <header>
        <Nav />
      </header>
      <div className="layout">
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/form' element={<Form handleForm={handleForm} title={'Registro Alumnos'} formType={'alumno'} />} />
          <Route path='/student-list' element={<StudentList students={students} />} />
          <Route path='/form-military' element={<Form handleForm={handleForm} title={'Registro Militar'} formType={'alumno'} />} />
          <Route path='/student-military-list' element={<StudentList students={studentsMilitary} />} />
        </Routes>
      </div>
    </div>
  )
}