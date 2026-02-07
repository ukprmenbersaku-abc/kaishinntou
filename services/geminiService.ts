import { GoogleGenAI } from "@google/genai";

// 筑摩野改新党の公約や代表について回答するAIサポーターの実装
export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model', text: string }[]
): Promise<string> => {
  // ガイドラインに従い、環境変数からAPIキーを使用してクライアントを初期化
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // 公約に関する対話タスクのため、gemini-3-flash-previewを選択
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // 過去の会話履歴をマッピング
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        // システムインストラクションで党の立場を定義
        systemInstruction: "あなたは筑摩野中学校の生徒会選挙候補者団体「筑摩野改新党」の公式AIサポーターです。代表の岩本宗祐（1年3組）や共同代表のS（1年3組）の公約（聴く学校、防災体制強化、GIGAスクール構想推進、地域連携、公約実現の徹底）について詳しく、少しフレンドリーな口調で答えてください。中学生に分かりやすく、親しみやすい言葉遣いを心がけてください。もし分からないことがあれば、正直に分からないと伝え、岩本代表に直接聞くように促してください。",
        temperature: 0.7,
      },
    });
    
    // ガイドラインに従い、.textプロパティから回答を抽出
    return response.text || "すみません、うまく答えられませんでした。もう一度聞いてみてください！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在AIサポーターが席を外しているようです。後でもう一度試すか、代表の岩本君に直接聞いてみてください！";
  }
};