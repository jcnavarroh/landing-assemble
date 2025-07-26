'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  errorCode?: string;
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  showDecorativeElements?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function ErrorPage({
  errorCode = '404',
  title = 'Page Not Found',
  description = 'Oops! The page you&apos;re looking for seems to have wandered off into the digital wilderness.',
  primaryAction = {
    label: 'Go Home',
    href: '/'
  },
  secondaryAction = {
    label: 'Go Back',
    onClick: () => window.history.back()
  },
  showDecorativeElements = true,
  className = '',
  children
}: ErrorPageProps) {
  const renderAction = (action: typeof primaryAction, isPrimary: boolean) => {
    const buttonClass = isPrimary ? styles.primaryButton : styles.secondaryButton;
    const iconClass = styles.buttonIcon;
    
    const content = (
      <>
        <span>{action.label}</span>
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          {isPrimary ? (
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </>
    );

    if (action.href) {
      return (
        <Link href={action.href} className={buttonClass}>
          {content}
        </Link>
      );
    }

    return (
      <button className={buttonClass} onClick={action.onClick}>
        {content}
      </button>
    );
  };

  return (
    <div className={`${styles.errorPageContainer} ${className}`}>
      <div className={styles.errorPageContent}>
        {/* Animated Error Number */}
        <div className={styles.errorNumber}>
          {errorCode.split('').map((digit, index) => (
            <span key={index} className={styles.digit}>
              {digit}
            </span>
          ))}
        </div>
        
        {/* Error Message */}
        <div className={styles.errorMessage}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {children && <div className={styles.additionalContent}>{children}</div>}
        </div>
        
        {/* Action Buttons */}
        <div className={styles.actions}>
          {primaryAction && renderAction(primaryAction, true)}
          {secondaryAction && renderAction(secondaryAction, false)}
        </div>
        
        {/* Decorative Elements */}
        {showDecorativeElements && (
          <div className={styles.decorativeElements}>
            <div className={styles.floatingShape}></div>
            <div className={styles.floatingShape}></div>
            <div className={styles.floatingShape}></div>
          </div>
        )}
      </div>
    </div>
  );
} 