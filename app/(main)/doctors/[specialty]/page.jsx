import React from 'react'

async function DoctorSpecialityPage({params}) {
    const { specialty } = await params;
  return (
    <div>DoctorSpecialityPage: {specialty}</div>
  )
}

export default DoctorSpecialityPage