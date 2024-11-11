import { useQuery } from "@tanstack/react-query";

export interface User {
    id: number;
    name: string;
}

const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch('/api/users');
        return response.json()
    } catch (error) {
        throw new Error("Network response was not ok");
    }
}

export function useUsers(){
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })
}