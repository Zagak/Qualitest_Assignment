import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { UserCard } from '../UserCard/UserCard';
import { Button } from '../Button/Button';
import { LoadingMessage, ErrorMessage, SlideshowContainer, ButtonContainer } from './styles';

export const Slideshow: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = useCallback(() => {
    if (users.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }
  }, [users.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [users.length]);

  const startSlideshow = () => {
    setIsPlaying(true);
  };

  const stopSlideshow = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && users.length > 1) {
      intervalRef.current = setInterval(goToNextSlide, 2000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNextSlide, isPlaying, users.length]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  if (users.length === 0) {
    return <p>No users available</p>;
  }

  const currentUser = users[currentIndex] || users[0];

  return (
    <SlideshowContainer>
      <UserCard
        image={currentUser.picture.medium}
        firstName={currentUser.name.first}
        lastName={currentUser.name.last}
      />
      <ButtonContainer>
        <Button variant="primary" ariaLabel="Start" onClick={startSlideshow} disabled={isPlaying}>Start</Button>
        <Button variant="secondary" ariaLabel="Stop" onClick={stopSlideshow} disabled={!isPlaying}>Stop</Button>
      </ButtonContainer>
    </SlideshowContainer>
  );
};
