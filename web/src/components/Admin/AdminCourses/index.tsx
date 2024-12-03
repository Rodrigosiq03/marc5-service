import React, { useState, useEffect } from "react";
import {
  DotsThreeVertical,
  Plus,
  Trash,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";
import {
  Container,
  Header,
  Title,
  AddButton,
  CourseList,
  CourseCard,
  CourseImage,
  CourseInfo,
  CourseTitle,
  CourseDescription,
  CourseMeta,
  CourseActions,
  ActionButton,
  Button,
  DeleteConfirmation,
  VisibilityBadge,
  PriceTag,
} from "./styles";
import CourseFormModal from "./CourseModal";

export interface Video {
  id: string;
  title: string;
  duration: number;
  url: string;
}

export interface Content {
  classId: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    section: string;
}

export interface Course {
  courseId: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  content: Content[];
  createdBy: string;
  visibility: "public" | "private";
  subscribedUsers: string[];
  price?: number;
}

const AdminCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [editedCourse, setEditedCourse] = useState<Course | null>(null);
  const [availableVideos, setAvailableVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const mockCourses: Course[] = [
      {
        courseId: "1",
        imageUrl: "/curso.png",
        category: "Frontend",
        title: "React Fundamentals",
        description: "Learn the basics of React development with hands-on projects",
        content: [
          {
            subcategory: "Basics",
            lessons: [
              {
                id: "1",
                title: "Introduction to React",
                duration: 120,
                url: "video-url-1"
              },
              {
                id: "2",
                title: "Components and Props",
                duration: 180,
                url: "video-url-2"
              }
            ]
          },
          {
            subcategory: "State Management",
            lessons: [
              {
                id: "3",
                title: "useState Hook",
                duration: 150,
                url: "video-url-3"
              },
              {
                id: "4",
                title: "useEffect Hook",
                duration: 160,
                url: "video-url-4"
              }
            ]
          }
        ],
        createdBy: "John Doe",
        visibility: "public",
        subscribedUsers: ["user123", "user456"],
        price: 99.90
      },
      {
        courseId: "2",
        imageUrl: "/curso.png",
        category: "Frontend",
        title: "Advanced React Patterns",
        description: "Master advanced React concepts and design patterns",
        content: [
          {
            subcategory: "Advanced Patterns",
            lessons: [
              {
                id: "5",
                title: "Higher Order Components",
                duration: 240,
                url: "video-url-5"
              },
              {
                id: "6",
                title: "Render Props Pattern",
                duration: 210,
                url: "video-url-6"
              }
            ]
          },
          {
            subcategory: "Performance",
            lessons: [
              {
                id: "7",
                title: "React.memo",
                duration: 180,
                url: "video-url-7"
              },
              {
                id: "8",
                title: "useMemo and useCallback",
                duration: 200,
                url: "video-url-8"
              }
            ]
          }
        ],
        createdBy: "Jane Smith",
        visibility: "private",
        subscribedUsers: ["user789"],
        price: 149.90
      }
    ];
    
    setCourses(mockCourses);
  };

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setEditedCourse(course);
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleCreateNew = () => {
    const newCourse: Course = {
      courseId: "",
      title: "",
      description: "",
      content: [],
      creator: "",
      visibility: "Private",
      subscribedUsers: [],
      price: 0,
      imageUrl: "",
    };
    setEditedCourse(newCourse);
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleSave = async (savedCourse: Course) => {
    try {
      await fetchCourses();
      setIsModalOpen(false);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedCourse) return;

    try {
      await fetchCourses();
      setIsDeleteConfirmOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Gerenciar Cursos</Title>
        <AddButton onClick={handleCreateNew}>
          <Plus size={20} />
          Adicionar Curso
        </AddButton>
      </Header>

      <CourseList>
        {courses.map((course) => (
          <CourseCard key={course.courseId}>
            <CourseImage imageUrl={course.imageUrl} />
            <CourseInfo>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
              <CourseMeta>
                <VisibilityBadge visibility={course.visibility}>
                  {course.visibility === "Public" ? (
                    <Eye size={16} />
                  ) : (
                    <EyeSlash size={16} />
                  )}
                  {course.visibility}
                </VisibilityBadge>
                <PriceTag>R$ {course.price.toFixed(2)}</PriceTag>
                <span>{course.content.length} vídeos</span>
                <span>{course.subscribedUsers.length} inscritos</span>
              </CourseMeta>
            </CourseInfo>
            <CourseActions>
              <ActionButton
                variant="primary"
                onClick={() => handleViewDetails(course)}
              >
                <DotsThreeVertical size={20} />
              </ActionButton>
              <ActionButton
                variant="danger"
                onClick={() => {
                  setSelectedCourse(course);
                  setIsDeleteConfirmOpen(true);
                }}
              >
                <Trash size={20} />
              </ActionButton>
            </CourseActions>
          </CourseCard>
        ))}
      </CourseList>

      {isModalOpen && editedCourse && (
        <CourseFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          course={editedCourse}
          isEditing={isEditing}
          onSave={handleSave}
          videos={availableVideos}
        />
      )}

      {isDeleteConfirmOpen && (
        <DeleteConfirmation>
          <div>
            <h3>Confirmar Exclusão</h3>
            <p>Tem certeza que deseja excluir este curso?</p>
            <div>
              <Button variant="danger" onClick={handleDelete}>
                Confirmar
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsDeleteConfirmOpen(false)}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </DeleteConfirmation>
      )}
    </Container>
  );
};

export default AdminCourses;
