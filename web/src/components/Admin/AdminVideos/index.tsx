import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Title,
  AddButton,
  VideoList,
  VideoCard,
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  VideoMeta,
  VideoActions,
  ActionButton,
  Modal,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  FormGroup,
  ModalFooter,
  Button,
  DeleteConfirmation
} from './styles';
import { DotsThreeVertical, X, Plus, Trash, Play } from '@phosphor-icons/react';

interface Video {
  id: string;
  title: string;
  course: string;
  duration: number;
  views: number;
  description: string;
  url: string;
}

const AdminVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [editedVideo, setEditedVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      // Simular dados para teste
      const mockVideos: Video[] = [
        {
          id: '1',
          title: 'Introdução ao React',
          course: 'React Fundamentals',
          duration: 15,
          views: 123,
          description: 'Uma introdução aos conceitos básicos do React',
          url: 'https://example.com/video1'
        },
        {
          id: '2',
          title: 'Styled Components',
          course: 'React Styling',
          duration: 20,
          views: 89,
          description: 'Como estilizar componentes React com Styled Components',
          url: 'https://example.com/video2'
        }
      ];
      setVideos(mockVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleViewDetails = (video: Video) => {
    setSelectedVideo(video);
    setEditedVideo(video);
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editedVideo) return;

    try {
      // Implementar chamada API aqui
      await fetchVideos();
      setIsEditing(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedVideo) return;

    try {
      // Implementar chamada API aqui
      await fetchVideos();
      setIsDeleteConfirmOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editedVideo) return;
    
    setEditedVideo({
      ...editedVideo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Header>
        <Title>Gerenciar Vídeos</Title>
        <AddButton>
          <Plus size={20} />
          Adicionar Vídeo
        </AddButton>
      </Header>

      <VideoList>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <VideoThumbnail>
              <Play size={32} weight="fill" color="white" />
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoMeta>
                <span>Curso: {video.course}</span>
                <span>{video.duration} min</span>
                <span>{video.views} views</span>
              </VideoMeta>
            </VideoInfo>
            <VideoActions>
              <ActionButton onClick={() => handleViewDetails(video)}>
                <DotsThreeVertical size={20} />
              </ActionButton>
              <ActionButton onClick={() => {
                setSelectedVideo(video);
                setIsDeleteConfirmOpen(true);
              }}>
                <Trash size={20} />
              </ActionButton>
            </VideoActions>
          </VideoCard>
        ))}
      </VideoList>

      {isModalOpen && editedVideo && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>{isEditing ? 'Editar Vídeo' : 'Detalhes do Vídeo'}</h2>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>Título:</label>
                <input
                  name="title"
                  value={editedVideo.title}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <label>Curso:</label>
                <input
                  name="course"
                  value={editedVideo.course}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <label>Duração (minutos):</label>
                <input
                  name="duration"
                  type="number"
                  value={editedVideo.duration}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <label>URL do Vídeo:</label>
                <input
                  name="url"
                  value={editedVideo.url}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <label>Descrição:</label>
                <textarea
                  name="description"
                  value={editedVideo.description}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              {isEditing ? (
                <>
                  <Button variant="primary" onClick={handleSave}>Salvar</Button>
                  <Button variant="danger" onClick={() => setIsEditing(false)}>Cancelar</Button>
                </>
              ) : (
                <Button variant="secondary" onClick={handleEdit}>Editar</Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {isDeleteConfirmOpen && (
        <DeleteConfirmation>
          <div>
            <h3>Confirmar Exclusão</h3>
            <p>Tem certeza que deseja excluir este vídeo?</p>
            <div>
              <Button variant="danger" onClick={handleDelete}>Confirmar</Button>
              <Button variant="secondary" onClick={() => setIsDeleteConfirmOpen(false)}>Cancelar</Button>
            </div>
          </div>
        </DeleteConfirmation>
      )}
    </Container>
  );
};

export default AdminVideos;
