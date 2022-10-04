import React from 'react'
import { Paper } from '@mui/material';

const Calendar = () => {
    const  takvim = [
        {
          "gün": "Mon",
          "ay": "1"
        },
        {
          "gün": "Tue",
          "ay": "2"
        },
        {
          "gün": "Wed",
          "ay": "3"
        },
        {
          "gün": "Thu",
          "ay": "4"
        },
        {
          "gün": "Fri",
          "ay": "5"
        },,
        {
          "gün": "Sat",
          "ay": "6"
        },,
        {
          "gün": "Sun",
          "ay": "7"
        },
        {
         "gün": "Mon",
         "ay": "8"
          },,
          {
         "gün": "Tue",
         "ay": "9"
          }
 
      ];
  return (
    <div>
    {takvim.map((item,i)=>(
  <Paper sx={{width:"50px",height:"50px",m:1,float:"left"}} key={i}>
   <p style={{fontSize:"small",marginTop:"-2px"}}>{item.gün}<br/></p>
   <p style={{fontSize:"large",marginTop:"-2px"}}> {item.ay}</p>
  </Paper>
            
))}
</div>
  )
}

export default Calendar
