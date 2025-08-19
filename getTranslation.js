import { GoogleGenerativeAI } from '@google/generative-ai'
const gemini = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)


export async function getTranslation(query,lang) {
  try {
      const model = gemini.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
      console.log("Sending query:", query, "Language:", lang);
      const res = await model.generateContent(`${query}..translate this into ${lang} language and return answer precisely `)
          const data = res.response
           console.log(data.text());
           return data.text()      
  }
  catch (error) {
      document.alert(error)
      return null
  }
}



























