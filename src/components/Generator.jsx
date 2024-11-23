import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Header from './Header'
import { SCHEMES, WORKOUTS } from '../utils/workoutInfo'
import Button from './Button'

const Generator = () => {
  const [showModal,setShowModal] = useState(false)
  const [poison,setPoison] = useState('individual')
  const [muscle,setMuscle] = useState([])
  const [goals,setGoals] = useState('strength-power')
  const [text,setText] = useState('Select Muscle Group')

  useEffect(()=>{
    if(muscle.length === 0){
      setText('Select Muscle Group')
    }else{
      setText(muscle.map((item) => `${item} `))
    }
  },[muscle])

  useEffect(()=>{
    setText('Select Muscle Group')
    setMuscle([])
  },[poison])

  const generateWorkout = () => {
    console.log('worl')
  }



  function addMuscle(muscleGroup){
    
    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter(val => val !== muscleGroup))
      return
    }
    
    if (poison !== 'individual') {
        setMuscle([muscleGroup])
        setShowModal(false)
        return
    }
    if (muscle.length > 2) {
      return
    }


    setMuscle([...muscle, muscleGroup])
    if (muscle.length === 2) {
        setShowModal(false)
    }
  }

 

  return (
    <SectionWrapper header={"Generate your workout"} title={['It\'s','HUGE','O\'clock']}>
      <div className="headerContent">
        <Header index={'01'} title={'Pick your poison'} description={'Select the workout you want to enjoy'}/>
        <div className='workoutType'>
          {Object.keys(WORKOUTS).map((data,index)=>{
            return(
              <button key={index} onClick={()=>{setPoison(data)}} className={poison === data ? 'active' : ''}><p>{data.replace("_"," ")}</p></button>
            )
          })}
        </div>
      </div>

      <div className="headerContent">
        <Header index={'02'} title={'Lock on targets'} description={'Select the muscles you want to destroy today'}/>
        <div className='muscleType'>
          <div  onClick={()=>{setShowModal(!showModal)}}>
            <p className='padd'>{text}</p>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
          {showModal && (
            <div className='dropdown'>
              {
                (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((data,index)=>{
                  return(
                    <p key={index} onClick={()=>addMuscle(data)} className={muscle.includes(data) ? 'activeModal':''}>{data}</p>
                  )
                })
              }
            </div>
          )}
        </div>
      </div>

      <div className="headerContent">
        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
        <div className='workoutType'>
          {Object.keys(SCHEMES).map((data,index)=>{
            
            return(
              <button  key={index} onClick={()=>{setGoals(data);console.log(data);console.log(goals)}} className={goals === data ? 'active' : ''}><p>{data.replace("_"," ")}</p></button>
            )
          })}
        </div>
      </div>

      <Button onClick={generateWorkout}>
        Generate Workout
      </Button>
    </SectionWrapper>
  )
}
// `${goals===data ? "active": ""}`
export default Generator
