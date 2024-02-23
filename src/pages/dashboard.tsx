import { CreateForm } from "./create-post/create-form" ;

export const Dashboard =()=>{

    return (
        <>
        <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-opacity-0">
        Customers Reviews</div>

        <div>
            <CreateForm/>
        </div>
        </>
        )
}