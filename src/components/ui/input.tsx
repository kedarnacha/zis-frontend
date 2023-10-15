'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">{!!Icon && Icon}</div>
        <input
          type={inputType}
          className={cn(
            'flex h-10 w-full rounded-none border-x-0 border-b border-t-0 border-b-slate-200 placeholder:text-slate-400 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            {
              'pl-3': !!Icon,
            },
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeIcon className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeOffIcon className="h-4 w-4 text-gray-500" />
            )}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
