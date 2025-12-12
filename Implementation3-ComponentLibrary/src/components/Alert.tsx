import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  children,
  onClose,
}) => {
  const typeConfig = {
    success: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      icon: '✓',
    },
    error: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      icon: '✕',
    },
    warning: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      icon: '⚠',
    },
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      icon: 'ℹ',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`${config.bgColor} border-l-4 ${config.borderColor} p-4 rounded ${config.textColor}`}
      role="alert"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <span className="text-xl font-bold">{config.icon}</span>
          <div>
            {title && <h4 className="font-bold">{title}</h4>}
            <p className="text-sm">{children}</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-lg font-bold hover:opacity-70 transition"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
