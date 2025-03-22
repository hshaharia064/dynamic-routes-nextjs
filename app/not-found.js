import Link from "next/link";

export default function NotFound(){
    return(
        <div className=" text-center">
            <h1 className=" text-4xl font-bold">The Product you are trying to is not available</h1>
            <Link href="/" className="text-blue-500">Return Back</Link>
        </div>

    )
}