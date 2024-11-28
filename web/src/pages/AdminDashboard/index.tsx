import React, { useState } from 'react';
import {
  Users,
  Books,
  Trophy,
  ChartBar,
  CircleWavyCheck,
} from '@phosphor-icons/react';
import {
  DashboardContainer,
  MainContent,
  DashboardHeader,
  WelcomeText,
  SubText,
  MetricsGrid,
  MetricCard,
  MetricHeader,
  MetricIcon,
  MetricTitle,
  MetricValue,
  GridContainer,
  ChartContainer,
  ActivityList,
  ActivityItem,
  ActivityIcon,
  ActivityContent,
  ActivityTitle,
  ActivityTime,
  SectionTitle
} from './styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminSidebar from '../../components/AdminSidebar';

interface DashboardMetric {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

interface Activity {
  id: number;
  title: string;
  time: string;
  icon: React.ReactNode;
}

interface Props {
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AdminDashboard: React.FC<Props> = ({ toggleTheme, isOpen, setIsOpen }) => {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([
    {
      title: 'Total de Colaboradores',
      value: 145,
      icon: <Users size={24} weight="bold" />
    },
    {
      title: 'Cursos Ativos',
      value: 24,
      icon: <Books size={24} weight="bold" />
    },
    {
      title: 'Aulas Concluídas',
      value: '2.4k',
      icon: <CircleWavyCheck size={24} weight="bold" />
    },
    {
      title: 'Taxa de Engajamento',
      value: '78%',
      icon: <ChartBar size={24} weight="bold" />
    }
  ]);

  const [activities] = useState<Activity[]>([
    {
      id: 1,
      title: 'João Silva completou o curso de React',
      time: 'Há 5 minutos',
      icon: <CircleWavyCheck size={20} weight="bold" />
    },
    {
      id: 2,
      title: 'Novo curso de TypeScript adicionado',
      time: 'Há 2 horas',
      icon: <Books size={20} weight="bold" />
    },
    {
      id: 3,
      title: 'Maria Souza atingiu nível Gold',
      time: 'Há 3 horas',
      icon: <Trophy size={20} weight="bold" />
    }
  ]);

  const chartData = [
    { name: 'Jan', cursos: 65, aulas: 120 },
    { name: 'Fev', cursos: 78, aulas: 145 },
    { name: 'Mar', cursos: 90, aulas: 170 },
    { name: 'Abr', cursos: 85, aulas: 160 },
    { name: 'Mai', cursos: 95, aulas: 185 },
    { name: 'Jun', cursos: 100, aulas: 190 }
  ];

  return (
    <DashboardContainer>
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleTheme={toggleTheme} />
      
      <MainContent>
        <DashboardHeader>
          <WelcomeText>Bem-vindo ao Portal Admin</WelcomeText>
          <SubText>Confira as principais métricas e atividades da sua plataforma</SubText>
        </DashboardHeader>
  
        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard key={index}>
              <MetricHeader>
                <MetricIcon>{metric.icon}</MetricIcon>
                <MetricTitle>{metric.title}</MetricTitle>
              </MetricHeader>
              <MetricValue>{metric.value}</MetricValue>
            </MetricCard>
          ))}
        </MetricsGrid>
  
        <GridContainer>
          <ChartContainer>
            <SectionTitle>Progresso de Conclusão</SectionTitle>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="cursos" 
                  stroke="#34D399" 
                  name="Cursos Concluídos"
                />
                <Line 
                  type="monotone" 
                  dataKey="aulas" 
                  stroke="#60A5FA" 
                  name="Aulas Assistidas"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
  
          <ActivityList>
            <SectionTitle>Atividades Recentes</SectionTitle>
            {activities.map((activity) => (
              <ActivityItem key={activity.id}>
                <ActivityIcon>{activity.icon}</ActivityIcon>
                <ActivityContent>
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityTime>{activity.time}</ActivityTime>
                </ActivityContent>
              </ActivityItem>
            ))}
          </ActivityList>
        </GridContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;