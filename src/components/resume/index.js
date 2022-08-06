import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {FaArrowCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="ENTRADAS" Icon={FaArrowCircleUp} value="1000" />
      <ResumeItem title="SAÍDAS" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="TOTAL" Icon={FaDollarSign} value="1000" />
    </C.Container>
  )
}

export default Resume
