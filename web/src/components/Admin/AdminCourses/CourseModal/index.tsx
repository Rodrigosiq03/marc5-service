import React, { useState, useEffect } from "react";
import {
  X,
  Plus,
  Trash,
  MagnifyingGlass,
  PencilSimple,
} from "@phosphor-icons/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  FormGroup,
  ModalFooter,
  Button,
  ContentList,
  VideoSelectorModal,
  VideoSelectorHeader,
  SearchContainer,
  VideoList,
  VideoItem,
  VideoSelectorTitle,
  VideoTitle,
  VideoDuration,
  SubcategoryLabel,
  RadioLabel,
  RadioInput,
  RadioOption,
  NewSubcategoryContainer,
  NewSubcategoryInput,
  ModalTitle,
  ContentHeader,
  ContentTitle,
  SubcategoryHeaderContainer,
  SubcategoryTitle,
  VideoDurationText,
  VideoInfo,
  VideoName,
  VideoActions,
  TextArea,
  Label,
  Input,
  Select,
  ContentGroup,
  IconButton,
  SubcategoryGroup,
  SubcategoryOptions,
  SubcategorySelector,
  VideoListItem,
} from "./styles";
import { Video, Content, Course } from "..";

interface VideoSelectorProps {
  videos: Video[];
  onVideoSelect: (content: Content) => void;
  existingContent: Content[];
  subcategories: string[];
  onClose: () => void;
}

const VideoSelector: React.FC<VideoSelectorProps> = ({
  videos,
  onVideoSelect,
  existingContent,
  subcategories,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState("");
  const [isNewSubcategory, setIsNewSubcategory] = useState(false);

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !existingContent.find((content) => content.video.id === video.id)
  );

  const handleAddVideo = () => {
    const subcategory = isNewSubcategory ? newSubcategory : selectedSubcategory;
    if (selectedVideo && subcategory) {
      onVideoSelect({
        video: selectedVideo,
        subcategory,
      });
      onClose();
    }
  };

  return (
    <VideoSelectorModal>
      <ModalContent>
        <VideoSelectorHeader>
          <VideoSelectorTitle>Adicionar Aula</VideoSelectorTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </VideoSelectorHeader>

        <ModalBody>
          <SearchContainer>
            <input
              type="text"
              placeholder="Pesquisar aulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlass size={20} />
          </SearchContainer>

          <VideoList>
            {filteredVideos.map((video) => (
              <VideoItem
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                isSelected={selectedVideo?.id === video.id}
              >
                <VideoTitle>{video.title}</VideoTitle>
                <VideoDuration>{video.duration}</VideoDuration>
              </VideoItem>
            ))}
          </VideoList>

          <SubcategorySelector>
            <SubcategoryLabel>Selecione a subcategoria:</SubcategoryLabel>
            <SubcategoryOptions>
              {subcategories.length > 0 && (
                <>
                  {subcategories.map((subcat) => (
                    <RadioOption key={subcat}>
                      <RadioInput
                        type="radio"
                        id={`subcat-${subcat}`}
                        name="subcategory"
                        checked={
                          !isNewSubcategory && selectedSubcategory === subcat
                        }
                        onChange={() => {
                          setIsNewSubcategory(false);
                          setSelectedSubcategory(subcat);
                        }}
                      />
                      <RadioLabel htmlFor={`subcat-${subcat}`}>
                        {subcat}
                      </RadioLabel>
                    </RadioOption>
                  ))}
                </>
              )}
              <RadioOption>
                <RadioInput
                  type="radio"
                  id="new-subcategory"
                  name="subcategory"
                  checked={isNewSubcategory}
                  onChange={() => setIsNewSubcategory(true)}
                />
                <RadioLabel htmlFor="new-subcategory">
                  Criar nova subcategoria
                </RadioLabel>
              </RadioOption>
              {isNewSubcategory && (
                <NewSubcategoryContainer>
                  <NewSubcategoryInput
                    type="text"
                    placeholder="Nome da nova subcategoria"
                    value={newSubcategory}
                    onChange={(e) => setNewSubcategory(e.target.value)}
                  />
                </NewSubcategoryContainer>
              )}
            </SubcategoryOptions>
          </SubcategorySelector>
        </ModalBody>

        <ModalFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={handleAddVideo}
            disabled={
              !selectedVideo || (!selectedSubcategory && !newSubcategory)
            }
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </VideoSelectorModal>
  );
};

interface CourseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
  isEditing: boolean;
  onSave: (course: Course) => void;
  videos: Video[];
}

const CourseFormModal: React.FC<CourseFormModalProps> = ({
  isOpen,
  onClose,
  course,
  isEditing,
  onSave,
  videos,
}) => {
  const [editedCourse, setEditedCourse] = useState(course);
  const [isVideoSelectorOpen, setIsVideoSelectorOpen] = useState(false);
  const [isEditSubcategoryOpen, setIsEditSubcategoryOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [selectedEditSubcategory, setSelectedEditSubcategory] = useState("");
  const [isNewEditSubcategory, setIsNewEditSubcategory] = useState(false);
  const [newEditSubcategory, setNewEditSubcategory] = useState("");

  useEffect(() => {
    setEditedCourse(course);
  }, [course]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedCourse((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleVideoAdd = (newContent: Content) => {
    setEditedCourse((prev) => ({
      ...prev,
      content: [
        ...prev.content,
        {
          classId: crypto.randomUUID(),
          courseId: prev.courseId,
          title: newContent.video.title,
          description: "",
          videoUrl: newContent.video.url,
          section: newContent.subcategory,
        },
      ],
    }));
  };

  const handleVideoRemove = (classId: string) => {
    setEditedCourse((prev) => ({
      ...prev,
      content: prev.content.filter((lesson) => lesson.classId !== classId),
    }));
  };

  const handleUpdateSubcategory = (classId: string, newSection: string) => {
    setEditedCourse((prev) => ({
      ...prev,
      content: prev.content.map((lesson) =>
        lesson.classId === classId ? { ...lesson, section: newSection } : lesson
      ),
    }));
  };

  const existingSubcategories = Array.from(
    new Set(editedCourse.content.map((content) => content.section))
  );

  const groupBySection = (content: Course["content"]) => {
    return content.reduce((acc, lesson) => {
      const section = lesson.section;
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(lesson);
      return acc;
    }, {} as Record<string, Course["content"]>);
  };

  if (!isOpen) return null;

  return (
    <Modal role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <ModalContent>
        <ModalHeader>
          <ModalTitle id="modal-title">
            {isEditing ? "Editar Curso" : "Detalhes do Curso"}
          </ModalTitle>
          <CloseButton onClick={onClose} aria-label="Fechar modal">
            <X size={20} aria-hidden="true" />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label htmlFor="title">Título:</Label>
            <Input
              id="title"
              name="title"
              value={editedCourse.title}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Digite o título do curso"
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <TextArea
              id="description"
              name="description"
              value={editedCourse.description}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Digite a descrição do curso"
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="imageUrl">URL da Imagem:</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={editedCourse.imageUrl}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Digite a URL da imagem"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Preço:</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={editedCourse.price}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="0.00"
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="visibility">Visibilidade:</Label>
            <Select
              id="visibility"
              name="visibility"
              value={editedCourse.visibility}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
              aria-required="true"
            >
              <option value="Public">Público</option>
              <option value="Private">Privado</option>
            </Select>
          </FormGroup>

          <ContentGroup aria-labelledby="content-title">
            <ContentHeader>
              <ContentTitle id="content-title">Conteúdo do Curso</ContentTitle>
              {isEditing && (
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => setIsVideoSelectorOpen(true)}
                  aria-label="Adicionar nova aula"
                >
                  <Plus size={16} aria-hidden="true" />
                  Adicionar Aula
                </Button>
              )}
            </ContentHeader>

            {Object.entries(groupBySection(editedCourse.content))
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([section, lessons]) => (
                <SubcategoryGroup key={section}>
                  <SubcategoryHeaderContainer>
                    <SubcategoryTitle>{section}</SubcategoryTitle>
                  </SubcategoryHeaderContainer>
                  <ContentList>
                    {lessons.map((lesson) => (
                      <VideoListItem key={lesson.classId}>
                        <VideoInfo>
                          <VideoName>{lesson.title}</VideoName>
                          <VideoDurationText>
                            {lesson.description}
                          </VideoDurationText>
                        </VideoInfo>
                        {isEditing && (
                          <VideoActions>
                            <IconButton
                              variant="secondary"
                              onClick={() => {
                                setSelectedContent(lesson);
                                setIsEditSubcategoryOpen(true);
                              }}
                              aria-label={`Editar seção da Aula ${lesson.title}`}
                            >
                              <PencilSimple size={16} />
                            </IconButton>
                            <IconButton
                              variant="danger"
                              onClick={() => handleVideoRemove(lesson.classId)}
                              aria-label={`Remover Aula ${lesson.title}`}
                            >
                              <Trash size={16} />
                            </IconButton>
                          </VideoActions>
                        )}
                      </VideoListItem>
                    ))}
                  </ContentList>
                </SubcategoryGroup>
              ))}
          </ContentGroup>
        </ModalBody>

        <ModalFooter>
          {isEditing ? (
            <>
              <Button variant="primary" onClick={() => onSave(editedCourse)}>
                Salvar
              </Button>
              <Button variant="danger" onClick={onClose}>
                Cancelar
              </Button>
            </>
          ) : (
            <Button variant="secondary" onClick={onClose}>
              Fechar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
      {isVideoSelectorOpen && (
        <VideoSelector
          videos={videos}
          onVideoSelect={handleVideoAdd}
          existingContent={editedCourse.content}
          subcategories={existingSubcategories}
          onClose={() => setIsVideoSelectorOpen(false)}
        />
      )}
      {isEditSubcategoryOpen && selectedContent && (
        <Modal
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-subcategory-title"
        >
          <ModalContent>
            <ModalHeader>
              <VideoSelectorTitle id="edit-subcategory-title">
                Editar Subcategoria
              </VideoSelectorTitle>
              <CloseButton
                onClick={() => {
                  setIsEditSubcategoryOpen(false);
                  setSelectedContent(null);
                }}
                aria-label="Fechar modal de edição"
              >
                <X size={20} aria-hidden="true" />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <SubcategorySelector>
                <SubcategoryLabel id="edit-subcategory-label">
                  Nova subcategoria para "{selectedContent.video.title}":
                </SubcategoryLabel>
                <SubcategoryOptions
                  role="radiogroup"
                  aria-labelledby="edit-subcategory-label"
                >
                  {existingSubcategories.map((subcat) => (
                    <RadioOption key={subcat}>
                      <RadioInput
                        type="radio"
                        id={`edit-subcat-${subcat}`}
                        name="edit-subcategory"
                        checked={
                          !isNewEditSubcategory &&
                          selectedEditSubcategory === subcat
                        }
                        onChange={() => {
                          setIsNewEditSubcategory(false);
                          setSelectedEditSubcategory(subcat);
                        }}
                      />
                      <RadioLabel htmlFor={`edit-subcat-${subcat}`}>
                        {subcat}
                      </RadioLabel>
                    </RadioOption>
                  ))}
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      id="new-edit-subcategory"
                      name="edit-subcategory"
                      checked={isNewEditSubcategory}
                      onChange={() => setIsNewEditSubcategory(true)}
                    />
                    <RadioLabel htmlFor="new-edit-subcategory">
                      Criar nova subcategoria
                    </RadioLabel>
                  </RadioOption>
                </SubcategoryOptions>
                {isNewEditSubcategory && (
                  <NewSubcategoryContainer>
                    <NewSubcategoryInput
                      type="text"
                      placeholder="Nome da nova subcategoria"
                      value={newEditSubcategory}
                      onChange={(e) => setNewEditSubcategory(e.target.value)}
                      aria-label="Nome da nova subcategoria"
                    />
                  </NewSubcategoryContainer>
                )}
              </SubcategorySelector>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsEditSubcategoryOpen(false);
                  setSelectedContent(null);
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleUpdateSubcategory(
                    selectedContent,
                    isNewEditSubcategory
                      ? newEditSubcategory
                      : selectedEditSubcategory
                  );
                  setIsEditSubcategoryOpen(false);
                  setSelectedContent(null);
                }}
                disabled={
                  isNewEditSubcategory
                    ? !newEditSubcategory
                    : !selectedEditSubcategory
                }
              >
                Salvar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Modal>
  );
};

export default CourseFormModal;
