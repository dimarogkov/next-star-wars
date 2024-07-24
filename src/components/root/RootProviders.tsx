'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
    children?: React.ReactNode;
};

const queryClient = new QueryClient();

const RootProviders: React.FC<Props> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default RootProviders;
