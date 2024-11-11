"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

interface ReactQueryProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
