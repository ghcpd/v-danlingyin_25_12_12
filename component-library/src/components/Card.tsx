import React from 'react'

export const Card: React.FC<{ title: string; description?: string; badge?: React.ReactNode }> = ({ title, description, badge }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold text-lg">{title}</div>
          {description && <div className="text-sm text-slate-600">{description}</div>}
        </div>
        <div>{badge}</div>
      </div>
    </div>
  )
}
