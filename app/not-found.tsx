'use client';

import ErrorPage from '../components/ui/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      description="Oops! The page you&apos;re looking for seems to have wandered off into the digital wilderness."
      primaryAction={{
        label: 'Go Home',
        href: '/'
      }}
      secondaryAction={{
        label: 'Go Back',
        onClick: () => window.history.back()
      }}
    />
  );
} 