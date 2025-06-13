import React from "react";

async function DoctorSpecialtyPage({ params }) {
  const { specialty } = await params;
  return <div>DoctorSpecialtyPage: {specialty}</div>;
}

export default DoctorSpecialtyPage;
