import React, { PropsWithChildren } from 'react';

import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

type Props = {
  isLoading?: boolean;
  isError?: boolean;
  className?: string;
};

const DataLayout = ({
  isLoading = false,
  isError = false,
  className = '',
  children,
}: PropsWithChildren<Props>) => {
  if (isLoading) {
    return <LoadingScreen className={className} />;
  }

  if (isError) {
    return <ErrorScreen className={className} />;
  }
  return children;
};

export default DataLayout;
