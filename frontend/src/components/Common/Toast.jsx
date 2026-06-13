import React from 'react';

const Toast = ({ toasts }) => {
  const getToastColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-secondary';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id} className={`${getToastColor(toast.type)} text-white px-6 py-3 rounded-lg shadow-lg`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
