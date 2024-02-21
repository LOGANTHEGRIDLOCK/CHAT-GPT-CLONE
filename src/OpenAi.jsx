const { OpenAI } = require('openai');

const key = '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'

const openai = new OpenAI({
    apiKey: key , dangerouslyAllowBrowser: true
})
export const sendMsgToOpenAI = async (message) => {
  const response = await openai.chat.completions.create({
    model: 'davinci',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0, // Corrected the typo here
  });

  return response.data.choices[0].text;
}
