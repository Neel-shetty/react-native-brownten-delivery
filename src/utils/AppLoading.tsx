import * as SplashScreen from "expo-splash-screen";
import React, { Fragment, useEffect } from "react";

import { useCachedResources } from "../hooks/useCachedResources";

SplashScreen.preventAutoHideAsync();

interface Props {
  children: React.ReactNode;
}

export const AppLoading = ({ children }: Props) => {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    if (isLoadingComplete) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};
