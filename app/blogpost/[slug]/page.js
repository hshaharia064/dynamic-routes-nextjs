import Error from "@/app/error"

export default async function Page({ params }) {
    throw new Error('Erorororo occured')
   let languages = ["javascript", "react", "nextjs", "mongoDB", "sql"]
   
   if(languages.includes(params.slug)){
    return <div className="text-9xl font-semibold">This is about {params.slug} </div>
   }else{
    return <div className="text-9xl font-semibold"> This post is not available</div>
   }
    return <div>My Post: {params.slug}</div>
  }