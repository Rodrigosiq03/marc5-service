import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  SearchFilterContainer,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  EmployeeList,
  EmployeeCard,
  EmployeeInfo,
  EmployeeName,
  EmployeeMeta,
  EmployeeActions,
  ActionButton,
  Modal,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  FormGroup,
  ModalFooter,
  Button,
  StatusBadge,
  DetailSection,
  DetailTitle,
  ProgressBar,
  ProgressLabel,
  StatusContainer,
  EmployeeMetaRow,
} from "./styles";
import {
  X,
  UserCircle,
  MagnifyingGlass,
  Pencil,
  Trash,
  Key,
} from "@phosphor-icons/react";

interface Employee {
  id: string;
  name: string;
  team: string;
  lastLogin: Date | null;
  isActive: boolean;
  email: string;
  role: string;
  watchedLessons: number;
  totalLessons: number;
  xpPoints: number;
  level: number;
  joinDate: Date;
}

interface FilterState {
  searchQuery: string;
  selectedTeam: string;
  userStatus: "all" | "online" | "active";
}

const AdminEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState<Employee | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    selectedTeam: "",
    userStatus: "all",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const mockEmployees: Employee[] = [
        {
          id: "EMP001",
          name: "João Silva",
          team: "Desenvolvimento",
          lastLogin: new Date(),
          isActive: true,
          email: "joao@empresa.com",
          role: "Frontend Developer",
          watchedLessons: 45,
          totalLessons: 60,
          xpPoints: 1250,
          level: 4,
          joinDate: new Date("2023-01-15"),
        },
        {
          id: "EMP002",
          name: "Maria Santos",
          team: "Design",
          lastLogin: null,
          isActive: true,
          email: "maria@empresa.com",
          role: "UI/UX Designer",
          watchedLessons: 30,
          totalLessons: 60,
          xpPoints: 850,
          level: 3,
          joinDate: new Date("2023-03-20"),
        },
      ];
      setEmployees(mockEmployees);
      console.log("Employee selected:", selectedEmployee);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const getFilteredEmployees = () => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        employee.role.toLowerCase().includes(filters.searchQuery.toLowerCase());

      const matchesTeam =
        !filters.selectedTeam || employee.team === filters.selectedTeam;

      const matchesStatus = (() => {
        switch (filters.userStatus) {
          case "online":
            return getLoginStatus(employee.lastLogin) === "Online";
          case "active":
            return employee.isActive;
          default:
            return true;
        }
      })();

      return matchesSearch && matchesTeam && matchesStatus;
    });
  };

  const getUniqueTeams = () => {
    return Array.from(new Set(employees.map((emp) => emp.team)));
  };

  const handleViewDetails = (employee: Employee) => {
    setSelectedEmployee(employee);
    setEditedEmployee(employee);
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editedEmployee) return;

    try {
      await fetchEmployees();
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handlePasswordReset = async (employeeId: string) => {
    try {
      console.log("Password reset requested for:", employeeId);
    } catch (error) {
      console.error("Error requesting password reset:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!editedEmployee) return;

    setEditedEmployee({
      ...editedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const getLoginStatus = (lastLogin: Date | null) => {
    if (!lastLogin) return "Offline";

    const now = new Date();
    const diffMinutes = Math.floor(
      (now.getTime() - lastLogin.getTime()) / 1000 / 60
    );
    return diffMinutes < 5 ? "Online" : "Offline";
  };

  const filteredEmployees = getFilteredEmployees();
  const teams = getUniqueTeams();

  return (
    <Container>
      <Header>
        <Title>Gerenciar Colaboradores</Title>
        <SearchFilterContainer>
          <SearchWrapper>
            <SearchInput
              type="search"
              placeholder="Buscar por nome, email ou cargo..."
              value={filters.searchQuery}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))
              }
            />
            <SearchIcon>
              <MagnifyingGlass size={20} />
            </SearchIcon>
          </SearchWrapper>
          <select
            value={filters.selectedTeam}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, selectedTeam: e.target.value }))
            }
          >
            <option value="">Todos os times</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <select
            value={filters.userStatus}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                userStatus: e.target.value as "all" | "online" | "active",
              }))
            }
          >
            <option value="all">Todos os usuários</option>
            <option value="online">Apenas online</option>
            <option value="active">Apenas ativos</option>
          </select>
        </SearchFilterContainer>
      </Header>

      <EmployeeList>
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id}>
            <UserCircle size={48} weight="fill" />
            <EmployeeInfo>
              <EmployeeName>{employee.name}</EmployeeName>
              <EmployeeMeta>
                <EmployeeMetaRow>
                  <span>ID: {employee.id}</span>
                  <span>Time: {employee.team}</span>
                </EmployeeMetaRow>
                <StatusContainer>
                <StatusBadge $status={getLoginStatus(employee.lastLogin)}>
                  {getLoginStatus(employee.lastLogin)}
                </StatusBadge>
                <StatusBadge $status={employee.isActive ? "active" : "inactive"}>
                  {employee.isActive ? "Ativo" : "Inativo"}
                </StatusBadge>
                </StatusContainer>
              </EmployeeMeta>
            </EmployeeInfo>
            <EmployeeActions>
              <ActionButton onClick={() => handleViewDetails(employee)}>
                <Pencil size={20} />
              </ActionButton>
            </EmployeeActions>
          </EmployeeCard>
        ))}
      </EmployeeList>

      {isModalOpen && editedEmployee && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>
                {isEditing ? "Editar Colaborador" : "Detalhes do Colaborador"}
              </h2>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <DetailSection>
                <DetailTitle>Informações Pessoais</DetailTitle>
                <FormGroup>
                  <label>Nome:</label>
                  <input
                    name="name"
                    value={editedEmployee.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email:</label>
                  <input
                    name="email"
                    value={editedEmployee.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Time:</label>
                  <input
                    name="team"
                    value={editedEmployee.team}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Cargo:</label>
                  <input
                    name="role"
                    value={editedEmployee.role}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </FormGroup>
              </DetailSection>

              <DetailSection>
                <DetailTitle>Progresso</DetailTitle>
                <FormGroup>
                  <ProgressLabel>
                    <span>Aulas Assistidas</span>
                    <span>
                      {editedEmployee.watchedLessons}/
                      {editedEmployee.totalLessons}
                    </span>
                  </ProgressLabel>
                  <ProgressBar
                    $progress={
                      (editedEmployee.watchedLessons /
                        editedEmployee.totalLessons) *
                      100
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label>Nível:</label>
                  <input value={editedEmployee.level} disabled />
                </FormGroup>
                <FormGroup>
                  <label>XP:</label>
                  <input value={editedEmployee.xpPoints} disabled />
                </FormGroup>
              </DetailSection>
            </ModalBody>
            <ModalFooter>
              {isEditing ? (
                <>
                  <Button variant="primary" onClick={handleSave}>
                    Salvar
                  </Button>
                  <Button variant="danger" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </>
              ) : (
                <>
                  <div style={{ marginRight: "auto" }}>
                    <Button
                      variant="secondary"
                      onClick={() => handlePasswordReset(editedEmployee.id)}
                    >
                      <Key size={20} />
                      Reset de Senha
                    </Button>
                  </div>
                  <Button variant="secondary" onClick={handleEdit}>
                    <Pencil size={20} />
                    Editar
                  </Button>
                  <Button variant="danger">
                    <Trash size={20} />
                    Deletar
                  </Button>
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default AdminEmployees;
