import React from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Badge } from './components/Badge'

export default function Demo(){
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-christmas-red mb-6">Christmas UI Components</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold mb-3">Buttons</h3>
            <div className="flex gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold mb-3">Cards</h3>
            <Card title="Holiday Gift" description="A simple reusable card" badge={<Badge>New</Badge>} />
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold mb-3">Badges</h3>
            <div className="flex gap-2">
              <Badge>Limited</Badge>
              <Badge tone="gold">Gift</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
