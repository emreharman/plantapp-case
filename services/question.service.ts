import { Question } from "@/types/question";
import apiClient from "./apiClient";

export const QuestionService = {
  getQuestions: async (): Promise<Question[]> => {
    const res = await apiClient.get("/getQuestions");
    return res.data.sort((a: Question, b: Question) => a.order - b.order);
  },
};
