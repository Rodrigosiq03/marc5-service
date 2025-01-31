import React, { useState, useEffect } from 'react';
import { Trophy } from '@phosphor-icons/react';
import {
    Container,
    MainContent,
    Header,
    PageTitle,
    RankingTable,
    RankingItem,
    RankingHeader,
    NameTitle,
    ExpTitle,
    PositionColumn,
    Position,
    Name,
    Exp,
    TeamTitle,
    Team
} from './styles';

interface User {
    name: string;
    team: string;
    experience: number;
    rank?: number;
}

const AdminRanking: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const mockUsers: User[] = [
                { name: "Alice Johnson", team: "Team Alpha", experience: 2500 },
                { name: "Bob Smith", team: "Team Beta", experience: 2450 },
                { name: "Charlie Brown", team: "Team Gamma", experience: 2400 },
                { name: "Diana Ross", team: "Team Delta", experience: 2350 },
                { name: "Ethan Hunt", team: "Team Alpha", experience: 2300 },
                { name: "Fiona Clarke", team: "Team Beta", experience: 2250 },
                { name: "George Harris", team: "Team Gamma", experience: 2200 },
                { name: "Hannah Wright", team: "Team Delta", experience: 2150 },
                { name: "Ian Roberts", team: "Team Alpha", experience: 2100 },
                { name: "Jenna Parker", team: "Team Beta", experience: 2050 },
                { name: "Kevin Lee", team: "Team Gamma", experience: 2000 },
                { name: "Laura Martinez", team: "Team Delta", experience: 1950 },
                { name: "Mike Anderson", team: "Team Alpha", experience: 1900 },
                { name: "Nina Collins", team: "Team Beta", experience: 1850 },
                { name: "Oliver Scott", team: "Team Gamma", experience: 1800 },
                { name: "Paula Turner", team: "Team Delta", experience: 1750 },
                { name: "Quincy Adams", team: "Team Alpha", experience: 1700 },
                { name: "Rachel Wilson", team: "Team Beta", experience: 1650 },
                { name: "Steve Carter", team: "Team Gamma", experience: 1600 },
                { name: "Tina Evans", team: "Team Delta", experience: 1550 },
            ];
            const sortedUsers = mockUsers
                .sort((a, b) => b.experience - a.experience)
                .map((user, index) => ({
                    ...user,
                    rank: index + 1
                }));

            setUsers(sortedUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container>
            <MainContent>
                <Header>
                    <PageTitle>
                        <Trophy size={32} weight="bold" />
                        Ranking de Colaboradores
                    </PageTitle>
                </Header>

                <RankingTable>
                    <RankingHeader>
                        <PositionColumn />
                        <NameTitle>Colaborador</NameTitle>
                        <TeamTitle>Equipe</TeamTitle>
                        <ExpTitle>Exp.</ExpTitle>
                    </RankingHeader>
                    {users.map((user) => (
                        <RankingItem key={user.name}>
                            <PositionColumn>
                                <Position>{user.rank}</Position>
                            </PositionColumn>
                            <Name>{user.name}</Name>
                            <Team>{user.team}</Team>
                            <Exp>{user.experience}</Exp>
                        </RankingItem>
                    ))}
                </RankingTable>
            </MainContent>
        </Container>
    );
};

export default AdminRanking;