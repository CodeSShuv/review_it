import Groq from "groq-sdk";

const groq = new Groq({ apiKey:"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",dangerouslyAllowBrowser: true });

export async function fetchChat(mood) {
  const chatCompletion = await getGroqChatCompletion(mood);
  // Print the completion returned by the LLM.
   const text = chatCompletion.choices[0]?.message?.content;
   return text
}

export async function getGroqChatCompletion(moodQ) {
  const mood =null
  if(moodQ.isHappy) mood = "happy"
  else if(moodQ.isGood) mood = "good"
  else if(moodQ.isExcellent) mood = "Excellent"
  console.log(moodQ)
  return  groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Generate a review for a hotel like a person with simple english without mentioning its menu card and food items and the customer is in happy mood. in 1 or 3 lines. choose line length by your self. Mood:${mood}
        `,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}