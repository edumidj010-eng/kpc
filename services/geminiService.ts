
import { GoogleGenAI } from "@google/genai";
import { OWNER } from "../constants";

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const systemInstruction = `
      당신은 ${OWNER.name}의 개인 포트폴리오 비서입니다. 
      당신의 임무는 방문자에게 ${OWNER.name}을(를) 친절하게 소개하고, 그의 기술 역량 및 프로젝트에 대해 설명하는 것입니다.
      
      정보:
      - 이름: ${OWNER.name}
      - 역할: ${OWNER.role}
      - 소개: ${OWNER.bio}
      - 연락처: ${OWNER.email}
      
      답변 스타일:
      - 항상 친절하고 전문적인 어조를 유지하세요.
      - 답변은 간결하게 하되, 필요한 경우 구체적인 프로젝트나 기술 스택을 언급하세요.
      - ${OWNER.name}의 입장에서 답변하지 말고, '비서'로서 제민님에 대해 이야기하세요.
      - 한국어로 답변하세요.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "API 연결에 실패했습니다. 나중에 다시 시도해주세요.";
  }
};
