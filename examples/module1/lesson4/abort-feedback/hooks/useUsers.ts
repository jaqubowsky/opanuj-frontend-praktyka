import { useCallback, useEffect, useRef, useState } from 'react';
import type { User } from '../types/User';

const ONE_SEC = 1000;

const API_URL = '/api/data/users?timeout=10000';
const CONNECT_ERROR_MSG = 'Sorry, there seems to be connectivity issues...';

export const useUsers = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setError(null);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();

      timeoutRef.current = setTimeout(
        () => setError(CONNECT_ERROR_MSG),
        ONE_SEC * 4
      );

      const response = await fetch(API_URL, {
        signal: abortControllerRef.current.signal,
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (!response.ok) throw new Error('Failed to fetch. Please try again.');

      const data = await response.json();
      setUsers(data);
      setError(null);

      abortControllerRef.current = null;
    } catch (err) {
      console.error(err);

      if (err instanceof DOMException && err.name === 'AbortError') return;

      if (err instanceof Error) setError(err.message);
      else setError('Internal server error. Please try again.');
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { error, users, fetchUsers };
};
