import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TechBuddy() {
  const { t } = useTranslation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const techbuddy = async () => {
    if (!question) return;

    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `Explain briefly what is ${question} in Programming.` }],
          max_tokens: 150,
        }),
      });

      const result = await response.json();

      if (result.choices && result.choices.length > 0) {
        setAnswer(result.choices[0].message.content.trim());
      } else {
        console.error('No valid choices found:', result);
      }
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="techbuddy">
      <h2>{t('Bot')}</h2>
      <textarea
        value={question}
        onChange={handleQuestionChange}
        placeholder={t('AskPlaceholder')}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={techbuddy} disabled={loading}>
        {loading ? t('Fetching...') : t('BotButton')}
      </button>
      {answer && (
        <div className="answer">
          <h3>Bot Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default TechBuddy;
