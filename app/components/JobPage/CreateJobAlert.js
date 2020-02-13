import React from 'react'

export default function CreateJobAlert() {
  return (
    <div className="sb-menu alert-box ">
      <div className="location-search">
        <h4>Create Job Alert</h4>
        <p>Make sure you don't miss out on any potential job opportunities</p>
        <input placeholder="Enter Job Keyword" />
        <div className="form-actions">
          <button type="submit" className="btn btn-1 btn-alert">Create Job Alert</button>
        </div>
      </div>
    </div>
  )
}
