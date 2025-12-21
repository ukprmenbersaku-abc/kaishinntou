import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Send, Loader2, MessageSquare } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "タブレットの規制（ISGCAgent）は本当に緩和できますか？",
    answer: "一気に全ての制限を解除するのは難しいですが、新設する「デジタル委員会」で先生方と交渉します。「勉強に必要な動画は見られるようにする」など、生徒自身でルールを提案し、段階的な緩和を目指します。"
  },
  {
    question: "「防災委員会」って、避難訓練の係ですか？",
    answer: "単なる係ではありません。生徒の目線で「ここが危ない」という場所を探したり、予告なしの避難訓練を企画したりします。先生に言われて動くのではなく、自分たちの命を自分たちで守るための組織です。"
  },
  {
    question: "地域との関わりを増やすメリットは？",
    answer: "筑摩野中は地域の方々に支えられています。行事に参加して顔見知りになれば、登下校時の安心にもつながりますし、学校の外の世界を知る良いチャンスにもなります。"
  },
  {
    question: "公約が「言いっぱなし」で終わることはありませんか？",
    answer: "今回は「公約進捗ボード」を作成し、毎月どこまで進んだかを全校に報告します。「やったふり」はしません。もし壁にぶつかった場合も、正直に報告して皆さんに相談します。"
  }
];

const AiChat: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 履歴をGemini APIの形式に合わせて抽出
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const aiResponse = await sendMessageToGemini(userMessage.text, history);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiResponse
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "通信エラーが発生しました。しばらくしてからもう一度お試しください。",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="qa" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 text-brand-600 rounded-full mb-4">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">よくある質問 & AI相談</h3>
          <p className="mt-4 text-stone-500">
            教室や廊下でよく聞かれる質問や、AIへの相談はこちらから。
          </p>
        </div>

        {/* AIチャットインターフェースを追加 */}
        <div className="mb-16 bg-stone-50 rounded-[2rem] border border-stone-200 overflow-hidden shadow-sm">
          <div className="bg-brand-600 p-4 flex items-center gap-3 text-white">
            <MessageSquare size={20} />
            <span className="font-bold">改新党 AIサポーター</span>
          </div>
          
          <div className="h-80 overflow-y-auto p-6 space-y-4 bg-white/50">
            {messages.length === 0 ? (
              <div className="text-center py-10 text-stone-400">
                <p>公約について何でも聞いてください！<br/>「タブレットの規制について詳しく教えて」など</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : msg.isError ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 text-stone-400">
                  <Loader2 size={16} className="animate-spin" />
                  <span>考え中...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-stone-50 border-t border-stone-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="質問を入力してください..."
              className="flex-grow bg-white border border-stone-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
            <ChevronDown className="text-brand-500" />
            定番の質問
          </h4>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-50/30 border-brand-200 shadow-sm' : 'bg-white hover:bg-stone-50'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-800' : 'text-stone-700'}`}>
                  Q. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-500" />
                ) : (
                  <ChevronDown className="text-stone-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-transparent">
                  <span className="font-bold text-brand-600 mr-2">A.</span>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-stone-100 rounded-2xl p-6">
          <p className="text-stone-600 mb-2 font-medium">他に聞きたいことはありますか？</p>
          <p className="text-sm text-stone-500">
            休み時間に1年3組　岩本宗祐へお気軽にどうぞ<br />
            <a href="https://forms.gle/unGfDqs9yaEQTcNMA" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 transition-colors">
              フォームからも質問いただけます
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiChat;