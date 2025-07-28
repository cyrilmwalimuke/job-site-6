'use client'

import { useState } from 'react'

export default function AddSalaryPage() {
  const [companies, setCompanies] = useState([
    { name: '', averageBaseSalry: '', logo: '' }
  ])

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    salariesReported: '',
    highDemand: false,
    percentageIncrease: '',
    averageBaseSalary: '',
    lowestBaseSalary: '',
    HighestBaseSalary: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleCompanyChange = (index, e) => {
    const { name, value } = e.target
    const newCompanies = [...companies]
    newCompanies[index][name] = value
    setCompanies(newCompanies)
  }

  const addCompany = () => {
    setCompanies([...companies, { name: '', averageBaseSalry: '', logo: '' }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      salariesReported: formData.salariesReported,
      percentageIncrease: formData.percentageIncrease,
      averageBaseSalary: formData.averageBaseSalary,
      lowestBaseSalary: formData.lowestBaseSalary,
      HighestBaseSalary: formData.HighestBaseSalary,
      topPayingCompanies: companies.map((c) => ({
        ...c,
        averageBaseSalry: c.averageBaseSalry
      }))
    }

    const res = await fetch('/api/save-salary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const result = await res.json()
    if (result.success) {
      alert('Salary entry created successfully')
    } else {
      alert(result.error || 'Failed to create entry')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Salary Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" onChange={handleChange} value={formData.title} placeholder="Job Title" className="input" required />
          <input name="slug" onChange={handleChange} value={formData.slug} placeholder="Slug" className="input" required />
        </div>

        <textarea name="description" onChange={handleChange} value={formData.description} placeholder="Description" className="input h-24" required />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="salariesReported" type="number" onChange={handleChange} value={formData.salariesReported} placeholder="Salaries Reported" className="input" required />
          <input name="percentageIncrease" type="number" step="0.01" onChange={handleChange} value={formData.percentageIncrease} placeholder="% Increase" className="input" required />
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="highDemand" checked={formData.highDemand} onChange={handleChange} />
            <span>High Demand</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="averageBaseSalary" type="number" onChange={handleChange} value={formData.averageBaseSalary} placeholder="Average Salary" className="input" required />
          <input name="lowestBaseSalary" type="number" onChange={handleChange} value={formData.lowestBaseSalary} placeholder="Lowest Salary" className="input" required />
          <input name="HighestBaseSalary" type="number" onChange={handleChange} value={formData.HighestBaseSalary} placeholder="Highest Salary" className="input" required />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">Top Paying Companies</h2>
        {companies.map((company, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-md mb-2">
            <input name="name" value={company.name} onChange={(e) => handleCompanyChange(index, e)} placeholder="Company Name" className="input" required />
            <input name="averageBaseSalry" type="number" value={company.averageBaseSalry} onChange={(e) => handleCompanyChange(index, e)} placeholder="Avg Base Salary" className="input" required />
            <input name="logo" value={company.logo} onChange={(e) => handleCompanyChange(index, e)} placeholder="Logo URL" className="input" required />
          </div>
        ))}

        <button type="button" onClick={addCompany} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          + Add Another Company
        </button>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
          Submit Salary Entry
        </button>
      </form>

      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500;
        }
      `}</style>
    </div>
  )
}
