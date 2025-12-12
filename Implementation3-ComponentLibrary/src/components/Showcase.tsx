import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { Alert } from './Alert';
import { Container } from './Container';

export const Showcase: React.FC = () => {
  const [alerts, setAlerts] = React.useState({
    success: true,
    error: true,
    warning: true,
    info: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <Container maxWidth="2xl">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-2">
          Christmas Component Library
        </h1>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Reusable React components with Tailwind styling
        </p>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Buttons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-700">Primary Variant</h3>
              <div className="flex flex-col gap-3">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-700">Secondary Variant</h3>
              <div className="flex flex-col gap-3">
                <Button variant="secondary" size="sm">Small Button</Button>
                <Button variant="secondary" size="md">Medium Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-700">Outline Variant</h3>
              <div className="flex flex-col gap-3">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline" size="md">Medium Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <Card.Header>
                <h3 className="text-white text-xl font-bold">Card Title</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-slate-600 mb-4">
                  This is a beautiful card component with composable sections.
                </p>
                <Badge variant="red">Featured</Badge>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outline">Action</Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>
                <h3 className="text-white text-xl font-bold">Holiday Special</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-slate-600 mb-4">
                  Customize cards with multiple variants and styles.
                </p>
                <Badge variant="gold">Limited Time</Badge>
              </Card.Body>
              <Card.Footer>
                <Button size="sm">Learn More</Button>
              </Card.Footer>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Badges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-700 mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="red">Christmas Red</Badge>
                <Badge variant="green">Holiday Green</Badge>
                <Badge variant="gold">Festive Gold</Badge>
                <Badge variant="slate">Neutral Slate</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Alerts</h2>
          <div className="space-y-4">
            {alerts.success && (
              <Alert
                type="success"
                title="Success!"
                onClose={() => setAlerts({ ...alerts, success: false })}
              >
                Your event registration was completed successfully.
              </Alert>
            )}
            {alerts.error && (
              <Alert
                type="error"
                title="Error"
                onClose={() => setAlerts({ ...alerts, error: false })}
              >
                Something went wrong. Please try again.
              </Alert>
            )}
            {alerts.warning && (
              <Alert
                type="warning"
                title="Warning"
                onClose={() => setAlerts({ ...alerts, warning: false })}
              >
                Limited spots available for this event.
              </Alert>
            )}
            {alerts.info && (
              <Alert
                type="info"
                title="Information"
                onClose={() => setAlerts({ ...alerts, info: false })}
              >
                Event is scheduled for December 25, 2025.
              </Alert>
            )}
          </div>
        </section>

        {/* Container Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Container</h2>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 bg-slate-50">
              <Container maxWidth="sm" className="bg-white border border-slate-200 rounded p-4">
                <p className="text-slate-600 text-center">Small Container (max-w-sm)</p>
              </Container>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 bg-slate-50">
              <Container maxWidth="lg" className="bg-white border border-slate-200 rounded p-4">
                <p className="text-slate-600 text-center">Large Container (max-w-lg)</p>
              </Container>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center text-slate-600">
          <p>Made with ❤️ for the holiday season</p>
        </div>
      </Container>
    </div>
  );
};

export default Showcase;
