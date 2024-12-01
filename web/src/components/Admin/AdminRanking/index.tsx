import React, { useState, useEffect } from 'react';
import { Container, Title } from './styles';
import {  } from '@phosphor-icons/react';

interface User = {
    id: string;
    rank: number;
    name: string;
    team: string;
    experience: number;
}

interface Team = {
    id: string;
    rank: number;
    name: string;
    experience: number;
}

const AdminRanking: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const mockUsers: User[] = [
                { id: "13", rank: 1, name: "Alice Johnson", team: "Team Alpha", experience: 2500 },
                { id: "6", rank: 2, name: "Bob Smith", team: "Team Beta", experience: 2450 },
                { id: "16", rank: 3, name: "Charlie Brown", team: "Team Gamma", experience: 2400 },
                { id: "1", rank: 4, name: "Diana Ross", team: "Team Delta", experience: 2350 },
                { id: "17", rank: 5, name: "Ethan Hunt", team: "Team Alpha", experience: 2300 },
                { id: "3", rank: 6, name: "Fiona Clarke", team: "Team Beta", experience: 2250 },
                { id: "11", rank: 7, name: "George Harris", team: "Team Gamma", experience: 2200 },
                { id: "5", rank: 8, name: "Hannah Wright", team: "Team Delta", experience: 2150 },
                { id: "18", rank: 9, name: "Ian Roberts", team: "Team Alpha", experience: 2100 },
                { id: "9", rank: 10, name: "Jenna Parker", team: "Team Beta", experience: 2050 },
                { id: "8", rank: 11, name: "Kevin Lee", team: "Team Gamma", experience: 2000 },
                { id: "7", rank: 12, name: "Laura Martinez", team: "Team Delta", experience: 1950 },
                { id: "15", rank: 13, name: "Mike Anderson", team: "Team Alpha", experience: 1900 },
                { id: "14", rank: 14, name: "Nina Collins", team: "Team Beta", experience: 1850 },
                { id: "4", rank: 15, name: "Oliver Scott", team: "Team Gamma", experience: 1800 },
                { id: "12", rank: 16, name: "Paula Turner", team: "Team Delta", experience: 1750 },
                { id: "10", rank: 17, name: "Quincy Adams", team: "Team Alpha", experience: 1700 },
                { id: "20", rank: 18, name: "Rachel Wilson", team: "Team Beta", experience: 1650 },
                { id: "19", rank: 19, name: "Steve Carter", team: "Team Gamma", experience: 1600 },
                { id: "2", rank: 20, name: "Tina Evans", team: "Team Delta", experience: 1550 },
            ];
            setUsers(mockUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <Container>
            <Title>Ranking de Colaboradores</Title>

            
        </Container>
    );
};

export default AdminRanking