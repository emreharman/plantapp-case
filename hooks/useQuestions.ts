import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchQuestions } from "@/store/slices/question.slice";
import { Question } from "@/types/question";
import { useEffect } from "react";

export const useQuestions = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (s) => s.questions
  ) as {
    items: Question[];
    loading: boolean;
    error: string | null;
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return { items, loading, error };
};
